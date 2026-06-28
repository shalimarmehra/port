"use client";
import React, { useState, useEffect } from "react";
import Passion from "./passion/Passion";
import Profession from "./profession/Profession";

const PassionAndProfessionToggle = () => {
  const [viewState, setViewState] = useState("profession");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
      // Dispatch immediately to let the navigation bar and dots adapt on load
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("portfolio-view-change", { detail: saved }));
        }
      }, 50);
    }
  }, []);

  const toggleView = (view) => {
    if (view === viewState || isTransitioning) return;
    setIsTransitioning(true);
    setOpacity(0);

    setTimeout(() => {
      setViewState(view);
      localStorage.setItem("portfolioViewState", view);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("portfolio-view-change", { detail: view }));
      }
      
      setOpacity(1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return (
    <>
      {/* Sleek Journey Header Toggle */}
      <div id="portfolio-toggle-container" className="flex flex-col items-center justify-center pt-16 pb-4 relative z-10">
        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 transition-colors duration-500 ${
          viewState === "profession" ? "text-crimson" : "text-rose-600"
        }`}>
          Select Portfolio Perspective
        </h2>
        
        {/* The Toggle Pill */}
        <div className="relative flex items-center bg-white/90 backdrop-blur-md border border-warm-gray-200 p-1.5 rounded-full shadow-sm w-[280px]">
          {/* Sliding indicator */}
          <div
            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-300 ease-out shadow-sm ${
              viewState === "profession" ? "bg-ink" : "bg-gradient-to-r from-rose-600 to-amber-500"
            }`}
            style={{
              transform: viewState === "profession" ? "translateX(0)" : "translateX(100%)",
            }}
          />

          <button
            onClick={() => toggleView("profession")}
            className={`relative z-10 flex-1 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${
              viewState === "profession" ? "text-white" : "text-gray-500 hover:text-ink"
            }`}
          >
            Profession
          </button>
          
          <button
            onClick={() => toggleView("passion")}
            className={`relative z-10 flex-1 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${
              viewState === "passion" ? "text-white" : "text-gray-500 hover:text-ink"
            }`}
          >
            Passion
          </button>
        </div>
      </div>

      {/* Render the selected component */}
      <div className="w-full transition-opacity duration-300 ease-in-out" style={{ opacity }}>
        {viewState === "passion" ? <Passion /> : <Profession />}
      </div>
    </>
  );
};

export default PassionAndProfessionToggle;
