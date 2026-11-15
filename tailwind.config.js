/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aerotek: {
          orange: "#E86927",
          "orange-hover": "#D55819",
          "orange-light": "#FFF3EB",
          navy: "#0E1E38",
          "navy-dark": "#0A1629",
          "navy-light": "#162846",
          "navy-card": "#13233E",
          tag: "#4E7B3B",
          "tag-bg": "#EBF4E5",
          accent: "#22c55e",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "36px 36px",
      },
    },
  },
  plugins: [],
};
