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
    },
  },
  plugins: [],
};
