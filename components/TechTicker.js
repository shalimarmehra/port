"use client";
import React from "react";

const TechTicker = () => {
  const row1Items = [
    "FULL-STACK DEVELOPER",
    "REACT & NEXT.JS SPECIALIST",
    "UI/UX DIGITAL DESIGNER",
    "FOUNDER OF DEV DOSSIER",
    "API PIPELINES & SYSTEMS",
  ];

  const row2Items = [
    "NODE.JS & DATABASES",
    "CONTENT CREATOR",
    "BUSINESS ENTREPRENEUR",
    "NEXT.JS 15 & REACT 18",
    "GSAP & HIGH INTERACTION",
  ];

  return (
    <div className="w-full border-y border-warm-gray-200/80 bg-white py-6 overflow-hidden select-none relative z-10 my-16 theme-transition flex flex-col gap-4">
      {/* Row 1: Scrolling Left */}
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-ink uppercase font-serif text-[11px] sm:text-xs tracking-[0.25em] font-extrabold">
        {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
          <div key={`row1-${idx}`} className="flex items-center gap-16">
            <span className="theme-transition">{item}</span>
            <span className="text-crimson text-sm sm:text-base animate-pulse">✦</span>
          </div>
        ))}
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="flex animate-[marquee_24s_linear_infinite_reverse] whitespace-nowrap gap-16 text-gray-500 uppercase font-mono text-[9px] sm:text-[10px] tracking-[0.2em] border-t border-warm-gray-100/50 pt-4">
        {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
          <div key={`row2-${idx}`} className="flex items-center gap-16">
            <span className="theme-transition">{item}</span>
            <span className="text-crimson text-xs">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
