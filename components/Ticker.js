export default function Ticker() {
  const items = [
    "RED OXIDE PRIMER",
    "SILICONE AEROSOL",
    "SILENCER COAT",
    "ANTI-SPATTER WELDING SPRAY",
    "ZINC RICH AEROSOL",
    "COLD GALVANIZING SPRAY",
    "AEROLAC ACRYLIC SPRAY",
    "HR BLACK 600°C",
    "ZINC CHROMATE PRIMER",
    "MOULD RELEASE SPRAY",
  ];

  return (
    <div className="w-full bg-[#EAEFF5] border-y border-slate-200/90 py-3 overflow-hidden select-none">
      <div className="ticker-track flex items-center">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4 whitespace-nowrap">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-600 uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-aerotek-orange" />
          </div>
        ))}
      </div>
    </div>
  );
}

