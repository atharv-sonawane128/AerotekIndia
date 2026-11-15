"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, SprayCan } from "lucide-react";
import { popularRalShades } from "@/data/ralShades";

export default function RalVisualizer({ onEnquireShade }) {
  // Default to RAL 7035 (Light Grey) as shown in the screenshot
  const [selectedShade, setSelectedShade] = useState(popularRalShades[1]);

  const features = [
    "Exact match to RAL shades and OEM colour swatches",
    "High-gloss, fast-curing acrylic film",
    "Weatherproof & UV resistant finish",
    "Ideal for electrical panels & powder-coat correction",
  ];

  return (
    <section id="ral-visualizer" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
              OWN BRAND · AEROLAC
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aerotek-navy tracking-tight leading-tight">
              Custom RAL shade matching, in a spray can
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Send us your RAL code or a physical swatch — we fill Aerolac acrylic aerosols matched to your powder-coated panels, enclosures and machinery. Invisible touch-ups, straight from Nashik.
            </p>

            {/* Checklist with Green Checkmarks */}
            <ul className="mt-6 space-y-3 w-full">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-emerald-500/30 bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Dynamic Enquire Button */}
            <div className="mt-8">
              <button
                onClick={() => onEnquireShade(selectedShade)}
                className="inline-flex items-center gap-2 bg-aerotek-orange hover:bg-aerotek-orange-hover text-white font-semibold px-6 py-3.5 rounded-full shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all text-sm group cursor-pointer"
              >
                <span>Enquire for {selectedShade.code}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Visualizer Widget */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-200/50">
              {/* Card Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <span className="text-[11px] font-mono tracking-widest font-bold text-slate-500 uppercase">
                  AEROLAC SHADE VISUALISER
                </span>
                <div className="text-aerotek-orange">
                  <SprayCan className="w-4 h-4" />
                </div>
              </div>

              {/* Large Display Swatch */}
              <div
                className="w-full h-56 sm:h-64 rounded-2xl p-5 flex flex-col justify-end transition-all duration-300 metallic-sheen shadow-inner border border-slate-200/80 relative"
                style={{ backgroundColor: selectedShade.hex }}
              >
                {/* Code & Name Badge at bottom left */}
                <div className="relative z-10 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg inline-block self-start border border-white/20">
                  <span className="text-xs sm:text-sm font-mono font-black tracking-widest text-white uppercase drop-shadow-sm">
                    {selectedShade.code} · {selectedShade.name}
                  </span>
                </div>
              </div>

              {/* 10 Popular Swatches Palette */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-1">
                {popularRalShades.map((shade) => {
                  const isSelected = selectedShade.code === shade.code;
                  return (
                    <button
                      key={shade.code}
                      onClick={() => setSelectedShade(shade)}
                      title={`${shade.code} (${shade.name})`}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all transform ${
                        isSelected
                          ? "ring-4 ring-aerotek-orange/30 scale-110 border-aerotek-orange shadow-md"
                          : "border-slate-300/80 hover:scale-105 hover:border-slate-400"
                      }`}
                      style={{ backgroundColor: shade.hex }}
                      aria-label={`Select ${shade.code} ${shade.name}`}
                    />
                  );
                })}
              </div>

              {/* Helper text underneath */}
              <p className="mt-4 text-xs text-slate-400 text-center leading-normal">
                Tap a swatch to preview the shade. We match any RAL — the panel shows the 10 most requested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

