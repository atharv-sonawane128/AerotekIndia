import { Award, MapPin, Palette, Truck } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      title: "Since 2011",
      subtitle: "Manufacturer & supplier",
      icon: Award,
    },
    {
      title: "Based in Nashik MIDC",
      subtitle: "NICE, MIDC Satpur",
      icon: MapPin,
    },
    {
      title: "Custom RAL Shade Matching",
      subtitle: "Aerolac – our own brand",
      icon: Palette,
    },
    {
      title: "Quick Local Delivery",
      subtitle: "Nashik & surrounding MIDCs",
      icon: Truck,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

