import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const Timings = lazy(() => import("@/components/Timings").then(m => ({ default: m.Timings })));
const Location = lazy(() => import("@/components/Location").then(m => ({ default: m.Location })));
const Reviews = lazy(() => import("@/components/Reviews").then(m => ({ default: m.Reviews })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons").then(m => ({ default: m.FloatingButtons })));
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
      <Suspense fallback={null}>
        <Timings />
        <Location />
        <Reviews />
        <Contact />
        <Footer />
        <FloatingButtons />
        <AppointmentPopup />
      </Suspense>
    </main>
  );
};

export default Index;
