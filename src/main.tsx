import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Ad landing pages ship prerendered markup (see prerender.mjs) so crawlers
// and Core Web Vitals see real content immediately — hydrate onto it instead
// of wiping and re-rendering from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
