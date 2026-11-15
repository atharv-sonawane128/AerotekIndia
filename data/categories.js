export const categories = [
  {
    id: "welding-care",
    title: "Welding Care",
    tagline: "Anti-spatter & nozzle protection for clean welds",
    count: "1 PRODUCTS",
    accentColor: "#E86927", // Orange
    accentBg: "bg-[#E86927]",
    icon: "Flame",
    products: [
      {
        id: "anti-spatter-spray",
        name: "Anti-Spatter Welding Spray",
        subname: "Clean Welds. Better Results.",
        image: "/images/Anti-Spatter Welding Spray.jpeg",
        packSizes: ["200 ml", "400 ml"],
        description: "Formulated specifically for MIG/MAG and arc welding. Prevents spatter adhesion on metal surfaces, welding nozzles, workpieces, and jigs without affecting post-weld painting.",
        features: [
          "Prevents spatter build-up on nozzles & workpieces",
          "Silicone-free — 100% safe for post-weld painting",
          "Keeps surfaces clean, improves weld quality",
          "Available in 400 ml and 200 ml pack sizes"
        ],
        applications: ["Automotive body welding", "Structural steel fabrication", "Pipe spool fabrication", "Robotic weld cells"]
      }
    ]
  },
  {
    id: "corrosion-protection",
    title: "Corrosion Protection",
    tagline: "Zinc rich, cold galvanizing & pretreatment",
    count: "4 PRODUCTS",
    accentColor: "#16a34a", // Green
    accentBg: "bg-[#16a34a]",
    icon: "ShieldCheck",
    products: [
      {
        id: "zinc-rich-spray",
        name: "Zinc Rich Aerosol Spray",
        subname: "Corrosion Protection for Metal Surfaces",
        image: "/images/Zinc Rich Aerosol Spray.jpeg",
        packSizes: ["400 ml"],
        description: "High zinc content spray delivering sacrificial galvanic protection to ferrous metals. Protects bare steel against rust and extreme weather.",
        features: [
          "Rust resistant sacrificial barrier",
          "Long lasting cathodic protection on bare steel",
          "Easy aerosol application for field touch-ups",
          "Net Content: 400 ml with protective outer carton"
        ],
        applications: ["Hot-dip galvanized structure touch-up", "Telecommunication towers", "Guard rails & highway barriers", "Solar mounting structures"]
      },
      {
        id: "cold-galvanizing-spray",
        name: "Cold Galvanizing Spray",
        subname: "Protect Metal. Extend Life.",
        image: "/images/Cold Galvanizing Spray.jpeg",
        packSizes: ["400 ml"],
        description: "Coats metal with a durable protective zinc layer without requiring hot-dip equipment. Ideal for repairing cut, drilled, or welded galvanized steel.",
        features: [
          "Superior corrosion protection with zinc-rich coating",
          "Quick drying and easy to use on-site",
          "Permanent metallic finish on steel I-beams and frames",
          "Net Content: 400 ml"
        ],
        applications: ["Architectural steel", "Fencing & gates", "Ductwork & HVAC framing", "Industrial outdoor plant structures"]
      },
      {
        id: "zinc-coating-spray",
        name: "Zinc Coating Spray",
        subname: "99.5% Pure Zinc — Instant Rust Protection",
        image: "/images/Zinc Coating Spray.jpeg",
        packSizes: ["400 ml"],
        description: "Galvanic zinc coating for bare or damaged metal spots. Delivers a permanent metallic finish with heat-resistant properties.",
        features: [
          "99.5% Pure Zinc formulation",
          "Instant rust protection and quick dry",
          "Heat resistant and long-lasting durability",
          "Net Vol.: 400 ml"
        ],
        applications: ["Automotive underbody & chassis", "Exhaust hanger brackets", "Sheet metal panels", "Damaged galvanized sheet repairs"]
      },
      {
        id: "metal-pretreatment-spray",
        name: "Metal Pretreatment Spray",
        subname: "Prepare. Protect. Perform.",
        image: "/images/Metal Pretreatment Sprey.jpeg",
        packSizes: ["400 ml"],
        description: "Prepares metal surfaces before coating or painting. Cleans, removes oil and grease, and enhances paint adhesion across ferrous and non-ferrous metals.",
        features: [
          "Removes oil, grease and light oxidation",
          "Significantly enhances topcoat paint adhesion",
          "Prepares galvanized, ferrous & non-ferrous surfaces",
          "Fast drying — ready for immediate painting"
        ],
        applications: ["Pre-paint degreasing", "Powder coating preparation", "Machined part cleaning"]
      }
    ]
  },
  {
    id: "coatings-touchup",
    title: "Coatings & Touch-up",
    tagline: "Touch-up sprays, Aerolac acrylics & protective coatings",
    count: "2 PRODUCTS",
    accentColor: "#0E1E38", // Navy
    accentBg: "bg-[#0E1E38]",
    icon: "Paintbrush",
    products: [
      {
        id: "touch-up-spray-paint",
        name: "Touch Up Spray Paint",
        subname: "Precision Finish. Lasting Protection.",
        image: "/images/Touch Up Spray Paint.jpeg",
        packSizes: ["250 ml"],
        description: "Precisely shade-matched acrylic spray paint formulated for automotive touch-ups, appliance repairs, and powder-coated electrical panels.",
        features: [
          "Precisely shade-matched to OEM & RAL codes",
          "Automotive touch-ups & appliance repairs",
          "Quick drying & long-lasting glossy film",
          "Net Vol.: 250 ml"
        ],
        applications: ["Electrical control panels & switchgears", "Automotive body panels", "Home appliances", "Machinery enclosures"]
      },
      {
        id: "metal-spray-coating",
        name: "Metal Spray Coating",
        subname: "Strong Finish. Lasting Protection.",
        image: "/images/Metal Spray Coating.jpeg",
        packSizes: ["400 ml"],
        description: "High-grade industrial protective spray coating for metal gears, brackets, and structural components. Provides a hard, uniform barrier against weather and mechanical wear.",
        features: [
          "Hard, durable and uniform protective finish",
          "Weather resistant and rust & corrosion resistant",
          "Smooth atomization and quick drying",
          "Net Content: 400 ml"
        ],
        applications: ["Machinery gears & brackets", "Factory equipment housings", "Industrial valves and pumps"]
      }
    ]
  },
  {
    id: "primers",
    title: "Primers",
    tagline: "Red oxide, zinc chromate & zinc phosphate 20L primers",
    count: "3 PRODUCTS",
    accentColor: "#E86927", // Orange
    accentBg: "bg-[#E86927]",
    icon: "Layers",
    products: [
      {
        id: "red-oxide-primer",
        name: "Red Oxide Metal Primer",
        subname: "Rust Protection • Strong Adhesion",
        image: "/images/Red Oxide Metal Primer.jpeg",
        packSizes: ["20 Litre"],
        description: "Heavy-duty anti-corrosive primer formulated with synthetic red iron oxide pigments for superior adhesion on mild steel, iron, and structural members.",
        features: [
          "Prevents rust & corrosion effectively",
          "Excellent adhesion on Steel, Iron & Aluminium",
          "Smooth finish creating the ideal base for topcoats",
          "Heavy-duty 20 Litre industrial bucket"
        ],
        applications: ["Industrial steel structures", "Heavy fabrication beams", "Agricultural implements", "Railing and trusses"]
      },
      {
        id: "zinc-chromate-yellow",
        name: "Zinc Chromate Yellow Primer",
        subname: "Anti-Corrosive Primer Coat",
        image: "/images/Zinc Chromate Yellow Primer.jpeg",
        packSizes: ["20 Litre"],
        description: "Industrial yellow anti-corrosive primer providing active chemical passivation on steel, iron, and aluminium against aggressive outdoor exposure.",
        features: [
          "Excellent corrosion protection with active chromate passivator",
          "Strong mechanical adhesion to metal surfaces",
          "Smooth finish for enamel and PU topcoats",
          "Heavy-duty 20 Litre industrial bucket"
        ],
        applications: ["Marine equipment", "Automotive chassis", "Industrial structures", "Aluminium assemblies"]
      },
      {
        id: "zinc-phosphate-primer",
        name: "Zinc Phosphate Primer",
        subname: "Anti-Corrosive Primer Coat",
        image: "/images/ZInc Phosphate Primer.jpeg",
        packSizes: ["20 Litre"],
        description: "Non-toxic anti-corrosive primer with zinc phosphate pigments. Delivers exceptional barrier and sacrificial protection without toxic chromates.",
        features: [
          "Excellent corrosion protection for metal surfaces",
          "Strong adhesion on Steel, Iron & Aluminium",
          "Ideal base for all high-build top coats",
          "Heavy-duty 20 Litre industrial bucket"
        ],
        applications: ["Structural fabrication", "Chemical plant framing", "Storage tanks", "Architectural metalwork"]
      }
    ]
  },
  {
    id: "release-silicone",
    title: "Release & Silicone",
    tagline: "Mould release & industrial silicone sprays",
    count: "2 PRODUCTS",
    accentColor: "#64748b", // Slate
    accentBg: "bg-[#64748b]",
    icon: "Sparkles",
    products: [
      {
        id: "silicone-spray",
        name: "Silicone Spray",
        subname: "General Industrial Use",
        image: "/images/Silicon Spray.jpeg",
        packSizes: ["400 ml"],
        description: "Pure multi-purpose industrial silicone lubricant and release spray. Provides smooth lubrication, water resistance, and surface protection across plastic, rubber, and metal.",
        features: [
          "High lubricity silicone lubricating film",
          "Water resistant surface protection barrier",
          "Safe on rubber, plastic & metal",
          "Net Content: 400 ml with precision nozzle"
        ],
        applications: ["Plastic injection moulding", "Conveyor belts and guides", "Rubber seals and O-rings", "Packaging machines"]
      },
      {
        id: "mould-release-spray",
        name: "Mould Release Spray",
        subname: "For Easy Release of Moulded Parts",
        image: "/images/Mould Release Spray.jpeg",
        packSizes: ["400 ml"],
        description: "Engineered specifically for plastic, rubber, and composite moulding. Prevents sticking, ensures clean part release, and increases mould tooling life.",
        features: [
          "Prevents sticking and ensures clean release",
          "Increases mould and die tooling lifespan",
          "Leaves zero residue or staining on moulded parts",
          "Net Content: 400 ml with outer packaging box"
        ],
        applications: ["Plastic injection moulding", "Compression moulding", "Die casting release", "Polyurethane tooling"]
      }
    ]
  }
];
