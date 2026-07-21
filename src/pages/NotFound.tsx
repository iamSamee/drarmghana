import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Home, MapPin } from "lucide-react";

const PHONE_HREF = "tel:+923082070008";
const PHONE_DISPLAY = "0308 2070008";
const WA_HREF = "https://wa.me/923082070008";

const WAIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 font-body relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(340,55%,14%) 0%, hsl(335,50%,20%) 40%, hsl(322,44%,25%) 75%, hsl(310,40%,20%) 100%)",
      }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(330,65%,48%) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

        {/* Logo */}
        <img src="/logo.webp" alt="Dr. Armghana Ali" className="h-20 w-auto rounded-full mb-6 ring-4 ring-white/20 shadow-2xl" />

        {/* 404 */}
        <p className="text-[7rem] leading-none font-display font-bold text-white/10 select-none -mb-4">
          404
        </p>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-white/65 text-sm md:text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. You can go back to the homepage or reach Dr. Armghana Ali directly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <a
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[hsl(340,55%,18%)] font-bold text-sm hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-lg flex-1"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </a>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b857] hover:-translate-y-0.5 transition-all shadow-lg flex-1"
          >
            <WAIcon />
            WhatsApp Us
          </a>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-3 my-6 w-full max-w-sm">
          <div className="flex-1 h-px bg-white/15" />
          <span className="text-white/30 text-xs">or</span>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <a href={PHONE_HREF} className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors font-medium">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <span className="text-white/20">·</span>
          <a href="/gynecologist-islamabad" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors font-medium">
            <MapPin className="w-4 h-4" /> Book Appointment
          </a>
        </div>

        <p className="text-white/20 text-xs mt-10">
          © {new Date().getFullYear()} Dr. Armghana Ali — MBBS, FCPS · Gynecologist, Islamabad
        </p>
      </div>
    </div>
  );
};

export default NotFound;
