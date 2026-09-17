import { useEffect } from "react";
import { Navigation } from "lucide-react";
import {
  PINK, GREEN_WA, PHONE_DISPLAY, PHONE_HREF, WA_HREF, DIRECTIONS_URL,
  HYAAT_MAPS, SAEED_MAPS, CREDENTIALS,
  WAIcon, HospitalSVG, VideoCamSVG, UsersSVG, ShieldCheckSVG, PhoneSVG, PinSVG, ClockSVG,
  HeartIcon, PinIcon, ShieldCheckIcon, ClockIcon, SendIcon,
} from "@/components/gynecologist-islamabad/shared";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

// Below-the-fold sections live in their own files for organization, but are
// imported eagerly (not React.lazy()) — measured on the live site via
// PageSpeed Insights, lazy-splitting them into 10 chunks made mobile TBT
// *worse* (600ms -> 900ms) and dropped the performance score (80 -> 72).
// mainthread-work-breakdown showed Script Evaluation rising ~300ms: the
// fixed per-module/per-lazy-boundary overhead of 10 small chunks outweighed
// the intended win at this page's content size. Plain imports measured
// better; revisit chunking only if a section grows large enough to justify
// the per-boundary cost.
import QuickActionTiles from "@/components/gynecologist-islamabad/QuickActionTiles";
import LocationSection from "@/components/gynecologist-islamabad/LocationSection";
import AvailabilityStrip from "@/components/gynecologist-islamabad/AvailabilityStrip";
import AboutSection from "@/components/gynecologist-islamabad/AboutSection";
import ServicesSection from "@/components/gynecologist-islamabad/ServicesSection";
import HowToBookSection from "@/components/gynecologist-islamabad/HowToBookSection";
import ReviewsSection from "@/components/gynecologist-islamabad/ReviewsSection";
import FAQSection from "@/components/gynecologist-islamabad/FAQSection";
import BookingFormSection from "@/components/gynecologist-islamabad/BookingFormSection";
import PageFooter from "@/components/gynecologist-islamabad/PageFooter";

export default function GynecologistIslamabad() {
  useEffect(() => {
    const PAGE_URL = "https://drarmghana.com/gynecologist-islamabad";
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.href ?? "";
    if (canonical) canonical.href = PAGE_URL;
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const prevOgUrl = ogUrl?.content ?? "";
    if (ogUrl) ogUrl.content = PAGE_URL;
    return () => {
      if (canonical) canonical.href = prevCanonical;
      if (ogUrl) ogUrl.content = prevOgUrl;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pb-[72px] sm:pb-0" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-[42px] h-[42px] rounded-full overflow-hidden flex-shrink-0 bg-gray-900 border-2 border-gray-800">
              <img src="/logo.webp" alt="Dr. Armghana Ali" width={220} height={220} className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900 text-[15px]">Dr. Armghana Ali</div>
              <div className="text-gray-500 text-[11px]">Gynecologist</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <PinSVG size={17} />
            <span className="font-semibold text-[14px]" style={{ color: PINK }}>
              Islamabad&nbsp;•&nbsp;G-13 &amp; G-11
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <a href={WA_HREF} onClick={trackWhatsAppClick} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-[13px] font-semibold"
              style={{ backgroundColor: GREEN_WA }}>
              <WAIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <a href={PHONE_HREF} onClick={trackPhoneCall}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-[13px] font-semibold"
              style={{ backgroundColor: PINK }}>
              <PhoneSVG size={14} />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-white">

        <div className="absolute right-0 top-0 h-[300px] lg:h-full pointer-events-none" style={{ width: "52%", zIndex: 0 }}>
          <div className="absolute rounded-full" style={{ backgroundColor: "#FFF0F9", width: "95%", height: "120%", top: "-5%", right: "-6%" }} />
          <svg className="absolute opacity-25" style={{ top: "4%", right: "6%", width: "90px" }} viewBox="0 0 90 200" fill="none" aria-hidden>
            <path d="M45 195 C45 195 5 145 5 90 C5 35 45 5 45 5 C45 5 85 35 85 90 C85 145 45 195 45 195Z" stroke="#F9A8D4" strokeWidth="2" fill="none" />
            <line x1="45" y1="5" x2="45" y2="195" stroke="#F9A8D4" strokeWidth="1.5" />
          </svg>
          <svg className="absolute opacity-20" style={{ top: "20%", right: "20%", width: "55px" }} viewBox="0 0 55 130" fill="none" aria-hidden>
            <path d="M27.5 125 C27.5 125 3 95 3 65 C3 35 27.5 5 27.5 5 C27.5 5 52 35 52 65 C52 95 27.5 125 27.5 125Z" stroke="#F9A8D4" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute opacity-30" style={{ top: "38%", right: "46%", width: "18px" }} viewBox="0 0 24 24" fill="#F9A8D4" aria-hidden>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-8">

            <div className="relative w-full lg:w-[58%] pt-6 pb-6 lg:pt-10 lg:pb-10 lg:flex lg:flex-col">

              <div className="absolute top-0 right-0 w-[44%] lg:hidden" style={{ zIndex: 2 }}>
                <img src="/heroImage.webp" alt="Dr. Armghana Ali" width={732} height={1100} className="w-full object-contain" style={{ maxHeight: "320px", objectPosition: "top center" }} />
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[13px] font-semibold"
                  style={{ borderColor: PINK, color: PINK, backgroundColor: "white" }}>
                  <PinSVG size={13} />
                  Islamabad&nbsp;•&nbsp;G-13 &amp; G-11
                </span>
              </div>

              <div className="pr-[43%] lg:pr-0 relative z-10">
                <h1 className="font-black leading-[1.08] text-gray-900 text-[30px] sm:text-[30px] lg:text-[42px] xl:text-[54px]">
                  Book a
                  <br />
                  <span style={{ color: PINK }}>Female Gynecologist</span>
                  <br />
                  in Islamabad Today
                </h1>
              </div>

              <div className="flex items-center gap-1 mt-3 mb-4">
                <div className="h-[3px] w-12 rounded-full" style={{ backgroundColor: PINK }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PINK }} />
              </div>

              <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed max-w-lg">
                Consult <span style={{ color: PINK }} className="font-bold">Dr. Armghana Ali</span> — best female gynecologist &amp; women's health specialist in Islamabad. Trusted gynae clinic, private consultation available. Expert pregnancy care at G-13 &amp; G-11.
              </p>

              <div className="mt-5 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="grid grid-cols-4 divide-x divide-gray-100">
                  {CREDENTIALS.map(({ icon, line1, line2 }) => (
                    <div key={line1} className="flex flex-col items-center text-center py-4 px-2">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2 flex-shrink-0"
                        style={{ backgroundColor: "#FFF0F9" }}>
                        {icon}
                      </div>
                      <div className="font-bold text-gray-900 text-[12px] sm:text-[13px] leading-tight">{line1}</div>
                      <div className="text-gray-500 text-[11px] sm:text-[12px] leading-tight">{line2}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 lg:mt-auto flex flex-col sm:grid sm:grid-cols-2 gap-3">
                <a href={WA_HREF} onClick={trackWhatsAppClick} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-white"
                  style={{ backgroundColor: GREEN_WA }}>
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <WAIcon className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[15px] leading-tight">Book via WhatsApp</div>
                    <div className="text-white/80 text-[12px] mt-0.5">Fastest Response</div>
                  </div>
                </a>
                <a href={PHONE_HREF} onClick={trackPhoneCall}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 bg-white"
                  style={{ borderColor: PINK }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF0F9" }}>
                    <PhoneSVG size={20} color={PINK} />
                  </div>
                  <div>
                    <div className="font-bold text-[15px] leading-tight" style={{ color: PINK }}>
                      Call {PHONE_DISPLAY}
                    </div>
                    <div className="text-gray-500 text-[12px] mt-0.5">Available 24/7</div>
                  </div>
                </a>
              </div>

              {/* Clinic info card – mobile (below buttons) */}
              <section className="bg-white py-2 lg:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="flex items-center gap-2 mb-6">
                    <PinIcon size={22} />
                    <h2 className="font-bold text-gray-900 text-[18px] lg:text-[20px]">
                      Our Clinic Locations
                    </h2>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:gap-8">

                    <div className="flex flex-col sm:flex-row sm:gap-5 gap-5 lg:w-3/4">

                      <div className="flex gap-4 items-start flex-1">
                        <a href={HYAAT_MAPS} target="_blank" rel="noopener noreferrer" className="w-[130px] sm:w-[140px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 block">
                          <img
                            src="/Hyaat.webp"
                            alt="Hyaat International Hospital"
                            width={480}
                            height={300}
                            className="w-full h-[100px] sm:h-[110px] object-cover hover:opacity-80 transition-opacity"
                          />
                        </a>
                        <div className="pt-0.5">
                          <div className="flex items-start gap-1.5 mb-1">
                            <PinIcon size={15} />
                            <h3 className="font-bold text-gray-900 text-[14px] leading-tight">
                              Hyaat International Hospital
                            </h3>
                          </div>
                          <p className="text-gray-500 text-[12px] mb-2">Clinic No 3, G-13/1, Islamabad</p>
                          <div className="flex items-center gap-1.5 text-gray-500 text-[12px] mb-3">
                            <ClockIcon />
                            Mon–Sun: 4:00 PM – 7:00 PM
                          </div>
                          <a
                            href={HYAAT_MAPS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-[13px]"
                            style={{ color: PINK }}
                          >
                            <SendIcon />
                            Get Directions
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start flex-1">
                        <a href={SAEED_MAPS} target="_blank" rel="noopener noreferrer" className="w-[130px] sm:w-[140px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 block">
                          <img
                            src="/Saeed.webp"
                            alt="Saeed International Hospital"
                            width={480}
                            height={300}
                            className="w-full h-[100px] sm:h-[110px] object-cover hover:opacity-80 transition-opacity"
                          />
                        </a>
                        <div className="pt-0.5">
                          <div className="flex items-start gap-1.5 mb-1">
                            <PinIcon size={15} />
                            <h3 className="font-bold text-gray-900 text-[14px] leading-tight">
                              Saeed International Hospital
                            </h3>
                          </div>
                          <p className="text-gray-500 text-[12px] mb-2">G-11 Markaz, Islamabad</p>
                          <div className="flex items-center gap-1.5 text-gray-500 text-[12px] mb-3">
                            <ClockIcon />
                            Mon–Sun: 7:00 PM – 9:00 PM
                          </div>
                          <a
                            href={SAEED_MAPS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-[13px]"
                            style={{ color: PINK }}
                          >
                            <SendIcon />
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-row lg:flex-col gap-4 lg:gap-5 mt-5 sm:mt-4 lg:mt-0 lg:w-1/4 lg:justify-center">
                      <div className="flex items-center gap-2.5 flex-1 lg:flex-none">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#FFF0F9' }}
                        >
                          <ShieldCheckIcon size={20} />
                        </div>
                        <div className="text-[13px] font-medium text-gray-800 leading-snug">
                          Private &amp; Confidential
                          <br />
                          Consultations
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 flex-1 lg:flex-none">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#FFF0F9' }}
                        >
                          <HeartIcon size={20} />
                        </div>
                        <div className="text-[13px] font-medium text-gray-800 leading-snug">
                          Emergency Cases
                          <br />
                          Accepted
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="hidden lg:flex lg:w-[42%] flex-col items-center justify-between pt-6 pb-6">
              <div className="flex-1 flex items-end justify-center w-full">
                <img src="/heroImage.webp" alt="Dr. Armghana Ali – Gynecologist in Islamabad"
                  width={732} height={1100}
                  className="w-full object-contain object-bottom relative"
                  style={{ maxHeight: "500px", maxWidth: "440px", zIndex: 0 }} />
              </div>
              <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-4 mt-3"
                style={{ zIndex: 3 }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#FFF0F9" }}>
                    <HospitalSVG size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[14px] leading-tight">Hyaat International Hospital</div>
                    <div className="text-gray-500 text-[12px] mt-0.5">G-13/1, Islamabad</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-[13px] mb-2">
                  <ClockSVG size={15} color="#9CA3AF" />
                  Mon – Sun&nbsp;|&nbsp;4:00 PM – 7:00 PM
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-medium" style={{ color: PINK }}>
                    Also available for online consultation
                  </span>
                  <VideoCamSVG size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-gray-100 bg-white" style={{ zIndex: 1 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
              <div className="flex items-center gap-2">
                <ShieldCheckSVG size={18} />
                <span className="text-[13px] font-semibold text-gray-700">100% Private &amp; Confidential</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <UsersSVG size={18} />
                <span className="text-[13px] font-semibold text-gray-700">800+ Happy Patients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BELOW-THE-FOLD SECTIONS ═══════════════════ */}
      <QuickActionTiles />
      <LocationSection />
      <AvailabilityStrip />
      <AboutSection />
      <ServicesSection />
      <HowToBookSection />
      <ReviewsSection />
      <FAQSection />
      <BookingFormSection />
      <PageFooter />

      {/* ═══════════════════ FLOATING BUTTONS (desktop only) ═══════════════════ */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Get Directions">
          <Navigation className="w-6 h-6 text-white" />
        </a>
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp">
          <WAIcon className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* ═══════════════════ STICKY BOTTOM BAR (mobile only) ═══════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden" style={{ boxShadow: '0 -3px 20px rgba(0,0,0,0.18)' }}>
        <a href={PHONE_HREF} onClick={trackPhoneCall}
          className="flex-1 flex items-center justify-center gap-2 py-[18px] text-white font-bold text-[16px] active:opacity-90"
          style={{ backgroundColor: PINK }}
          aria-label="Call Now">
          <PhoneSVG size={20} />
          Call Now
        </a>
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
          className="flex-1 flex items-center justify-center gap-2 py-[18px] text-white font-bold text-[16px] active:opacity-90"
          style={{ backgroundColor: '#25D366' }}
          aria-label="WhatsApp">
          <WAIcon className="w-5 h-5 fill-white" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
