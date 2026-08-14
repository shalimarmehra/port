"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaAngleUp } from "react-icons/fa";
import gsap from "gsap";

const SCROLL_THRESHOLD = 300;
const THROTTLE_MS = 50;
const PROGRESS_RADIUS = 20;
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;

const BottomToUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const buttonRef = useRef(null);
  const wasVisible = useRef(false);

  // Throttled scroll handler for performance
  const handleScroll = useCallback(() => {
    let ticking = false;
    return () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

        setScrollProgress(progress);
        setIsVisible(scrollTop > SCROLL_THRESHOLD);
        ticking = false;
      });
    };
  }, []);

  // GSAP entrance/exit animations
  useEffect(() => {
    if (!buttonRef.current) return;

    if (isVisible && !wasVisible.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 24, scale: 0.6 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    } else if (!isVisible && wasVisible.current) {
      gsap.to(buttonRef.current, {
        opacity: 0,
        y: 16,
        scale: 0.6,
        duration: 0.3,
        ease: "power2.in",
      });
    }

    wasVisible.current = isVisible;
  }, [isVisible]);

  // Attach throttled scroll listener
  useEffect(() => {
    const throttledScroll = handleScroll();

    // Throttle wrapper
    let lastCall = 0;
    const throttled = () => {
      const now = Date.now();
      if (now - lastCall >= THROTTLE_MS) {
        lastCall = now;
        throttledScroll();
      }
    };

    window.addEventListener("scroll", throttled, { passive: true });
    throttledScroll(); // initial check
    return () => window.removeEventListener("scroll", throttled);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  const strokeDashoffset =
    PROGRESS_CIRCUMFERENCE - scrollProgress * PROGRESS_CIRCUMFERENCE;

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-6 right-6 z-40"
      style={{ opacity: 0, pointerEvents: isVisible ? "auto" : "none" }}
    >
      <button
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-warm-gray-200 text-warm-gray-400 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-crimson hover:text-crimson active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 group"
        aria-label="Scroll to top"
        tabIndex={isVisible ? 0 : -1}
      >
        {/* Circular scroll progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="24"
            r={PROGRESS_RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={PROGRESS_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            className="text-crimson transition-[stroke-dashoffset] duration-200 ease-out opacity-60 group-hover:opacity-100"
          />
        </svg>

        {/* Arrow icon */}
        <FaAngleUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};

export default BottomToUpButton;
