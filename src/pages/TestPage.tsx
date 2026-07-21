import { useState } from "react";
import {
  Phone, MapPin, Award, Star, Shield, CheckCircle2,
  Navigation, Building2, Video, Clock, Users, Building,
  ChevronDown, AlertCircle, CalendarCheck, HeartHandshake, Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { trackPhoneCall, trackWhatsAppClick, trackFormSubmission } from "@/utils/tracking";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE_DISPLAY = "0308 2070008";
const PHONE_HREF    = "tel:+923082070008";
const WA_BASE       = "https://wa.me/923082070008";
const WA_HREF       = WA_BASE;

const EMAILJS_SERVICE_ID  = "service_r7ol07e";
const EMAILJS_TEMPLATE_ID = "template_17nfi76";
const EMAILJS_PUBLIC_KEY  = "AyyQ1V38DQCt3U8yH";

const directionsUrl = "https://www.google.com/maps/dir//Clinic+No+3,+Dr.+Armghana+Ali+(Gynecologist),+Hyaat+International+Hospital,+G-13%2F1+G+13%2F1+G-13,+Islamabad,+46000,+Pakistan";
const saeedMapsUrl  = "https://maps.app.goo.gl/UASYkt3LfSt8hEBw6";

// ─── WhatsApp icon ─────────────────────────────────────────────────────────────
const WAIcon = ({ className = "w-5 h-5 fill-white" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const consultationTypes = [
  { id: "hyaat",  label: "Hyaat International Hospital", sublabel: "G-13/1, Islamabad  •  3:00 – 6:00 PM", icon: Building2 },
  { id: "saeed",  label: "Saeed International Hospital", sublabel: "G-11 Markaz, Islamabad  •  6:00 – 9:00 PM", icon: Building2 },
  { id: "online", label: "Online Consultation",          sublabel: "Video / Audio call — Anytime",            icon: Video },
];

const clinics = [
  { img: "/hyaat.webp",  name: "Hyaat International Hospital", addr: "Clinic No 3, G-13/1, Islamabad",  time: "Mon–Sun: 3:00 PM – 6:00 PM", dir: directionsUrl },
  { img: "/saeed.webp",  name: "Saeed International Hospital", addr: "G-11 Markaz, Islamabad",           time: "Mon–Sun: 6:00 PM – 9:00 PM", dir: saeedMapsUrl  },
];

const reviews = [
  { name: "Fatima K.",  rating: 5, date: "2 months ago",  text: "Dr. Armghana is an excellent doctor. Very caring and professional. She made my pregnancy journey so comfortable and stress-free. Highly recommend to every woman in Islamabad." },
  { name: "Ayesha M.",  rating: 5, date: "3 months ago",  text: "Best gynecologist in the G-13 area. She listens carefully to all concerns and provides detailed explanations without rushing. I felt completely at ease. Highly recommended!" },
  { name: "Sara A.",    rating: 5, date: "1 month ago",   text: "Very satisfied with the treatment. The clinic is clean and the staff is cooperative. Dr. Armghana is very experienced, kind, and made me feel comfortable throughout." },
  { name: "Hina R.",    rating: 5, date: "4 months ago",  text: "Had a wonderful experience. Dr. Armghana is very knowledgeable and takes time to explain everything properly. I consulted her for a women's health concern and she was truly helpful." },
  { name: "Nadia S.",   rating: 5, date: "2 months ago",  text: "Finally found a gynecologist who listens. She addressed all my concerns with patience and gave me a clear treatment plan. The online consultation option is also very convenient." },
  { name: "Zara B.",    rating: 5, date: "5 months ago",  text: "Professional, confidential, and genuinely caring. Dr. Armghana is the top gynae doctor in Islamabad in my opinion. Both her G-13 and G-11 clinics are well-run." },
];

const faqs = [
  { q: "Is Dr. Armghana Ali available for appointments today?",   a: "Yes. Dr. Armghana Ali sees patients Monday through Sunday at two locations: Hyaat International Hospital (G-13/1) from 3:00–6:00 PM, and Saeed International Hospital (G-11 Markaz) from 6:00–9:00 PM. WhatsApp or call to confirm your slot before visiting." },
  { q: "Can I consult Dr. Armghana online from home?",            a: "Absolutely. Online consultations are available via WhatsApp video or audio call at any time. This is ideal if you cannot travel to the clinic or prefer a private initial consultation from home." },
  { q: "What areas of Islamabad does she serve?",                 a: "Dr. Armghana's two clinics are easily accessible from G-11, G-12, G-13, G-14, G-15, F-7, F-8, F-10, F-11, I-8, I-9, I-10, E-11, DHA Phase 2, and all surrounding sectors of Islamabad." },
  { q: "Is the consultation private and confidential?",           a: "Yes, completely. All consultations — whether in-person or online — are handled with the strictest privacy and discretion. You can discuss any concern openly without worry." },
  { q: "What should I bring to my first appointment?",            a: "Bring any previous reports, prescriptions, or test results if available. If it's your first visit with no history, that's perfectly fine — Dr. Armghana will start with a thorough consultation and recommend any tests if needed." },
  { q: "Does she handle emergency gynae cases?",                  a: "Yes. Emergency gynecological cases are handled at Hyaat International Hospital, G-13/1. For urgent situations, call or WhatsApp immediately on 0308 2070008 and you will be guided accordingly." },
  { q: "What is the consultation fee?",                           a: "Consultation fees are reasonable and in line with standard rates at qualified specialist clinics in Islamabad. Please contact us on WhatsApp or call to confirm current fee details." },
  { q: "Does she handle menstrual health and hormonal concerns?", a: "Yes. Menstrual health and hormonal evaluations are among the most common consultations at the clinic. Dr. Armghana provides comprehensive assessment, clinical management, and personalised follow-up for a wide range of women's health concerns." },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Stars = ({ count = 5, size = "w-4 h-4" }: { count?: number; size?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

const FAQItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => (
  <div className="border border-border/60 rounded-2xl overflow-hidden">
    <button onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-card hover:bg-secondary/40 transition-colors">
      <span className="font-display font-semibold text-sm sm:text-base text-foreground pr-2">{q}</span>
      <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
    </button>
    <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
      <div className="overflow-hidden">
        <p className="px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export const TestPage = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq]       = useState<number | null>(0);
  const [isSubmitting, setSubmitting] = useState(false);
  const [formData, setFormData]     = useState({ name: "", phone: "", consultationType: "hyaat", concern: "" });

  const selectedType = consultationTypes.find(t => t.id === formData.consultationType);
  const waMessage    = encodeURIComponent(
    `Hello Dr. Armghana, I'd like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${selectedType?.label}${formData.concern ? `\nConcern: ${formData.concern}` : ""}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name, from_phone: formData.phone,
        service: selectedType?.label, message: formData.concern || "No additional concern",
        to_email: "armghanaa@gmail.com",
      }, EMAILJS_PUBLIC_KEY);
      trackFormSubmission({ name: formData.name, phone: formData.phone, service: selectedType?.label ?? "" });
      toast({ title: "Appointment Request Sent!", description: "We'll get back to you shortly to confirm your slot." });
      setFormData({ name: "", phone: "", consultationType: "hyaat", concern: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please call or WhatsApp us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">

      {/* ══════════════════════ HEADER ══════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img src="/logo.webp" alt="Dr. Armghana Ali" className="h-8 w-8 rounded-xl object-cover" />
            <div className="leading-tight">
              <p className="font-display font-bold text-xs text-foreground">Dr. Armghana Ali</p>
              <p className="text-[10px] text-muted-foreground">Gynecologist in Islamabad</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-primary">
            <MapPin className="w-3.5 h-3.5" />
            <span>Islamabad • G-13 &amp; G-11</span>
          </div>
          <div className="flex items-center gap-2">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20b857] transition-colors">
              <WAIcon className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
            <a href={PHONE_HREF} onClick={trackPhoneCall}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full gradient-primary text-white text-xs font-semibold hover:opacity-90 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative overflow-hidden bg-background">
        {/* Botanical decoration */}
        <svg className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-auto opacity-[0.08] pointer-events-none text-primary"
          viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 10 Q130 60 100 40 Q70 20 50 70 Q30 120 60 150" />
          <path d="M180 20 Q150 70 120 50 Q90 30 70 80 Q50 130 80 160" />
          <path d="M140 5 Q110 55 80 35 Q50 15 30 65 Q10 115 40 145" />
          <ellipse cx="155" cy="55" rx="18" ry="35" transform="rotate(-35 155 55)" fill="currentColor" opacity="0.4" stroke="none" />
          <ellipse cx="175" cy="80" rx="14" ry="28" transform="rotate(-15 175 80)" fill="currentColor" opacity="0.3" stroke="none" />
          <ellipse cx="135" cy="35" rx="12" ry="24" transform="rotate(-50 135 35)" fill="currentColor" opacity="0.35" stroke="none" />
        </svg>

        <div className="container mx-auto px-4 pt-5 md:pt-8 lg:pt-12 pb-0 relative">
          <div className="grid grid-cols-[3fr_2fr] lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10 items-end">

            {/* Left: copy */}
            <div className="space-y-3 lg:space-y-5 pb-8 lg:pb-14 lg:self-center">
              {/* Location pill — mobile only */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 md:hidden">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-xs font-semibold text-primary">Islamabad • G-13 &amp; G-11</span>
              </div>

              <h1 className="text-[1.65rem] sm:text-4xl lg:text-[3.25rem] font-display font-bold text-foreground leading-[1.15]">
                Find a Trusted<br />
                <span className="text-primary">Gynecologist</span><br />
                in Islamabad
              </h1>
              <div className="relative inline-block">
                <span className="text-[1.2rem] sm:text-2xl lg:text-[2rem] font-display font-semibold italic text-primary">Near You</span>
                <div className="absolute -bottom-1 left-0 right-1 h-[3px] rounded-full bg-primary/40" />
              </div>

              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-[220px] sm:max-w-sm lg:max-w-md">
                Visit our clinics or get directions easily. We're here to provide expert women's healthcare with compassion.
              </p>

              <div className="inline-flex items-start gap-2.5 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-rose-50 border border-primary/15">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-primary text-xs sm:text-sm leading-tight">2 Clinic Locations in Islamabad</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Easy to reach from all major areas</p>
                </div>
              </div>
            </div>

            {/* Right: Doctor image */}
            <div className="relative self-end">
              <div className="absolute top-[15%] left-[10%] right-[-5%] bottom-0 rounded-full bg-primary/[0.10]" />
              <img src="/heroImage.webp" alt="Dr. Armghana Ali — Gynecologist in Islamabad"
                className="relative w-full max-h-[260px] sm:max-h-[360px] lg:max-h-[520px] object-cover object-top"
                loading="eager" fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ GOOGLE MAPS CARD ══════════════════════ */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-card rounded-3xl border border-border/50 shadow-soft p-5 lg:p-7 space-y-5">
          <h2 className="text-center font-display font-bold text-base lg:text-lg text-foreground">Find Us on Google Maps</h2>

          <div className="grid grid-cols-4 gap-3 lg:gap-6 text-center">
            {[
              { icon: Navigation, label: "Get Directions",   sub: "Quick & Easy"   },
              { icon: Building,   label: "Visit Our Clinics", sub: "G-13 & G-11"   },
              { icon: Star,       label: "5.0 Rating",        sub: "On Google"      },
              { icon: Shield,     label: "Trusted Care",      sub: "12+ Years Exp." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight">{item.label}</p>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between flex-1 px-5 py-3.5 rounded-xl bg-[#34A853] hover:bg-[#2d9249] text-white font-bold text-sm transition-colors">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
                </svg>
                View on Google Maps
              </div>
              <span>→</span>
            </a>
            <a href={PHONE_HREF} onClick={trackPhoneCall}
              className="flex items-center justify-center gap-2 flex-1 px-5 py-3.5 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
              <Phone className="w-4 h-4" />
              Call for Appointment: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════ OUR CLINIC LOCATIONS ══════════════════════ */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-display font-bold text-foreground">Our Clinic Locations</h2>
          </div>

          <div className="space-y-3">
            {clinics.map((loc, i) => (
              <div key={i} className="flex rounded-2xl overflow-hidden border border-border/50 bg-card shadow-soft">
                <img src={loc.img} alt={loc.name}
                  className="w-[140px] sm:w-[175px] lg:w-[200px] h-[110px] sm:h-[130px] object-cover flex-shrink-0" />
                <div className="px-4 py-3 flex flex-col justify-between flex-1">
                  <div>
                    <p className="font-display font-bold text-sm text-foreground leading-tight">{loc.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{loc.addr}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <Clock className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{loc.time}</p>
                    </div>
                  </div>
                  <a href={loc.dir} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary hover:underline">
                    <Navigation className="w-3 h-3" /> Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom badges */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/50 bg-card">
              <Shield className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-medium text-foreground leading-tight">Private &amp; Confidential Consultations</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/50 bg-card">
              <Heart className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-medium text-foreground leading-tight">Emergency Cases Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PATIENT REVIEWS ══════════════════════ */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">Patient Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              What Women <span className="text-gradient">Say About</span> Dr. Armghana
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="font-display font-bold text-4xl text-foreground">5.0</span>
              <div className="text-left">
                <Stars size="w-5 h-5" />
                <p className="text-sm text-muted-foreground mt-0.5">Based on Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {reviews.map((r, i) => (
              <div key={i} className="p-5 rounded-2xl bg-card border border-primary/10 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-l-2xl" />
                <Stars />
                <p className="mt-3 mb-5 text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{r.name.charAt(0)}</span>
                    </div>
                    <span className="font-semibold text-sm text-foreground">{r.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://g.page/r/CTw2ZSbDJVEwEBM/review" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm">
              View all reviews on Google ↗
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground">Everything you need to know before booking your appointment.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-3">Still have a question?</p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20b857] transition-colors">
              <WAIcon className="w-4 h-4 fill-white" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BOOKING FORM ══════════════════════ */}
      <section id="book" className="py-14 bg-gradient-to-b from-background to-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">Book Appointment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Consult Today — <span className="text-gradient">Slots Available</span>
            </h2>
            <p className="text-muted-foreground">Fill in your details and we'll confirm your appointment within the hour.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <a href={PHONE_HREF} onClick={trackPhoneCall}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call for Appointment</p>
                  <p className="font-display font-bold text-foreground">{PHONE_DISPLAY}</p>
                  <p className="text-xs text-primary font-medium">Available Mon–Sun, 3PM–9PM</p>
                </div>
              </a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <WAIcon className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp Appointment</p>
                  <p className="font-display font-bold text-foreground">{PHONE_DISPLAY}</p>
                  <p className="text-xs text-[#25D366] font-medium">Fastest Response</p>
                </div>
              </a>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-light to-accent/20 border border-primary/20 space-y-3">
                <h3 className="font-display font-semibold text-sm text-foreground">Why Book Today?</h3>
                {[
                  "Get reliable consultation with an experienced lady doctor near you",
                  "Professional and confidential gynecology services in Islamabad",
                  "Expert care for pregnancy, maternity, and all women's health concerns",
                  "Online option available — consult from home anytime",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50">
              <div className="gradient-primary p-6">
                <h3 className="font-display font-bold text-2xl text-white">Book Consultation</h3>
                <p className="text-sm text-white/80 mt-1">Dr. Armghana Ali · Gynecologist in Islamabad</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input type="text" placeholder="Your name" value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })} required className="h-12" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <div className="flex h-12 rounded-md border border-input bg-background overflow-hidden ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                      <div className="flex items-center gap-1.5 px-3 border-r border-input bg-muted/50 select-none flex-shrink-0">
                        <span className="text-base leading-none">🇵🇰</span>
                        <span className="text-sm font-semibold text-foreground/80">+92</span>
                      </div>
                      <input type="tel" placeholder="3XX XXXXXXX" value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })} required
                        className="flex-1 px-3 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Consultation Type</label>
                  <div className="flex flex-col gap-2">
                    {consultationTypes.map(type => {
                      const isSelected = formData.consultationType === type.id;
                      return (
                        <button key={type.id} type="button"
                          onClick={() => setFormData({ ...formData, consultationType: type.id })}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden ${isSelected ? "gradient-primary text-primary-foreground shadow-button scale-[1.01]" : "bg-card border border-border/50 text-foreground hover:border-primary/40 hover:shadow-soft"}`}>
                          {isSelected && <CheckCircle2 className="absolute top-2.5 right-3 w-4 h-4 text-white/90" />}
                          <div className="flex items-center gap-3">
                            <type.icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-white" : "text-primary"}`} />
                            <div>
                              <p className="text-sm font-bold leading-tight pr-6">{type.label}</p>
                              <p className={`text-xs mt-0.5 font-medium ${isSelected ? "text-white/75" : "text-primary/70"}`}>{type.sublabel}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Concern <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Textarea placeholder="Describe your symptoms, preferred time, or any questions..."
                      value={formData.concern}
                      onChange={e => setFormData({ ...formData, concern: e.target.value.slice(0, 150) })}
                      className="min-h-[80px] resize-none pb-6" maxLength={150} />
                    <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">{formData.concern.length}/150</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" size="lg"
                    className="flex-1 gradient-shimmer shadow-button hover:opacity-90 hover:-translate-y-0.5 transition-all text-primary-foreground"
                    disabled={isSubmitting}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                  <a href={`${WA_BASE}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
                    className="w-14 h-12 bg-[#25D366] hover:bg-[#20b857] rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <WAIcon className="w-5 h-5 fill-white" />
                  </a>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Shield className="w-3.5 h-3.5" /> Your information is private &amp; secure
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer className="bg-[hsl(340,75%,15%)] text-white/70 py-10">
        <div className="container mx-auto px-4 text-center space-y-3">
          <img src="/logo.webp" alt="Dr. Armghana Ali" className="h-16 w-auto mx-auto opacity-90 rounded-full" />
          <p className="font-display font-bold text-white text-lg">Dr. Armghana Ali — MBBS, FCPS</p>
          <p className="text-sm">Best Gynecologist in Islamabad · Lady Doctor · Female Gynae Specialist · Trusted Gynae Clinic</p>
          <p className="text-sm">Hyaat International Hospital, G-13/1 &nbsp;·&nbsp; Saeed International Hospital, G-11 Markaz, Islamabad</p>
          <div className="flex items-center justify-center gap-4 pt-1">
            <a href={PHONE_HREF} onClick={trackPhoneCall} className="flex items-center gap-1.5 text-white font-semibold hover:text-white/80 transition-colors text-sm">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:text-[#20b857] transition-colors text-sm">
              <WAIcon className="w-4 h-4 fill-[#25D366]" /> WhatsApp
            </a>
          </div>
          <p className="text-xs text-white/30 pt-2 max-w-xl mx-auto">
            The information on this page is for general appointment-booking purposes only and does not constitute medical advice.
          </p>
          <p className="text-xs text-white/30 pt-1">© {new Date().getFullYear()} Dr. Armghana Ali. All rights reserved.</p>
        </div>
      </footer>

      {/* ══════════════════════ FLOATING BUTTONS ══════════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp">
          <WAIcon className="w-7 h-7 fill-white" />
        </a>
        <a href={PHONE_HREF} onClick={trackPhoneCall}
          className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Call Now">
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default TestPage;
