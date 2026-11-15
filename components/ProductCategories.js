"use client";

import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function ProductCategories({ onSelectCategory, onOpenQuote }) {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            WHAT WE MAKE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
            Featured product categories
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From weld-line protection to factory-finish touch-ups — engineered aerosols and coatings, made in Nashik.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Color Bar */}
              <div
                className="w-10 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: cat.accentColor }}
              />

              {/* Title & Tagline */}
              <div>
                <h3 className="text-xl font-bold text-aerotek-navy group-hover:text-aerotek-orange transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed min-h-[40px]">
                  {cat.tagline}
                </p>
              </div>

              {/* Bottom Row: Count & Circle Arrow */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  {cat.count}
                </span>
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-aerotek-orange group-hover:bg-aerotek-orange group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}

          {/* Card 6: Can't find a spec? (Dark Navy Card) */}
          <div
            onClick={onOpenQuote}
            className="group bg-gradient-to-br from-aerotek-navy to-aerotek-navy-dark rounded-2xl p-6 sm:p-7 border border-slate-700/60 shadow-lg flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            {/* Top Orange Accent Bar */}
            <div className="w-10 h-1 bg-aerotek-orange rounded-full mb-6 transition-all duration-300 group-hover:w-16" />

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                Can&apos;t find a spec?
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed min-h-[40px]">
                We formulate and match custom shades &amp; pack sizes. Tell us what you need.
              </p>
            </div>

            {/* Bottom Row: Orange CTA Link */}
            <div className="mt-8 pt-4 border-t border-slate-700/60 flex items-center justify-between">
              <span className="text-sm font-bold text-aerotek-orange flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

