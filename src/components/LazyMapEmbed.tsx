import { useState } from "react";
import { MapPin } from "lucide-react";

interface LazyMapEmbedProps {
  src: string;
  title: string;
  label: string;
}

// Google's embedded Maps iframe pulls in ~370KB of its own JS (places/search/
// controls libraries) as soon as it's in the DOM. Deferring it behind a click
// keeps that weight off the initial page load — the "Get Directions" button
// next to this already covers the no-JS-needed case.
export function LazyMapEmbed({ src, title, label }: LazyMapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 transition-colors hover:from-slate-200 hover:to-slate-300"
    >
      <MapPin className="w-8 h-8 text-primary" />
      <span className="font-semibold text-sm text-foreground">Tap to load map</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </button>
  );
}
