import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Aerotek India | Industrial Aerosols, Cold Galvanizing & Aerolac Sprays",
  description: "Manufacturer of industrial aerosols, cold galvanizing sprays and Aerolac acrylic spray paints with custom RAL shade matching. Established 2011 in Nashik MIDC, Maharashtra.",
  keywords: [
    "Industrial Aerosols",
    "Anti-Spatter Spray",
    "Zinc Rich Spray",
    "Cold Galvanizing Spray",
    "Aerolac Spray Paint",
    "RAL Shade Matching",
    "Red Oxide Primer",
    "Nashik MIDC Manufacturer"
  ],
  authors: [{ name: "Aerotek India" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
