export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "pregnancy-care",
    title: "Pregnancy Care",
    subtitle: "Prenatal guidance & monitoring",
    description:
      "Comprehensive prenatal care with regular checkups, health monitoring, and guidance throughout every trimester.",
    features: ["Prenatal checkups", "Fetal monitoring", "Nutrition & lifestyle guidance", "Birth planning"],
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=75",
  },
  {
    slug: "normal-delivery-c-section",
    title: "Normal Delivery & C-Section",
    subtitle: "Safe & comfortable birthing",
    description:
      "Expert delivery services focusing on safety, comfort, and informed choices across both normal and cesarean births.",
    features: ["Labor support", "C-section expertise", "Pain management options", "Post-delivery care"],
    image: "/normal_c_section.jpeg",
  },
  {
    slug: "laparoscopic-and-complex-surgeries",
    title: "Laparoscopic and complex surgeries",
    subtitle: "Minimally invasive solutions",
    description:
      "Complete women's health services including routine examinations, disease prevention, and personalized treatment plans.",
    features: ["Routine exams", "Screenings & prevention", "Treatment plans", "Wellness counseling"],
    image: "/Laparo.jpeg",
  },
  {
    slug: "pcos-treatment",
    title: "PCOS Treatment",
    subtitle: "Hormonal balance support",
    description:
      "Specialized diagnosis and treatment for Polycystic Ovary Syndrome with tailored medical and lifestyle management.",
    features: ["Comprehensive diagnosis", "Hormone management", "Lifestyle plans", "Follow-up monitoring"],
    image: "/pcos.jpeg",
  },
  {
    slug: "ultrasound-services",
    title: "Ultrasound Services",
    subtitle: "Advanced imaging & scans",
    description:
      "State-of-the-art ultrasound imaging for pregnancy monitoring, gynecological assessment, and early detection.",
    features: ["Pregnancy scans", "Diagnostic imaging", "Growth & health tracking", "Gender reveal options"],
    image: "/ultrasound.webp",
  },
  {
    slug: "infertility-consultation",
    title: "Infertility Consultation",
    subtitle: "Fertility solutions expert",
    description:
      "Comprehensive evaluation, counseling, and treatment options for couples facing fertility challenges.",
    features: ["Fertility assessment", "Treatment pathways", "Counseling support", "Personalized plans"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=75",
  },
];
