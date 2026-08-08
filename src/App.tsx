import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import TestPage from "./pages/TestPage";
import GynecologistIslamabad from "./pages/Gynecologist-Islamabad.tsx";
import GynecologistG11 from "./pages/Gynecologist-G11";
import PregnancyCareIslamabad from "./pages/PregnancyCareIslamabad";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gynecologist-islamabad" element={<GynecologistIslamabad />} />
        <Route path="/gynecologist-g11" element={<GynecologistG11 />} />
        <Route path="/pregnancy-care-islamabad" element={<PregnancyCareIslamabad />} />
        <Route path="/test-page" element={<TestPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
