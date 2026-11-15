import { Flame, Car, Cog, SprayCan, Zap, Wrench } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Welding & Fabrication",
      icon: Flame,
      highlight: false,
    },
    {
      name: "Automotive",
      icon: Car,
      highlight: false,
    },
    {
      name: "Engineering / OEM",
      icon: Cog,
      highlight: false,
    },
    {
      name: "Powder Coating",
      icon: SprayCan,
      highlight: false,
    },
    {
      name: "Electrical",
      icon: Zap,
      highlight: false,
    },
    {
      name: "General Maintenance",
      icon: Wrench,
      highlight: true, // Special orange highlight in the design!
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            WHERE OUR SPRAYS WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
            Industries we serve
          </h2>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex items-center gap-4 group ${
                  item.highlight
                    ? "bg-white border-aerotek-orange/80 shadow-md ring-1 ring-aerotek-orange/20"
                    : "bg-white border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Icon Box */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                    item.highlight
                      ? "bg-aerotek-orange text-white shadow-sm"
                      : "bg-slate-50 border border-slate-100 text-slate-700 group-hover:text-aerotek-navy group-hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <h3 className="text-base font-bold text-aerotek-navy">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

