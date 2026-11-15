"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { User, MapPin, Phone, Mail, FileText, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    productInterest: "",
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-[#4E7B3B] uppercase mb-2 block">
            CONTACT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-aerotek-navy tracking-tight">
            Get a quote
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-2xl">
            Tell us what you spray, coat or protect — we&apos;ll respond with rates, pack sizes and delivery timelines.
          </p>
        </div>
      </section>

      {/* Form & Contact Details Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Send an Enquiry Form (col-span-7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-bold text-aerotek-navy mb-6">
                Send an enquiry
              </h2>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Enquiry Sent Successfully
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our Satpur MIDC team has received your request and will provide factory pricing and timeline shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        productInterest: "",
                        quantity: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-xs font-bold text-aerotek-orange hover:underline cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 3: Product Interest & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Product interest
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Zinc Rich Aerosol Spray"
                        value={formData.productInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            productInterest: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 50 cans / 20 L"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-aerotek-orange/20 focus:border-aerotek-orange transition-all placeholder:text-slate-400 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-aerotek-orange hover:bg-aerotek-orange-hover text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Submitting..." : "Submit Enquiry"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Cards & Map (col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
                {/* Contact Person */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1E38] text-white flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                      CONTACT PERSON
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {companyInfo.contactPerson}
                    </p>
                  </div>
                </div>

                {/* Works & Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1E38] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                      WORKS &amp; OFFICE
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-snug">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1E38] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                      PHONE
                    </span>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-aerotek-orange mt-0.5 block"
                    >
                      {companyInfo.displayPhone}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Direct factory dispatch line
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1E38] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-aerotek-orange mt-0.5 block"
                    >
                      {companyInfo.displayEmail}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Share your requirement for rate sheet
                    </span>
                  </div>
                </div>

                {/* GST Card Tag */}
                <div className="pt-2">
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                        GST NO
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {companyInfo.gstin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Preview Card */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700">
                    Satpur MIDC, Nashik
                  </span>
                  <a
                    href="https://maps.google.com/?q=NICE+MIDC+Satpur+Nashik"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-aerotek-orange hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Interactive Google Map Embed */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Aerotek India Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14995.73812739454!2d73.725!3d19.998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb6b2e3e5c9%3A0x6b4f7a2db12f2c8d!2sN.I.C.E.%2C%20MIDC%20Satpur%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </main>
  );
}

