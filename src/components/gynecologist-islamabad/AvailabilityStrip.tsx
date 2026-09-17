import { Zap, CalendarCheck, HeartHandshake, AlertCircle, Video } from "lucide-react";

const items = [
  { icon: Zap, label: "Best Gynecologist in Islamabad" },
  { icon: CalendarCheck, label: "Open 7 Days a Week" },
  { icon: HeartHandshake, label: "Private Consultation Available" },
  { icon: AlertCircle, label: "Emergency Cases Accepted" },
  { icon: Video, label: "Online Gynae Consultation" },
];

export default function AvailabilityStrip() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <item.icon className="w-4 h-4 text-primary-foreground/80" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
