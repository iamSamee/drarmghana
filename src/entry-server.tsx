import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "node:stream";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";

// Renders the SAME tree main.tsx hydrates (AppRoutes — TooltipProvider,
// Toaster, the route-level Suspense, Routes/Route) via StaticRouter instead
// of BrowserRouter. This used to render each page component directly,
// skipping AppRoutes' Suspense/Routes wrapper entirely — a different tree
// shape than what the client hydrates against, which made hydration fail
// silently on every page (React discovered a Suspense boundary the
// server-side output didn't expect, bailed out, and did a full client-side
// re-render instead of hydrating). Rendering AppRoutes here keeps both
// trees identical, so hydration actually succeeds.
//
// Uses renderToPipeableStream + onAllReady (not renderToString) so that
// React.lazy()/Suspense boundaries — the route-level lazy page imports, plus
// pages that further code-split their own below-the-fold sections (see
// Gynecologist-Islamabad.tsx) — resolve to full markup before we capture
// the output. renderToString can't do this: it bails to the Suspense
// fallback immediately since it can't await an async import. onAllReady
// specifically (not onShellReady) waits for every boundary in the tree, not
// just the initial shell, so crawlers and ad-quality evaluators still see
// complete content — only the *client* gets to hydrate progressively.
const routes = ["/", "/gynecologist-islamabad", "/gynecologist-g11", "/pregnancy-care-islamabad"];

export function render(url: string): Promise<string> {
  if (!routes.includes(url)) {
    throw new Error(`entry-server: no prerender entry registered for "${url}"`);
  }

  return new Promise((resolve, reject) => {
    let html = "";
    const collector = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    collector.on("finish", () => resolve(html));
    collector.on("error", reject);

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(collector);
        },
        onError: reject,
      }
    );
  });
}
