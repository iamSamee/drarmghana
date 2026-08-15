import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index";
import GynecologistIslamabad from "./pages/Gynecologist-Islamabad";
import GynecologistG11 from "./pages/Gynecologist-G11";
import PregnancyCareIslamabad from "./pages/PregnancyCareIslamabad";

// Routes that need real prerendered content for FCP/LCP and ad-quality/crawler
// evaluation. Imported directly (not via App's lazy routes) so this stays a
// synchronous render. Index lazy-loads everything below its Hero via
// Suspense — renderToString emits the Suspense fallback (null) for that
// part since the lazy chunks can't resolve synchronously, so only Navbar+Hero
// come through server-rendered. That's fine: it's the above-the-fold content
// that FCP/LCP care about, and the client hydrates the rest in afterward.
const prerenderPages: Record<string, () => JSX.Element> = {
  "/": Index,
  "/gynecologist-islamabad": GynecologistIslamabad,
  "/gynecologist-g11": GynecologistG11,
  "/pregnancy-care-islamabad": PregnancyCareIslamabad,
};

export function render(url: string): string {
  const Page = prerenderPages[url];
  if (!Page) {
    throw new Error(`entry-server: no prerender entry registered for "${url}"`);
  }

  return renderToString(
    <StaticRouter location={url}>
      <TooltipProvider>
        <Toaster />
        <Page />
      </TooltipProvider>
    </StaticRouter>
  );
}
