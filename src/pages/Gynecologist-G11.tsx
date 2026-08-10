import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Award,
  Star,
  Shield,
  CheckCircle2,
  Navigation,
  Building2,
  Video,
  Clock,
  Users,
  Building,
  ChevronDown,
  AlertCircle,
  CalendarCheck,
  HeartHandshake,
  Zap,
  GraduationCap,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LazyMapEmbed } from "@/components/LazyMapEmbed";
import {
  trackPhoneCall,
  trackWhatsAppClick,
  trackFormSubmission,
} from "@/utils/tracking";

const PINK = '#D4178A';
const GREEN_WA = '#25D366';
const PHONE = '03082070008';
const PHONE_DISPLAY = '0308 2070008';
const WA_LINK = 'https://wa.me/923082070008';
const HYAAT_MAPS = 'https://www.google.com/maps/dir//Clinic+No+3,+Dr.+Armghana+Ali+(Gynecologist),+Hyaat+International+Hospital,+G-13%2F1+G+13%2F1+G-13,+Islamabad,+46000,+Pakistan';
const SAEED_MAPS = 'https://www.google.com/maps/place/Dr.+Armghana+Ali+(Gynecologist+-+G11)/@33.6693635,72.9999455,16.65z/data=!4m6!3m5!1s0x38dfbf75ced6ca13:0xccf63d6bbc9bd1b9!8m2!3d33.668545!4d72.9998756!16s%2Fg%2F11wjcbwmc3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D';

const PHONE_HREF = "tel:+923082070008";
const WA_BASE = "https://wa.me/923082070008";
const WA_HREF = WA_BASE;
const DIRECTIONS_URL = "https://www.google.com/maps/place/Dr.+Armghana+Ali+(Gynecologist+-+G11)/@33.6693635,72.9999455,16.65z/data=!4m6!3m5!1s0x38dfbf75ced6ca13:0xccf63d6bbc9bd1b9!8m2!3d33.668545!4d72.9998756!16s%2Fg%2F11wjcbwmc3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";
const SAEED_MAPS_URL = "https://www.google.com/maps/place/Dr.+Armghana+Ali+(Gynecologist+-+G11)/@33.6693635,72.9999455,16.65z/data=!4m6!3m5!1s0x38dfbf75ced6ca13:0xccf63d6bbc9bd1b9!8m2!3d33.668545!4d72.9998756!16s%2Fg%2F11wjcbwmc3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";


// ─── Data ─────────────────────────────────────────────────────────────────────
const consultationTypes = [
  { id: "hyaat", label: "Hyaat International Hospital", sublabel: "G-13/1, Islamabad  •  4:00 – 7:00 PM", icon: Building2 },
  { id: "saeed", label: "Saeed International Hospital", sublabel: "G-11 Markaz, Islamabad  •  7:00 – 9:00 PM", icon: Building2 },
  { id: "online", label: "Online Consultation", sublabel: "Video / Audio call — Anytime", icon: Video },
];

const WAIcon = ({ className = "w-5 h-5 fill-white" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const services = [
  { emoji: "🏥", label: "General Gynaecological Consultation", desc: "For general women's health concerns, routine checkups and specialist advice in Islamabad." },
  { emoji: "🤰", label: "Pregnancy & Antenatal Care", desc: "Routine pregnancy checkups, early pregnancy guidance and maternity care." },
  { emoji: "📊", label: "Ultrasound & Diagnostic Imaging", desc: "Pelvic and obstetric ultrasound for accurate diagnosis and monitoring." },
  { emoji: "💊", label: "Women's Wellness Consultation", desc: "Preventive care, general wellness advice and women's health screenings." },
  { emoji: "🔐", label: "Private & Confidential Consultation", desc: "All consultations handled with complete discretion and privacy." },
  { emoji: "📱", label: "Online Gynaecological Consultation", desc: "Consult Dr. Armghana via WhatsApp video or audio call from anywhere." },
];

const reviews = [
  { name: "Manam Fatima", rating: 5, text: "I used to have a lot of period pain and I used to think it's normal. One day, I saw her video on Instagram where she explained that it can indicate some underlying issue too. I booked an appointment with her and she actually diagnosed the underlying issue and now I can't thank her enough how relieved I am." },
  { name: "Alvina Fatima", rating: 5, text: "Dr. Armaghana Ali is an excellent listener. I cannot thanks to Dr. Armaghana enough for her support during my pregnancy. Her expertise and calm nature. She is incredibly knowledgeable and attentive. She took the time to answer all my questions and explained my treatment options very clearly. Truly one of the best gynecologist." },
  { name: "Shaukat Nawaz", rating: 5, text: "She is an extremely talented and polite Gynaecologist. Listen's to the problems thoroughly and calms the patient till the point she is satisfied. My wife was extremely upset and we were having very bad days, and she helped us out of it through the entire phase. She was always available whenever we needed her. I can't thank her enough for her services. Highly recommend!" },
  { name: "Afshan", rating: 5, text: "Dr. Armghana is a very kind and lovely doctor. She always talks to her patients with great understanding and a smiling face, which I personally like a lot. Especially during my difficult time, she encouraged me, gave me strength, and explained everything very thoroughly to help solve my problem. She also responds quickly on mobile. Thank you so much Dr. Armghana Ali. Highly recommended from my side." },
  { name: "Ayesha Maryam", rating: 5, text: "The best doc the best listener. I told my whole story. She listened very carefully and answered my all questions and doubt. The best one." },
];

const faqs = [
  {
    q: "Who is the best gynecologist near me in G-11 Islamabad?",
    a: "Dr. Armghana Ali (MBBS, FCPS) is the best gynecologist near you in G-11 Islamabad — a top rated gynecologist with a 5.0 Google rating. She sees patients at Saeed International Hospital, G-11 Markaz, open 7 days a week.",
  },
  {
    q: "Is there a private gynaecologist near me in G-11?",
    a: "Yes. Dr. Armghana Ali is a private gynaecologist nearest to G-11 Markaz, offering completely confidential consultations at Saeed International Hospital. All visits are handled with full discretion.",
  },
  {
    q: "Is the gynecologist open now near G-11 Islamabad?",
    a: "Yes. Dr. Armghana Ali is open 7 days a week at Saeed International Hospital, G-11 Markaz: 7:00–9:00 PM. Same-day slots are available — call or WhatsApp 0308 2070008 to confirm immediately.",
  },
  {
    q: "Where is the nearest gynae hospital near me in G-11?",
    a: "The nearest gynae hospital near you is Saeed International Hospital, G-11 Markaz, Islamabad — where Dr. Armghana Ali (MBBS, FCPS) consults daily. Easily accessible from G-9, G-10, G-11, G-12, F-10 and F-11.",
  },
  {
    q: "Who is the closest gynecologist to me in G-11?",
    a: "Dr. Armghana Ali at Saeed International Hospital, G-11 Markaz is the gynecologist closest to you in G-11. She is also the nearest female doctor and pregnancy care specialist available in the area.",
  },
  {
    q: "Is Dr. Armghana Ali a pregnancy care specialist?",
    a: "Absolutely. Dr. Armghana Ali is both a gynecologist and obstetrician in Islamabad providing full pregnancy care — from early consultation through to delivery planning. Book via call or WhatsApp.",
  },
  {
    q: "Looking for a gyno near me in G-11 Islamabad?",
    a: "Dr. Armghana Ali is the gyno near you in G-11 — a trusted female gynecologist at Saeed International Hospital, G-11 Markaz. Open 7 days, 7:00–9:00 PM. Call or WhatsApp 0308 2070008 for same-day slots.",
  },
  {
    q: "What are the consultation hours at Saeed Hospital G-11?",
    a: "Dr. Armghana sees patients Monday through Sunday at Saeed International Hospital, G-11 Markaz: 7:00–9:00 PM. She also consults at Hyaat International Hospital (G-13/1): 4:00–7:00 PM.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
const Stars = ({ count = 5, size = "w-4 h-4" }: { count?: number; size?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

const FAQItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => (
  <div className="border border-border/60 rounded-2xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-card hover:bg-secondary/40 transition-colors"
    >
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


const EMAILJS_SERVICE_ID = "service_r7ol07e";
const EMAILJS_TEMPLATE_ID = "template_17nfi76";
const EMAILJS_PUBLIC_KEY = "AyyQ1V38DQCt3U8yH";

/* ── Inline SVG icons ────────────────────────────────────────────── */
const PinIcon = ({ size = 20, color = PINK }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = ({ size = 18, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);


const ShieldCheckIcon = ({ size = 22, color = PINK }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

const ClockIcon = ({ size = 14, color = '#9CA3AF' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);

const SendIcon = ({ size = 14, color = PINK }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const HeartIcon = ({ size = 20, color = PINK }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);


/* ── Page component ──────────────────────────────────────────────── */
export default function GynecologistG11() {
  /* Inject Dancing Script for "Near You" cursive text */
  useEffect(() => {
    const id = 'dancing-script-font';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
      document.head.appendChild(link);
    }

    const PAGE_URL = "https://drarmghana.com/gynecologist-g11";
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

    const { toast } = useToast();
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      consultationType: "saeed",
      concern: "",
    });
  
    const selectedType = consultationTypes.find((t) => t.id === formData.consultationType);
  
    const waMessage = encodeURIComponent(
      `Hello Dr. Armghana, I'd like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${selectedType?.label}${formData.concern ? `\nConcern: ${formData.concern}` : ""}`
    );
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const { default: emailjs } = await import("@emailjs/browser");
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: formData.name,
          from_phone: formData.phone,
          service: selectedType?.label,
          message: formData.concern || "No additional concern",
          to_email: "armghanaa@gmail.com",
        }, EMAILJS_PUBLIC_KEY);
        trackFormSubmission({ name: formData.name, phone: formData.phone, service: selectedType?.label ?? "" });
        toast({ title: "Appointment Request Sent!", description: "We'll confirm your slot shortly." });
        setFormData({ name: "", phone: "", consultationType: "hyaat", concern: "" });
      } catch {
        toast({ title: "Failed to send", description: "Please call or WhatsApp us directly.", variant: "destructive" });
      } finally {
        setIsSubmitting(false);
      }
    };

    const saeedEmbedSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6641.05804290193!2d72.9999455!3d33.6693635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf75ced6ca13%3A0xccf63d6bbc9bd1b9!2sDr.%20Armghana%20Ali%20(Gynecologist%20-%20G11)!5e0!3m2!1sen!2s!4v1780140201472!5m2!1sen!2s";
  

  return (
    <div className="min-h-screen bg-white pb-[72px] sm:pb-0" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ═══════════════════════════ NAVBAR ═══════════════════════════ */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 overflow-hidden flex-wrap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-4">

          {/* Logo + Name */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-[42px] h-[42px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-900">
              <img src="/logo.webp" alt="Dr. Armghana Ali" width={220} height={220} className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900 text-[13px]">Dr. Armghana Ali</div>
              <div className="text-gray-500 text-[10px]">Gynecologist in Islamabad</div>
            </div>
          </div>

          {/* Center: location text – desktop only */}
          <div className="hidden md:flex items-center gap-1.5">
            <PinIcon size={17} />
            <span className="font-semibold text-[14px]" style={{ color: PINK }}>
              Islamabad&nbsp;•&nbsp;G-11 Markaz
            </span>
          </div>

          {/* CTA Buttons — hidden on mobile (sticky bottom bar handles mobile CTAs) */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <a
              href={WA_LINK}
              onClick={trackWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-white text-[12px] font-semibold"
              style={{ backgroundColor: GREEN_WA }}
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              onClick={trackPhoneCall}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-white text-[12px] font-semibold"
              style={{ backgroundColor: PINK }}
            >
              <PhoneIcon size={15} />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════ HERO ═════════════════════════════ */}
      <section className="relative overflow-hidden bg-white">

        {/* Pink decorative blob – sits behind the doctor image */}
        <div
          className="absolute right-0 top-0 h-full pointer-events-none"
          style={{ width: '52%', zIndex: 0 }}
        >
          <div
            className="absolute rounded-full"
            style={{
              backgroundColor: '#FFF0F9',
              width: '100%',
              height: '50%',
              top: '-15%',
              right: '-8%',
            }}
          />
          {/* Leaf decoration 1 */}
          <svg
            className="absolute opacity-25"
            style={{ top: '4%', right: '6%', width: '90px' }}
            viewBox="0 0 90 200"
            fill="none"
            aria-hidden
          >
            <path
              d="M45 195 C45 195 5 145 5 90 C5 35 45 5 45 5 C45 5 85 35 85 90 C85 145 45 195 45 195Z"
              stroke="#F9A8D4"
              strokeWidth="2"
              fill="none"
            />
            <line x1="45" y1="5" x2="45" y2="195" stroke="#F9A8D4" strokeWidth="1.5" />
          </svg>
          {/* Leaf decoration 2 */}
          <svg
            className="absolute opacity-20"
            style={{ top: '15%', right: '22%', width: '55px' }}
            viewBox="0 0 55 130"
            fill="none"
            aria-hidden
          >
            <path
              d="M27.5 125 C27.5 125 3 95 3 65 C3 35 27.5 5 27.5 5 C27.5 5 52 35 52 65 C52 95 27.5 125 27.5 125Z"
              stroke="#F9A8D4"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-6">

            {/* ── Left column: all text + maps card ─────────────────── */}
            <div className="relative w-full lg:w-[58%] pt-6 pb-4 lg:pt-10 lg:pb-12">

              {/* Mobile: doctor image – absolutely positioned top-right */}
              <div className="absolute top-0 right-0 w-[44%] lg:hidden" >
                <img
                  src="/heroImage.webp"
                  alt="Dr. Armghana Ali – Gynecologist"
                  width={732}
                  height={1100}
                  className="w-full object-contain"
                  style={{ maxHeight: '300px', objectPosition: 'top center' }}
                />
              </div>

              {/* Mobile: location badge */}
              <div className="mb-3">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[13px] font-semibold"
                  style={{ borderColor: PINK, color: PINK, backgroundColor: 'white' }}
                >
                  <PinIcon size={13} />
                  Islamabad&nbsp;•&nbsp;G-11 Markaz
                </span>
              </div>

              {/* Heading – right padding on mobile to clear the absolute doctor image */}
              <div className="pr-[43%] lg:pr-0 zindex-10">
                <h1 className="zindex-10 font-black leading-[1.1] text-gray-900 text-[26px] sm:text-[26px] lg:text-[48px] xl:text-[54px]">
                  <span style={{ color: PINK, zIndex: 20 }}>Female Gynecologist</span>
                  <br />
                  Near Me —
                  <br />
                  G-11, Islamabad
                </h1>
                {/* "Near You" in script font */}
                <div className="relative inline-block mt-1 mb-1">
                  <span
                    className="font-bold text-[30px] sm:text-[36px] lg:text-[46px] xl:text-[52px]"
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      color: PINK,
                      fontStyle: 'italic',
                    }}
                  >
                    Near You
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0"
                    height="10"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                    style={{ width: '100%' }}
                    aria-hidden
                  >
                    <path
                      d="M2 7 C50 2, 150 2, 198 7"
                      stroke={PINK}
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed mt-3 max-w-lg">
                Dr. Armghana Ali (MBBS, FCPS) — best female gynecologist &amp; pregnancy care specialist near you in G-11, Islamabad. Private consultations, open 7 days. Closest gynaecologist clinic at Saeed Hospital, G-11 Markaz.
              </p>

              {/* Hero CTAs — visible on all screens, primary conversion point */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  onClick={trackWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl text-white font-bold text-[15px]"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <WhatsAppIcon size={20} />
                  Book via WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  onClick={trackPhoneCall}
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl text-white font-bold text-[15px]"
                  style={{ backgroundColor: PINK }}
                >
                  <PhoneIcon size={20} />
                  Call {PHONE_DISPLAY}
                </a>
              </div>

              {/* Our Location card — desktop: shown here in left column; mobile: shown in standalone section below */}
              <div className="hidden lg:block mt-4 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <PinIcon size={16} />
                  <h2 className="font-bold text-gray-900 text-[15px]">Our Location</h2>
                </div>
                <div className="flex gap-3 items-start mb-3">
                  <a href={SAEED_MAPS} target="_blank" rel="noopener noreferrer" className="w-[90px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 block">
                    <img src="/Saeed.webp" alt="Saeed International Hospital G-11" width={480} height={300} className="w-full h-[68px] object-cover hover:opacity-80 transition-opacity" />
                  </a>
                  <div className="pt-0.5">
                    <div className="flex items-start gap-1.5 mb-1">
                      <PinIcon size={13} />
                      <h3 className="font-bold text-gray-900 text-[13px] leading-tight">Saeed International Hospital</h3>
                    </div>
                    <p className="text-gray-500 text-[11px] mb-1.5">G-11 Markaz, Islamabad</p>
                    <div className="flex items-center gap-1.5 text-gray-500 text-[11px] mb-2">
                      <ClockIcon size={12} />
                      Mon–Sun: 7:00 PM – 9:00 PM
                    </div>
                    <a href={SAEED_MAPS} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[12px]"
                      style={{ color: PINK }}>
                      <SendIcon size={12} />
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 flex-1">
                    <ShieldCheckIcon size={15} />
                    <span className="text-[11px] font-medium text-gray-700">Private &amp; Confidential</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-1">
                    <HeartIcon size={15} />
                    <span className="text-[11px] font-medium text-gray-700">Emergency Cases Accepted</span>
                  </div>
                </div>
              </div>
              

              {/* 2 Clinic Locations badge */}
              {/* <div
                className="mt-4 inline-flex items-start gap-3 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#FFF5FB' }}
              >
                <PinIcon size={22} />
                <div>
                  <div className="font-bold text-[15px] leading-tight" style={{ color: PINK }}>
                    2 Clinic Locations in Islamabad
                  </div>
                  <div className="text-gray-500 text-[13px] mt-0.5">
                    Easy to reach from all major areas
                  </div>
                </div>
              </div> */}

            </div>

            {/* ── Right column: doctor image – desktop only ──────────── */}
            <div className="hidden lg:flex lg:w-[42%] items-start justify-center relative">
              <img
                src="/heroImage.webp"
                alt="Dr. Armghana Ali – Gynecologist in Islamabad"
                width={732}
                height={1100}
                className="relative w-full object-contain object-top"
                style={{ maxHeight: '680px', maxWidth: '480px', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CLINIC LOCATIONS — mobile only ═════════════════════ */}
      <section className="bg-white py-4 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="flex items-center gap-2 mb-6">
            <PinIcon size={22} />
            <h2 className="font-bold text-gray-900 text-[18px] lg:text-[20px]">
              Our Location
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-8">

            {/* Hospital cards */}
            <div className="flex flex-col sm:flex-row sm:gap-5 gap-5 lg:w-3/4">

              {/* Card – Saeed International Hospital (PRIMARY for G-11 campaign) */}
              <div className="flex gap-4 items-start flex-1">
                <a href={SAEED_MAPS} target="_blank" rel="noopener noreferrer" className="w-[130px] sm:w-[140px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 block">
                  <img
                    src="/Saeed.webp"
                    alt="Saeed International Hospital G-11"
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

            {/* Trust items */}
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

      {/* ════════════════════════════════════════════════════════
          4 QUICK ACTION TILES — primary conversion drivers for Maps visitors
      ════════════════════════════════════════════════════════ */}
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
                <p className="text-xs text-muted-foreground mt-0.5">G-11 Markaz, Islamabad</p>
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

      {/* ════════════════════════════════════════════════════════
          LOCATION — prominent map near top (Maps campaign visitors expect this)
      ════════════════════════════════════════════════════════ */}
      <section id="location" className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-3">
              <span className="text-sm font-semibold text-primary">Find the Clinic</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Best Gynae Hospital <span className="text-gradient">Near Me</span> — G-11, Islamabad
            </h2>
            <p className="text-muted-foreground text-sm">
              Best &amp; closest gynaecologist clinic near you in G-11 Islamabad — Saeed International Hospital, G-11 Markaz. Open 7 days. Serving G-9, G-10, G-11, G-12, F-10, F-11, I-10, I-11 and all nearby sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start max-w-5xl mx-auto">
            {/* Map embed */}
            <div className="space-y-3">
              <div className="rounded-3xl overflow-hidden shadow-card h-[360px]">
                <LazyMapEmbed
                  src={saeedEmbedSrc}
                  title="Dr. Armghana Ali — Saeed International Hospital G-11"
                  label="Saeed International Hospital, G-11 Markaz"
                />
              </div>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-md">
                <Navigation className="w-4 h-4" />
                Open in Google Maps — Get Turn-by-Turn Directions
              </a>
            </div>

            {/* Clinic details */}
            <div className="space-y-4">
              {/* G-11 clinic — PRIMARY */}
              <div className="p-5 rounded-2xl bg-card border border-primary/20 shadow-soft">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground">Saeed International Hospital</h3>
                    <p className="text-xs text-muted-foreground">G-11 Markaz, Islamabad</p>
                    <p className="text-xs font-semibold text-green-600 mt-1">7:00 PM – 9:00 PM · Mon–Sun</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    "Walk-in & appointment available",
                    "Nearest gynae clinic in G-11",
                    "Parking available on premises",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <a href={SAEED_MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-600 hover:underline">
                  <Navigation className="w-3.5 h-3.5" /> Get Directions to G-11 Clinic
                </a>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/60 border border-border/40">
                <Building className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Also at <span className="font-semibold text-foreground">Hyaat International Hospital, G-13/1</span> · 4:00–7:00 PM ·{' '}
                  <a href={HYAAT_MAPS} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Directions</a>
                </p>
              </div>

              {/* Emergency box */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-red-700">Emergency Gynaecological Care</p>
                  <p className="text-xs text-red-600 mt-0.5">Available at Saeed Hospital G-11 and Hyaat Hospital G-13/1. Call {PHONE_DISPLAY} immediately.</p>
                  <a href={PHONE_HREF} onClick={trackPhoneCall}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-red-600 hover:underline">
                    <Phone className="w-3.5 h-3.5" /> Call Emergency Line
                  </a>
                </div>
              </div>

              {/* Areas served */}
              <div className="p-4 rounded-2xl bg-primary-light border border-primary/20">
                <h3 className="font-display font-semibold text-xs text-primary mb-2">Serving all nearby sectors</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["G-9", "G-10", "G-11", "G-12", "G-13", "F-10", "F-11", "I-10", "I-11", "I-8", "I-9", "E-11", "Blue Area", "F-6"].map((area) => (
                    <span key={area} className="px-2 py-0.5 rounded-full bg-white/70 border border-primary/20 text-xs font-semibold text-primary">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SAME-DAY AVAILABILITY STRIP
      ════════════════════════════════════════════════════════ */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium">
            {[
              { icon: Zap, label: "Open Now — Same Day Slots" },
              { icon: CalendarCheck, label: "Open 7 Days a Week" },
              { icon: HeartHandshake, label: "Private & Confidential" },
              { icon: AlertCircle, label: "Emergency Cases Accepted" },
              { icon: Video, label: "Online Consultations Available" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <item.icon className="w-4 h-4 text-primary-foreground/80" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          ABOUT — brief, credibility-focused
      ════════════════════════════════════════════════════════ */}
      <section id="about" className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <div className="inline-block px-4 py-2 rounded-full bg-primary-light">
                <span className="text-sm font-semibold text-primary">About Dr. Armghana Ali</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                Female Gynecologist <span className="text-gradient">Near Me</span> in G-11, Islamabad
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Looking for the best gyno near me or gynecology near me in G-11 Islamabad? Dr. Armghana Ali is the best gynecologist near me — a top rated gynecologist, OBGYN near me, and pregnancy care specialist with 12+ years of experience. She holds an MBBS and FCPS in Obstetrics & Gynecology and practices at Saeed International Hospital, G-11 Markaz.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Trusted for her patient-first approach, she is the best female gynecologist near you and the closest private gynaecologist to G-11 patients. A pregnancy care specialist offering antenatal care, women's health consultations and emergency gynaecology at Saeed International Hospital, G-11 Markaz.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  "Best Gynecologist in G-11 Islamabad",
                  "Pregnancy Care Specialist",
                  "Private Gynaecologist Near Me",
                  "Top Rated Gynecologist — 5.0 ⭐",
                  "Trusted Gynecologist Near Me",
                  "OBGYN Near Me — MBBS, FCPS",
                  "Gynecologist Open Now — 7 Days",
                  "PMDC Registered Specialist",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "800+", label: "Patients Treated", sub: "& counting" },
                { icon: Award, value: "12+", label: "Years Experience", sub: "MBBS · FCPS" },
                { icon: Building, value: "2", label: "Clinic Locations", sub: "G-13 & G-11" },
                { icon: Star, value: "5.0", label: "Google Rating", sub: "6 reviews" },
              ].map((s, i) => (
                <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-primary-light to-accent/30 border border-primary/15 text-center space-y-1">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-2">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-display font-bold text-2xl text-foreground">{s.value}</p>
                  <p className="text-sm font-semibold text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES — Google-policy-compliant services framing
      ════════════════════════════════════════════════════════ */}
      <section id="services" className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Comprehensive <span className="text-gradient">Women's Health</span> Services
            </h2>
            <p className="text-muted-foreground">
              Dr. Armghana Ali provides professional and confidential gynaecological services in Islamabad — from routine consultations to specialised women's healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <div key={i}
                className="flex gap-3 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-xl flex-shrink-0 mt-0.5">{s.emoji}</span>
                <div>
                  <div className="text-sm font-semibold text-foreground leading-snug">{s.label}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20b857] hover:-translate-y-0.5 transition-all shadow-md">
              <WAIcon className="w-5 h-5 fill-white" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REVIEWS
      ════════════════════════════════════════════════════════ */}
      <section id="reviews" className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">Patient Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              What Patients <span className="text-gradient">Say</span> About Dr. Armghana
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="font-display font-bold text-4xl text-foreground">5.0</span>
              <div className="text-left">
                <Stars size="w-5 h-5" />
                <p className="text-sm text-muted-foreground mt-0.5">Based on 6 Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {reviews.map((r, i) => (
              <div key={i}
                className="p-5 rounded-2xl bg-card border border-primary/10 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
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
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://g.page/r/CbnRm7xrPfbMEAE/review" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm">
              View all reviews on Google ↗
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FAQ — location & access focused
      ════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Best Gynecologist Near Me — <span className="text-gradient">G-11 Islamabad</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20b857] transition-colors">
              <WAIcon className="w-4 h-4 fill-white" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BOOKING FORM
      ════════════════════════════════════════════════════════ */}
      <section id="book" className="py-14 bg-gradient-to-b from-background to-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
              <span className="text-sm font-semibold text-primary">Book Appointment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Same Day Slots — <span className="text-gradient">Book Now</span>
            </h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll confirm your slot with Dr. Armghana Ali within the hour.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left: contact options */}
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

              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Walk-in Welcome</p>
                  <p className="font-display font-bold text-foreground">Get Directions to Clinic</p>
                  <p className="text-xs text-blue-600 font-medium">Saeed International Hospital, G-11 Markaz</p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-light to-accent/20 border border-primary/20 space-y-3">
                <h3 className="font-display font-semibold text-sm text-foreground">Why Book Today?</h3>
                {[
                  "Same-day appointments often available — confirm via WhatsApp",
                  "Female gynecologist available for in-person and online care",
                  "Professional and confidential women's health consultations",
                  "Nearest gynae clinic in G-11 — Saeed International Hospital",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50">
              <div className="gradient-primary p-6">
                <h3 className="font-display font-bold text-2xl text-white">Book Consultation</h3>
                <p className="text-sm text-white/80 mt-1">Dr. Armghana Ali · Gynecologist · G-11 Islamabad</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input type="text" placeholder="Your name"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required className="h-12" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <div className="flex h-12 rounded-md border border-input bg-background overflow-hidden ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                      <div className="flex items-center gap-1.5 px-3 border-r border-input bg-muted/50 select-none flex-shrink-0">
                        <span className="text-base leading-none">🇵🇰</span>
                        <span className="text-sm font-semibold text-foreground/80">+92</span>
                      </div>
                      <input type="tel" placeholder="3XX XXXXXXX"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="flex-1 px-3 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Consultation Type</label>
                  <div className="flex flex-col gap-2">
                    {consultationTypes.map((type) => {
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
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value.slice(0, 150) })}
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
                  <a href={`${WA_BASE}?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="w-14 h-12 bg-[#25D366] hover:bg-[#20b857] rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <WAIcon className="w-5 h-5 fill-white" />
                  </a>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Shield className="w-3.5 h-3.5" />
                  Your information is private & secure
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════ */}
      <footer className="bg-[hsl(340,75%,15%)] text-white/70 py-10">
        <div className="container mx-auto px-4 text-center space-y-3">
          <img src="/logo.webp" alt="Dr. Armghana Ali" width={220} height={220} className="h-16 w-auto mx-auto opacity-90 rounded-full" />
          <p className="font-display font-bold text-white text-lg">Dr. Armghana Ali — MBBS, FCPS</p>
          <p className="text-sm">
            Female Gynecologist Near You · G-11 Islamabad · Lady OBGYN · Nearest Gynae Clinic G-11
          </p>
          <p className="text-sm">
            Saeed International Hospital, G-11 Markaz &nbsp;·&nbsp; Hyaat International Hospital, G-13/1, Islamabad
          </p>
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

      {/* ════════════════════════════════════════════════════════
          STICKY BOTTOM BAR — full-width Call + WhatsApp
      ════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden" style={{ boxShadow: '0 -3px 20px rgba(0,0,0,0.18)' }}>
        <a
          href={PHONE_HREF}
          onClick={trackPhoneCall}
          className="flex-1 flex items-center justify-center gap-2 py-[18px] text-white font-bold text-[16px] active:opacity-90"
          style={{ backgroundColor: PINK }}
          aria-label="Call Now"
        >
          <PhoneIcon size={20} />
          Call Now
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex-1 flex items-center justify-center gap-2 py-[18px] text-white font-bold text-[16px] active:opacity-90"
          style={{ backgroundColor: '#25D366' }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={20} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
