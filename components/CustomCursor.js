"use client";
import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const outerRingRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    // Hide native cursor by adding class to body
    document.body.classList.add("custom-cursor-enabled");

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Instantly position the inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
      }

      if (isHidden) {
        setIsHidden(false);
        // Sync ring position on first movement
        ringRef.current.x = e.clientX;
        ringRef.current.y = e.clientY;
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Dynamic hover listeners for links, buttons, and items with data-cursor-text
    const handleHoverStart = (e) => {
      setIsHovered(true);
      const target = e.currentTarget;
      const text = target.getAttribute("data-cursor-text");
      
      if (text) {
        setCursorText(text);
      } else if (
        target.tagName === "A" || 
        target.getAttribute("role") === "link"
      ) {
        // If it's a social link in a row, or a simple navigation item
        setCursorText("LINK");
      } else if (
        target.tagName === "BUTTON" || 
        target.getAttribute("role") === "button"
      ) {
        setCursorText("TAP");
      } else {
        setCursorText("GO");
      }
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
      setCursorText("");
    };

    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], [data-cursor-text], input, textarea, select, [role='tab']"
      );
      interactives.forEach((el) => {
        // Remove existing to prevent duplication
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
        
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    attachHoverListeners();

    // Re-check periodically to bind dynamically added elements
    const interval = setInterval(attachHoverListeners, 1000);

    // Animation loop for smooth trailing lag on the outer ring (lerp)
    const updateRingPosition = () => {
      const ease = 0.15; // interpolation factor
      
      // Calculate target differences
      const dx = mouseRef.current.x - ringRef.current.x;
      const dy = mouseRef.current.y - ringRef.current.y;

      ringRef.current.x += dx * ease;
      ringRef.current.y += dy * ease;

      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      rafId.current = requestAnimationFrame(updateRingPosition);
    };

    rafId.current = requestAnimationFrame(updateRingPosition);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(interval);
      cancelAnimationFrame(rafId.current);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] bg-crimson hidden md:block"
        style={{
          willChange: "transform",
        }}
      />
      
      {/* Outer Ring */}
      <div
        ref={outerRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center text-center transition-all duration-300 ${
          isHovered
            ? "w-14 h-14 bg-crimson border border-crimson text-white scale-100"
            : "w-8 h-8 bg-transparent border border-crimson/40 scale-100"
        }`}
        style={{
          willChange: "transform, width, height, background-color, border-color",
        }}
      >
        {isHovered && cursorText && (
          <span className="font-serif text-[9px] font-bold tracking-[0.15em] leading-none select-none text-white animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
