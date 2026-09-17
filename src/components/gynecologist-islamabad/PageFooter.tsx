import { Phone, Navigation } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WA_HREF, DIRECTIONS_URL, WAIcon } from "./shared";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

export default function PageFooter() {
  return (
    <footer className="bg-[hsl(340,75%,15%)] text-white/70 py-10">
      <div className="container mx-auto px-4 text-center space-y-3">
        <img src="/logo.webp" alt="Dr. Armghana Ali" width={220} height={220} className="h-16 w-auto mx-auto opacity-90 rounded-full" />
        <p className="font-display font-bold text-white text-lg">Dr. Armghana Ali — MBBS, FCPS</p>
        <p className="text-sm">Best Female Gynecologist in Islamabad · Lady Doctor · Top Gynae Clinic · G-13 &amp; G-11</p>
        <p className="text-sm">Hyaat International Hospital, G-13/1 &nbsp;·&nbsp; Saeed International Hospital, G-11 Markaz, Islamabad</p>
        <div className="flex items-center justify-center gap-4 pt-1">
          <a href={PHONE_HREF} onClick={trackPhoneCall} className="flex items-center gap-1.5 text-white font-semibold hover:text-white/80 transition-colors text-sm">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:text-[#20b857] transition-colors text-sm">
            <WAIcon className="w-4 h-4 fill-[#25D366]" /> WhatsApp
          </a>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm">
            <Navigation className="w-4 h-4" /> Get Directions
          </a>
        </div>
        <p className="text-xs text-white/30 pt-2 max-w-xl mx-auto">
          The information on this page is for general appointment-booking purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for diagnosis and treatment.
        </p>
        <p className="text-xs text-white/30 pt-1">© {new Date().getFullYear()} Dr. Armghana Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}
