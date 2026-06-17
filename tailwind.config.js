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
        cream: "#FAF8F5",
        ivory: "#F5F0EB",
        crimson: {
          DEFAULT: "#C62828",
          dark: "#8B0000",
          light: "#E57373",
          50: "#FEF2F2",
        },
        ink: "#1A1A1A",
        warm: {
          gray: {
            50: "#FAF8F5",
            100: "#F5F0EB",
            200: "#E5E1DC",
            300: "#D4CFC8",
            400: "#B0ACA6",
            500: "#6B7280",
            600: "#4B5563",
          },
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        sans: ["Plus Jakarta Sans", "-apple-system", "sans-serif"],
      },
      animation: {
        "reveal-up": "revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-left": "slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
