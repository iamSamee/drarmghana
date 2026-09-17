const services = [
  { emoji: "🏥", label: "General Gynaecological Consultation", desc: "For general women's health concerns, routine checkups and specialist advice in Islamabad." },
  { emoji: "🤰", label: "Pregnancy & Antenatal Care", desc: "Routine pregnancy checkups, early pregnancy guidance and maternity care." },
  { emoji: "📊", label: "Ultrasound & Diagnostic Imaging", desc: "Pelvic and obstetric ultrasound for accurate diagnosis and monitoring." },
  { emoji: "💊", label: "Women's Wellness Consultation", desc: "Preventive care, general wellness advice and women's health screenings." },
  { emoji: "🔐", label: "Private & Confidential Consultation", desc: "All consultations handled with complete discretion and privacy." },
  { emoji: "📱", label: "Online Gynaecological Consultation", desc: "Consult Dr. Armghana via WhatsApp video or audio call from anywhere." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Trusted <span className="text-gradient">Gynae Health Clinic</span> — Islamabad
          </h2>
          <p className="text-muted-foreground">
            Professional and confidential gynecology services in Islamabad. Dr. Armghana Ali — best gyno in Islamabad — provides expert women's health care at her gynae clinic in G-13 and G-11.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-xl flex-shrink-0 mt-0.5">{s.emoji}</span>
              <div>
                <div className="text-sm font-semibold text-foreground leading-snug">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
