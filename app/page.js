"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TrustBadges from "@/components/TrustBadges";
import ProductCategories from "@/components/ProductCategories";
import RalVisualizer from "@/components/RalVisualizer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import QuoteModal from "@/components/QuoteModal";
import PhotoGuideModal from "@/components/PhotoGuideModal";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [photoGuideOpen, setPhotoGuideOpen] = useState(false);
  const [quoteProductInterest, setQuoteProductInterest] = useState("");

  const handleOpenQuote = (productName = "") => {
    setQuoteProductInterest(typeof productName === "string" ? productName : "");
    setQuoteModalOpen(true);
  };

  const handleEnquireShade = (shade) => {
    const text = `Aerolac Spray Paint (${shade.code} - ${shade.name})`;
    setQuoteProductInterest(text);

    // Smooth scroll down to Quote Banner form
    const elem = document.getElementById("quote-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleEnquireProduct = (productName) => {
    setQuoteProductInterest(productName);
    const elem = document.getElementById("quote-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Fixed Navbar */}
      <Navbar
        onOpenQuote={() => handleOpenQuote("")}
        onOpenGuide={() => setPhotoGuideOpen(true)}
      />

      {/* 1. Hero Section */}
      <Hero onOpenQuote={() => handleOpenQuote("")} />

      {/* 2. Marquee Ticker Band */}
      <Ticker />

      {/* 3. 4 Feature Highlights / Trust Badges */}
      <TrustBadges />

      {/* 4. What We Make / Featured Product Categories */}
      <ProductCategories
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenQuote={() => handleOpenQuote("Custom Formulation / Specification")}
      />

      {/* 5. Own Brand Aerolac / Custom RAL Shade Visualizer */}
      <RalVisualizer onEnquireShade={handleEnquireShade} />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Industries We Serve */}
      <Industries />

      {/* 8. About Section / MIDC Factory Plant */}
      <AboutSection onOpenPhotoGuide={() => setPhotoGuideOpen(true)} />

      {/* 9. Applications & Workshop Gallery */}
      <GallerySection onOpenPhotoGuide={() => setPhotoGuideOpen(true)} />

      {/* 10. Get a Quote (Dark Navy Banner with Quick Enquiry Form) */}
      <QuoteBanner initialProduct={quoteProductInterest} />

      {/* 11. Footer */}
      <Footer
        onSelectCategory={(catName) => setSelectedCategory(null)}
        onOpenAdmin={() => alert("Admin panel is restricted to authorized Aerotek India staff.")}
      />

      {/* Interactive Modals */}
      <ProductModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onEnquireProduct={handleEnquireProduct}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={quoteProductInterest}
      />

      <PhotoGuideModal
        isOpen={photoGuideOpen}
        onClose={() => setPhotoGuideOpen(false)}
      />

      {/* Floating WhatsApp and Call Action Buttons */}
      <FloatingContactButtons />

      {/* Floating Photo Guide Shortcut Badge (Bottom-Right, slightly offset) */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setPhotoGuideOpen(true)}
          className="bg-aerotek-navy hover:bg-aerotek-orange text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl border border-slate-700/50 flex items-center gap-2 transition-all hover:scale-105 group cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-aerotek-orange group-hover:text-white" />
          <span>Photos Guide</span>
        </button>
      </div>
    </main>
  );
}
