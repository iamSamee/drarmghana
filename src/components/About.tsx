import { Award, Heart, Shield, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const useCountUp = (end: number, duration: number = 3000) => {
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

const credentials = [
  {
    icon: Award,
    text: "MBBS & FCPS Obstetrics & Gynecology",
    color: "text-primary"
  },
  {
    icon: Star,
    text: "12+ years clinical experience",
    color: "text-primary"
  },
  {
    icon: Shield,
    text: "High-risk pregnancy specialist",
    color: "text-primary"
  },
  {
    icon: Heart,
    text: "Comprehensive women's care",
    color: "text-primary"
  }
];

const StatsRow = () => {
  const years = useCountUp(12, 2000);
  const patients = useCountUp(800, 2000);

  return (
    <div className="grid grid-cols-3 gap-3 pt-4">
      <div ref={years.ref} className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-11 h-11 mx-auto mb-2 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
          <Award className="w-5 h-5 text-primary-foreground" />
        </div>
        <p className="text-2xl font-display font-bold text-gradient mb-0.5">{years.count}+</p>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Years Exp</p>
      </div>
      <div ref={patients.ref} className="text-center p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-11 h-11 mx-auto mb-2 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
          <Heart className="w-5 h-5 text-accent-foreground" />
        </div>
        <p className="text-2xl font-display font-bold text-gradient mb-0.5">{patients.count}+</p>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Patients</p>
      </div>
      <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-11 h-11 mx-auto mb-2 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <p className="text-2xl font-display font-bold text-gradient mb-0.5">FCPS</p>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Qualified</p>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Image Side - Takes 50% */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[3/4] bg-gradient-to-br from-accent/20 to-primary-light/20 backdrop-blur-sm border-2 border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-light opacity-10" />
              <img
                src="/10.webp?v=1"
                alt="Dr. Armghana - Professional Photo"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-accent to-primary-light" style={{ display: 'none' }}>
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <span className="text-4xl font-display font-bold text-primary-foreground">A</span>
                  </div>
                  <p className="text-muted-foreground">Professional Photo</p>
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Decorative border */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border-2 border-primary/20" />

            {/* Floating Certification Badge */}
            <div className="absolute -bottom-4 -right-4 bg-card/95 backdrop-blur-md rounded-2xl p-5 shadow-card border-2 border-primary/20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl text-gradient">FCPS</p>
                  <p className="text-xs text-muted-foreground">Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side - Takes 50% */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About Dr. Armghana</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                Islamabad's Trusted <span className="text-gradient-shimmer">Gynecologist</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Providing compassionate, evidence-based gynecological care for women at every stage of life
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed">
              Dr. Armghana Ali is a trusted gynecologist in Islamabad with extensive experience in Obstetrics and Gynecology. As a qualified lady doctor (MBBS, FCPS), she combines clinical excellence with a patient-centered approach that prioritizes comfort, clear communication, and personalized treatment plans.
            </p>

            {/* Credentials Grid - 2x2 */}
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform ${credential.color}`}>
                    <credential.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{credential.text}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <StatsRow />
          </div>
        </div>
      </div>
    </section>
  );
};
