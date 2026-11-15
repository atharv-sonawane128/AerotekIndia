"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageSquare, PhoneCall } from "lucide-react";

export default function QuoteBanner({ initialProduct = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    productInterest: initialProduct,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, productInterest: initialProduct }));
    }
  }, [initialProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    setLoading(true);
    // Simulate quick submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Aerotek India, I need a quote.\nName: ${formData.name || "Customer"}\nPhone: ${formData.phone || "Not provided"}\nProduct Interest: ${formData.productInterest || "General Enquiry"}\nMessage: ${formData.message || "Please provide pricing and delivery timeline."}`
    );
    window.open(`https://wa.me/919822054123?text=${text}`, "_blank");
  };

  return (
    <section id="quote-section" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navy Container Card */}
        <div className="bg-[#12233E] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-aerotek-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading & Value Propositions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-bold tracking-widest text-aerotek-orange uppercase mb-3 block">
                GET A QUOTE
              </span>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Need pricing, pack sizes or a matched RAL shade?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                Send us your requirement — our team at NICE, MIDC Satpur responds with rates and delivery timelines quickly.
              </p>

              {/* 3 Checkpoints */}
              <div className="mt-8 space-y-3.5 w-full">
                {[
                  "Factory-direct rates",
                  "Custom RAL shade filling",
                  "Quick local delivery around Nashik",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-aerotek-orange/60 bg-aerotek-orange/20 text-aerotek-orange flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quick Enquiry Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl">
                <h3 className="text-xl font-bold text-aerotek-navy mb-5">
                  Quick enquiry
                </h3>

                {submitted ? (
                  <div className="py-8 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Enquiry Received!
                    </h4>
                    <p className="text-sm text-slate-600 mt-2 max-w-sm">
                      Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our Satpur MIDC team will get in touch with rates and availability shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-xs font-semibold text-aerotek-orange hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 ..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                        />
                      </div>
                    </div>

                    {/* Product Interest Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Product Interest
                      </label>
                      <input
                        type="text"
                        value={formData.productInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            productInterest: e.target.value,
                          })
                        }
                        placeholder="e.g. Zinc Rich Aerosol Spray"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your requirement..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/30 focus:border-aerotek-orange resize-y"
                      />
                    </div>

                    {/* Submit Orange Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-aerotek-orange hover:bg-aerotek-orange-hover text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm group cursor-pointer"
                    >
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>{loading ? "Submitting..." : "Request a Quote"}</span>
                    </button>

                    {/* Optional Quick WhatsApp Link */}
                    <div className="pt-2 text-center">
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="text-xs text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 font-medium"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Or click here to chat directly on WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

