"use client";
import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-crimson z-50 transition-all duration-75 ease-out"
      style={{
        width: `${progress}%`,
        boxShadow: "0 0 10px rgba(198, 40, 40, 0.6)",
      }}
    />
  );
};

export default ScrollProgress;
export { ScrollProgress };
