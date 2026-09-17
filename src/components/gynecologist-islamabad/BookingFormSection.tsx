import { useState } from "react";
import { Phone, Navigation, CheckCircle2, Shield, Building2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PHONE_DISPLAY, PHONE_HREF, WA_BASE, WA_HREF, DIRECTIONS_URL, WAIcon } from "./shared";
import { trackPhoneCall, trackWhatsAppClick, trackFormSubmission } from "@/utils/tracking";

const EMAILJS_SERVICE_ID = "service_r7ol07e";
const EMAILJS_TEMPLATE_ID = "template_17nfi76";
const EMAILJS_PUBLIC_KEY = "AyyQ1V38DQCt3U8yH";

const consultationTypes = [
  { id: "hyaat", label: "Hyaat International Hospital", sublabel: "G-13/1, Islamabad  •  4:00 – 7:00 PM", icon: Building2 },
  { id: "saeed", label: "Saeed International Hospital", sublabel: "G-11 Markaz, Islamabad  •  7:00 – 9:00 PM", icon: Building2 },
  { id: "online", label: "Online Consultation", sublabel: "Video / Audio call — Anytime", icon: Video },
];

export default function BookingFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", consultationType: "hyaat", concern: "" });

  const selectedType = consultationTypes.find((t) => t.id === formData.consultationType);
  const waMessage = encodeURIComponent(
    `Hello Dr. Armghana, I'd like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${selectedType?.label}${formData.concern ? `\nConcern: ${formData.concern}` : ""}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name, from_phone: formData.phone,
        service: selectedType?.label, message: formData.concern || "No additional concern",
        to_email: "armghanaa@gmail.com",
      }, EMAILJS_PUBLIC_KEY);
      trackFormSubmission({ name: formData.name, phone: formData.phone, service: selectedType?.label ?? "" });
      toast({ title: "Appointment Request Sent!", description: "We'll confirm your slot shortly." });
      setFormData({ name: "", phone: "", consultationType: "hyaat", concern: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please call or WhatsApp us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book" className="py-14 bg-gradient-to-b from-background to-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
            <span className="text-sm font-semibold text-primary">Book Appointment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Same Day Slots — <span className="text-gradient">Book Now</span>
          </h2>
          <p className="text-muted-foreground">Fill in your details and we'll confirm your slot with Dr. Armghana Ali within the hour.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <a href={PHONE_HREF} onClick={trackPhoneCall}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call for Appointment</p>
                <p className="font-display font-bold text-foreground">{PHONE_DISPLAY}</p>
                <p className="text-xs text-primary font-medium">Available Mon–Sun, 4PM–9PM</p>
              </div>
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <WAIcon className="w-6 h-6 fill-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp Appointment</p>
                <p className="font-display font-bold text-foreground">{PHONE_DISPLAY}</p>
                <p className="text-xs text-[#25D366] font-medium">Fastest Response</p>
              </div>
            </a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Walk-in Welcome</p>
                <p className="font-display font-bold text-foreground">Get Directions to Clinic</p>
                <p className="text-xs text-blue-600 font-medium">Hyaat Hospital, G-13/1</p>
              </div>
            </a>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-light to-accent/20 border border-primary/20 space-y-3">
              <h3 className="font-display font-semibold text-sm text-foreground">Why Book Today?</h3>
              {["Same-day appointments often available — confirm via WhatsApp", "Female gynecologist available for in-person and online care", "Professional and confidential women's health consultations", "Emergency gynaecological care at Hyaat Hospital, G-13"].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50">
            <div className="gradient-primary p-6">
              <h3 className="font-display font-bold text-2xl text-white">Book Consultation</h3>
              <p className="text-sm text-white/80 mt-1">Dr. Armghana Ali · Gynecologist · G-13 Islamabad</p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <div className="flex h-12 rounded-md border border-input bg-background overflow-hidden ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                    <div className="flex items-center gap-1.5 px-3 border-r border-input bg-muted/50 select-none flex-shrink-0">
                      <span className="text-base leading-none">🇵🇰</span>
                      <span className="text-sm font-semibold text-foreground/80">+92</span>
                    </div>
                    <input type="tel" placeholder="3XX XXXXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="flex-1 px-3 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Consultation Type</label>
                <div className="flex flex-col gap-2">
                  {consultationTypes.map((type) => {
                    const isSelected = formData.consultationType === type.id;
                    return (
                      <button key={type.id} type="button" onClick={() => setFormData({ ...formData, consultationType: type.id })}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden ${isSelected ? "gradient-primary text-primary-foreground shadow-button scale-[1.01]" : "bg-card border border-border/50 text-foreground hover:border-primary/40 hover:shadow-soft"}`}>
                        {isSelected && <CheckCircle2 className="absolute top-2.5 right-3 w-4 h-4 text-white/90" />}
                        <div className="flex items-center gap-3">
                          <type.icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-white" : "text-primary"}`} />
                          <div>
                            <p className="text-sm font-bold leading-tight pr-6">{type.label}</p>
                            <p className={`text-xs mt-0.5 font-medium ${isSelected ? "text-white/75" : "text-primary/70"}`}>{type.sublabel}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Concern <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Textarea placeholder="Describe your symptoms, preferred time, or any questions..." value={formData.concern} onChange={(e) => setFormData({ ...formData, concern: e.target.value.slice(0, 150) })} className="min-h-[80px] resize-none pb-6" maxLength={150} />
                  <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">{formData.concern.length}/150</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" size="lg" className="flex-1 gradient-shimmer shadow-button hover:opacity-90 hover:-translate-y-0.5 transition-all text-primary-foreground" disabled={isSubmitting}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
                <a href={`${WA_BASE}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}
                  className="w-14 h-12 bg-[#25D366] hover:bg-[#20b857] rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <WAIcon className="w-5 h-5 fill-white" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5" />
                Your information is private &amp; secure
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
