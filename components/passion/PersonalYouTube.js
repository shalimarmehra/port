"use client";
import React, { useRef, useEffect } from "react";
import { FaYoutube, FaPlay, FaEye, FaHeart } from "react-icons/fa";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const personalVideos = [
  {
    id: "2b9txcAt4e0",
    title: "A Day in My Life as a Self-Taught Developer",
    views: "3.1K views",
    duration: "12:45",
    thumb: "https://img.youtube.com/vi/2b9txcAt4e0/maxresdefault.jpg",
    tag: "Vlog",
    tagColor: "text-rose-400 bg-rose-500/10",
  },
  {
    id: "rfscVS0vtbw",
    title: "My Workspace Setup 2025 — Desk Tour & Gear Review",
    views: "5.6K views",
    duration: "18:22",
    thumb: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
    tag: "Setup",
    tagColor: "text-amber-400 bg-amber-500/10",
  },
  {
    id: "W6NZfCO5SIk",
    title: "How I Started My Web Dev Journey — Story Time",
    views: "7.2K views",
    duration: "21:08",
    thumb: "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
    tag: "Story",
    tagColor: "text-sky-400 bg-sky-500/10",
  },
  {
    id: "Ke90Tje7VS0",
    title: "Exploring Old Delhi — Cinematic Street Photography",
    views: "2.4K views",
    duration: "9:30",
    thumb: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    tag: "Travel",
    tagColor: "text-emerald-400 bg-emerald-500/10",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Why I Left My 9–5 to Build My Own Business",
    views: "11.8K views",
    duration: "28:55",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    tag: "Motivation",
    tagColor: "text-violet-400 bg-violet-500/10",
  },
];

const PersonalYouTube = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".personal-yt-card");
    gsap.fromTo(
      ".personal-yt-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7,
          delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div
      ref={sectionRef}
      id="personal-youtube"
      className="py-12 px-6 sm:px-10 bg-white border border-warm-gray-200 rounded-3xl relative overflow-hidden shadow-sm my-8 text-left"
    >
      {/* Subtle background print glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />

      {/* Watermark */}
      <div className="absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-200/20 pointer-events-none select-none z-0">
        ▶
      </div>

      <div className="relative z-10 w-full">

        {/* Header */}
        <div className="personal-yt-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 border border-rose-200 rounded-full text-[11px] font-bold uppercase tracking-widest text-rose-600 mb-4">
              <FaYoutube className="text-sm" />
              Personal Channel · Shalimar Mehra
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              My Personal Channel
            </h2>
            <p className="text-gray-500 mt-3 font-sans text-sm sm:text-base max-w-xl">
              Vlogs, life stories, workspace tours, and personal perspectives. A genuine look at the person behind the code.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <div className="text-center px-6 py-3 bg-cream border border-warm-gray-200/60 rounded-2xl">
              <p className="font-serif text-2xl font-bold text-rose-600">3.2K+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Subscribers</p>
            </div>
            <div className="text-center px-6 py-3 bg-cream border border-warm-gray-200/60 rounded-2xl">
              <p className="font-serif text-2xl font-bold text-ink">25K+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Total Views</p>
            </div>
            <div className="text-center px-6 py-3 bg-cream border border-warm-gray-200/60 rounded-2xl">
              <p className="font-serif text-2xl font-bold text-ink">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Videos</p>
            </div>
          </div>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Latest Uploads</p>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} className="w-9 h-9 rounded-full bg-white border border-warm-gray-200 hover:border-crimson flex items-center justify-center text-gray-500 hover:text-crimson transition-all" aria-label="Scroll left">
              <HiArrowLeft className="text-sm" />
            </button>
            <button onClick={() => scroll(1)} className="w-9 h-9 rounded-full bg-white border border-warm-gray-200 hover:border-crimson flex items-center justify-center text-gray-500 hover:text-crimson transition-all" aria-label="Scroll right">
              <HiArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {personalVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="personal-yt-card snap-start shrink-0 w-72 sm:w-80 bg-white border border-warm-gray-200 rounded-2xl overflow-hidden group hover:border-rose-500/50 hover:shadow-md transition-all duration-300 text-left"
              data-cursor-text="PLAY"
            >
              <div className="relative h-44 overflow-hidden bg-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-rose-500/50">
                    <FaPlay className="text-white text-sm ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-bold rounded">
                  {video.duration}
                </span>
                <span className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full ${video.tagColor}`}>
                  {video.tag}
                </span>
              </div>

              <div className="p-4">
                <p className="text-ink text-sm font-semibold leading-snug line-clamp-2 group-hover:text-rose-600 transition-colors mb-2">
                  {video.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-[11px] font-medium">@shalimarmehra</p>
                  <div className="flex items-center gap-1 text-gray-500 text-[11px]">
                    <FaEye className="text-[10px]" />
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://youtube.com/@shalimarmehra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-crimson hover:bg-crimson-dark text-white rounded-full text-sm font-bold transition-all shadow-md hover:-translate-y-0.5"
            data-cursor-text="SUBSCRIBE"
          >
            <FaYoutube className="text-base" />
            Subscribe to @shalimarmehra
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalYouTube;
