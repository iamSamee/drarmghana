import { Navigation, Building, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { LazyMapEmbed } from "@/components/LazyMapEmbed";
import { PHONE_DISPLAY, PHONE_HREF, DIRECTIONS_URL, SAEED_MAPS_URL } from "./shared";
import { trackPhoneCall } from "@/utils/tracking";

const hyaatEmbedSrc = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dr%20Armghana%20Ali,%20Clinic%20No%203,%20Hyaat%20International%20Hospital,%20G-13/1%20G%2013/1%20G-13,%20Islamabad,%2046000,%20Pakistan+(Dr%20Armghana%20Ali)&t=&z=15&ie=UTF8&iwloc=B&output=embed";

export default function LocationSection() {
  return (
    <section id="location" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-3">
            <span className="text-sm font-semibold text-primary">Find the Clinic</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            Top Gynecologist <span className="text-gradient">in Islamabad</span> — G-13 &amp; G-11
          </h2>
          <p className="text-muted-foreground text-sm">
            Trusted gynae health clinic in Islamabad — Clinic No. 3, Hyaat International Hospital, G-13/1. Best gynecologist in Islamabad serving G-11, G-12, G-13, G-14, G-15 and all nearby sectors. Private consultation available.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start max-w-5xl mx-auto">
          <div className="space-y-3">
            <div className="rounded-3xl overflow-hidden shadow-card h-[360px]">
              <LazyMapEmbed
                src={hyaatEmbedSrc}
                title="Dr. Armghana Ali — Hyaat International Hospital G-13"
                label="Hyaat International Hospital, G-13/1"
              />
            </div>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-md">
              <Navigation className="w-4 h-4" />
              Open in Google Maps — Get Turn-by-Turn Directions
            </a>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-card border border-primary/20 shadow-soft">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-foreground">Hyaat International Hospital</h3>
                  <p className="text-xs text-muted-foreground">Clinic No. 3, G-13/1, Islamabad</p>
                  <p className="text-xs font-semibold text-green-600 mt-1">4:00 PM – 7:00 PM · Mon–Sun</p>
                </div>
              </div>
              <div className="space-y-2">
                {["Walk-in & appointment available", "Emergency cases handled here", "Parking available on premises"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-600 hover:underline">
                <Navigation className="w-3.5 h-3.5" /> Get Directions to G-13 Clinic
              </a>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-foreground">Saeed International Hospital</h3>
                  <p className="text-xs text-muted-foreground">G-11 Markaz, Islamabad</p>
                  <p className="text-xs font-semibold text-green-600 mt-1">7:00 PM – 9:00 PM · Mon–Sun</p>
                </div>
              </div>
              <a href={SAEED_MAPS_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline">
                <Navigation className="w-3.5 h-3.5" /> Get Directions to G-11 Clinic
              </a>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-red-700">Emergency Gynaecological Care</p>
                <p className="text-xs text-red-600 mt-0.5">Available at Hyaat Hospital, G-13/1. Call {PHONE_DISPLAY} immediately.</p>
                <a href={PHONE_HREF} onClick={trackPhoneCall} className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-red-600 hover:underline">
                  <Phone className="w-3.5 h-3.5" /> Call Emergency Line
                </a>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-primary-light border border-primary/20">
              <h3 className="font-display font-semibold text-xs text-primary mb-2">Serving all nearby sectors</h3>
              <div className="flex flex-wrap gap-1.5">
                {["G-11", "G-12", "G-13", "G-14", "G-15", "F-7", "F-8", "F-10", "F-11", "I-8", "I-9", "I-10", "E-11", "DHA Phase 2"].map((area) => (
                  <span key={area} className="px-2 py-0.5 rounded-full bg-white/70 border border-primary/20 text-xs font-semibold text-primary">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
