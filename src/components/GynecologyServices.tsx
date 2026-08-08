import {
  Baby,
  HeartPulse,
  Users2,
  Droplets,
  Sun,
  UserRound,
  Scissors,
  ClipboardCheck,
  ShieldAlert,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const gynecologyServices = [
  {
    icon: Baby,
    title: "Pregnancy Care in Islamabad",
    description:
      "Dr. Armghana Ali guides you through every stage of pregnancy, from your first checkup to delivery. She keeps track of your health and your baby's growth at each visit, and explains things clearly along the way.",
    features: [
      "Regular checkups through all three trimesters",
      "Ultrasound and growth monitoring",
      "Guidance on diet, rest, and warning signs",
      "Delivery planning and preparation",
    ],
  },
  {
    icon: HeartPulse,
    title: "Delivery Services in Islamabad",
    description:
      "Whether it's a normal delivery or a C-section, Dr. Armghana Ali plans your delivery based on what is safest for you and your baby. Her team supports you before, during, and after birth.",
    features: [
      "Normal delivery and C-section, both handled",
      "Postnatal checkups for mother and baby",
      "Breastfeeding support after delivery",
      "Round-the-clock guidance around your due date",
    ],
  },
  {
    icon: Users2,
    title: "Fertility Treatment in Islamabad",
    description:
      "If you and your partner are struggling to conceive, Dr. Armghana Ali helps find out why and what can be done. She looks at both partners' health before suggesting a treatment plan.",
    features: [
      "Fertility check-up for both partners",
      "Ovulation tracking and hormone testing",
      "Treatment for PCOS-related infertility",
      "Simple, honest advice on next steps",
    ],
  },
  {
    icon: Droplets,
    title: "PCOS Treatment in Islamabad",
    description:
      "Irregular periods, acne, weight gain, or unwanted hair growth can be signs of PCOS. Dr. Armghana Ali checks your hormone levels and builds a treatment plan around your lifestyle, not just your test reports.",
    features: [
      "Hormone testing and diagnosis",
      "Period regulation",
      "Fertility support for women with PCOS",
      "Diet and lifestyle guidance alongside medicine",
    ],
  },
  {
    icon: Sun,
    title: "Menopause Care in Islamabad",
    description:
      "Hot flashes, mood swings, and disturbed sleep are common during menopause, but you don't have to just live with them. Dr. Armghana Ali offers care that fits your body and your stage of life.",
    features: [
      "Menopause and perimenopause assessment",
      "Hormone therapy and non-hormone options",
      "Bone health guidance",
      "Long-term follow-up care",
    ],
  },
  {
    icon: UserRound,
    title: "Adolescent Gynecology in Islamabad",
    description:
      "First periods, period pain, or hormonal acne can be confusing for young girls and their mothers. Dr. Armghana Ali offers a comfortable, judgement-free space for teenage patients.",
    features: [
      "First-visit guidance for teenage girls",
      "Irregular or painful period treatment",
      "Puberty-related concerns",
      "Parents welcome, privacy respected",
    ],
  },
  {
    icon: Scissors,
    title: "Minimally Invasive Gynecological Surgery",
    description:
      "For conditions like fibroids, ovarian cysts, or endometriosis, Dr. Armghana Ali offers surgical treatment using techniques that mean smaller cuts and faster recovery, when suitable for your case.",
    features: [
      "Laparoscopic surgery for fibroids and cysts",
      "Hysteroscopy for uterine polyps",
      "Treatment for endometriosis",
      "Surgery recommended only when truly needed",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "General Gynecology Checkups",
    description:
      "Not every visit needs to be about a problem. Dr. Armghana Ali also offers routine checkups to help you stay ahead of any issues before they start.",
    features: [
      "Yearly gynecology checkups",
      "Pap smear and screening tests",
      "Period and hormone health reviews",
      "Open discussion, no rushed appointments",
    ],
  },
  {
    icon: ShieldAlert,
    title: "High-Risk Pregnancy Care",
    description:
      "Some pregnancies need closer attention — due to age, health conditions, or past complications. Dr. Armghana Ali provides extra monitoring and care to keep both mother and baby safe.",
    features: [
      "Close monitoring for high-risk pregnancies",
      "Management of conditions like diabetes or high BP during pregnancy",
      "Coordination with specialists when needed",
      "Clear communication at every step",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Antenatal & Postnatal Care",
    description:
      "Good care doesn't stop at delivery. Dr. Armghana Ali supports you through pregnancy checkups and continues care after birth, for both your recovery and your baby's early health.",
    features: [
      "Full antenatal checkup schedule",
      "Postnatal recovery checkups",
      "Newborn care guidance",
      "Support for new mothers, physical and emotional",
    ],
  },
];

export const GynecologyServices = () => {
  return (
    <section id="gynecology-services" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Gynecology &amp; <span className="text-gradient-shimmer">Women's Health Services</span> in Islamabad
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dr. Armghana Ali offers complete gynecology and obstetric care in Islamabad, from a routine checkup to pregnancy, surgery, and everything in between. Every service below is explained in plain language during your visit, so you always know what to expect next.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
          {gynecologyServices.map((service, index) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
