"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaYoutube, FaPlay, FaEye } from "react-icons/fa";
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

const YouTubeSection = ({ handle = "devdossier" }) => {
  const sectionRef = useRef(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`/api/youtube/${handle}`);
        if (!res.ok) {
          throw new Error("Failed to fetch YouTube stats");
        }
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [handle]);

  useEffect(() => {
    if (stats) {
      ScrollTrigger.refresh();
    }
  }, [stats]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

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
              {stats?.thumbnailUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={stats.thumbnailUrl}
                  alt={stats.title || "Channel avatar"}
                  className="w-4 h-4 rounded-full object-cover"
                />
              ) : (
                <FaYoutube className="text-sm" />
              )}
              {stats?.title ? `${stats.title} · YouTube Channel` : "Dev Dossier · YouTube Channel"}
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {stats?.title ? `${stats.title} Tutorials` : "Dev Dossier Tutorials"}
            </h2>
            <p className="text-gray-400 mt-3 font-sans text-sm sm:text-base max-w-xl line-clamp-3">
              {stats?.description || "High-fidelity engineering tutorials on React, Next.js, Node.js, and scalable web architectures — built for working developers."}
            </p>
          </div>

          {/* Channel Stats */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <div className="text-center px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-[#FF0000]">
                {stats ? formatNumber(stats.subscriberCount) : "15.4K+"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Subscribers</p>
            </div>
            <div className="text-center px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-white">
                {stats ? formatNumber(stats.viewCount) : "120K+"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Total Views</p>
            </div>
            <div className="text-center px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-serif text-2xl font-bold text-white">
                {stats ? formatNumber(stats.videoCount) : "40+"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Tutorials</p>
            </div>
          </div>
        </div>


        <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
          <a
            href={stats?.customUrl ? `https://youtube.com/${stats.customUrl.startsWith('@') ? stats.customUrl : '@' + stats.customUrl}` : `https://youtube.com/@${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-[#FF0000]/30 hover:shadow-[#FF0000]/50 hover:-translate-y-0.5"
            data-cursor-text="SUBSCRIBE"
          >
            <FaYoutube className="text-base" />
            Subscribe to {stats?.customUrl ? (stats.customUrl.startsWith('@') ? stats.customUrl : `@${stats.customUrl}`) : `@${handle}`}
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
