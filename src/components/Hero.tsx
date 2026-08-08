import { Button } from "@/components/ui/button";
import { Users, Clock, Award, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackWhatsAppClick, trackPhoneCall } from "@/utils/tracking";


const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const stats = [
  { icon: Users, value: 800, label: "Happy Patients", suffix: "+", animated: true },
  { icon: Award, value: "12", label: "Years Experience", suffix: "+", animated: false },
  { icon: Clock, value: "10-15", label: "Min Wait Time", suffix: "", animated: false },
];

const StatCard = ({ icon: Icon, value, label, suffix, animated }: { icon: React.ElementType; value: number | string; label: string; suffix: string; animated: boolean }) => {
  const counter = useCountUp(typeof value === 'number' ? value : 0, 2000);

  return (
    <div ref={animated ? counter.ref : undefined} className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="font-display font-bold text-xl text-foreground">
          {animated && typeof value === 'number' ? counter.count : value}{suffix}
        </p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <>
      {/* Desktop Hero - Hidden on Mobile */}
      <section id="home" className="hidden md:block relative min-h-screen gradient-hero overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-10 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-5">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
                <span className="text-primary">✅</span>
                <span className="text-sm font-medium text-primary">Best Gynecologist in Islamabad</span>
              </div> */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-primary/20">
                <span className="text-sm text-primary">⭐</span>
                <span className="text-xs sm:text-sm font-medium text-primary">Top Rated Gynecologist in Islamabad | 4.7+ Rating</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight pb-2">
                <span className="block animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  Best Gynecologist in Islamabad
                </span>
                <span className="block text-gradient-shimmer animate-fade-up" style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}>
                  Dr. Armghana Ali (MBBS, FCPS)
                </span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed" style={{ animationDelay: "0.5s" }}>
                Looking for the best gynecologist in Islamabad? Dr. Armghana Ali brings 12+ years of experience in gynecology and obstetrics, helping women through pregnancy, PCOS, irregular periods, fertility concerns, and everyday women's health issues. Over 800+ women across Islamabad and Rawalpindi have chosen her for clear guidance, careful diagnosis, and honest treatment plans.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                She sees patients at Hyaat International Hospital (G-13) and Saeed International Hospital (G-11), with online consultations also available.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="xl" asChild className="gradient-shimmer shadow-button hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5">
                <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" className="text-primary-foreground" onClick={trackWhatsAppClick}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Appointment on WhatsApp
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild className="hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <a href="tel:+923082070008" onClick={trackPhoneCall}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  animated={stat.animated}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in lg:block" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src="/10.webp"
                  alt="Dr. Armghana Ali — Best Gynecologist in Islamabad"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-primary-light to-accent" style={{ display: 'none' }}>
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6">
                      <span className="text-6xl font-display font-bold text-primary-foreground">A</span>
                    </div>
                    <p className="text-muted-foreground">Doctor's Photo</p>
                    <p className="text-sm text-muted-foreground/70">Place image at /public/doctor-photo.png</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Mobile Hero - Hidden on Desktop */}
      <section id="home-mobile" className="block md:hidden relative h-[calc(100dvh-6.5rem)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/1.webp"
            alt="Dr. Armghana Ali — Gynecologist in Islamabad"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-6">
          <div className="space-y-3 text-white max-w-[75%]">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-xs">⭐</span>
                <span className="text-xs font-medium">Top Rated Gynecologist in Islamabad | 4.7+ Rating</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight text-white pb-2">
                Best Gynecologist in Islamabad
                <span className="block text-white/90 mt-1">Dr. Armghana Ali (MBBS, FCPS)</span>
              </h1>
              <p className="text-sm text-white/80 leading-relaxed">
                12+ years of experience in gynecology &amp; obstetrics — pregnancy, PCOS, irregular periods, fertility &amp; more.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Sees patients at Hyaat Hospital (G-13) &amp; Saeed Hospital (G-11), with online consultations also available.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Button size="lg" asChild className="gradient-shimmer shadow-button hover:opacity-90 hover:shadow-lg">
                <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" className="text-primary-foreground" onClick={trackWhatsAppClick}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Appointment on WhatsApp
                </a>
              </Button>
              <Button size="lg" asChild className="bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 hover:shadow-lg transition-all">
                <a href="tel:+923082070008" onClick={trackPhoneCall}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
