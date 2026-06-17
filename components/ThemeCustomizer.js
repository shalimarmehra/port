"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsPaletteFill } from "react-icons/bs";

const themes = [
  {
    id: "indigo",
    name: "Obsidian Indigo",
    primary: "#6366f1",
    primaryRgb: "99, 102, 241",
    secondary: "#8b5cf6",
    secondaryRgb: "139, 92, 246",
    tertiary: "#14b8a6",
  },
  {
    id: "teal",
    name: "Emerald Teal",
    primary: "#0ea5e9",
    primaryRgb: "14, 165, 233",
    secondary: "#10b981",
    secondaryRgb: "16, 185, 129",
    tertiary: "#3b82f6",
  },
  {
    id: "rose",
    name: "Neon Rose",
    primary: "#f43f5e",
    primaryRgb: "244, 63, 94",
    secondary: "#a855f7",
    secondaryRgb: "168, 85, 247",
    tertiary: "#ec4899",
  },
  {
    id: "amber",
    name: "Solar Amber",
    primary: "#f59e0b",
    primaryRgb: "245, 158, 11",
    secondary: "#ea580c",
    secondaryRgb: "234, 88, 12",
    tertiary: "#eab308",
  },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("indigo");
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

  // Load saved theme
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
    root.style.setProperty("--accent-tertiary", theme.tertiary);
    try {
      localStorage.setItem("portfolio-theme", theme.id);
    } catch (e) {}
  };

  return (
    <div className="fixed bottom-6 left-6 z-40" ref={panelRef}>
      {/* Floating Gear Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-md border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(var(--accent-primary-rgb),0.3)] active:scale-95 group"
        aria-label="Theme Customizer"
        style={{
          boxShadow: `0 0 20px -5px rgba(${
            themes.find((t) => t.id === activeTheme)?.primaryRgb
          }, 0.25)`,
        }}
      >
        <BsPaletteFill className={`w-5 h-5 transition-transform duration-500 group-hover:rotate-45 text-accent`} />
      </button>

      {/* Slide-out Menu Panel */}
      <div
        className={`absolute bottom-16 left-0 w-64 glass-panel p-5 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 origin-bottom-left ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-4 pointer-events-none"
        }`}
      >
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-display">
          Customize Theme Accent
        </h4>

        <div className="space-y-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme)}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left ${
                activeTheme === theme.id
                  ? "bg-white/10 border-indigo-500/40 text-white"
                  : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-xs font-semibold">{theme.name}</span>
              
              {/* Colored Circles */}
              <div className="flex gap-1">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20"
                  style={{ backgroundColor: theme.primary }}
                />
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20"
                  style={{ backgroundColor: theme.secondary }}
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-gray-500 text-center font-medium">
          Saved to your browser profile
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
