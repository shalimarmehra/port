"use client";
import React, { useState, useEffect } from "react";
import Passion from "./passion/Passion";
import Profession from "./profession/Profession";

const PassionAndProfessionToggle = () => {
  const [viewState, setViewState] = useState("profession");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
    }
  }, []);

  const toggleView = (view) => {
    setViewState(view);
    localStorage.setItem("portfolioViewState", view);
  };

  return (
    <>
      {/* Toggle UI */}
      <div className="max-w-6xl mx-auto px-6 mt-16 mb-12 flex flex-col items-center justify-center text-center">
        
        {/* Title Block */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-crimson tracking-widest uppercase mb-2">
            Explore my world
          </p>
          <h2 className="font-serif text-3xl font-bold text-ink">
            {viewState === "profession" ? "Professional Engineering" : "Creative Passions"}
          </h2>
        </div>

        {/* The Toggle Pill */}
        <div className="relative flex items-center bg-white border border-warm-gray-200 p-1.5 rounded-full shadow-sm max-w-[320px] w-full">
          {/* Sliding indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-crimson rounded-full transition-transform duration-300 ease-out shadow-sm"
            style={{
              transform: viewState === "profession" ? "translateX(0)" : "translateX(100%)",
            }}
          />

          <button
            onClick={() => toggleView("profession")}
            className={`relative z-10 flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-full ${
              viewState === "profession" ? "text-white" : "text-gray-500 hover:text-ink"
            }`}
          >
            Profession
          </button>
          
          <button
            onClick={() => toggleView("passion")}
            className={`relative z-10 flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-full ${
              viewState === "passion" ? "text-white" : "text-gray-500 hover:text-ink"
            }`}
          >
            Passion
          </button>
        </div>
        
      </div>

      {/* Render the selected component */}
      <div className="w-full animate-fade-in">
        {viewState === "passion" ? <Passion /> : <Profession />}
      </div>
    </>
  );
};

export default PassionAndProfessionToggle;
