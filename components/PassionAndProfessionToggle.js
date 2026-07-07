"use client";
import React, { useState, useEffect } from "react";
import Passion from "./passion/Passion";
import Profession from "./profession/Profession";

const PassionAndProfessionToggle = () => {
  const [viewState, setViewState] = useState("profession");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isSticky, setIsSticky] = useState(false);

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

  // Scroll handler to control sticky compactness
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div 
        id="portfolio-toggle-container" 
        className={`sticky top-[72px] z-40 w-full flex flex-col items-center justify-center transition-all duration-300 ${
          isSticky 
            ? "py-3 bg-transparent" 
            : "pt-16 pb-4 bg-transparent"
        }`}
      >
        {/* Title: Hides when sticky to save vertical space */}
        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden ${
          isSticky 
            ? "max-h-0 opacity-0 mb-0 pointer-events-none" 
            : "max-h-8 opacity-100 mb-6"
        } ${
          viewState === "profession" ? "text-crimson" : "text-rose-600"
        }`}>
          Select Portfolio Perspective
        </h2>
        
        {/* The Toggle Pill (frosted glass gradient background, borderless, glowing spread shadows) */}
        <div 
          className={`relative flex items-center bg-gradient-to-r from-rose-500/5 via-purple-500/5 to-cyan-500/5 bg-white/60 backdrop-blur-md transition-all duration-300 ${
            isSticky 
              ? "w-[240px] p-1 shadow-[0_0_12px_rgba(244,63,94,0.35),_0_0_20px_rgba(34,211,238,0.25)]" 
              : "w-[280px] p-1.5 shadow-[0_0_15px_rgba(244,63,94,0.25),_0_0_25px_rgba(34,211,238,0.2)]"
          } rounded-full`}
        >
          {/* Sliding indicator - Always shows custom active matching gradient */}
          <div
            className={`absolute rounded-full transition-all duration-300 ease-out shadow-sm bg-gradient-to-r ${
              viewState === "profession" 
                ? "from-crimson via-crimson to-crimson-dark" 
                : "from-rose-600 via-rose-500 to-amber-500"
            }`}
            style={{
              top: isSticky ? "4px" : "6px",
              bottom: isSticky ? "4px" : "6px",
              left: isSticky ? "4px" : "6px",
              width: isSticky ? "calc(50% - 4px)" : "calc(50% - 6px)",
              transform: viewState === "profession" ? "translateX(0)" : "translateX(100%)",
            }}
          />

          <button
            onClick={() => toggleView("profession")}
            className={`relative z-10 flex-1 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${
              isSticky ? "py-1.5" : "py-2"
            } ${
              viewState === "profession" ? "text-white" : "text-gray-500 hover:text-ink"
            }`}
          >
            Profession
          </button>
          
          <button
            onClick={() => toggleView("passion")}
            className={`relative z-10 flex-1 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${
              isSticky ? "py-1.5" : "py-2"
            } ${
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
