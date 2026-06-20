"use client";
import React, { useRef, useEffect } from "react";
import { FaYoutube, FaPlay, FaEye } from "react-icons/fa";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const videos = [
  {
    id: "Ke90Tje7VS0",
    title: "Tailwind CSS Crash Course — Zero to Production Ready",
    channel: "Dev Dossier",
    views: "18K views",
    duration: "42:30",
    thumb: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    tag: "CSS",
    tagColor: "text-violet-400 bg-violet-500/10",
  },
  {
    id: "W6NZfCO5SIk",
    title: "React Hooks Deep Dive — useState, useEffect & Custom Hooks",
    channel: "Dev Dossier",
    views: "22K views",
    duration: "31:09",
    thumb: "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
    tag: "React",
    tagColor: "text-cyan-400 bg-cyan-500/10",
  },
  {
    id: "rfscVS0vtbw",
    title: "How to Build a SaaS Product in 2025 — Full Breakdown",
    channel: "Dev Dossier",
    views: "31K views",
    duration: "55:12",
    thumb: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
    tag: "SaaS",
    tagColor: "text-amber-400 bg-amber-500/10",
  },
  {
    id: "LXb3EKWsInQ",
    title: "Next.js 15 — Complete Portfolio Build with Framer Motion",
    channel: "Dev Dossier",
    views: "12K views",
    duration: "24:15",
    thumb: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    tag: "Next.js",
    tagColor: "text-sky-400 bg-sky-500/10",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Node.js REST API Masterclass — Auth, JWT & Deployments",
    channel: "Dev Dossier",
    views: "9.4K views",
    duration: "38:50",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    tag: "Backend",
    tagColor: "text-emerald-400 bg-emerald-500/10",
  },
];

const YouTubeSection = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".yt-card");
    gsap.fromTo(
      ".yt-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="youtube"
      className="py-24 relative overflow-hidden bg-ink"
    >
      {/* BG accent glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#FF0000]/5 blur-[120px]" />
        <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-crimson/10 blur-[100px]" />
      </div>

      {/* Large section watermark */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-white/5 pointer-events-none select-none z-0" data-speed="-0.15">
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="yt-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#FF0000] mb-4">
              <FaYoutube className="text-sm" />
              Dev Dossier · YouTube Channel
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Dev Dossier Tutorials
            </h2>
            <p className="text-gray-400 mt-3 font-sans text-sm sm:text-base max-w-xl">
              High-fidelity engineering tutorials on React, Next.js, Node.js, and scalable web architectures — built for working developers.
            </p>
          </div>

          {/* Channel Stats */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <div className="text-center px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-[#FF0000]">15.4K+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Subscribers</p>
            </div>
            <div className="text-center px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-white">120K+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Total Views</p>
            </div>
            <div className="text-center px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-white">40+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Tutorials</p>
            </div>
          </div>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Latest Videos
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <HiArrowLeft className="text-sm" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <HiArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Horizontal Video Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-card snap-start shrink-0 w-72 sm:w-80 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-[#FF0000]/40 hover:bg-white/8 transition-all duration-300"
              data-cursor-text="PLAY"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-[#FF0000]/50">
                    <FaPlay className="text-white text-sm ml-0.5" />
                  </div>
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
                  {video.duration}
                </span>
                {/* Category tag */}
                <span className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full ${video.tagColor}`}>
                  {video.tag}
                </span>
              </div>

              {/* Meta */}
              <div className="p-4">
                <p className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#FF4444] transition-colors mb-2">
                  {video.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-[11px] font-medium">{video.channel}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-[11px]">
                    <FaEye className="text-[10px]" />
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
          <a
            href="https://youtube.com/@devdossier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-[#FF0000]/30 hover:shadow-[#FF0000]/50 hover:-translate-y-0.5"
            data-cursor-text="SUBSCRIBE"
          >
            <FaYoutube className="text-base" />
            Subscribe to @devdossier
          </a>
          <a
            href="https://devdossier.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 hover:bg-white/10 text-white rounded-full text-sm font-bold transition-all"
            data-cursor-text="VISIT"
          >
            Visit devdossier.in →
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
