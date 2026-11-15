import { CheckCircle2, Truck, Palette, IndianRupee } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Consistent Quality",
      description: "Carefully formulated, quality-checked batches you can trust on the shop floor.",
      icon: CheckCircle2,
    },
    {
      title: "Quick Delivery",
      description: "Fast-moving pack sizes kept in stock, with quick local delivery around Nashik.",
      icon: Truck,
    },
    {
      title: "Customisation",
      description: "Custom RAL shade matching and special formulations for OEM requirements.",
      icon: Palette,
    },
    {
      title: "Direct Factory Pricing",
      description: "Buy straight from the manufacturer in MIDC Satpur – no middlemen.",
      icon: IndianRupee,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            WHY AEROTEK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
            Why choose us
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
              >
                {/* Dark Blue Rounded Icon Badge matching screenshot */}
                <div className="w-12 h-12 rounded-xl bg-aerotek-navy text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 group-hover:bg-aerotek-orange transition-all">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <h3 className="text-base font-bold text-aerotek-navy mb-2">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

