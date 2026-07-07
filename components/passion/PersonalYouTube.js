"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaYoutube, FaPlay, FaEye, FaHeart } from "react-icons/fa";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const formatNumber = (num) => {
  if (!num) return "0";
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};

const PersonalYouTube = () => {
  const sectionRef = useRef(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`/api/youtube/shalimarmehra`);
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchStats();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".personal-yt-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

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
              <p className="font-serif text-2xl font-bold text-rose-600">
                {stats ? formatNumber(stats.subscriberCount) : "3.2K+"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Subscribers</p>
            </div>
            <div className="text-center px-6 py-3 bg-cream border border-warm-gray-200/60 rounded-2xl">
              <p className="font-serif text-2xl font-bold text-ink">
                {stats ? formatNumber(stats.viewCount) : "25K+"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Total Views</p>
            </div>
            <div className="text-center px-6 py-3 bg-cream border border-warm-gray-200/60 rounded-2xl">
              <p className="font-serif text-2xl font-bold text-ink">
                {stats ? formatNumber(stats.videoCount) : "15+"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Videos</p>
            </div>
          </div>
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
