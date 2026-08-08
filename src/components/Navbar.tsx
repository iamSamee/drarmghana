import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall, trackWhatsAppClick } from "@/utils/tracking";

const navLinks = [
  { to: "/", label: "Home" },
  // { to: "/#about", label: "About" },
  //{ to: "/#services", label: "Services" },
  { to: "/#practice-details", label: "Practice Details" },
  { to: "/#location", label: "Location" },
  { to: "/#reviews", label: "Reviews" },
  { to: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-primary text-primary-foreground/90">
        <div className="container mx-auto px-4 flex items-center justify-between h-10 text-xs md:text-sm">
          <span className="font-semibold tracking-wide">Timings: 3:00 to 9:00 PM</span>
          <a
            href="tel:+923082070008"
            onClick={trackPhoneCall}
            className="flex items-center gap-2 font-semibold hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+92 308 2070008</span>
          </a>
        </div>
      </div>

      <nav className="sticky top-0 left-0 right-0 z-40 bg-background/50 backdrop-blur-xl border-b border-border/30 mt-10 md:mt-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full logo overflow-hidden">
              <img src="/logo.webp" alt="Dr. Armghana Ali" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-lg md:text-xl font-semibold">
              Dr. <span className="text-gradient">Armghana Ali</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="default" asChild className="gradient-shimmer shadow-button hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5">
              <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="text-primary-foreground">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-base py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-2 gradient-shimmer shadow-button hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5" asChild>
                <a href="https://wa.me/923082070008" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="text-primary-foreground">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
      </nav>
    </>
  );
};
