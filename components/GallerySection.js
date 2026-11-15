"use client";

import { useState } from "react";
import { Sparkles, ZoomIn, Check } from "lucide-react";

export default function GallerySection({ onOpenPhotoGuide }) {
  const [filter, setFilter] = useState("all");
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "welding",
      title: "Anti-Spatter Welding Spray (400ml & 200ml)",
      subtitle: "Prevents spatter build-up on nozzles and workpieces",
      filename: "Anti-Spatter Welding Spray.jpeg",
      gradient: "from-amber-600/30 to-orange-900/60",
      tag: "Welding Care",
    },
    {
      id: 2,
      category: "galvanizing",
      title: "Cold Galvanizing Spray (400ml)",
      subtitle: "Sacrificial zinc coating against rust & corrosion on steel beams",
      filename: "Cold Galvanizing Spray.jpeg",
      gradient: "from-emerald-700/30 to-slate-900/60",
      tag: "Corrosion Protection",
    },
    {
      id: 3,
      category: "aerolac",
      title: "Touch Up Spray Paint (250ml)",
      subtitle: "Precisely shade-matched for automotive & powder-coat repair",
      filename: "Touch Up Spray Paint.jpeg",
      gradient: "from-sky-700/30 to-slate-900/60",
      tag: "Aerolac RAL",
    },
    {
      id: 4,
      category: "primers",
      title: "Red Oxide Metal Primer (20 Litre)",
      subtitle: "High adhesion rust inhibitor on fabricated metal structures",
      filename: "Red Oxide Metal Primer.jpeg",
      gradient: "from-red-800/30 to-stone-900/60",
      tag: "Primers",
    },
    {
      id: 5,
      category: "galvanizing",
      title: "Zinc Rich Aerosol Spray (400ml)",
      subtitle: "High zinc content sacrificial cathodic protection",
      filename: "Zinc Rich Aerosol Spray.jpeg",
      gradient: "from-indigo-800/30 to-slate-900/60",
      tag: "Zinc Rich",
    },
    {
      id: 6,
      category: "release",
      title: "Silicone Aerosol Spray (400ml)",
      subtitle: "General industrial multi-surface lubricant & protectant",
      filename: "Silicon Spray.jpeg",
      gradient: "from-teal-800/30 to-slate-900/60",
      tag: "Silicone & Release",
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
              APPLICATIONS &amp; FACILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
              Workshop Gallery
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Real shop-floor applications across welding, galvanizing touch-ups, and custom Aerolac RAL matching.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPhotoGuide}
              className="text-xs font-semibold text-aerotek-orange bg-white border border-orange-200 hover:bg-orange-50 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>How to add your photos</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: "all", label: "All Photos" },
            { id: "welding", label: "Welding Care" },
            { id: "galvanizing", label: "Galvanizing & Zinc" },
            { id: "aerolac", label: "Aerolac RAL" },
            { id: "primers", label: "Primers" },
            { id: "factory", label: "Factory & Lab" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                filter === btn.id
                  ? "bg-aerotek-navy text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[260px] flex flex-col justify-end p-6 cursor-pointer"
              onClick={() => setActivePhoto(item)}
            >
              {/* Background fallback visual representation */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-500`}
              />

              {/* Real image if user drops it into public/images/ */}
              <img
                src={`/images/${item.filename}`}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Dark overlay gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Tag Pill */}
              <div className="relative z-10 self-start mb-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="text-lg font-bold leading-snug group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Filename: {item.filename}</span>
                  <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-2xl w-full p-6 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-aerotek-orange uppercase tracking-wider">
                  {activePhoto.tag}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <div className="py-6 flex flex-col items-center">
              <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center border border-slate-800 relative overflow-hidden">
                <img
                  src={`/images/${activePhoto.filename}`}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="text-center p-6 text-slate-400">
                  <p className="text-sm font-semibold text-slate-300">
                    Image: public/images/{activePhoto.filename}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Save your actual workshop or application photograph with this filename to replace this view.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 text-center max-w-md">
                {activePhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

