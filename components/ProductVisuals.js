"use client";

import { useState } from "react";
import { Check } from "lucide-react";

// Realistic Hero Showcase Graphic matching Screenshot 1 using the real uploaded photos
export function HeroProductShowcase() {
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      {/* If a standalone composite hero-products exists */}
      {!heroImgError && (
        <img
          src="/images/hero-products.png"
          alt="Aerotek Industrial Aerosols & Primers"
          className="hidden w-full h-auto object-contain rounded-3xl shadow-xl transition-all duration-300"
          onError={() => setHeroImgError(true)}
        />
      )}

      {/* Dynamic 3D Layered Showcase using the client's actual uploaded product photos */}
      <div className="relative bg-gradient-to-br from-slate-100/90 via-slate-50 to-orange-50/30 p-3 sm:p-5 rounded-[32px] border border-slate-200/90 shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main Hero Photo: Anti-Spatter Welding Spray can & box */}
          <div className="relative w-[75%] sm:w-[70%] z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="/images/Anti-Spatter Welding Spray.jpeg"
              alt="Aerotek Anti-Spatter Welding Spray"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Top-Right Product: Zinc Rich Aerosol Spray */}
          <div className="absolute -top-3 -right-2 sm:-top-2 sm:-right-3 w-[46%] sm:w-[42%] z-20 rounded-2xl overflow-hidden shadow-2xl border-2 border-white transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 bg-white">
            <img
              src="/images/Zinc Rich Aerosol Spray.jpeg"
              alt="Zinc Rich Aerosol Spray"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Bottom-Right Product: Red Oxide Metal Primer 20L Bucket */}
          <div className="absolute -bottom-4 -right-2 sm:-bottom-4 sm:-right-2 w-[52%] sm:w-[48%] z-30 rounded-2xl overflow-hidden shadow-2xl border-2 border-white transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 bg-white">
            <img
              src="/images/Red Oxide Metal Primer.jpeg"
              alt="Red Oxide Metal Primer 20 Litre"
              className="w-full h-auto object-cover"
            />
            <div className="bg-white/95 px-2.5 py-1 text-center border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                RED OXIDE PRIMER - 20 L
              </span>
            </div>
          </div>

          {/* Floating Pill: "✓ Silicone-free - weld-ready finish" */}
          <div className="absolute left-3 bottom-6 sm:bottom-8 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-xl flex items-center gap-2 z-40">
            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span className="text-xs font-semibold text-slate-700">
              Silicone-free - weld-ready finish
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Single Product Can / Bucket Visual Generator
export function ProductImage({ src, alt, className = "w-full h-48" }) {
  const [error, setError] = useState(false);

  if (!error && src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-contain transition-transform duration-300 group-hover:scale-105`}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div className={`${className} bg-gradient-to-b from-slate-100 to-slate-50 rounded-xl flex items-center justify-center p-4 border border-slate-100 relative overflow-hidden`}>
      <svg viewBox="0 0 100 120" className="w-20 h-28 drop-shadow-md">
        <rect x="30" y="24" width="40" height="85" rx="6" fill="#1E293B" />
        <rect x="30" y="44" width="40" height="50" fill="#FFFFFF" />
        <rect x="30" y="44" width="40" height="6" fill="#E86927" />
        <rect x="42" y="14" width="16" height="12" rx="2" fill="#64748B" />
        <circle cx="50" cy="20" r="1.5" fill="#E86927" />
        <text x="50" y="60" textAnchor="middle" fill="#0E1E38" fontSize="4.5" fontWeight="900">AEROTEK</text>
      </svg>
      <span className="absolute bottom-1 right-2 text-[9px] font-mono text-slate-400">400 ml</span>
    </div>
  );
}
