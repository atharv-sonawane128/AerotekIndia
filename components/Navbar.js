"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function Navbar({ onOpenQuote, onOpenGuide }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    {
      name: (
        <span>
          Aerolac <span className="text-emerald-600 font-semibold">RAL Matching</span>
        </span>
      ),
      href: "/#ral-visualizer",
      isAnchor: true,
    },
  ];

  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo.jpeg"
              alt="Aerotek India - Industrial Aerosols & Sprays"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                if (!e.currentTarget.dataset.retried) {
                  e.currentTarget.dataset.retried = "true";
                  e.currentTarget.src = "/images/logo.png";
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, idx) => {
              const active = isLinkActive(link.href);
              const isBorderedStyle =
                active && (link.href === "/gallery" || link.href === "/contact");

              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative py-1 group ${
                    isBorderedStyle
                      ? "border-2 border-slate-900 rounded-lg px-3 py-1 font-bold text-slate-900 shadow-sm"
                      : active
                      ? "text-slate-900 font-bold"
                      : "text-slate-600 hover:text-aerotek-orange"
                  }`}
                >
                  {link.name}

                  {/* Underline for standard active items like Home, About Us, Products */}
                  {active && !isBorderedStyle && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-aerotek-orange rounded-full" />
                  )}

                  {!active && !isBorderedStyle && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-aerotek-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Helpful Photo Guide Button */}
            {onOpenGuide && (
              <button
                onClick={onOpenGuide}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-3 py-2 rounded-full transition-colors flex items-center gap-1.5"
                title="See where and how to save your photos"
              >
                <Sparkles className="w-3.5 h-3.5 text-aerotek-orange" />
                <span>Photo Guide</span>
              </button>
            )}

            {/* "Get a Quote" Orange Pill Button */}
            <Link
              href="/contact"
              onClick={(e) => {
                if (onOpenQuote && pathname === "/") {
                  e.preventDefault();
                  onOpenQuote();
                }
              }}
              className="bg-aerotek-orange hover:bg-aerotek-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/contact"
              className="bg-aerotek-orange text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg ${
                  isLinkActive(link.href)
                    ? "bg-slate-100 text-aerotek-orange font-bold"
                    : "text-slate-800 hover:text-aerotek-orange hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              {onOpenGuide && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGuide();
                  }}
                  className="w-full text-center text-xs font-medium text-slate-600 bg-slate-100 py-2.5 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-aerotek-orange" />
                  <span>Photo Saving Guide</span>
                </button>
              )}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-aerotek-orange text-white text-sm font-semibold py-3 rounded-xl shadow-md text-center block"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
