import { useEffect, useState } from "react";
import {
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  AlertCircle,
  MapPin,
  Navigation,
  Video,
  Award,
  Star,
  ShieldAlert,
  HeartHandshake,
  Stethoscope,
  Baby,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

const PHONE_DISPLAY = "0308 2070008";
const PHONE_HREF = "tel:+923082070008";
const WA_HREF = "https://wa.me/923082070008";
const PAGE_URL = "https://drarmghana.com/pregnancy-care-islamabad";
const HYAAT_MAPS =
  "https://www.google.com/maps/dir//Clinic+No+3,+Dr.+Armghana+Ali+(Gynecologist),+Hyaat+International+Hospital,+G-13%2F1+G+13%2F1+G-13,+Islamabad,+46000,+Pakistan";
const SAEED_MAPS =
  "https://www.google.com/maps/place/Dr.+Armghana+Ali+(Gynecologist+-+G11)/@33.6693635,72.9999455,16.65z/data=!4m6!3m5!1s0x38dfbf75ced6ca13:0xccf63d6bbc9bd1b9!8m2!3d33.668545!4d72.9998756!16s%2Fg%2F11wjcbwmc3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D";

// ─── Data ───────────────────────────────────────────────────────────────────
const includedItems = [
  "Baby's growth is tracked month by month, from confirmation to delivery",
  "Checkup frequency increases naturally as your due date gets closer",
  "High-risk symptoms are checked immediately, never held for the next routine visit",
  "Guidance on pregnancy tablets and supplements, based on your individual needs",
  "Blood pressure, ultrasounds, and screening tests included at every stage",
  "Postnatal recovery and newborn care support continue after delivery, not just up to it",
];

const firstTrimesterTopics = [
  {
    title: "Signs & Confirming Your Pregnancy",
    description:
      "A missed period, nausea, or unusual tiredness are often the first signs. A home test can confirm pregnancy early, but a proper checkup with Dr. Armghana Ali confirms it with certainty and checks that everything is progressing normally.",
  },
  {
    title: "What to Expect in the First Trimester",
    description:
      "Your first visit usually includes a checkup, an ultrasound to confirm the pregnancy, and basic blood tests. Dr. Armghana Ali also discusses your medical history and any conditions that may need closer monitoring from the start.",
  },
  {
    title: "Common Concerns (Nausea, Fatigue, Spotting)",
    description:
      "Morning sickness, tiredness, and mood changes are common in early pregnancy and usually settle down by the second trimester. Light spotting can happen too, but it's always worth getting checked rather than assuming it's nothing.",
  },
];

const monthlyCare = [
  {
    month: "1st",
    title: "1st Month of Pregnancy Care",
    description:
      "This is when pregnancy begins, often before it's even confirmed. Focus on confirming the pregnancy with a checkup and starting folic acid early, since it supports healthy development from the very start. Avoid smoking, alcohol, and unnecessary medication during this time.",
  },
  {
    month: "2nd",
    title: "2nd Month of Pregnancy Care",
    description:
      "Morning sickness and tiredness are common this month. Your first proper prenatal visit usually happens now, including an ultrasound to confirm the pregnancy and check the heartbeat. This is also when Dr. Armghana Ali reviews your medical history in detail.",
  },
  {
    month: "3rd",
    title: "3rd Month of Pregnancy Care",
    description:
      "The first trimester wraps up around this point, and nausea often starts easing. Early screening tests may be done to check on the baby's development. It's a good time to plan your antenatal checkup schedule for the months ahead.",
  },
  {
    month: "4th",
    title: "4th Month of Pregnancy Care",
    description:
      "Energy levels usually start improving as the second trimester begins. A detailed ultrasound is often scheduled to check the baby's growth and development. Many women also start noticing a visible bump this month.",
  },
  {
    month: "5th",
    title: "5th Month of Pregnancy Care",
    description:
      "Some women begin to feel the baby's first movements around now. Routine checkups continue to track growth, weight gain, and overall health. This is also a common time for a detailed anomaly scan.",
  },
  {
    month: "6th",
    title: "6th Month of Pregnancy Care",
    description:
      "The bump grows noticeably, and the baby's movements become more regular. A glucose screening test is usually done around this stage to check for pregnancy-related diabetes. Blood pressure is monitored closely at every visit.",
  },
  {
    month: "7th",
    title: "7th Month of Pregnancy Care",
    description:
      "The third trimester begins, and checkups become more frequent. Dr. Armghana Ali starts monitoring the baby's position and watching for early signs of complications like high blood pressure. This is a good time to start thinking about your birth plan.",
  },
  {
    month: "8th",
    title: "8th Month of Pregnancy Care",
    description:
      "Checkups usually move to every two weeks. Baby's position, movement, and growth are tracked closely, and birth plan discussions continue. Some routine tests may be repeated to confirm everything is on track for delivery.",
  },
  {
    month: "9th",
    title: "9th Month of Pregnancy Care",
    description:
      "Checkups become weekly as your due date approaches. Dr. Armghana Ali monitors the baby's position, movement, and any signs of labor. This is when final delivery planning is confirmed, whether normal delivery or C-section.",
  },
];

const commonTests = [
  "Ultrasound scans to track baby's growth and position",
  "Blood tests to check for anemia, blood group, and infections",
  "Blood pressure monitoring at every visit",
  "Glucose screening for pregnancy-related diabetes",
  "Urine tests to check for infection or protein levels",
];

const highRiskTopics = [
  {
    icon: ShieldAlert,
    title: "What Makes a Pregnancy High-Risk?",
    description:
      "A pregnancy may be considered high-risk due to factors like age, pre-existing conditions such as diabetes or high blood pressure, multiple pregnancies (twins or more), or complications from a previous pregnancy. Having a risk factor doesn't mean something will go wrong — it means extra care is taken to make sure it doesn't.",
  },
  {
    icon: Stethoscope,
    title: "How Monitoring Changes",
    description:
      "High-risk pregnancies are usually seen more often, with closer tracking of blood pressure, baby's growth, and any warning signs. Dr. Armghana Ali coordinates with other specialists when needed, so nothing is managed in isolation.",
  },
  {
    icon: AlertCircle,
    title: "When to Seek Immediate Care",
    description:
      "Severe pain, heavy bleeding, sudden swelling, severe headaches, or reduced baby movement should never wait for the next scheduled visit. These need to be checked right away.",
  },
];

const postnatalTopics = [
  {
    title: "Postnatal Checkups",
    description:
      "A follow-up visit is usually recommended within the first week after delivery, then again around 6 weeks. These checkups track healing, check for infection, and make sure recovery is on track.",
  },
  {
    title: "Recovery After Normal Delivery vs. C-Section",
    description:
      "Recovery time is different for everyone. A normal delivery usually allows for a quicker return to daily activities, while a C-section needs more time for the incision to heal and for movement to feel comfortable again. Dr. Armghana Ali gives specific recovery guidance based on which one you had.",
  },
  {
    title: "Breastfeeding & Newborn Care Support",
    description:
      "The first few days of breastfeeding can be difficult, and that's normal — not a sign that something's wrong. Dr. Armghana Ali offers guidance on feeding, latch problems, and basic newborn care questions new mothers often have.",
  },
  {
    title: "Postpartum Mental Health — When to Ask for Help",
    description:
      "Feeling low, anxious, or overwhelmed after delivery is common, and it's not something to feel guilty about. If these feelings last more than two weeks, or feel too heavy to manage alone, it's important to talk to your doctor. Support is available, and asking for it is a normal part of recovery — not a failure.",
  },
];

const whyChooseTopics = [
  {
    icon: HeartHandshake,
    title: "One Doctor, From First Checkup to Delivery",
    description:
      "No switching doctors mid-pregnancy or repeating your history to someone new. Dr. Armghana Ali follows your pregnancy from confirmation through delivery and postnatal recovery.",
  },
  {
    icon: Stethoscope,
    title: "Clear Monitoring at Every Stage",
    description:
      "From early screening to third-trimester checkups, every visit is tracked against your specific pregnancy — not a generic schedule applied the same way to everyone.",
  },
  {
    icon: ShieldAlert,
    title: "Experienced in High-Risk Pregnancy Care",
    description:
      "For pregnancies that need closer attention, Dr. Armghana Ali has the experience to monitor risk factors properly and involve other specialists when needed.",
  },
  {
    icon: Baby,
    title: "Support That Continues After Delivery",
    description:
      "Care doesn't stop once the baby arrives. Postnatal checkups, recovery guidance, and support for new mothers are part of the same continuous care, not a separate add-on.",
  },
];

const faqs = [
  {
    q: "How often will I need checkups during pregnancy?",
    a: "Usually every 4 to 6 weeks in the first two trimesters, then every 2 weeks in the third trimester, and weekly as your due date gets closer. If your pregnancy is high-risk, Dr. Armghana Ali may schedule visits more often.",
  },
  {
    q: "What should I eat during pregnancy?",
    a: "A balanced diet with fruits, vegetables, protein, and whole grains covers most needs. Specific guidance — including any supplements you may need — is given during your checkup, based on your health and stage of pregnancy.",
  },
  {
    q: "Is it safe to travel during pregnancy?",
    a: "Travel is usually safe in the second trimester for a low-risk pregnancy, but it depends on your individual health and how far along you are. Always check with Dr. Armghana Ali before planning travel, especially in the third trimester.",
  },
  {
    q: "What pregnancy tablets or supplements do I need?",
    a: "Folic acid, iron, and calcium are commonly recommended during pregnancy, but the right supplement and dose depends on your individual health and blood test results. Dr. Armghana Ali advises on this directly during your antenatal visits.",
  },
  {
    q: "When should I start postnatal checkups after delivery?",
    a: "The first postnatal checkup is usually within a week after delivery, with a follow-up around 6 weeks. This applies to both normal delivery and C-section recovery.",
  },
  {
    q: "When should I seek urgent care during pregnancy?",
    a: "Seek immediate medical care for severe abdominal pain, heavy bleeding, severe headaches, sudden swelling, or reduced baby movement. Don't wait for your next scheduled appointment if you notice any of these.",
  },
];

const relatedServices = [
  {
    title: "Delivery Services in Islamabad",
    description:
      "Planning for normal delivery or a C-section? Dr. Armghana Ali provides safe, carefully planned delivery care in Islamabad.",
  },
  {
    title: "High-Risk Pregnancy Care",
    description:
      "Extra monitoring and closer follow-up for pregnancies that need it, at every stage from early screening to delivery.",
  },
  {
    title: "Antenatal & Postnatal Care",
    description:
      "Complete checkup schedules before delivery, and recovery support for mother and baby after.",
  },
];

// ─── Schema ─────────────────────────────────────────────────────────────────
const pageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Pregnancy Care in Islamabad – Dr. Armghana Ali",
  url: PAGE_URL,
  about: {
    "@type": "MedicalProcedure",
    name: "Pregnancy Care",
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    description:
      "Complete pregnancy care in Islamabad from Dr. Armghana Ali (MBBS, FCPS) — checkups, scans, and delivery planning at every stage.",
  },
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

// ─── Sub-components ─────────────────────────────────────────────────────────
const SectionEyebrow = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
    <Sparkles className="w-4 h-4 text-primary" />
    <span className="text-sm font-semibold text-primary">{label}</span>
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

// ─── Page ───────────────────────────────────────────────────────────────────
const PregnancyCareIslamabad = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

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
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 gradient-hero overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <SectionEyebrow label="Pregnancy Care" />
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Pregnancy Care in Islamabad – <span className="text-gradient-shimmer">Dr. Armghana Ali</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Every pregnancy is different, and yours deserves care that keeps up with it. Dr. Armghana Ali provides complete pregnancy care in Islamabad — from your first checkup to delivery and beyond. She explains each step clearly, so you always know what's happening and what comes next.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm font-semibold text-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" /> 12+ Years of Experience
              </span>
              <span className="text-muted-foreground/40">|</span>
              <span className="inline-flex items-center gap-1.5">
                <Baby className="w-4 h-4 text-primary" /> 100+ Babies Delivered
              </span>
              <span className="text-muted-foreground/40">|</span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-4 h-4 text-primary" /> 4.7★ Rating
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button size="xl" variant="whatsapp" asChild>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                  <MessageCircle className="w-5 h-5" />
                  Book Appointment on WhatsApp
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href={PHONE_HREF} onClick={trackPhoneCall}>
                  <Phone className="w-5 h-5" />
                  Call Now — {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHAT'S INCLUDED ═══════════════════ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              What Is Included in <span className="text-gradient-shimmer">Pregnancy Care</span> with Dr Armghana Ali?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pregnancy care with Dr. Armghana Ali (MBBS, FCPS) starts from your first confirmed checkup and continues through delivery and postnatal recovery. It's ongoing support, not just a few scattered visits — covering your baby's growth month by month, scheduled ultrasounds and screening tests, early identification of risk factors, guidance on pregnancy supplements, and a clear delivery plan. Checkups typically happen every 4 to 6 weeks through the first two trimesters, becoming weekly as your due date approaches, with high-risk pregnancies monitored more closely throughout.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/10"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button size="lg" asChild>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                Book Your First Checkup
              </a>
            </Button>
            <Button size="lg" variant="whatsapp" asChild>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ EARLY PREGNANCY CARE ═══════════════════ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Early Pregnancy Care — What to Do in the <span className="text-gradient-shimmer">First Trimester</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              The first trimester is when your body changes the most, and when most questions come up. Good early pregnancy care in these first few weeks sets the foundation for a smooth pregnancy ahead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {firstTrimesterTopics.map((topic) => (
              <div key={topic.title} className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ MONTH BY MONTH ═══════════════════ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Pregnancy Care <span className="text-gradient-shimmer">Month by Month</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pregnancy is often explained in trimesters, but most women think in months — "I'm in my 5th month" is how it actually comes up in conversation. Here's what to expect and what kind of care matters at each stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {monthlyCare.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-3">
                  <span className="text-sm font-display font-bold text-primary-foreground">{item.month}</span>
                </div>
                <h3 className="text-base font-display font-semibold text-foreground mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ANTENATAL SCHEDULE ═══════════════════ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Antenatal Checkup <span className="text-gradient-shimmer">Schedule &amp; Screenings</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Regular checkups are what catch problems early, before they become serious. Here's how often you'll typically be seen, and what these visits usually include as part of ongoing care during pregnancy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">
                Recommended Checkup Frequency by Trimester
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In the first and second trimester, checkups are usually every 4 to 6 weeks. In the third trimester, this becomes more frequent — every 2 weeks, then weekly as your due date gets closer. Dr. Armghana Ali may adjust this schedule if your pregnancy needs closer monitoring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">
                Common Tests &amp; Scans (Ultrasound, Blood Work, Screenings)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Most pregnancies include a few standard checks along the way:
              </p>
              <ul className="space-y-2 mb-3">
                {commonTests.map((test) => (
                  <li key={test} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Not every test applies to every pregnancy — Dr. Armghana Ali explains which ones matter for you and why, instead of running through a generic checklist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HIGH-RISK MONITORING ═══════════════════ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              High-Risk <span className="text-gradient-shimmer">Pregnancy Monitoring</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Some pregnancies need closer attention than others — and knowing early makes all the difference. Dr. Armghana Ali identifies risk factors early and adjusts your care plan to keep both you and your baby safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
            {highRiskTopics.map((topic) => (
              <div key={topic.title} className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-3">
                  <topic.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-base font-medium text-foreground mb-4">
              If you're managing a high-risk pregnancy, book a consultation with Dr. Armghana Ali.
            </p>
            <Button size="lg" variant="whatsapp" asChild>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                <MessageCircle className="w-5 h-5" />
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ POSTNATAL SUPPORT ═══════════════════ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              After Pregnancy Care — <span className="text-gradient-shimmer">Recovery &amp; Postnatal Support</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pregnancy care doesn't end at delivery. The weeks after birth matter just as much — for your body, your baby, and your mind. Dr. Armghana Ali continues care well beyond delivery, not just up to it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {postnatalTopics.map((topic) => (
              <div key={topic.title} className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE ═══════════════════ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Why Choose Dr. Armghana Ali for <span className="text-gradient-shimmer">Pregnancy Care in Islamabad</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pregnancy care works best when it's consistent — the same doctor tracking your health from the first checkup to delivery and beyond. Here's what that looks like with Dr. Armghana Ali.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {whyChooseTopics.map((topic) => (
              <div key={topic.title} className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-3">
                  <topic.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Pregnancy Care <span className="text-gradient-shimmer">FAQs</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <p className="max-w-2xl mx-auto text-xs text-muted-foreground leading-relaxed text-center mt-8">
            <strong className="text-foreground">Medical Disclaimer:</strong> This information is for general guidance only and is not a substitute for medical advice. Every pregnancy is different — please consult Dr. Armghana Ali directly for advice specific to your health.
          </p>
        </div>
      </section>

      {/* ═══════════════════ BOOK CONSULTATION ═══════════════════ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Book Your <span className="text-gradient-shimmer">Pregnancy Care</span> Consultation
            </h2>
            <p className="text-muted-foreground">
              Choose the clinic that's most convenient for you, or book an online consultation from anywhere in Islamabad or Rawalpindi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Hyaat */}
            <div className="p-6 rounded-2xl bg-card border border-primary/10 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">Hyaat International Hospital</h3>
                <p className="text-sm text-muted-foreground">G-13/1, Islamabad</p>
                <p className="text-sm font-semibold text-primary mt-1">Monday – Sunday · 3:00 PM – 6:00 PM</p>
              </div>
              <div className="flex flex-col gap-2">
                <a href={HYAAT_MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
                <Button size="sm" variant="whatsapp" asChild>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Saeed */}
            <div className="p-6 rounded-2xl bg-card border border-primary/10 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">Saeed International Hospital</h3>
                <p className="text-sm text-muted-foreground">G-11 Markaz, Islamabad</p>
                <p className="text-sm font-semibold text-primary mt-1">Monday – Sunday · 6:00 PM – 9:00 PM</p>
              </div>
              <div className="flex flex-col gap-2">
                <a href={SAEED_MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
                <Button size="sm" variant="whatsapp" asChild>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Online */}
            <div className="p-6 rounded-2xl bg-card border border-primary/10 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Video className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">Online Consultation</h3>
                <p className="text-sm text-muted-foreground">Available via WhatsApp or video call</p>
                <p className="text-sm font-semibold text-primary mt-1">Flexible · By confirmation</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={PHONE_HREF} onClick={trackPhoneCall}>
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </Button>
                <Button size="sm" variant="whatsapp" asChild>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ RELATED SERVICES ═══════════════════ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedServices.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-card border border-primary/10 shadow-soft">
                <h3 className="font-display font-semibold text-base text-foreground mb-2 leading-snug">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                <span className="text-sm font-semibold text-muted-foreground/60">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default PregnancyCareIslamabad;
