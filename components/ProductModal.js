"use client";

import { X, Check, ArrowRight, Package, Shield, FileText } from "lucide-react";
import { ProductImage } from "./ProductVisuals";

export default function ProductModal({ category, onClose, onEnquireProduct }) {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.accentColor }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {category.count}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-aerotek-navy">
              {category.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Items List */}
        <div className="p-6 space-y-8 divide-y divide-slate-100">
          {category.products.map((product) => (
            <div key={product.id} className="pt-6 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Product Visual */}
              <div className="md:col-span-4 flex flex-col items-center">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 rounded-xl object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="md:col-span-8 flex flex-col">
                <h3 className="text-xl font-bold text-aerotek-navy">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-aerotek-orange mt-0.5">
                  {product.subname}
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {product.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pack Sizes */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                    <Package className="w-3.5 h-3.5 text-slate-400" />
                    Pack Sizes:
                  </span>
                  {product.packSizes.map((size, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                {/* Enquire button */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Factory direct supply from Satpur MIDC
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onEnquireProduct(product.name);
                    }}
                    className="inline-flex items-center gap-1.5 bg-aerotek-navy hover:bg-aerotek-orange text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <span>Get Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

