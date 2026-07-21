import { Clock, Phone, Calendar, CheckCircle2, AlertCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";



export const Timings = () => {
  return (
    <section id="practice-details" className="py-10 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-light">
              <span className="text-sm font-medium text-primary">Practice Details</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Clinic Hours & <span className="text-gradient">Availability</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Armghana now practices at two Islamabad locations, making expert women's healthcare more accessible than ever. Both Hyaat & Saeed International Hospitals — call ahead to secure your slot.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-soft">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+923082070008" className="text-primary hover:underline" onClick={trackPhoneCall}>0308 2070008</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" onClick={trackWhatsAppClick}>0308 2070008</a>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-4" asChild>
              <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
          </div>

          {/* Schedule Card */}
          <div className="space-y-4">
            {/* In-Person Consultation Card — both clinics */}
            <div className="bg-card rounded-3xl p-4 lg:p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">In-Person Consultation</h3>
              </div>

              {/* Hyaat */}
              <div className="p-3 rounded-xl bg-primary/5 space-y-1">
                <p className="text-sm font-semibold text-primary">Hyaat International Hospital, G-13/1</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Monday – Sunday &nbsp; 3:00 PM – 6:00 PM</span>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Saeed */}
              <div className="p-3 rounded-xl bg-primary/5 space-y-1">
                <p className="text-sm font-semibold text-primary">Saeed International Hospital, G-11 Markaz</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Monday – Sunday &nbsp; 6:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Online Consultation Card */}
            <div className="bg-card rounded-3xl p-4 lg:p-6 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Online Consultation</h3>
                  <p className="text-sm text-muted-foreground">Video or Phone Call</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-primary/5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Schedule a remote consultation through WhatsApp video call or phone call at your convenience.</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="tel:+923082070008" onClick={trackPhoneCall}>
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Emergency Availability Card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-4 lg:p-6 border-2 border-primary/30 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Emergency Services</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Available 24/7 for emergency cases and urgent consultations at Hyaat International Hospital
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">Available Round the Clock</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Please call ahead to confirm appointment availability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
