"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GREETINGS = [
  "Hello",       // English
  "Namaste",     // Hindi
  "Bonjour",     // French
  "Hola",        // Spanish
  "Ciao",        // Italian
  "Konnichiwa",  // Japanese
  "SM"           // Monogram
];

const PreLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const greetingRef = useRef(null);

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
      duration: 2.2, // Slightly slower to let users appreciate greetings
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counterObj.value) + "%";
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${counterObj.value}%`;
        }
        
        // Update greeting based on percentage
        const greetingIndex = Math.min(
          Math.floor((counterObj.value / 100) * GREETINGS.length),
          GREETINGS.length - 1
        );
        if (greetingRef.current && greetingRef.current.innerText !== GREETINGS[greetingIndex]) {
          greetingRef.current.innerText = GREETINGS[greetingIndex];
          
          // Micro-bounce visual animation for each new language greeting
          gsap.fromTo(greetingRef.current,
            { opacity: 0, y: 15, rotateX: -30 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.35, ease: "back.out(2)" }
          );
        }
      }
    })
    .to(".preloader-text", {
      opacity: 0,
      y: -30,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.85,
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
      <div className="relative flex flex-col items-center gap-8 w-full max-w-xs px-8">
        
        {/* Large Greeting Header */}
        <div className="preloader-text h-20 flex items-center justify-center select-none">
          <h1 
            ref={greetingRef}
            className="font-serif text-4xl sm:text-5xl font-black text-white tracking-wide text-center"
          >
            Hello
          </h1>
        </div>

        {/* Loading text */}
        <div className="preloader-text text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold flex justify-between w-full">
          <span>Loading</span>
          <span ref={counterRef} className="text-white">0%</span>
        </div>

        {/* Progress bar */}
        <div className="preloader-text w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-crimson rounded-full w-0" />
        </div>
        
        {/* Monogram Background Accent */}
        <div className="preloader-text absolute top-12 font-serif text-8xl font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
          SM
        </div>
      </div>
    </div>
  );
};

export default PreLoader;