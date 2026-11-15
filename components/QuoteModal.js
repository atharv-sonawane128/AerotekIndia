"use client";

import { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function QuoteModal({ isOpen, onClose, initialProduct = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productInterest: initialProduct,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Enquiry Submitted Successfully
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Our team at NICE, MIDC Satpur will contact you shortly with rates and dispatch schedules.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 bg-aerotek-orange text-white text-xs font-semibold px-6 py-2.5 rounded-full"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold text-aerotek-orange uppercase tracking-wider block mb-1">
                AEROTEK INDIA · DIRECT FACTORY ENQUIRY
              </span>
              <h3 className="text-2xl font-extrabold text-aerotek-navy">
                Request a Quick Quote
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Rates, pack sizes, bulk discounts and custom RAL matching.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 ..."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product / RAL Shade Interest
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anti-Spatter Spray / RAL 7035 Aerolac"
                  value={formData.productInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, productInterest: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Requirement Details / Quantity
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify quantity (cans/drums) or delivery location..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-aerotek-orange hover:bg-aerotek-orange-hover text-white font-semibold py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Sending..." : "Submit Quote Request"}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

