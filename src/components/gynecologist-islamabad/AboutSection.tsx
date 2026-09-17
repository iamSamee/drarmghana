import { CheckCircle2, Users, Award, Building, Star } from "lucide-react";

const badges = ["Best Gynecologist in Islamabad", "Top Gynae — MBBS, FCPS", "Expert Pregnancy Care Specialist", "Women's Health Specialist", "Top Rated Gynecologist — 4.8 ⭐", "Private Consultation Available", "Trusted Gynae Clinic — G-13 & G-11", "Online Gynae Consultation Available"];

const stats = [
  { icon: Users, value: "800+", label: "Patients Treated", sub: "& counting" },
  { icon: Award, value: "12+", label: "Years Experience", sub: "MBBS · FCPS" },
  { icon: Building, value: "2", label: "Clinic Locations", sub: "G-13 & G-11" },
  { icon: Star, value: "4.8", label: "Google Rating", sub: "117 reviews" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light">
              <span className="text-sm font-semibold text-primary">About Dr. Armghana Ali</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
              Best Female Gynecologist &amp; <span className="text-gradient">Lady Doctor</span> in Islamabad
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Looking for the best gynecologist in Islamabad? Dr. Armghana Ali (MBBS, FCPS) is a top gynae and experienced gyno doctor with 12+ years of clinical experience — a trusted women's health specialist and lady doctor in Islamabad practicing at Hyaat International Hospital (G-13/1) and Saeed International Hospital (G-11 Markaz).
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Her trusted gynae clinic offers professional and confidential gynecology services in Islamabad — reliable consultation with an experienced lady doctor, with private consultation available at both clinic locations.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {badges.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
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
  );
}
