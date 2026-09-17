import { Phone, Navigation, AlertCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WA_HREF, DIRECTIONS_URL, WAIcon } from "./shared";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

export default function QuickActionTiles() {
  return (
    <section id="contact" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <a href={PHONE_HREF} onClick={trackPhoneCall}
            className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary hover:shadow-card hover:-translate-y-1 transition-all text-center">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground">Call Now</p>
              <p className="text-xs text-muted-foreground mt-0.5">{PHONE_DISPLAY}</p>
            </div>
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
            className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-card border-2 border-[#25D366]/30 hover:border-[#25D366] hover:shadow-card hover:-translate-y-1 transition-all text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
              <WAIcon className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground">WhatsApp</p>
              <p className="text-xs text-muted-foreground mt-0.5">Fastest response</p>
            </div>
          </a>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-card border-2 border-blue-200 hover:border-blue-500 hover:shadow-card hover:-translate-y-1 transition-all text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground">Get Directions</p>
              <p className="text-xs text-muted-foreground mt-0.5">G-13/1, Islamabad</p>
            </div>
          </a>
          <a href={PHONE_HREF} onClick={trackPhoneCall}
            className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-card border-2 border-red-200 hover:border-red-500 hover:shadow-card hover:-translate-y-1 transition-all text-center">
            <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-foreground">Emergency</p>
              <p className="text-xs text-muted-foreground mt-0.5">Call immediately</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
