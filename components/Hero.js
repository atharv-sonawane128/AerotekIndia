"use client";

import { ArrowRight } from "lucide-react";
import { HeroProductShowcase } from "./ProductVisuals";

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 bg-grid-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Tag Pill: EST. 2011 · NASHIK MIDC, MAHARASHTRA */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-700 tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-aerotek-accent animate-pulse" />
              <span>EST. 2011 · NASHIK MIDC, MAHARASHTRA</span>
            </div>

            {/* Main Headline: Protect. Repair. Extend. */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-aerotek-navy">
              Protect.
              <br />
              Repair.
              <br />
              <span className="text-aerotek-orange">Extend.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Industrial aerosol sprays and coatings for fabricators, welders, automotive and manufacturing units — including{" "}
              <strong className="font-bold text-slate-900">Aerolac</strong>, our own acrylic spray paint brand with custom RAL shade matching.
            </p>

            {/* Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Orange View Products Button */}
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-aerotek-orange hover:bg-aerotek-orange-hover text-white font-semibold px-7 py-3.5 rounded-full shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all text-sm group"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* White Outlined Get a Quote Button */}
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold px-7 py-3.5 rounded-full border border-slate-300 shadow-sm hover:border-slate-400 transition-all text-sm cursor-pointer"
              >
                Get a Quote
              </button>
            </div>

            {/* Sub-tags list */}
            <div className="mt-10 pt-4 border-t border-slate-200/60 w-full">
              <p className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                ANTI-SPATTER &nbsp;·&nbsp; ZINC RICH &nbsp;·&nbsp; COLD GALVANIZING &nbsp;·&nbsp; PRIMERS &nbsp;·&nbsp; AEROLAC
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Showcase */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <HeroProductShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

