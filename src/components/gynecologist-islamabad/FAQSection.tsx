import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WA_HREF, WAIcon } from "./shared";
import { trackWhatsAppClick } from "@/utils/tracking";

const faqs = [
  { q: "Who is the best female gynecologist in Islamabad?", a: "Dr. Armghana Ali (MBBS, FCPS) is the best female gynecologist in Islamabad — a top rated gyno doctor with a 4.8 Google rating. She practices at Hyaat International Hospital, G-13/1 and Saeed International Hospital, G-11 Markaz." },
  { q: "Where is the best gynaecologist in Islamabad?", a: "Dr. Armghana Ali's trusted gynae clinic is at Clinic No. 3, Hyaat International Hospital, G-13/1, Islamabad. She also consults at Saeed International Hospital, G-11 Markaz. Search 'Dr Armghana Ali' on Google Maps for directions." },
  { q: "Is private consultation available with a lady doctor in Islamabad?", a: "Yes. Dr. Armghana Ali offers fully private and confidential consultations at both clinic locations in Islamabad. She is an experienced lady doctor trusted by hundreds of patients across the city." },
  { q: "Can I get an online gynae consultation in Islamabad?", a: "Absolutely. Dr. Armghana Ali provides online gynae consultation via WhatsApp video or audio call at any time — ideal for a first visit, follow-up, or if you cannot travel to the clinic." },
  { q: "What makes Dr. Armghana Ali a top gynecologist in Islamabad?", a: "Dr. Armghana Ali is a women's health specialist with 12+ years of experience, MBBS and FCPS qualifications, and a 4.8 Google rating. She is known as a trusted gynae clinic doctor offering professional, confidential care in Islamabad." },
  { q: "Is expert pregnancy care available at this gynae clinic?", a: "Yes. Dr. Armghana Ali provides expert pregnancy care from early consultation through to delivery planning. As both a gynecologist and obstetrician in Islamabad, she is your single point of care for all pregnancy-related concerns." },
  { q: "What are the consultation hours at this gynae health clinic?", a: "Dr. Armghana sees patients Monday through Sunday. At Hyaat International Hospital (G-13/1): 4:00–7:00 PM. At Saeed International Hospital (G-11 Markaz): 7:00–9:00 PM. Call or WhatsApp to confirm your slot." },
  { q: "How do I book an appointment with the best gyno in Islamabad?", a: "Simply call or WhatsApp 0308 2070008. Same-day appointments are often available. You can also fill out the form on this page and we will confirm your slot with Dr. Armghana Ali within the hour." },
];

const FAQItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => (
  <div className="border border-border/60 rounded-2xl overflow-hidden">
    <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-card hover:bg-secondary/40 transition-colors">
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

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-14 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
            <span className="text-sm font-semibold text-primary">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Best Gynecologist in Islamabad — <span className="text-gradient">Common Questions</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
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
  );
}
