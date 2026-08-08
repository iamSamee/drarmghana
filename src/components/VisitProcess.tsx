import { Sparkles, PhoneCall, MessageCircleHeart, Stethoscope, ClipboardCheck, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "Step 1",
    title: "Book Your Appointment",
    description:
      "Send a message on WhatsApp or call the clinic directly. Let us know your concern and preferred location — Hyaat International Hospital (G-13) or Saeed International Hospital (G-11). We'll confirm your timing the same day.",
  },
  {
    icon: MessageCircleHeart,
    step: "Step 2",
    title: "Your First Consultation",
    description:
      "Dr. Armghana Ali starts by listening. You'll talk about your symptoms or concern in a private, comfortable setting — no rushed questions, no judgment.",
  },
  {
    icon: Stethoscope,
    step: "Step 3",
    title: "Examination & Tests (If Needed)",
    description:
      "If a physical exam, ultrasound, or lab test is needed, Dr. Armghana Ali explains why before doing it, not after. You'll always know what's being checked and what it means.",
  },
  {
    icon: ClipboardCheck,
    step: "Step 4",
    title: "Diagnosis & Treatment Plan",
    description:
      "Once she understands what's going on, Dr. Armghana Ali explains the diagnosis in plain words and walks you through your treatment options — no confusing medical terms, no pressure to decide on the spot.",
  },
  {
    icon: CalendarCheck,
    step: "Step 5",
    title: "Follow-Up Care",
    description:
      "Your care doesn't end when you leave the clinic. Dr. Armghana Ali schedules follow-ups as needed and stays available for questions as your treatment continues.",
  },
];

export const VisitProcess = () => {
  return (
    <section id="visit-process" className="py-20 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Your Visit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            What to <span className="text-gradient-shimmer">Expect</span> at Your Visit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            First time seeing a gynecologist? Or just switching doctors? Here's exactly what happens, step by step, so there are no surprises.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.title} className="relative flex gap-5 sm:gap-6 pb-10 last:pb-0 animate-fade-up" style={{ animationDelay: `${index * 0.08}s` }}>
              {/* Connector line */}
              {index !== steps.length - 1 && (
                <span className="absolute left-6 sm:left-7 top-14 bottom-0 w-px bg-gradient-to-b from-primary/30 to-primary/5" />
              )}

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{item.step}</span>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
