/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair", "serif"],
      },
    },
  },
  safelist: ["bg-[#DDEEFE]", "bg-[#D9F6F1]", "bg-[#E8D5FF]", "bg-[#FFD5D5]", "bg-[#FFE5CC]", "bg-[#f7c1d5]", "bg-[#C8E6C9]"],
  plugins: [],
};
