import { Phone, CalendarCheck, HeartHandshake } from "lucide-react";

const steps = [
  { step: "1", icon: Phone, title: "Call or WhatsApp", desc: "Reach us on 0308 2070008 via call or WhatsApp — any time of day." },
  { step: "2", icon: CalendarCheck, title: "Confirm Your Slot", desc: "Choose your preferred clinic (G-13 or G-11) or opt for an online consultation." },
  { step: "3", icon: HeartHandshake, title: "Consult Dr. Armghana", desc: "Visit the clinic or connect online. Get professional, confidential care." },
];

export default function HowToBookSection() {
  return (
    <section className="py-14 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
            <span className="text-sm font-semibold text-primary">Book in Minutes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Getting an Appointment is <span className="text-gradient">Simple</span>
          </h2>
          <p className="text-muted-foreground">No complicated forms. No long waiting. Just 3 quick steps.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto relative">
          <div className="hidden sm:block absolute top-10 left-[calc(16.6%+1rem)] right-[calc(16.6%+1rem)] h-px bg-primary/20" />
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-button">
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 sm:static sm:hidden w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">{s.step}</div>
              <div>
                <p className="font-display font-bold text-foreground mb-1">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
