import { useState, useEffect } from "react";
import { X, Shield, CheckCircle2, Video, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmission, trackWhatsAppClick } from "@/utils/tracking";

const EMAILJS_SERVICE_ID = "service_r7ol07e";
const EMAILJS_TEMPLATE_ID = "template_17nfi76";
const EMAILJS_PUBLIC_KEY = "AyyQ1V38DQCt3U8yH";

const consultationTypes = [
  {
    id: "online",
    label: "Online Consultation",
    sublabel: "Video / Audio call — Anytime",
    icon: Video,
  },
  {
    id: "hyaat",
    label: "Hyaat International Hospital",
    sublabel: "G-13/1, Islamabad  •  3:00 – 6:00 PM",
    icon: Building2,
  },
  {
    id: "saeed",
    label: "Saeed International Hospital",
    sublabel: "G-11 Markaz, Islamabad  •  6:00 – 9:00 PM",
    icon: Building2,
  },
];

export const AppointmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consultationType: "online",
    concern: "",
  });

  useEffect(() => {
    const isHomepage = window.location.pathname === "/";
    if (!isHomepage) return;
    if (sessionStorage.getItem("popup_shown")) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= 0.7) {
        setIsOpen(true);
        sessionStorage.setItem("popup_shown", "1");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setIsOpen(false);

  const selectedType = consultationTypes.find(
    (t) => t.id === formData.consultationType
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Armghana, I'd like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${selectedType?.label}${formData.concern ? `\nConcern: ${formData.concern}` : ""}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          service: selectedType?.label,
          message: formData.concern || "No additional concern",
          to_email: "armghanaa@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      trackFormSubmission({
        name: formData.name,
        phone: formData.phone,
        service: selectedType?.label ?? "",
      });

      toast({
        title: "Appointment Request Sent!",
        description: "We'll get back to you shortly to confirm your appointment.",
      });

      setFormData({ name: "", phone: "", consultationType: "online", concern: "" });
      handleClose();
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-md animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto rounded-3xl">
        <div className="bg-card shadow-2xl">
          {/* Gradient Header */}
          <div className="gradient-primary p-5 relative rounded-t-3xl">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1.5 bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <h3 className="font-display font-bold text-xl text-white">Book Consultation</h3>
            <p className="text-sm text-white/80">Dr. Armghana Ali</p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <div className="flex h-11 rounded-md border border-input bg-background overflow-hidden ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                  <div className="flex items-center gap-1.5 px-3 border-r border-input bg-muted/50 select-none flex-shrink-0">
                    <span className="text-base leading-none">🇵🇰</span>
                    <span className="text-sm font-semibold text-foreground/80">+92</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="flex-1 px-3 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>

            {/* Consultation Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Consultation Type
              </label>
              <div className="flex flex-col gap-2">
                {consultationTypes.map((type) => {
                  const isSelected = formData.consultationType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: type.id })}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                        isSelected
                          ? "gradient-primary text-primary-foreground shadow-button scale-[1.01]"
                          : "bg-card border border-border/50 text-foreground hover:border-primary/40 hover:shadow-soft"
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle2 className="absolute top-2.5 right-3 w-4 h-4 text-white/90" />
                      )}
                      <div className="flex items-center gap-3">
                        <type.icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-white" : "text-primary"}`} />
                        <div>
                          <p className="text-sm font-bold leading-tight pr-6">{type.label}</p>
                          <p className={`text-xs mt-1 font-medium ${isSelected ? "text-white/75" : "text-primary/70"}`}>{type.sublabel}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Concern */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">
                Your Message{" "}
                <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Textarea
                  placeholder="Any symptoms, preferred timing, or notes..."
                  value={formData.concern}
                  onChange={(e) =>
                    setFormData({ ...formData, concern: e.target.value.slice(0, 100) })
                  }
                  className="min-h-[70px] resize-none text-sm pb-6"
                  maxLength={100}
                />
                <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                  {formData.concern.length}/100
                </span>
              </div>
            </div>

            {/* Submit + WhatsApp */}
            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1 gradient-shimmer shadow-button hover:opacity-90 hover:-translate-y-0.5 transition-all text-primary-foreground"
                disabled={isSubmitting}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
              <a
                href={`https://wa.me/923082070008?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                aria-label="Book via WhatsApp"
                className="w-12 h-10 bg-[#25D366] hover:bg-[#20b857] rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            {/* Secure badge */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              Secure
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
