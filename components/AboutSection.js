"use client";

import { CheckCircle2, Factory, ShieldCheck, Clock, MapPin } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function AboutSection({ onOpenPhotoGuide }) {
  const highlights = [
    {
      title: "State-of-the-Art Aerosol Lines",
      desc: "Dedicated automated filling lines capable of handling solvent-based acrylics, zinc-rich slurries, and release agents.",
      icon: Factory,
    },
    {
      title: "Rigorous In-House Testing",
      desc: "Every batch undergoes viscosity checks, salt-spray corrosion resistance validation, and pressure testing.",
      icon: ShieldCheck,
    },
    {
      title: "Same-Day Dispatch in Nashik",
      desc: "Prime location in Satpur MIDC allows instant deliveries across Nashik, Ambad, Sinnar, and nearby industrial zones.",
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual / Factory Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 min-h-[380px] flex items-center justify-center text-white p-8">
              {/* Fallback image */}
              <img
                src="/images/factory-facility.jpg"
                alt="Aerotek India MIDC Facility"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="relative z-10 text-center max-w-sm">
                <div className="w-14 h-14 rounded-2xl bg-aerotek-orange/90 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Factory className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Satpur MIDC Plant
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Plot No. B-71, NICE, M.I.D.C., Satpur, Nashik – 422007, Maharashtra
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-white">
                  <span>Image name: factory-facility.jpg</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg">
                13+
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Years of Excellence
                </p>
                <p className="text-[10px] text-slate-500">Established in 2011</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Quality */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
              ABOUT AEROTEK INDIA
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight leading-tight">
              Engineered Aerosols &amp; Industrial Coatings from Nashik
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Founded in 2011, <strong>Aerotek India</strong> has grown into one of western India&apos;s leading manufacturers of high-specification industrial aerosol sprays, cold galvanizing compounds, and specialty primers.
            </p>

            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Under our flagship <strong>Aerolac</strong> brand, we provide computer-aided RAL shade matching in handy spray cans — allowing fabricators and panel builders to perform flawless touch-ups on powder-coated surfaces without downtime or expensive repainting.
            </p>

            {/* Key Differentiators */}
            <div className="mt-8 space-y-4 w-full">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-aerotek-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

