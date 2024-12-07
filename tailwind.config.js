/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ost: ["OLD_STANDARD_TT", "serif"],
        italianno: ["Italianno", "cursive"],
        MSD: ["MSD", "cursive"],
        Pixelify: ["Pixelify Sans", "sans-serif"],
        MOD20: ["MOD20", "serif"],
        Mitr: ["Mitr", "sans-serif"],
        MS: ["MS", "sans-serif"],
      },
    },
  },
  plugins: [],
};
