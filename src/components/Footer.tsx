import { Heart, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-5 overflow-hidden bg-foreground text-primary-foreground pt-16 pb-6">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[#1a0f14] to-[#120a0f]" aria-hidden="true" />
      <div className="absolute -left-32 top-12 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-40px] bottom-[-40px] h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />

      <div className="relative container mx-auto px-4 space-y-6">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/0 to-white/5" aria-hidden="true" />
          <div className="absolute -top-16 right-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-[0.12em]">
                <Heart className="w-3.5 h-3.5 text-primary-foreground" />
                We care for you
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Need an appointment or quick advice?</h3>
              <p className="text-primary-foreground/70 text-sm md:text-base">
                Same-day responses on WhatsApp, or call the clinic directly to schedule your visit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 border border-white/50 shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
                asChild
              >
                <a href="tel:+923082070008" onClick={trackPhoneCall}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Links & Info */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-button">
                <img src="/logo.webp" alt="Dr. Armghana" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-primary-foreground/60">Dr. Armghana</p>
                <p className="font-display text-lg font-semibold">Women&apos;s Health Clinic</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Compassionate gynecological care across two Islamabad clinics — because every woman deserves expert healthcare close to home.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Trusted care", "Personalized plans", "Safe & private"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-primary-foreground/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-display font-semibold text-lg">Quick Links</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 md:flex-col md:gap-x-0 md:space-y-2">
              {["Home", "About", "Practice Details", "Location", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\\s+/g, "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a
                href="tel:+923082070008"
                onClick={trackPhoneCall}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-white/30 transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">Phone</p>
                  <p className="font-semibold text-primary-foreground">0308 2070008</p>
                </div>
              </a>
              <a
                href="https://wa.me/923082070008"
                onClick={trackWhatsAppClick}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-white/30 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20 text-primary-foreground">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">WhatsApp</p>
                  <p className="font-semibold text-primary-foreground">0308 2070008</p>
                </div>
              </a>
              {/* <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary-foreground">
                  <MapPin className="w-4 h-4" />
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">Address</p>
                  <p className="font-semibold leading-snug text-primary-foreground">
                    Clinic No 3, Hyaat International Hospital, G-13/1, Islamabad
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Dr. Armghana Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
