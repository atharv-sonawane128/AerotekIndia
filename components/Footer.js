import Link from "next/link";
import { User, MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function Footer({ onOpenAdmin }) {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Admin Panel", href: "#admin", onClick: onOpenAdmin },
  ];

  const categoriesList = [
    { name: "Welding Care", href: "/products?category=welding-care" },
    { name: "Corrosion Protection", href: "/products?category=corrosion-protection" },
    { name: "Coatings & Touch-up", href: "/products?category=coatings-touchup" },
    { name: "Primers", href: "/products?category=primers" },
    { name: "Release & Silicone", href: "/products?category=release-silicone" },
  ];

  return (
    <footer id="contact" className="bg-[#0A1629] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link
              href="/"
              className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-sm hover:opacity-95 transition-opacity"
            >
              <img
                src="/images/logo.jpeg"
                alt="Aerotek India - Industrial Aerosols & Sprays"
                className="h-8 sm:h-9 w-auto object-contain"
                onError={(e) => {
                  if (!e.currentTarget.dataset.retried) {
                    e.currentTarget.dataset.retried = "true";
                    e.currentTarget.src = "/images/logo.png";
                  }
                }}
              />
            </Link>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-aerotek-orange text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-aerotek-orange text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-aerotek-orange text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Product Categories
            </h4>
            <ul className="space-y-2.5">
              {categoriesList.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={cat.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-aerotek-orange flex-shrink-0 mt-0.5" />
                <span>{companyInfo.contactPerson}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aerotek-orange flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  {companyInfo.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-aerotek-orange flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white text-slate-300 transition-colors"
                >
                  {companyInfo.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aerotek-orange flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white text-slate-300 transition-colors"
                >
                  {companyInfo.displayEmail}
                </a>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400">
                GST No: <span className="text-slate-200">{companyInfo.gstin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © Aerotek India. All rights reserved.
          </div>
          <div className="tracking-widest font-bold text-slate-400 uppercase text-[11px]">
            {companyInfo.slogan}
          </div>
        </div>
      </div>
    </footer>
  );
}
