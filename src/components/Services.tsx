import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.08),transparent_30%)]" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4 md:mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 leading-tight px-4">
            Comprehensive <span className="text-gradient-shimmer">Women's Health</span> Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Providing a full spectrum of women's health care, tailored to your unique needs with expertise and compassion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_12px_40px_rgba(16,38,72,0.16)]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0  transition-all duration-500 group-hover:bg-pink-500/0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/75 group-hover:via-black/55" />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white transition-transform duration-500 group-hover:scale-105">
                <h3 className="text-xl md:text-2xl font-display font-bold drop-shadow-lg leading-tight transition-all duration-300 group-hover:tracking-tight group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-[0.08em] text-white/80 group-hover:text-white">
                  {service.subtitle}
                </p>
              </div>
              <span className="absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:border-white/30 rounded-2xl md:rounded-3xl" />
              <span className="absolute inset-0 scale-90 rounded-3xl bg-white/5 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
