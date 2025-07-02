
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Add based on your project structure
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // red
        secondary: "#000000", // black
        background: "#FFFFFF", // white
      },
      animation: {
        "zoom-slow": "zoomInOut 20s ease-in-out infinite",
        gradient: "gradientBG 10s ease infinite", // ✅ Added
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2.05)" },
        },
        gradientBG: {
          "0%": { backgroundPosition: "0% 100%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 100%" },
        }, // ✅ Added
      },
      fontFamily: {
        eurostile: ["Eurostile", "sans-serif"], // ✅ Added
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

