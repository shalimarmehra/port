"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, [role='tab']");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial attachment
    addHoverListeners();

    // Re-run periodically in case DOM updates (e.g. view toggle)
    const interval = setInterval(addHoverListeners, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(interval);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 hidden md:block ${
          isHovered
            ? "w-12 h-12 bg-indigo-500/10 border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            : "w-7 h-7 border border-white/30"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transitionProperty: "width, height, background-color, border-color, box-shadow",
          transitionDuration: "0.15s",
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-200 ${
          isHovered ? "bg-teal-400 scale-[2]" : "bg-indigo-400"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
