import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingButtons } from "@/components/FloatingButtons";
import { DeferredMount } from "@/components/DeferredMount";

const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const GynecologyServices = lazy(() => import("@/components/GynecologyServices").then(m => ({ default: m.GynecologyServices })));
const Timings = lazy(() => import("@/components/Timings").then(m => ({ default: m.Timings })));
const VisitProcess = lazy(() => import("@/components/VisitProcess").then(m => ({ default: m.VisitProcess })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Location = lazy(() => import("@/components/Location").then(m => ({ default: m.Location })));
const Reviews = lazy(() => import("@/components/Reviews").then(m => ({ default: m.Reviews })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const AppointmentPopup = lazy(() => import("@/components/AppointmentPopup").then(m => ({ default: m.AppointmentPopup })));

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Fixed-position CTA, needs to be visible immediately — not gated behind
          scroll or lazy(), which renderToString can't resolve synchronously */}
      <FloatingButtons />
      {/* Below-the-fold: deferred until scrolled near so these chunks don't
          compete with the hero image for main-thread time during initial load */}
      <DeferredMount>
        <Suspense fallback={null}>
          <About />
          <GynecologyServices />
          <Timings />
          <VisitProcess />
          <WhyChooseUs />
          <Location />
          <Reviews />
          <Contact />
          <Footer />
          <AppointmentPopup />
        </Suspense>
      </DeferredMount>
    </main>
  );
};

export default Index;
