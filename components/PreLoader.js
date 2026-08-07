"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GREETINGS = [
  { text: "Hello",       lang: "English" },
  { text: "Namaste",     lang: "Hindi" },
  { text: "Bonjour",     lang: "French" },
  { text: "Hola",        lang: "Spanish" },
  { text: "Ciao",        lang: "Italian" },
  { text: "Hallo",       lang: "German" },
  { text: "Olá",         lang: "Portuguese" },
  { text: "Konnichiwa",  lang: "Japanese" },
  { text: "안녕하세요",    lang: "Korean" },
  { text: "你好",         lang: "Chinese" },
  { text: "Привет",      lang: "Russian" },
  { text: "مرحبا",       lang: "Arabic" },
  { text: "Habari",      lang: "Swahili" },
  { text: "Merhaba",     lang: "Turkish" },
  { text: "নমস্কার",     lang: "Bengali" },
  { text: "สวัสดี",       lang: "Thai" },
  { text: "Xin chào",    lang: "Vietnamese" },
  { text: "SM",          lang: "Monogram" },
];

const PreLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const greetingRef = useRef(null);
  const langRef = useRef(null);

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
      duration: 3.2, // Slower to let users appreciate all 18 greetings
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
        if (greetingRef.current && greetingRef.current.innerText !== GREETINGS[greetingIndex].text) {
          greetingRef.current.innerText = GREETINGS[greetingIndex].text;
          
          // Update language label
          if (langRef.current) {
            langRef.current.innerText = GREETINGS[greetingIndex].lang;
          }
          
          // Micro-bounce visual animation for each new language greeting
          gsap.fromTo(greetingRef.current,
            { opacity: 0, y: 15, rotateX: -30 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.35, ease: "back.out(2)" }
          );
          
          // Fade in language label
          if (langRef.current) {
            gsap.fromTo(langRef.current,
              { opacity: 0, y: 5 },
              { opacity: 0.5, y: 0, duration: 0.3, delay: 0.1, ease: "power2.out" }
            );
          }
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
      <div className="relative flex flex-col items-center gap-6 w-full max-w-xs px-8">
        
        {/* Large Greeting Header */}
        <div className="preloader-text h-24 flex flex-col items-center justify-center select-none gap-2">
          <h1 
            ref={greetingRef}
            className="font-serif text-4xl sm:text-5xl font-black text-white tracking-wide text-center"
          >
            Hello
          </h1>
          <span
            ref={langRef}
            className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-sans font-medium"
          >
            English
          </span>
        </div>

        {/* Loading text */}
        <div className="preloader-text text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans font-bold flex justify-between w-full">
          <span>Loading</span>
          <span ref={counterRef} className="text-white">0%</span>
        </div>

        {/* Progress bar with glow */}
        <div className="preloader-text w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div 
            ref={progressRef} 
            className="h-full bg-crimson rounded-full w-0 transition-shadow"
            style={{ boxShadow: "0 0 12px rgba(198, 40, 40, 0.6), 0 0 24px rgba(198, 40, 40, 0.3)" }}
          />
        </div>
        
        {/* Monogram Background Accent */}
        <div className="preloader-text absolute top-8 font-serif text-8xl font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
          SM
        </div>
      </div>
    </div>
  );
};

export default PreLoader;