"use client";

import { useState } from "react";
import { X, Copy, Check, Folder, Image, Sparkles } from "lucide-react";

export default function PhotoGuideModal({ isOpen, onClose }) {
  const [copiedName, setCopiedName] = useState(null);

  if (!isOpen) return null;

  const photoList = [
    {
      name: "hero-products.png",
      priority: "Highest Priority",
      section: "Hero Section (Right Side)",
      description: "Composite photo of Anti-spatter can, packaging box, Zinc Rich can & Red Oxide 20L primer bucket.",
      recommendedSize: "1200 x 900 px (transparent PNG or clean background)",
    },
    {
      name: "logo.jpeg (or logo.png)",
      priority: "Active",
      section: "Navbar & Footer",
      description: "Official Aerotek India brand logo lockup.",
      recommendedSize: "400 x 120 px",
    },
    {
      name: "anti-spatter.png",
      priority: "High",
      section: "Welding Care Category",
      description: "Anti-Spatter Welding Spray 500ml can.",
      recommendedSize: "600 x 800 px (transparent PNG)",
    },
    {
      name: "zinc-rich.png",
      priority: "High",
      section: "Corrosion Protection Category",
      description: "Zinc Rich Cold Galvanizing Aerosol spray can.",
      recommendedSize: "600 x 800 px (transparent PNG)",
    },
    {
      name: "aerolac-spray.png",
      priority: "High",
      section: "Coatings & RAL Matching Section",
      description: "Aerolac Acrylic Spray Paint can.",
      recommendedSize: "600 x 800 px (transparent PNG)",
    },
    {
      name: "red-oxide-primer.png",
      priority: "High",
      section: "Primers Category",
      description: "Red Oxide Primer can or 20L industrial drum/bucket.",
      recommendedSize: "600 x 800 px (transparent PNG)",
    },
    {
      name: "silicone-spray.png",
      priority: "Medium",
      section: "Release & Silicone Category",
      description: "Pure Industrial Silicone Aerosol spray can.",
      recommendedSize: "600 x 800 px (transparent PNG)",
    },
    {
      name: "bright-zinc.png",
      priority: "Medium",
      section: "Corrosion Protection",
      description: "Bright Zinc Galva Spray can.",
      recommendedSize: "600 x 800 px",
    },
    {
      name: "hr-black.png",
      priority: "Medium",
      section: "Coatings & Touch-up",
      description: "HR Black 600°C Heat Resistant Coating can.",
      recommendedSize: "600 x 800 px",
    },
    {
      name: "silencer-coat.png",
      priority: "Medium",
      section: "Coatings & Touch-up",
      description: "Silencer Coat spray can.",
      recommendedSize: "600 x 800 px",
    },
    {
      name: "factory-facility.jpg",
      priority: "Medium",
      section: "About Us / MIDC Plant",
      description: "Nashik Satpur MIDC facility / factory manufacturing line.",
      recommendedSize: "1200 x 800 px (JPG)",
    },
    {
      name: "gallery-1.jpg to gallery-6.jpg",
      priority: "Optional",
      section: "Gallery Section",
      description: "Application photos (welding, spray touch-up, industrial panels, workshop).",
      recommendedSize: "800 x 600 px (JPG)",
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedName(text);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-aerotek-orange">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-aerotek-navy">
                Photo Naming &amp; Directory Guide
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Save your client&apos;s product photos with these exact names to automatically display them.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Directory Path Notice */}
        <div className="p-6 pb-2">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Folder className="w-6 h-6 text-aerotek-orange flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                  Target Folder Path
                </span>
                <code className="text-sm font-mono font-bold text-aerotek-navy">
                  c:\Users\athar\Desktop\Aerotek India\public\images\
                </code>
              </div>
            </div>
            <button
              onClick={() => handleCopy("public/images/")}
              className="text-xs font-semibold text-aerotek-orange bg-white border border-orange-200 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Path</span>
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 px-1">
            * Note: While you haven&apos;t added photos yet, high-fidelity SVG mockups matching the screenshot are rendered automatically. Once you save any image into <code>public/images/</code>, it takes over immediately!
          </p>
        </div>

        {/* Table of Image Filenames */}
        <div className="p-6 pt-2">
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="py-3 px-4">Filename to Save As</th>
                  <th className="py-3 px-4">Section on Website</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {photoList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-aerotek-orange whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-800">
                      {item.section}
                    </td>
                    <td className="py-3 px-4 text-slate-600 leading-relaxed">
                      {item.description}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleCopy(item.name)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-aerotek-orange bg-slate-100 hover:bg-orange-50 px-2.5 py-1 rounded-md transition-colors"
                      >
                        {copiedName === item.name ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Name</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-aerotek-navy hover:bg-slate-800 text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}

