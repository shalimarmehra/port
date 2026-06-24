"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ROLES = ["Full-Stack Developer", "UI/UX Enthusiast", "Content Creator", "Entrepreneur", "Open Source Builder"];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Refs for 3D Tilt & Magnetic Button & Container
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);

  // Mouse move handler for spotlight glow
  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Role ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      ".char-reveal",
      { opacity: 0, y: 40, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.02, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(
      ".hero-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.6"
    )
    .fromTo(
      ".hero-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.8"
    )
    .fromTo(
      ".hero-image-container",
      { opacity: 0, scale: 0.8, rotate: -5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power3.out" },
      "-=1"
    )
    .fromTo(
      ".hero-stat",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.8"
    )
    .fromTo(
      ".hero-socials",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      ".bg-marquee",
      { opacity: 0 },
      { opacity: 0.03, duration: 2 },
      "-=1"
    );

    return () => tl.kill();
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 3D Tilt Effect
  const handleImageMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(imageRef.current, {
      rotationY: x * 20,
      rotationX: -y * 20,
      transformPerspective: 900,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleImageMouseLeave = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 1
    });
  };

  // Magnetic Button Effect
  const handleBtnMouseMove = (e) => {
    if (!btnRef.current || !btnTextRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      ease: "power2.out",
      duration: 0.4
    });
    
    gsap.to(btnTextRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      ease: "power2.out",
      duration: 0.4
    });
  };

  const handleBtnMouseLeave = () => {
    if (!btnRef.current || !btnTextRef.current) return;
    gsap.to(btnRef.current, { x: 0, y: 0, ease: "elastic.out(1, 0.3)", duration: 1 });
    gsap.to(btnTextRef.current, { x: 0, y: 0, ease: "elastic.out(1, 0.3)", duration: 1 });
  };

  // Split string into characters for animation
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char-reveal inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
        {char}
      </span>
    ));
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      id="quick-bio" 
      className="relative min-h-[110vh] bg-transparent overflow-hidden pt-20 sm:pt-28 pb-20 perspective-1000"
    >
      {/* Interactive spotlight glow that follows the cursor */}
      <div 
        className="absolute pointer-events-none z-0 w-[600px] h-[600px] rounded-full blur-[120px] transition-opacity duration-300 opacity-0 md:opacity-100"
        style={{
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: 'radial-gradient(circle, rgba(198,40,40,0.05) 0%, rgba(198,40,40,0.01) 60%, transparent 100%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Infinite Scrolling Background Marquee */}
      <div className="bg-marquee absolute top-[25%] left-0 w-max whitespace-nowrap opacity-0 pointer-events-none select-none z-0 transform -rotate-2 mix-blend-multiply">
        <h1 className="text-[180px] sm:text-[220px] font-black text-ink font-serif uppercase tracking-tighter animate-marquee inline-block mr-12 leading-none">
           DEVELOPER • DESIGNER • CREATOR • ENTREPRENEUR • 
        </h1>
        <h1 className="text-[180px] sm:text-[220px] font-black text-ink font-serif uppercase tracking-tighter animate-marquee inline-block leading-none">
           DEVELOPER • DESIGNER • CREATOR • ENTREPRENEUR • 
        </h1>
      </div>

      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        01
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{background: 'radial-gradient(circle, rgba(198,40,40,0.08) 0%, transparent 70%)'}} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{background: 'radial-gradient(circle, rgba(198,40,40,0.05) 0%, transparent 70%)'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0" style={{background: 'radial-gradient(circle, rgba(250,248,245,0.6) 0%, transparent 60%)'}} />

      {/* Cross markers */}
      <span className="cross-marker absolute top-32 right-16 text-warm-gray-300 text-2xl select-none pointer-events-none hidden lg:block">✦</span>
      <span className="cross-marker absolute bottom-40 left-12 text-warm-gray-300 text-lg select-none pointer-events-none hidden lg:block">+</span>
      <span className="cross-marker absolute top-1/2 right-1/3 text-warm-gray-200 text-sm select-none pointer-events-none hidden lg:block">+</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* ─── Left Column: Text ─── */}
          <div className="flex-1 text-left order-2 lg:order-1 pt-12 lg:pt-0">
            {/* Available badge */}
            <div className="hero-badge inline-flex items-center gap-2 border border-warm-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-500 tracking-wide mb-4 bg-white/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span>Available for Hire</span>
            </div>

            {/* Animated Role Ticker */}
            <div className="hero-badge flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">I am a</span>
              <div className="overflow-hidden h-6 relative">
                <span
                  key={roleIndex}
                  className="inline-block text-crimson font-bold text-sm animate-slide-left tracking-wide"
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Massive editorial headline with dynamic split text */}
            <h1 className="mb-6 perspective-1000">
              <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-black text-ink tracking-tight leading-[0.95]">
                {splitText("FULL-STACK")}
              </span>
              <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-black text-ink tracking-tight leading-[0.95] mt-1">
                {splitText("DEVELOPER")}
              </span>
              <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-black italic text-crimson tracking-tight leading-[0.95] mt-1">
                {splitText("& CREATOR")}
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc font-sans text-gray-500 text-base leading-relaxed mb-8 max-w-lg bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50">
              I am a web specialist with a Bachelor&apos;s in Computer Applications. I love crafting high-performance, modern, and beautiful web applications from concept to deployment. Through my business <strong className="text-crimson font-semibold">Dev Dossier</strong> and my developer channels, I explore state-of-the-art technologies and deliver clean design systems that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                ref={btnRef}
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                onClick={() => handleScrollTo("projects")}
                className="hero-cta px-8 py-4 bg-crimson text-white text-sm font-bold rounded-full transition-shadow duration-300 shadow-[0_4px_14px_0_rgba(198,40,40,0.39)] hover:shadow-[0_6px_20px_rgba(198,40,40,0.23)] hover:bg-crimson/90 relative"
                data-cursor-text="EXPLORE"
              >
                <span ref={btnTextRef} className="block relative z-10 pointer-events-none">Explore My Work →</span>
              </button>
              <button
                onClick={() => handleScrollTo("about")}
                className="hero-cta px-8 py-4 border border-ink text-ink text-sm font-semibold rounded-full hover:bg-ink hover:text-white transition-all duration-300 active:scale-95"
                data-cursor-text="ABOUT"
              >
                More About Me
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-socials border-t border-warm-gray-200 pt-6">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Connect with me</p>
              <div className="flex flex-wrap items-center gap-5">
                <Link href="https://github.com/shalimarmehra" className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm group" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-base group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/shalimarmehra/" className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm group" target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin className="text-base group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </Link>
                <Link href="https://www.instagram.com/shalimarmehra/" className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm group" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram className="text-base group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Instagram</span>
                </Link>
                <Link href="https://youtube.com/@shalimarmehra" className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm group" target="_blank" rel="noopener noreferrer">
                  <IoLogoYoutube className="text-base group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">YouTube</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Image ─── */}
          <div className="hero-image-container flex-1 order-1 lg:order-2 flex justify-center items-center relative perspective-[1200px]">
            {/* Editorial image frame with 3D Mouse Tracking */}
            <div 
              ref={imageRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              className="relative preserve-3d"
            >
              {/* Subtle background accent */}
              <div className="absolute -inset-4 bg-[#F0ECE6] rounded-3xl -rotate-3 pointer-events-none translate-z-[-20px]" />
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-warm-gray-200 shadow-xl translate-z-[20px]">
                <Image
                  src="/hero-img.jpeg"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  alt="Shalimar Mehra"
                  className="ink-mask object-cover hover:scale-[1.02] transition-transform duration-700 ease-out cursor-pointer"
                  priority
                  data-cursor-text="HI"
                />
              </div>
              
              {/* Corner accent */}
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-crimson pointer-events-none translate-z-[40px]" />
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-crimson pointer-events-none translate-z-[40px]" />
            </div>
          </div>
        </div>

        {/* ─── Bottom Stats Row ─── */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
           <div className="hero-stat border border-warm-gray-200 hover:border-crimson p-6 rounded-2xl bg-white/70 backdrop-blur-md transition-colors duration-300 text-center hover:shadow-lg group">
            <p className="font-serif text-4xl font-bold text-crimson mb-1 group-hover:scale-110 transition-transform">
              03+
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Years Experience
            </p>
          </div>
          <div className="hero-stat border border-warm-gray-200 hover:border-crimson p-6 rounded-2xl bg-white/70 backdrop-blur-md transition-colors duration-300 text-center hover:shadow-lg group">
            <p className="font-serif text-4xl font-bold text-crimson mb-1 group-hover:scale-110 transition-transform">
              10+
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Deliveries
            </p>
          </div>
          <div className="hero-stat border border-warm-gray-200 hover:border-crimson p-6 rounded-2xl bg-white/70 backdrop-blur-md transition-colors duration-300 text-center hover:shadow-lg group">
            <p className="font-serif text-4xl font-bold text-crimson mb-1 group-hover:scale-110 transition-transform">
              05+
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Technologies
            </p>
          </div>
        </div>

        <div className="editorial-divider mt-16" />
      </div>
    </section>
  );
};

export default Hero;
