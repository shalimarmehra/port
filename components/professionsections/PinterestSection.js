"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPinterest, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Pinterest-style curated creative posts (static integration)
// Replace with Pinterest API or RSS feed for live data
const pins = [
  {
    id: 1,
    title: "Minimal Dashboard UI Design",
    category: "UI/UX Design",
    saves: "1.2K",
    height: "h-64",
    bgGradient: "from-slate-800 to-slate-900",
    emoji: "🖥️",
    accent: "#6366F1",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 2,
    title: "Editorial Magazine Layout — Print Inspiration",
    category: "Typography",
    saves: "843",
    height: "h-52",
    bgGradient: "from-rose-900 to-rose-950",
    emoji: "✦",
    accent: "#C62828",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 3,
    title: "Dark Mode Color System Palette",
    category: "Color Theory",
    saves: "2.1K",
    height: "h-80",
    bgGradient: "from-zinc-800 to-zinc-950",
    emoji: "🎨",
    accent: "#F59E0B",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 4,
    title: "Clean Landing Page — SaaS Product",
    category: "Web Design",
    saves: "3.6K",
    height: "h-56",
    bgGradient: "from-sky-900 to-sky-950",
    emoji: "🚀",
    accent: "#0EA5E9",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 5,
    title: "Glassmorphism Card Components",
    category: "UI Components",
    saves: "4.9K",
    height: "h-72",
    bgGradient: "from-violet-900 to-violet-950",
    emoji: "💎",
    accent: "#8B5CF6",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 6,
    title: "Monochrome Photography — Urban Composition",
    category: "Photography",
    saves: "678",
    height: "h-48",
    bgGradient: "from-neutral-800 to-neutral-950",
    emoji: "📷",
    accent: "#6B7280",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 7,
    title: "3D Typography Exploration — Brutalist Style",
    category: "Typography",
    saves: "1.8K",
    height: "h-60",
    bgGradient: "from-amber-900 to-amber-950",
    emoji: "Aa",
    accent: "#D97706",
    link: "https://pinterest.com/shalimarmehra",
  },
  {
    id: 8,
    title: "Micro-interaction Design Patterns",
    category: "UX Motion",
    saves: "2.5K",
    height: "h-44",
    bgGradient: "from-emerald-900 to-emerald-950",
    emoji: "✨",
    accent: "#10B981",
    link: "https://pinterest.com/shalimarmehra",
  },
];

// Split into 3 columns for masonry layout
const col1 = pins.filter((_, i) => i % 3 === 0);
const col2 = pins.filter((_, i) => i % 3 === 1);
const col3 = pins.filter((_, i) => i % 3 === 2);

const PinCard = ({ pin }) => {
  const [liked, setLiked] = useState(false);

  return (
    <a
      href={pin.link}
      target="_blank"
      rel="noopener noreferrer"
      className="pinterest-pin block relative overflow-hidden rounded-2xl group cursor-pointer"
      data-cursor-text="VIEW"
    >
      {/* Decorative Art Board */}
      <div
        className={`${pin.height} w-full bg-gradient-to-br ${pin.bgGradient} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Animated background dots */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${pin.accent}55 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${pin.accent}33 0%, transparent 50%)`,
          }}
        />
        {/* Large faded emoji / symbol */}
        <span className="text-6xl sm:text-7xl select-none opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500">
          {pin.emoji}
        </span>
        {/* Category label */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${pin.accent}30`, color: pin.accent, border: `1px solid ${pin.accent}50` }}
          >
            {pin.category}
          </span>
        </div>
        {/* External link icon top-right */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <FaExternalLinkAlt className="text-white text-[9px]" />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center justify-between w-full">
            <p className="text-white text-xs font-semibold line-clamp-2 flex-1 pr-2">
              {pin.title}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setLiked(!liked);
              }}
              className="flex items-center gap-1 shrink-0"
            >
              <FaHeart
                className={`text-sm transition-colors ${liked ? "text-[#E60023]" : "text-white/60"}`}
              />
              <span className="text-white/60 text-[10px]">{pin.saves}</span>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

const PinterestSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".pinterest-pin",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".pinterest-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="creative"
      className="py-24 relative overflow-hidden bg-cream"
    >
      {/* Watermark */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        06
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="pinterest-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E60023]/10 border border-[#E60023]/20 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#E60023] mb-4">
              <FaPinterest className="text-sm" />
              Creative Board
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Design Inspiration
            </h2>
            <p className="text-gray-500 mt-3 font-sans text-sm sm:text-base max-w-xl">
              A curated collection of design ideas, UI patterns, typographic
              explorations, and creative references that fuel my work.
            </p>
          </div>

          {/* Pinterest Stats */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <div className="text-center px-6 py-3 bg-white border border-warm-gray-200 rounded-2xl hover:border-[#E60023] transition-colors">
              <p className="font-serif text-2xl font-bold text-[#E60023]">150+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Boards</p>
            </div>
            <div className="text-center px-6 py-3 bg-white border border-warm-gray-200 rounded-2xl hover:border-[#E60023] transition-colors">
              <p className="font-serif text-2xl font-bold text-ink">2.4K</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Pins Saved</p>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((pin) => (
              <PinCard key={pin.id} pin={pin} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 mt-8">
            {col2.map((pin) => (
              <PinCard key={pin.id} pin={pin} />
            ))}
          </div>
          {/* Column 3 (hidden on smallest screens) */}
          <div className="hidden sm:flex flex-col gap-4 mt-16">
            {col3.map((pin) => (
              <PinCard key={pin.id} pin={pin} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://pinterest.com/shalimarmehra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#E60023] hover:bg-[#C0001E] text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-[#E60023]/30 hover:shadow-[#E60023]/50 hover:-translate-y-0.5"
            data-cursor-text="VISIT"
          >
            <FaPinterest className="text-base" />
            View Full Board on Pinterest
          </a>
        </div>
      </div>
    </section>
  );
};

export default PinterestSection;
