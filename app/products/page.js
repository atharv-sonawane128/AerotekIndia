"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import QuoteModal from "@/components/QuoteModal";
import { Search, ArrowUpRight, Check, Package } from "lucide-react";

export default function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState("");

  const filterTabs = [
    "All",
    "Welding Care",
    "Corrosion Protection",
    "Coatings & Touch-up",
    "Primers",
    "Release & Silicone",
  ];

  const productCatalog = [
    {
      id: "anti-spatter",
      name: "Anti-Spatter Welding Spray",
      category: "Welding Care",
      categoryTag: "WELDING CARE",
      image: "/images/Anti-Spatter Welding Spray.jpeg",
      packSizes: ["200 ml", "400 ml"],
      badge: null,
      checkpoints: [
        "Prevents spatter build-up on nozzles & workpieces",
        "Silicone-free – safe for post-weld painting",
        "Keeps surfaces clean, improves weld quality",
      ],
    },
    {
      id: "zinc-rich",
      name: "Zinc Rich Aerosol Spray",
      category: "Corrosion Protection",
      categoryTag: "CORROSION PROTECTION",
      image: "/images/Zinc Rich Aerosol Spray.jpeg",
      packSizes: ["400 ml"],
      badge: "Zinc Rich",
      badgeColor: "bg-emerald-600",
      checkpoints: [
        "High zinc content for sacrificial corrosion protection",
        "Rust resistant, long-lasting film on bare steel",
        "Easy aerosol application for field touch-ups",
      ],
    },
    {
      id: "cold-galvanizing",
      name: "Cold Galvanizing Spray",
      category: "Corrosion Protection",
      categoryTag: "CORROSION PROTECTION",
      image: "/images/Cold Galvanizing Spray.jpeg",
      packSizes: ["400 ml"],
      badge: "Zinc Rich",
      badgeColor: "bg-emerald-600",
      checkpoints: [
        "Sacrificial zinc coating against rust & corrosion",
        "Excellent adhesion on prepared bare metal",
        "Fast drying, ideal for on-site repairs",
      ],
    },
    {
      id: "zinc-coating-spray",
      name: "Zinc Coating Spray",
      category: "Corrosion Protection",
      categoryTag: "CORROSION PROTECTION",
      image: "/images/Zinc Coating Spray.jpeg",
      packSizes: ["400 ml"],
      badge: "99.5% Pure Zinc",
      badgeColor: "bg-emerald-700",
      checkpoints: [
        "99.5% pure zinc sacrificial barrier for damaged metal",
        "Instant rust protection and quick dry",
        "Heat resistant permanent metallic finish",
      ],
    },
    {
      id: "metal-pretreatment",
      name: "Metal Pretreatment Spray",
      category: "Corrosion Protection",
      categoryTag: "CORROSION PROTECTION",
      image: "/images/Metal Pretreatment Sprey.jpeg",
      packSizes: ["400 ml"],
      badge: "Pre-Paint Care",
      badgeColor: "bg-amber-600",
      checkpoints: [
        "Removes oil & grease, cleans bare metal surfaces",
        "Significantly enhances powder coat & paint adhesion",
        "Prepares galvanized, ferrous & non-ferrous metals",
      ],
    },
    {
      id: "touchup-spray",
      name: "Touch Up Spray Paint",
      category: "Coatings & Touch-up",
      categoryTag: "COATINGS & TOUCH-UP",
      image: "/images/Touch Up Spray Paint.jpeg",
      packSizes: ["250 ml"],
      badge: "Precisely Shade-Matched",
      badgeColor: "bg-aerotek-orange",
      checkpoints: [
        "Precisely shade-matched to RAL, Pantone & OEM swatches",
        "Perfect for automotive touch-ups & appliance repairs",
        "Fast curing glossy protective acrylic film",
      ],
    },
    {
      id: "metal-spray-coating",
      name: "Metal Spray Coating",
      category: "Coatings & Touch-up",
      categoryTag: "COATINGS & TOUCH-UP",
      image: "/images/Metal Spray Coating.jpeg",
      packSizes: ["400 ml"],
      badge: "Durable Coating",
      badgeColor: "bg-slate-800",
      checkpoints: [
        "Hard, durable and uniform protective finish for gears & parts",
        "Weather resistant, rust and corrosion barrier",
        "Smooth atomization and quick drying",
      ],
    },
    {
      id: "red-oxide-primer",
      name: "Red Oxide Metal Primer",
      category: "Primers",
      categoryTag: "PRIMERS",
      image: "/images/Red Oxide Metal Primer.jpeg",
      packSizes: ["20 Litre"],
      badge: "Anti-Rust",
      badgeColor: "bg-red-700",
      checkpoints: [
        "Prevents rust & corrosion on structural steel",
        "Excellent adhesion on steel, iron & aluminium",
        "Heavy-duty 20 Litre industrial bucket",
      ],
    },
    {
      id: "zinc-chromate-yellow",
      name: "Zinc Chromate Yellow Primer",
      category: "Primers",
      categoryTag: "PRIMERS",
      image: "/images/Zinc Chromate Yellow Primer.jpeg",
      packSizes: ["20 Litre"],
      badge: "Yellow Primer",
      badgeColor: "bg-yellow-600",
      checkpoints: [
        "Active chemical passivation against severe corrosion",
        "Strong mechanical adhesion to metal & aluminium",
        "Heavy-duty 20 Litre industrial bucket",
      ],
    },
    {
      id: "zinc-phosphate-primer",
      name: "Zinc Phosphate Primer",
      category: "Primers",
      categoryTag: "PRIMERS",
      image: "/images/ZInc Phosphate Primer.jpeg",
      packSizes: ["20 Litre"],
      badge: "Anti-Corrosive",
      badgeColor: "bg-purple-700",
      checkpoints: [
        "Non-toxic zinc phosphate anti-corrosive primer",
        "Strong adhesion on steel, iron & aluminium",
        "Ideal base for all high-build top coats (20L)",
      ],
    },
    {
      id: "mould-release",
      name: "Mould Release Spray",
      category: "Release & Silicone",
      categoryTag: "RELEASE & SILICONE",
      image: "/images/Mould Release Spray.jpeg",
      packSizes: ["400 ml"],
      badge: "Clean Release",
      badgeColor: "bg-orange-600",
      checkpoints: [
        "Clean, effortless release from moulds and dies",
        "Prevents sticking and leaves no staining on tooling",
        "Extends mould & die tooling service life",
      ],
    },
    {
      id: "silicone-spray",
      name: "Silicone Aerosol Spray",
      category: "Release & Silicone",
      categoryTag: "RELEASE & SILICONE",
      image: "/images/Silicon Spray.jpeg",
      packSizes: ["400 ml"],
      badge: "General Industrial Use",
      badgeColor: "bg-sky-700",
      checkpoints: [
        "Slippery lubricating silicone film",
        "Water resistant surface protection",
        "Safe on rubber, plastic & metal",
      ],
    },
  ];

  const filteredProducts = useMemo(() => {
    return productCatalog.filter((product) => {
      const matchesCategory =
        selectedFilter === "All" || product.category === selectedFilter;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.checkpoints.some((cp) =>
          cp.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const handleEnquire = (productName) => {
    setEnquiryProduct(productName);
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar onOpenQuote={() => handleEnquire("")} />

      {/* Header Section */}
      <section className="pt-28 pb-10 sm:pt-36 sm:pb-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            CATALOGUE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-aerotek-navy tracking-tight">
            Products
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-2xl">
            Welding care, corrosion protection, coatings, primers and release sprays — manufactured in Nashik MIDC.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                    selectedFilter === tab
                      ? "bg-aerotek-navy text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              <p className="text-base font-semibold">No products found matching your search.</p>
              <button
                onClick={() => {
                  setSelectedFilter("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-aerotek-orange hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Photo Area */}
                    <div className="relative w-full h-64 rounded-2xl bg-gradient-to-b from-slate-100/90 to-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-3 mb-5">
                      {/* Badge if present */}
                      {product.badge && (
                        <div
                          className={`absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm ${product.badgeColor}`}
                        >
                          {product.badge}
                        </div>
                      )}

                      {/* Display Product Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 rounded-lg"
                      />
                    </div>

                    {/* Category Tag & Arrow */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        {product.categoryTag}
                      </span>
                      <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-aerotek-navy group-hover:text-aerotek-navy transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-aerotek-navy group-hover:text-aerotek-orange transition-colors">
                      {product.name}
                    </h3>

                    {/* Pack sizes badge */}
                    <div className="mt-2.5 flex items-center gap-2">
                      {product.packSizes.map((size, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-600"
                        >
                          <Package className="w-3 h-3 text-slate-400" />
                          <span>{size}</span>
                        </span>
                      ))}
                    </div>

                    {/* Checkpoints */}
                    <ul className="mt-5 space-y-2">
                      {product.checkpoints.map((cp, cpIdx) => (
                        <li key={cpIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enquire Now Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => handleEnquire(product.name)}
                      className="w-full bg-[#12233E] hover:bg-aerotek-orange text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm hover:shadow-md"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={enquiryProduct}
      />
    </main>
  );
}
