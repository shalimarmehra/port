"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PreLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        if (onComplete) onComplete();
      }
    });

    // Animate counter from 0 to 100
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counterObj.value) + "%";
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${counterObj.value}%`;
        }
      }
    })
    .to(".preloader-text", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    });

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-ink z-[99999] overflow-hidden"
    >
      <div className="relative flex flex-col items-center gap-6 w-full max-w-xs px-8">
        
        {/* Loading text */}
        <div className="preloader-text text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold flex justify-between w-full">
          <span>Loading</span>
          <span ref={counterRef} className="text-white">0%</span>
        </div>

        {/* Progress bar */}
        <div className="preloader-text w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-crimson rounded-full w-0" />
        </div>
        
        {/* Monogram */}
        <div className="preloader-text absolute top-12 font-serif text-8xl font-black text-white/5 select-none pointer-events-none tracking-tighter">
          SM
        </div>
      </div>
    </div>
  );
};

export default PreLoader;