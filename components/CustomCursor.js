"use client";
import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);
  const requestRef = useRef(null);
  
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide native cursor on devices that support hover
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);
    document.body.classList.add("cursor-none");

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateRingPosition = () => {
      setRingPosition((prev) => {
        // Lerp for smooth trailing effect
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(updateRingPosition);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      // Search up the DOM tree for a cursor-text attribute or a clickable element
      const cursorElement = target.closest('[data-cursor-text]');
      const cursorTextAttr = cursorElement ? cursorElement.getAttribute("data-cursor-text") : null;
      
      const isClickable = 
        target.tagName?.toLowerCase() === 'a' || 
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute("role") === "button";

      if (cursorTextAttr) {
        setIsHovering(true);
        setCursorText(cursorTextAttr);
      } else if (isClickable) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
      setCursorText("");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    
    requestRef.current = requestAnimationFrame(updateRingPosition);

    return () => {
      document.body.classList.remove("cursor-none");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference">
      {/* Inner Dot */}
      <div 
        ref={cursorRef}
        className={`fixed left-0 top-0 w-2 h-2 bg-white rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-0' : 'scale-100'}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 0 : 1})` }}
      />
      
      {/* Outer Ring / Text Container */}
      <div 
        ref={ringRef}
        className={`fixed left-0 top-0 rounded-full border border-white flex items-center justify-center transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 
          ${isHovering ? (cursorText ? 'w-24 h-24 bg-white border-transparent' : 'w-12 h-12 bg-white/20') : 'w-8 h-8'}`}
        style={{ transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)` }}
      >
        <span 
          ref={textRef}
          className={`text-black text-[10px] font-bold tracking-[0.2em] uppercase transition-opacity duration-300 whitespace-nowrap ${cursorText ? 'opacity-100' : 'opacity-0'}`}
        >
          {cursorText}
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;
