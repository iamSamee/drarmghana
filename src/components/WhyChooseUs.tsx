import { Sparkles, Award, MapPin, Video, HeartHandshake, Tag, Ear } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Qualified & Trusted",
    description:
      "MBBS, FCPS qualified, with a 4.7-star rating from 57+ verified patients. Real credentials, real reviews — not just a claim on a website.",
  },
  {
    icon: MapPin,
    title: "Two Convenient Locations",
    description:
      "Visit at Hyaat International Hospital (G-13) or Saeed International Hospital (G-11) — whichever is closer to you.",
  },
  {
    icon: Video,
    title: "Online Consultations Available",
    description:
      "Can't make it to the clinic? Book a video or phone consultation from anywhere in Islamabad or Rawalpindi.",
  },
  {
    icon: HeartHandshake,
    title: "One Doctor, Every Stage of Care",
    description:
      "From your first period to pregnancy and menopause, get consistent care from one gynecologist instead of starting over with someone new each time.",
  },
  {
    icon: Tag,
    title: "Clear, Upfront Pricing",
    description:
      "Consultation fee is Rs. 2000 — know it before you book, with no hidden charges and no surprises at the clinic.",
  },
  {
    icon: Ear,
    title: "A Doctor Who Actually Listens",
    description:
      "No 5-minute appointments. Dr. Armghana Ali takes the time to understand your concern properly before deciding on next steps.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-secondary/30 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Why Choose Dr. Armghana Ali as Your <span className="text-gradient-shimmer">Gynecologist in Islamabad</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With so many gynecologists in Islamabad, here's what actually sets a visit with Dr. Armghana Ali apart.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 animate-fade-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-snug">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
