import { MapPin, Navigation, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Location = () => {
  const [activeMap, setActiveMap] = useState<"hyaat" | "saeed">("hyaat");
  const directionsUrl = "https://www.google.com/maps/dir//Clinic+No+3,+Dr.+Armghana+Ali+(Gynecologist),+Hyaat+International+Hospital,+G-13%2F1+G+13%2F1+G-13,+Islamabad,+46000,+Pakistan/@33.6446019,72.9565512,16.77z/data=!4m17!1m8!3m7!1s0x38df971a5b3747f7:0x305125c32665363c!2sDr.+Armghana+Ali+(Gynecologist)!8m2!3d33.64646!4d72.9619322!15sCh1kciBhcm1naGFuYSBhbGkgZ3luYWVjb2xvZ2lzdFofIh1kciBhcm1naGFuYSBhbGkgZ3luYWVjb2xvZ2lzdJIBDGd5bmVjb2xvZ2lzdJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyc3hZVlJ0VW5wVldGSlVVVlJDUm1KSFNtOVRWMmhGWTFVNE1GUXdSUkFC4AEA-gEECAAQJA!16s%2Fg%2F11v3t49_63!4m7!1m0!1m5!1m1!1s0x38df971a5b3747f7:0x305125c32665363c!2m2!1d72.9619322!2d33.64646?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";
  const saeedMapsUrl = "https://maps.app.goo.gl/UASYkt3LfSt8hEBw6";

  const hyaatEmbedSrc = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dr%20Armghana%20Ali,%20Clinic%20No%203,%20Hyaat%20International%20Hospital,%20G-13/1%20G%2013/1%20G-13,%20Islamabad,%2046000,%20Pakistan+(Dr%20Armghana%20Ali)&t=&z=14&ie=UTF8&iwloc=B&output=embed";
  const saeedEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13282.69991986938!2d72.9938543948399!3d33.66558257869913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95111180fb99%3A0x8604f9ea7f063187!2sSaeed%20International%20Hospital%20G-11%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1772447286393!5m2!1sen!2s";

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
            <span className="text-sm font-medium text-primary">Clinic Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Gynecologist <span className="text-gradient">Near You</span> in Islamabad
          </h2>
          <p className="text-muted-foreground text-lg">
            Looking for a gynecologist near you? Dr. Armghana Ali has two conveniently located clinics in Islamabad — G-13 and G-11 Markaz — easily accessible from all major sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map Embed with tab switcher */}
          <div className="space-y-3">
            {/* Tabs */}
            <div className="flex rounded-xl overflow-hidden border border-border/50 w-fit">
              <button
                onClick={() => setActiveMap("hyaat")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeMap === "hyaat"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                Hyaat International Hospital
              </button>
              <button
                onClick={() => setActiveMap("saeed")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeMap === "saeed"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                Saeed International Hospital
              </button>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-card h-[400px] lg:h-[500px] relative">
              <iframe
                src={hyaatEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, display: activeMap === "hyaat" ? "block" : "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hyaat Hospital Location"
              />
              <iframe
                src={saeedEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, display: activeMap === "saeed" ? "block" : "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saeed Hospital Location"
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {/* Hyaat Address Card */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Hyaat International Hospital</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Clinic No 3, G-13/1, Islamabad<br />
                    <span className="text-primary font-medium">3:00 PM – 6:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Saeed Address Card */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Saeed International Hospital</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    G-11 Markaz, Islamabad<br />
                    <span className="text-primary font-medium">6:00 PM – 9:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Areas Served Card */}
            <div className="p-6 rounded-2xl bg-primary-light border border-primary/20 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-3">Gynecologist Near Me — Areas Served</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Serving patients from across Islamabad — no need to travel far to find a qualified gynae doctor near you.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["G-11", "G-12", "G-13", "G-14", "G-15", "F-7", "F-8", "F-10", "F-11", "I-8", "I-9", "I-10", "E-11", "DHA Phase 2"].map((area) => (
                      <span key={area} className="px-3 py-1 rounded-full bg-white/70 border border-primary/20 text-xs font-semibold text-primary">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            {/* <div className="p-6 rounded-2xl bg-primary-light border border-primary/20">
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">How to Find Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Located inside Hyaat International Hospital
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Clinic No. 3 on the ground floor
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Ample parking available at the hospital
                </li>
              </ul>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5" />
                  Hyaat Hospital Directions
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href={saeedMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5" />
                  Saeed Hospital Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
