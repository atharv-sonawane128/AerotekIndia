"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { HeroProductShowcase } from "@/components/ProductVisuals";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  CheckCircle2,
  Truck,
  Palette,
  MapPin,
  Shield,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            EST. 2011 · NASHIK
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-aerotek-navy tracking-tight">
            About Aerotek India
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-2xl">
            Industrial Aerosols &amp; Sprays — manufactured in NICE, MIDC Satpur, Nashik.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight leading-tight">
                A Nashik factory with a simple promise:{" "}
                <span className="text-aerotek-orange">protect, repair, extend.</span>
              </h2>

              <div className="mt-6 space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  Aerotek India was established in <strong className="text-slate-900">2011</strong> in Nashik, Maharashtra. From our unit at NICE, MIDC Satpur, we manufacture spray paints, cold galvanizing sprays and industrial coatings used every day on fabrication floors, welding lines, automotive shops and OEM assembly lines.
                </p>
                <p>
                  Alongside our industrial range, we produce <strong className="text-slate-900">Aerolac</strong> — our own brand of acrylic spray paints with custom RAL shade matching, built for touch-up work where the repair should be invisible.
                </p>
                <p>
                  We work close to our customers: fabricators, welders, automotive workshops and manufacturing units across Nashik and the surrounding MIDCs, with quick local delivery and direct factory pricing.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-aerotek-orange hover:bg-aerotek-orange-hover text-white font-semibold px-6 py-3.5 rounded-full shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all text-sm group"
                >
                  <span>Explore the catalogue</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <HeroProductShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
              Mission &amp; values
            </h2>
          </div>

          <div className="space-y-6">
            {/* Top Wide Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm text-center max-w-3xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 text-aerotek-orange flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-aerotek-navy mb-2">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To protect metal, reduce rework and extend the life of industrial equipment with dependable, honestly-priced aerosols and coatings — made in Nashik, delivered fast.
              </p>
            </div>

            {/* 3 Value Cards in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Quality */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-aerotek-navy mb-2">
                  Quality
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Consistent, quality-checked formulations in every batch that leaves our unit.
                </p>
              </div>

              {/* Quick Delivery */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-aerotek-navy mb-2">
                  Quick Delivery
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Fast-moving pack sizes stocked and dispatched quickly around Nashik and beyond.
                </p>
              </div>

              {/* Customisation */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-aerotek-navy mb-2">
                  Customisation
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Custom RAL shade matching and special packing for OEM and fabricator needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Certifications Section (Side-by-side) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Our Location (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
                VISIT US
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-aerotek-navy tracking-tight mb-6">
                Our location
              </h3>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-aerotek-navy text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-aerotek-navy">
                      Aerotek India
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                      Plot No. B-71, NICE, M.I.D.C., Satpur,
                      <br />
                      Nashik – 422007, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                  NICE · M.I.D.C. SATPUR · NASHIK 422007
                </div>
              </div>
            </div>

            {/* Right: Certifications (col-span-7) */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
                COMING SOON
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-aerotek-navy tracking-tight mb-6">
                Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                {[
                  { title: "ISO 9001:2015" },
                  { title: "MSME / Udyam" },
                  { title: "Your Certification" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 rounded-2xl p-5 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-200/60 text-slate-400 flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Badge slot — details coming soon
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
              COMING SOON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-aerotek-navy tracking-tight">
              What our customers say
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Testimonial slots reserved — this space will carry real customer feedback soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-7 h-7 text-slate-300 mb-4 stroke-[1.5]" />
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Customer testimonial slot — reserved for feedback from fabricators, OEMs and maintenance teams.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200/80" />
                  <div className="space-y-1">
                    <div className="w-20 h-2.5 rounded bg-slate-200/80" />
                    <div className="w-14 h-2 rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </main>
  );
}

