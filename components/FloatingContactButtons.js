"use client";

import { Phone, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function FloatingContactButtons() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Aerotek India, I am interested in your industrial aerosols and sprays. Please share details and pricing."
    );
    window.open(`https://wa.me/919822054123?text=${text}`, "_blank");
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none">
      {/* WhatsApp Button (Green) */}
      <button
        onClick={handleWhatsApp}
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current stroke-none" />
      </button>

      {/* Phone Call Button (Orange) */}
      <button
        onClick={handlePhoneCall}
        className="w-12 h-12 rounded-full bg-aerotek-orange hover:bg-aerotek-orange-hover text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer group"
        aria-label="Call Aerotek India"
        title="Call Now"
      >
        <Phone className="w-5 h-5 fill-current stroke-none" />
      </button>
    </div>
  );
}

