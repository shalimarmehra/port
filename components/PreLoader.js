"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const GREETINGS = [
  { text: "Hello", lang: "English", code: "EN", script: "Latin" },
  { text: "नमस्ते", lang: "Hindi", code: "HI", script: "Devanagari" },
  { text: "Bonjour", lang: "French", code: "FR", script: "Latin" },
  { text: "Hola", lang: "Spanish", code: "ES", script: "Latin" },
  { text: "Ciao", lang: "Italian", code: "IT", script: "Latin" },
  { text: "Hallo", lang: "German", code: "DE", script: "Latin" },
  { text: "Olá", lang: "Portuguese", code: "PT", script: "Latin" },
  { text: "こんにちは", lang: "Japanese", code: "JP", script: "Kanji / Kana" },
  { text: "안녕하세요", lang: "Korean", code: "KR", script: "Hangul" },
  { text: "你好", lang: "Chinese", code: "CN", script: "Hanzi" },
  { text: "Привет", lang: "Russian", code: "RU", script: "Cyrillic" },
  { text: "مرحبا", lang: "Arabic", code: "SA", script: "Arabic" },
  { text: "שָׁלוֹם", lang: "Hebrew", code: "IL", script: "Hebrew" },
  { text: "Jambo", lang: "Swahili", code: "KE", script: "Bantu" },
  { text: "Merhaba", lang: "Turkish", code: "TR", script: "Latin" },
  { text: "নমস্কার", lang: "Bengali", code: "BD", script: "Eastern Nagari" },
  { text: "สวัสดี", lang: "Thai", code: "TH", script: "Thai" },
  { text: "Xin chào", lang: "Vietnamese", code: "VN", script: "Latin" },
  { text: "Γειά σου", lang: "Greek", code: "GR", script: "Greek" },
  { text: "Cześć", lang: "Polish", code: "PL", script: "Latin" },
  { text: "Hallå", lang: "Swedish", code: "SE", script: "Nordic" },
  { text: "Selamat", lang: "Indonesian", code: "ID", script: "Austronesian" },
  { text: "Kamusta", lang: "Tagalog", code: "PH", script: "Baybayin" },
  { text: "Aloha", lang: "Hawaiian", code: "US", script: "Polynesian" },
  { text: "Dia Dhuit", lang: "Irish", code: "IE", script: "Gaeilge" },
  { text: "Terve", lang: "Finnish", code: "FI", script: "Latin" },
  { text: "Ahoj", lang: "Czech", code: "CZ", script: "Slavic" },
  { text: "سلام", lang: "Persian", code: "IR", script: "Perso-Arabic" },
  { text: "Salve", lang: "Latin", code: "VA", script: "Classical" },
  { text: "வணக்கம்", lang: "Tamil", code: "IN", script: "Dravidian" },
  { text: "سلام", lang: "Urdu", code: "PK", script: "Nastaliq" },
  { text: "नमस्कारः", lang: "Sanskrit", code: "IN", script: "Devanagari" },
  { text: "Shalimar Mehra", lang: "Portfolio", code: "SM", script: "Welcome" },
];

const PreLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const counterRef = useRef(null);
  const statusTextRef = useRef(null);
  const progressRef = useRef(null);
  const greetingRef = useRef(null);
  const badgeRef = useRef(null);
  const currentGreetingIdxRef = useRef(-1);

  useEffect(() => {
    // Lock body scroll during preloader display
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const counterObj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = originalOverflow || "";
        if (onComplete) onComplete();
      },
    });

    // 1. Initial fade-in of card and elements
    tl.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.92, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // 2. Animate counter 0 to 100
    tl.to(
      counterObj,
      {
        value: 100,
        duration: 3.8, // Smooth pace for users to appreciate greetings
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(counterObj.value);

          // Update counter percentage with 3-digit padding
          if (counterRef.current) {
            counterRef.current.innerText = `${val.toString().padStart(3, "0")}%`;
          }

          // Update progress bar
          if (progressRef.current) {
            progressRef.current.style.width = `${val}%`;
          }

          // Update status label text
          if (statusTextRef.current) {
            if (val < 30) statusTextRef.current.innerText = "INITIALIZING ARCHITECTURE";
            else if (val < 70) statusTextRef.current.innerText = "LOADING ASSETS & REPO";
            else if (val < 99) statusTextRef.current.innerText = "FINALIZING EXPERIENCE";
            else statusTextRef.current.innerText = "WELCOME";
          }

          // Determine current greeting index
          const index = Math.min(
            Math.floor((counterObj.value / 100) * GREETINGS.length),
            GREETINGS.length - 1
          );

          if (index !== currentGreetingIdxRef.current) {
            currentGreetingIdxRef.current = index;
            const item = GREETINGS[index];

            // Animate greeting text transition
            if (greetingRef.current) {
              greetingRef.current.innerText = item.text;

              gsap.fromTo(
                greetingRef.current,
                { opacity: 0, y: 16, scale: 0.95, filter: "blur(6px)" },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  duration: 0.28,
                  ease: "back.out(1.8)",
                }
              );
            }

            // Animate badge text transition
            if (badgeRef.current) {
              badgeRef.current.innerText = `[ ${item.code} ]  •  ${item.lang}  —  ${item.script}`;

              gsap.fromTo(
                badgeRef.current,
                { opacity: 0, y: 6 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
              );
            }
          }
        },
      },
      "-=0.2"
    )
      // 3. Staggered exit animation for contents
      .to(".preloader-content-elem", {
        opacity: 0,
        y: -24,
        scale: 0.96,
        stagger: 0.05,
        duration: 0.45,
        ease: "power3.in",
      })
      // 4. Smooth curtain reveal exit upwards
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
        },
        "-=0.15"
      );

    return () => {
      document.body.style.overflow = originalOverflow || "";
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen bg-[#0A0A0C] z-[99999] overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none font-sans"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-crimson/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Watermark Monogram Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[22vw] font-black text-white/[0.015] pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        SHALIMAR
      </div>

      {/* TOP BAR - Technical Metadata Tags */}
      <div className="preloader-content-elem relative z-10 flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/40">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>SYSTEM // PRELOAD</span>
        </div>
        <div className="hidden sm:block text-white/30">
          [ 28.6139° N, 77.2090° E ]
        </div>
        <div>GLOBAL GREETINGS • 34 LANGS</div>
      </div>

      {/* CENTERPIECE - Luxury Glassmorphic Card */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-6">
        <div
          ref={cardRef}
          className="w-full max-w-xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.7)] flex flex-col items-center justify-between min-h-[320px] sm:min-h-[380px] relative overflow-hidden"
        >
          {/* Subtle Inner Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Top Label */}
          <div className="preloader-content-elem flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-mono text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            <span>EXPRESSION</span>
          </div>

          {/* Main Greeting Typography */}
          <div className="preloader-content-elem flex-1 flex flex-col items-center justify-center my-6">
            <h1
              ref={greetingRef}
              className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-white text-center drop-shadow-lg min-h-[85px] sm:min-h-[110px] flex items-center justify-center transition-all"
            >
              Hello
            </h1>

            {/* Language & Script Badge */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/70 shadow-inner">
              <span ref={badgeRef}>[ EN ] • English — Latin</span>
            </div>
          </div>

          {/* Counter & Status Row */}
          <div className="preloader-content-elem w-full flex justify-between items-end mb-3 font-mono text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                STATUS
              </span>
              <span
                ref={statusTextRef}
                className="text-white/80 font-medium tracking-widest text-[10px] sm:text-xs"
              >
                INITIALIZING ARCHITECTURE
              </span>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                PROGRESS
              </span>
              <span
                ref={counterRef}
                className="text-white font-bold text-base sm:text-lg tracking-wider"
              >
                000%
              </span>
            </div>
          </div>

          {/* Precision Glowing Progress Bar */}
          <div className="preloader-content-elem w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-crimson via-crimson-light to-white rounded-full w-0 transition-all duration-75"
              style={{
                boxShadow:
                  "0 0 12px rgba(198, 40, 40, 0.8), 0 0 24px rgba(255, 255, 255, 0.4)",
              }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR - Footer Metadata Tags */}
      <div className="preloader-content-elem relative z-10 flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/40">
        <div>SHALIMAR MEHRA — PORTFOLIO &apos;26</div>
        <div className="flex items-center gap-2 text-white/30">
          <span>DEVELOPER & AI</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;

