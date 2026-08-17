"use client";
import React, { useState, useEffect } from "react";
import Passion from "./passion/Passion";
import Profession from "./profession/Profession";
import { BsBriefcaseFill, BsHeartFill, BsStars } from "react-icons/bs";

const PassionAndProfessionToggle = () => {
  const [viewState, setViewState] = useState("profession");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(1);
  const [contentTransform, setContentTransform] = useState("translateY(0px) scale(1)");
  const [isSticky, setIsSticky] = useState(false);

  // Load from localStorage on mount & listen to external portfolio-view-change events
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
    }

    const handleViewChange = (e) => {
      const nextView = e.detail && e.detail.view ? e.detail.view : e.detail;
      if (nextView === "passion" || nextView === "profession") {
        setViewState(nextView);
      }
    };

    window.addEventListener("portfolio-view-change", handleViewChange);
    return () =>
      window.removeEventListener("portfolio-view-change", handleViewChange);
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleView = (view) => {
    if (view === viewState || isTransitioning) return;
    setIsTransitioning(true);

    // 1. Instant Tab Indicator Feedback: Update state immediately so tab indicator slides with zero latency
    setViewState(view);
    localStorage.setItem("portfolioViewState", view);

    // 2. Smooth Crossfade Transition on Content
    setContentOpacity(0.2);
    setContentTransform("translateY(8px) scale(0.995)");

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio-view-change", { detail: view })
      );
    }

    setTimeout(() => {
      setContentOpacity(1);
      setContentTransform("translateY(0px) scale(1)");
      setIsTransitioning(false);
    }, 220);
  };

  const handleKeyDown = (e, view) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleView(view);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      toggleView("passion");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      toggleView("profession");
    }
  };

  return (
    <>
      {/* Sleek Journey Header Toggle Container */}
      <div
        id="portfolio-toggle-container"
        className={`sticky top-[64px] sm:top-[68px] z-40 w-full flex flex-col items-center justify-center transition-all duration-500 ease-out ${isSticky
          ? "py-2.5 bg-white/70 backdrop-blur-xl border-b border-neutral-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          : "pt-12 sm:pt-16 pb-6 bg-transparent"
          }`}
      >
        {/* Dynamic Halo Glow behind Switcher */}
        <div
          className={`absolute pointer-events-none transition-all duration-700 blur-2xl rounded-full ${isSticky ? "w-48 h-12 opacity-40" : "w-72 h-20 opacity-70"
            } ${viewState === "profession"
              ? "bg-gradient-to-r from-crimson/20 via-red-500/15 to-cyan-500/20"
              : "bg-gradient-to-r from-rose-500/30 via-amber-500/20 to-purple-500/20"
            }`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />

        {/* Title & Perspective Tagline (hides smoothly when sticky) */}
        <div
          className={`flex flex-col items-center transition-all duration-500 ease-in-out overflow-hidden ${isSticky
            ? "max-h-0 opacity-0 mb-0 pointer-events-none"
            : "max-h-20 opacity-100 mb-5"
            }`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-sans font-extrabold uppercase tracking-[0.25em] px-3.5 py-1 rounded-full border shadow-2xs transition-all duration-500 ${viewState === "profession"
                ? "bg-crimson/5 border-crimson/20 text-crimson"
                : "bg-rose-50 border-rose-200 text-rose-600"
                }`}
            >
              <BsStars className="text-[11px] animate-pulse" />
              Perspective Mode
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans font-medium text-gray-500 tracking-wide text-center px-4">
            {viewState === "profession" ? (
              <span>
                Full-Stack Architecture &bull; Engineering &bull; Systems Design
              </span>
            ) : (
              <span>
                Creative Content &bull; Film & Videography &bull; Gaming & Media
              </span>
            )}
          </p>
        </div>

        {/* The Glassmorphic Toggle Switcher Pill */}
        <div
          role="tablist"
          aria-label="Portfolio Perspective Switcher"
          className={`relative flex items-center bg-white/70 backdrop-blur-2xl border border-white/90 ring-1 ring-black/5 transition-all duration-300 ease-out ${isSticky
            ? "w-[260px] sm:w-[290px] p-1 shadow-[0_4px_20px_rgba(0,0,0,0.06),_0_0_15px_rgba(198,40,40,0.1)]"
            : "w-[290px] sm:w-[320px] p-1.5 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08),_0_0_20px_rgba(244,63,94,0.12)]"
            } rounded-full`}
        >
          {/* Sliding Indicator (Magic Pill with fluid spring animation & glow shadow) */}
          <div
            className={`absolute rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.45,0.64,1)] ${viewState === "profession"
              ? "bg-gradient-to-r from-crimson via-crimson to-crimson-dark shadow-[0_4px_18px_rgba(198,40,40,0.45)]"
              : "bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 shadow-[0_4px_18px_rgba(244,63,94,0.45)]"
              }`}
            style={{
              top: isSticky ? "4px" : "6px",
              bottom: isSticky ? "4px" : "6px",
              left: isSticky ? "4px" : "6px",
              width: isSticky ? "calc(50% - 4px)" : "calc(50% - 6px)",
              transform:
                viewState === "profession"
                  ? "translateX(0)"
                  : "translateX(100%)",
            }}
          />

          {/* Profession Button */}
          <button
            role="tab"
            id="tab-profession"
            aria-selected={viewState === "profession"}
            aria-controls="panel-profession"
            tabIndex={0}
            onClick={() => toggleView("profession")}
            onKeyDown={(e) => handleKeyDown(e, "profession")}
            className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 font-sans font-bold uppercase tracking-wider transition-all duration-300 rounded-full group ${isSticky ? "py-1.5 text-[10px]" : "py-2 text-[11px]"
              } ${viewState === "profession"
                ? "text-white drop-shadow-xs"
                : "text-gray-500 hover:text-ink hover:bg-neutral-100/40"
              }`}
          >
            <BsBriefcaseFill
              className={`transition-transform duration-300 group-hover:scale-110 ${isSticky ? "text-xs" : "text-sm"
                } ${viewState === "profession" ? "text-white" : "text-gray-400 group-hover:text-crimson"}`}
            />
            <span>Profession</span>
          </button>

          {/* Passion Button */}
          <button
            role="tab"
            id="tab-passion"
            aria-selected={viewState === "passion"}
            aria-controls="panel-passion"
            tabIndex={0}
            onClick={() => toggleView("passion")}
            onKeyDown={(e) => handleKeyDown(e, "passion")}
            className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 font-sans font-bold uppercase tracking-wider transition-all duration-300 rounded-full group ${isSticky ? "py-1.5 text-[10px]" : "py-2 text-[11px]"
              } ${viewState === "passion"
                ? "text-white drop-shadow-xs"
                : "text-gray-500 hover:text-ink hover:bg-neutral-100/40"
              }`}
          >
            <BsHeartFill
              className={`transition-transform duration-300 group-hover:scale-110 ${isSticky ? "text-xs" : "text-sm"
                } ${viewState === "passion" ? "text-white" : "text-rose-400 group-hover:text-rose-600"}`}
            />
            <span>Passion</span>
          </button>
        </div>
      </div>

      {/* Render the selected view component with smooth crossfade */}
      <div
        id={viewState === "passion" ? "panel-passion" : "panel-profession"}
        role="tabpanel"
        aria-labelledby={viewState === "passion" ? "tab-passion" : "tab-profession"}
        className="w-full transition-all duration-300 ease-out will-change-[transform,opacity]"
        style={{
          opacity: contentOpacity,
          transform: contentTransform,
        }}
      >
        {viewState === "passion" ? <Passion /> : <Profession />}
      </div>
    </>
  );
};

export default PassionAndProfessionToggle;
