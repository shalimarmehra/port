"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        "-=0.3"
      )
      .fromTo(
        ".hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.5"
      )
      .fromTo(
        ".hero-image-container",
        { opacity: 0, scale: 0.95, rotate: 2 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-stat",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.5"
      )
      .fromTo(
        ".hero-socials",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="quick-bio"
      className="relative min-h-screen bg-transparent overflow-hidden pt-20 sm:pt-28 pb-20"
    >
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        01
      </div>

      {/* Cross markers — decorative rhythm */}
      <span className="cross-marker absolute top-32 right-16 text-warm-gray-300 text-2xl select-none pointer-events-none hidden lg:block">
        ✦
      </span>
      <span className="cross-marker absolute bottom-40 left-12 text-warm-gray-300 text-lg select-none pointer-events-none hidden lg:block">
        +
      </span>
      <span className="cross-marker absolute top-1/2 right-1/3 text-warm-gray-200 text-sm select-none pointer-events-none hidden lg:block">
        +
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* ─── Left Column: Text ─── */}
          <div className="flex-1 text-left order-2 lg:order-1">
            {/* Available badge */}
            <div className="hero-badge inline-flex items-center gap-2 border border-warm-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-500 tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            {/* Massive editorial headline */}
            <h1 className="mb-6">
              <span className="hero-title block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-ink tracking-tight leading-[0.95]">
                FULL-STACK
              </span>
              <span className="hero-title block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-ink tracking-tight leading-[0.95] mt-1">
                DEVELOPER
              </span>
              <span className="hero-title block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic text-crimson tracking-tight leading-[0.95] mt-1">
                &amp; CREATOR
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc font-sans text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              I am a web specialist with a Bachelor&apos;s in Computer
              Applications. I love crafting high-performance, modern, and
              beautiful web applications from concept to deployment. Through my
              business{" "}
              <strong className="text-crimson font-semibold">Dev Dossier</strong>{" "}
              and my developer channels, I explore state-of-the-art technologies
              and deliver clean design systems that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => handleScrollTo("projects")}
                className="hero-cta px-8 py-4 bg-crimson hover:bg-crimson-dark text-white text-sm font-bold rounded-full transition-all duration-300 active:scale-95"
                data-cursor-text="EXPLORE"
              >
                Explore My Work →
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
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
                Connect with me
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="https://github.com/shalimarmehra"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-base" />
                  <span className="text-xs font-medium">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shalimarmehra/"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="text-base" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.instagram.com/shalimarmehra/"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-base" />
                  <span className="text-xs font-medium">Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com/@shalimarmehra"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-crimson transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="text-base" />
                  <span className="text-xs font-medium">YouTube</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Image ─── */}
          <div className="hero-image-container flex-1 order-1 lg:order-2 flex justify-center items-center relative">
            {/* Editorial image frame */}
            <div className="relative">
              {/* Subtle background accent */}
              <div className="absolute -inset-4 bg-[#F0ECE6] rounded-3xl -rotate-3 pointer-events-none" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-warm-gray-200 shadow-sm">
                <Image
                  src="/hero-img.jpeg"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  alt="Shalimar Mehra"
                  className="ink-mask object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                  priority
                  data-cursor-text="HI"
                />
              </div>
              {/* Corner accent */}
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-crimson pointer-events-none" />
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-crimson pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ─── Bottom Stats Row ─── */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="hero-stat border border-warm-gray-200 hover:border-crimson p-6 rounded-2xl bg-white transition-colors duration-300 text-center">
            <p className="font-serif text-4xl font-bold text-crimson mb-1">
              03+
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Years Experience
            </p>
          </div>
          <div className="hero-stat border border-warm-gray-200 hover:border-crimson p-6 rounded-2xl bg-white transition-colors duration-300 text-center">
            <p className="font-serif text-4xl font-bold text-crimson mb-1">
              10+
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Deliveries
            </p>
          </div>
          <div className="hero-stat border border-warm-gray-200 hover:border-crimson p-6 rounded-2xl bg-white transition-colors duration-300 text-center">
            <p className="font-serif text-4xl font-bold text-crimson mb-1">
              05+
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
              Technologies
            </p>
          </div>
        </div>

        {/* Editorial divider */}
        <div className="editorial-divider mt-16" />
      </div>
    </section>
  );
};

export default Hero;
