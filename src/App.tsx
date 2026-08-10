import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const TestPage = lazy(() => import("./pages/TestPage"));
const GynecologistIslamabad = lazy(() => import("./pages/Gynecologist-Islamabad"));
const GynecologistG11 = lazy(() => import("./pages/Gynecologist-G11"));
const PregnancyCareIslamabad = lazy(() => import("./pages/PregnancyCareIslamabad"));

export const AppRoutes = () => (
  <TooltipProvider>
    <Toaster />
    <Suspense fallback={null}>
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
    </Suspense>
  </TooltipProvider>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
