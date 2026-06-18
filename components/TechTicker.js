"use client";
import React from "react";

const TechTicker = () => {
  const items = [
    "FULL-STACK DEVELOPER",
    "REACT & NEXT.JS SPECIALIST",
    "UI/UX DIGITAL DESIGNER",
    "FOUNDER OF DEV DOSSIER",
    "API PIPELINES & SYSTEMS",
    "NODE.JS & DATABASES",
    "CONTENT CREATOR",
    "BUSINESS ENTREPRENEUR",
  ];

  return (
    <div className="w-full border-y border-warm-gray-200/80 bg-white py-5 overflow-hidden select-none relative z-10 my-16 theme-transition">
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-ink uppercase font-mono text-[10px] sm:text-xs tracking-[0.25em] font-bold">
        {/* Render triple sets of items to guarantee seamless looping across wide resolutions */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-16">
            <span className="theme-transition">{item}</span>
            <span className="text-crimson text-sm sm:text-base animate-pulse">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
