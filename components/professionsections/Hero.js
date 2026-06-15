"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaRocket } from "react-icons/fa";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsThreads, BsTwitterX } from "react-icons/bs";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    gsap.registerPlugin(ScrollTrigger);

    // Initial entrance animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      ".hero-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(
      ".hero-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      ".hero-socials",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.5"
    )
    .fromTo(
      ".hero-image-container",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="quick-bio" className="relative pt-6 pb-20 overflow-hidden bg-grid-pattern">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          
          {/* Left Column Content */}
          <div className="flex-1 text-left order-2 lg:order-1">
            {/* Glowing Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-indigo-300 tracking-wide mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Hire & Projects</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-5">
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">Shalimar Mehra</span>
            </h1>

            {/* Tagline */}
            <h2 className="hero-title text-lg sm:text-xl font-semibold text-gray-300 mb-6 flex flex-wrap items-center gap-2">
              <span>Full-Stack Developer</span>
              <span className="text-gray-600">•</span>
              <span>UI/UX Designer</span>
              <span className="text-gray-600">•</span>
              <span>Entrepreneur</span>
            </h2>

            {/* Description */}
            <p className="hero-desc text-base text-gray-400 font-sans leading-relaxed mb-8 text-justify">
              I am a web specialist with a Bachelor&apos;s in Computer Applications. I love crafting high-performance, modern, and beautiful web applications from concept to deployment. Through my business <strong className="text-indigo-300">Dev Dossier</strong> and my developer channels, I explore state-of-the-art technologies and deliver clean design systems that scale.
            </p>

            {/* Call to Actions */}
            <div className="hero-desc flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => handleScrollTo("projects")}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold rounded-full transition-all shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_24px_rgba(99,102,241,0.4)] flex items-center gap-2 active:scale-95"
              >
                Explore My Work <FaRocket className="text-xs" />
              </button>
              <button
                onClick={() => handleScrollTo("about")}
                className="px-6 py-3 bg-white/[0.03] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-full border border-white/10 transition-all flex items-center gap-1 active:scale-95"
              >
                More About Me
              </button>
            </div>

            {/* Social Grid */}
            <div className="hero-socials border-t border-white/5 pt-8">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Connect with me</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                <Link
                  href="https://github.com/shalimarmehra"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-bold text-gray-300 hover:text-white transition-all active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shalimarmehra/"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-bold text-gray-300 hover:text-white transition-all active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="text-sm text-sky-400" />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href="https://www.instagram.com/shalimarmehra/"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-bold text-gray-300 hover:text-white transition-all active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram className="text-sm text-pink-400" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com/@shalimarmehra"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-bold text-gray-300 hover:text-white transition-all active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="text-sm text-rose-500" />
                  <span>YouTube</span>
                </Link>
                <Link
                  href="https://x.com/shalimarmehra"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-bold text-gray-300 hover:text-white transition-all active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className="text-sm text-white" />
                  <span>X.com</span>
                </Link>
                <Link
                  href="https://threads.net/@shalimarmehra"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-bold text-gray-300 hover:text-white transition-all active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsThreads className="text-sm text-gray-200" />
                  <span>Threads</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column Profile Image */}
          <div className="hero-image-container flex-1 order-1 lg:order-2 flex justify-center items-center relative">
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none animate-pulse" />
            
            {/* Double Border Frame */}
            <div className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-full p-2 border-2 border-dashed border-white/10 hover:border-indigo-500/30 transition-colors duration-500 animate-float">
              <div className="w-full h-full rounded-full p-2 border border-white/5 bg-gray-900/40 backdrop-blur-sm relative overflow-hidden">
                <Image
                  src="/hero-img.jpeg"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  alt="Shalimar Mehra"
                  className="rounded-full object-cover p-1 filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
