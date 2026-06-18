"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsPaletteFill } from "react-icons/bs";

const themes = [
  {
    id: "crimson",
    name: "Crimson Rose",
    primary: "#C62828",
    primaryRgb: "198, 40, 40",
    secondary: "#8B0000",
    secondaryRgb: "139, 0, 0",
    light: "#E57373",
    bg50: "#FEF2F2",
  },
  {
    id: "sage",
    name: "Forest Sage",
    primary: "#2A5A44",
    primaryRgb: "42, 90, 68",
    secondary: "#1E3F2F",
    secondaryRgb: "30, 63, 47",
    light: "#73A98C",
    bg50: "#EEF6F2",
  },
  {
    id: "indigo",
    name: "Deep Indigo",
    primary: "#312E81",
    primaryRgb: "49, 46, 129",
    secondary: "#1E1B4B",
    secondaryRgb: "30, 27, 75",
    light: "#6366F1",
    bg50: "#EEF2FF",
  },
  {
    id: "ochre",
    name: "Solar Ochre",
    primary: "#B25E00",
    primaryRgb: "178, 94, 0",
    secondary: "#7F4200",
    secondaryRgb: "127, 66, 0",
    light: "#F59E0B",
    bg50: "#FFFBEB",
  },
  {
    id: "violet",
    name: "Royal Violet",
    primary: "#581C87",
    primaryRgb: "88, 28, 135",
    secondary: "#3B0764",
    secondaryRgb: "59, 7, 100",
    light: "#8B5CF6",
    bg50: "#FAF5FF",
  },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("crimson");
  const panelRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Load saved theme on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) {
        const found = themes.find((t) => t.id === saved);
        if (found) {
          applyTheme(found);
        }
      }
    } catch (e) {}
  }, []);

  const applyTheme = (theme) => {
    setActiveTheme(theme.id);
    const root = document.documentElement;
    root.style.setProperty("--accent-primary", theme.primary);
    root.style.setProperty("--accent-primary-rgb", theme.primaryRgb);
    root.style.setProperty("--accent-secondary", theme.secondary);
    root.style.setProperty("--accent-secondary-rgb", theme.secondaryRgb);
    root.style.setProperty("--accent-light", theme.light);
    root.style.setProperty("--accent-50", theme.bg50);
    
    // For elements that styled with standard Tailwind selection fallback
    const styleId = "custom-selection-style";
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.innerHTML = `
      ::selection {
        background-color: rgba(${theme.primaryRgb}, 0.15) !important;
      }
    `;

    try {
      localStorage.setItem("portfolio-theme", theme.id);
    } catch (e) {}
    
    // Dispatch global theme change event
    window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: theme }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-40" ref={panelRef}>
      {/* Floating Theme Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-warm-gray-200 hover:border-crimson text-gray-500 hover:text-crimson shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 group"
        aria-label="Theme Customizer"
        data-cursor-text="THEME"
      >
        <BsPaletteFill className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
      </button>

      {/* Slide-up Panel */}
      <div
        className={`absolute bottom-16 left-0 w-64 bg-white border border-warm-gray-200 p-5 rounded-2xl shadow-xl transition-all duration-300 origin-bottom-left ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-4 pointer-events-none"
        }`}
      >
        <h4 className="font-serif text-sm font-bold text-ink mb-1.5">
          Editorial Accents
        </h4>
        <p className="text-[10px] text-gray-400 font-sans tracking-wide uppercase font-semibold mb-4">
          Select Accent Tone
        </p>

        <div className="space-y-2.5">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme)}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left ${
                activeTheme === theme.id
                  ? "bg-cream border-crimson text-ink font-semibold"
                  : "bg-transparent border-warm-gray-200 text-gray-500 hover:text-ink hover:border-ink"
              }`}
            >
              <span className="text-xs tracking-tight">{theme.name}</span>
              
              {/* Color Circles */}
              <div className="flex gap-1">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-warm-gray-200 shadow-sm"
                  style={{ backgroundColor: theme.primary }}
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-warm-gray-200 text-[9px] text-gray-400 text-center font-bold tracking-wider uppercase">
          Saved in Browser Profile
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
export { themes };
