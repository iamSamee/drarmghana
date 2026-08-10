import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import GynecologistIslamabad from "./pages/Gynecologist-Islamabad";
import GynecologistG11 from "./pages/Gynecologist-G11";
import PregnancyCareIslamabad from "./pages/PregnancyCareIslamabad";

// Only routes that need real prerendered content for ad-quality/crawler
// evaluation are listed here. Imported directly (not via App's lazy routes)
// so this stays a synchronous, Suspense-free render.
const prerenderPages: Record<string, () => JSX.Element> = {
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
