"use client";
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const BottomToUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-warm-gray-200 hover:border-crimson text-gray-400 hover:text-crimson transition-all duration-300 hover:-translate-y-1 shadow-lg active:scale-95 group"
        aria-label="Scroll to top"
      >
        <FaAngleUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};

export default BottomToUpButton;