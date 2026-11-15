"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const productShots = [
    {
      id: "anti-spatter",
      name: "Anti-Spatter Welding Spray",
      brand: "AEROTEK INDIA",
      image: "/images/Anti-Spatter Welding Spray.jpeg",
      isSlot: false,
    },
    {
      id: "zinc-rich",
      name: "Zinc Rich Aerosol Spray",
      brand: "AEROTEK INDIA",
      image: "/images/Zinc Rich Aerosol Spray.jpeg",
      isSlot: false,
    },
    {
      id: "silicone",
      name: "Silicone Aerosol Spray",
      brand: "AEROTEK INDIA",
      image: "/images/Silicon Spray.jpeg",
      isSlot: false,
    },
    {
      id: "red-oxide-bucket",
      name: "Red Oxide Metal Primer",
      brand: "20 Litre",
      image: "/images/Red Oxide Metal Primer.jpeg",
      isSlot: false,
    },
    {
      id: "cold-galvanizing",
      name: "Cold Galvanizing Spray",
      brand: "AEROTEK INDIA",
      image: "/images/Cold Galvanizing Spray.jpeg",
      isSlot: false,
    },
    {
      id: "touch-up-spray",
      name: "Touch Up Spray Paint",
      brand: "AEROTEK INDIA",
      image: "/images/Touch Up Spray Paint.jpeg",
      isSlot: false,
    },
    {
      id: "mould-release",
      name: "Mould Release Spray",
      brand: "AEROTEK INDIA",
      image: "/images/Mould Release Spray.jpeg",
      isSlot: false,
    },
    {
      id: "zinc-chromate",
      name: "Zinc Chromate Yellow Primer",
      brand: "20 Litre",
      image: "/images/Zinc Chromate Yellow Primer.jpeg",
      isSlot: false,
    },
    {
      id: "metal-spray-coating",
      name: "Metal Spray Coating",
      brand: "AEROTEK INDIA",
      image: "/images/Metal Spray Coating.jpeg",
      isSlot: false,
    },
  ];

  const applications = [
    {
      title: "Welding & fabrication lines",
      image: "/images/gallery-1.jpg",
      gradient: "from-amber-600/40 via-orange-950/60 to-black/85",
      iconType: "welding",
    },
    {
      title: "Grinding & surface finishing",
      image: "/images/gallery-2.jpg",
      gradient: "from-yellow-600/40 via-stone-900/60 to-black/85",
      iconType: "grinding",
    },
    {
      title: "Manufacturing floors",
      image: "/images/gallery-3.jpg",
      gradient: "from-blue-900/40 via-slate-900/60 to-black/85",
      iconType: "floor",
    },
    {
      title: "On-site maintenance work",
      image: "/images/gallery-4.jpg",
      gradient: "from-slate-700/40 via-slate-900/60 to-black/85",
      iconType: "maintenance",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            GALLERY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-aerotek-navy tracking-tight">
            Product shots &amp; applications
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-2xl">
            Our range in focus — product photography and on-site application photos.
          </p>
        </div>
      </section>

      {/* Section 1: Product Photos */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-aerotek-navy tracking-tight mb-8">
            Product photos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productShots.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual Area */}
                <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-100 to-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                  {item.isSlot ? (
                    <div className="w-full h-full rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-6 bg-slate-50/50">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-400 flex items-center justify-center mb-3 shadow-xs">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-bold text-slate-700">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.brand}
                      </p>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      {/* High-Fidelity SVG Fallback */}
                      <div className="w-full h-full hidden flex-col items-center justify-center">
                        <svg viewBox="0 0 100 120" className="w-20 h-28 drop-shadow-md">
                          <rect x="30" y="24" width="40" height="85" rx="6" fill="#1E293B" />
                          <rect x="30" y="44" width="40" height="50" fill="#FFFFFF" />
                          <rect x="30" y="44" width="40" height="6" fill="#E86927" />
                          <rect x="42" y="14" width="16" height="12" rx="2" fill="#64748B" />
                          <circle cx="50" cy="20" r="1.5" fill="#E86927" />
                          <text x="50" y="60" textAnchor="middle" fill="#0E1E38" fontSize="5" fontWeight="900">AEROTEK</text>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Bar: Name & Brand */}
                <div className="p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm bg-white">
                  <span className="font-bold text-aerotek-navy">
                    {item.name}
                  </span>
                  <span className="font-mono text-slate-400 text-xs font-semibold uppercase">
                    {item.brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Applications */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-aerotek-navy tracking-tight">
              Applications
            </h2>
            <span className="text-xs text-slate-400">
              Photo slots — replace with your before/after &amp; on-site photos anytime
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-md group border border-slate-200 cursor-pointer"
              >
                {/* Fallback image */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${app.gradient} group-hover:opacity-90 transition-opacity`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {app.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Before / After Slider */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
              COLD GALVANIZING, VISUALISED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
              Before / After
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Drag the slider to see what a cold galvanizing restore does to rusted steel. Illustrative demo — swap in your own on-site photos.
            </p>
          </div>

          {/* Interactive Before / After Component */}
          <BeforeAfterSlider />
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </main>
  );
}

