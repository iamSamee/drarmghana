import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Contact } from "@/components/Contact";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[0.12em] text-sm font-semibold text-white/80 mb-3">{service.subtitle}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">{service.title}</h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">{service.description}</p>
            {/* <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 border border-white/50 shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                asChild
              >
                <a href="tel:+923082070008">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-card border border-border/50 shadow-soft">
              <h2 className="text-2xl font-display font-bold mb-3 text-foreground">What&apos;s included</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/15 shadow-soft">
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">How we care for you</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every visit is personalized. We start with a detailed consultation, design a plan tailored to you, and
                provide ongoing follow-up so you feel supported at every step.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-soft">
              <h4 className="text-lg font-display font-semibold mb-3 text-foreground">Book this service</h4>
              <p className="text-muted-foreground mb-4">Prefer a callback? Share your details and we&apos;ll reach out.</p>
              <div className="space-y-3">
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Now
                  </a>
                </Button>
                <Button className="w-full gradient-primary text-primary-foreground shadow-button hover:-translate-y-0.5 hover:shadow-lg" asChild>
                  <a href="tel:+923082070008" onClick={trackPhoneCall}>
                    <Phone className="w-5 h-5" />
                    Call 0308 2070008
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default ServiceDetail;
