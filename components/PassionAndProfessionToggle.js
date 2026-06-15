"use client";
import React, { useEffect, useState } from "react";
import Passion from "./passion/Passion";
import Profession from "./profession/Profession";

const PassionAndProfessionToggle = () => {
  const [view, setView] = useState("profession");

  // Load saved preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pp-view");
      if (saved === "passion" || saved === "profession") setView(saved);
    } catch (e) {}
  }, []);

  // Persist preference
  useEffect(() => {
    try {
      localStorage.setItem("pp-view", view);
    } catch (e) {}
  }, [view]);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-24 mb-12">
      {/* Title block */}
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <h2 className="text-xs sm:text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-2">
          Interactive Portfolio
        </h2>
        <p className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
          Explore my Professional Career or Creative Passions
        </p>
      </div>

      {/* Switcher Toggle pill */}
      <div className="flex justify-center mb-10">
        <div
          role="tablist"
          aria-label="Choose Passion or Profession"
          className="relative inline-flex p-1 bg-gray-900/60 border border-white/10 rounded-full shadow-lg"
        >
          {/* Sliding selection pill */}
          <div
            aria-hidden="true"
            className="absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ease-out shadow-[0_2px_12px_rgba(99,102,241,0.4)]"
            style={{
              transform: view === "passion" ? "translateX(100%)" : "translateX(0%)",
            }}
          />

          <button
            role="tab"
            aria-selected={view === "profession"}
            onClick={() => setView("profession")}
            className={`relative z-10 w-32 sm:w-40 text-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors duration-300 focus:outline-none ${
              view === "profession" ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Profession
          </button>

          <button
            role="tab"
            aria-selected={view === "passion"}
            onClick={() => setView("passion")}
            className={`relative z-10 w-32 sm:w-40 text-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors duration-300 focus:outline-none ${
              view === "passion" ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Passion
          </button>
        </div>
      </div>

      {/* Content wrapper */}
      <div
        key={view}
        className="transition-all duration-500 ease-out"
      >
        {view === "passion" ? <Passion /> : <Profession />}
      </div>
    </div>
  );
};

export default PassionAndProfessionToggle;
