"use client";

import { useState, useEffect } from "react";
import { FaYoutube, FaUsers, FaEye, FaVideo } from "react-icons/fa";

export default function YouTubeStats({ handle = "devdossier" }) {
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

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-pulse">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white/10"></div>
          <div className="flex-1 space-y-4 w-full">
            <div className="h-6 bg-white/10 rounded w-1/3"></div>
            <div className="h-4 bg-white/10 rounded w-2/3"></div>
            <div className="flex gap-4 pt-4">
              <div className="h-8 bg-white/10 rounded w-24"></div>
              <div className="h-8 bg-white/10 rounded w-24"></div>
              <div className="h-8 bg-white/10 rounded w-24"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-200">
        <p className="flex items-center gap-2">
          <FaYoutube className="text-red-500" />
          Error loading YouTube stats. Please check your API key configuration.
        </p>
      </div>
    );
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative group">
      {/* Background glowing effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      <div className="relative p-8 rounded-3xl bg-black border border-white/10 backdrop-blur-xl overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          {/* Channel Logo & Subscribe Button */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-red-500/30 shadow-2xl shadow-red-500/20">
              <img 
                src={stats.thumbnailUrl} 
                alt={`${stats.title} profile`} 
                className="w-full h-full object-cover"
              />
            </div>
            <a 
              href={`https://youtube.com/${stats.customUrl}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30"
            >
              <FaYoutube className="text-xl" />
              Subscribe
            </a>
          </div>

          {/* Channel Info */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-center h-full">
            <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
              {stats.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 line-clamp-2 max-w-2xl leading-relaxed">
              {stats.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 xs:gap-4 md:gap-6 w-full max-w-xl mx-auto md:mx-0">
              {/* Subscribers */}
              <div className="flex flex-col items-center md:items-start gap-1 p-2 xs:p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <FaUsers />
                  <span className="text-xs font-semibold uppercase tracking-wider">Subs</span>
                </div>
                <span className="text-xl xs:text-2xl font-bold text-white tracking-tight">
                  {formatNumber(stats.subscriberCount)}
                </span>
              </div>

              {/* Views */}
              <div className="flex flex-col items-center md:items-start gap-1 p-2 xs:p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <FaEye />
                  <span className="text-xs font-semibold uppercase tracking-wider">Views</span>
                </div>
                <span className="text-xl xs:text-2xl font-bold text-white tracking-tight">
                  {formatNumber(stats.viewCount)}
                </span>
              </div>

              {/* Videos */}
              <div className="flex flex-col items-center md:items-start gap-1 p-2 xs:p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <FaVideo />
                  <span className="text-xs font-semibold uppercase tracking-wider">Videos</span>
                </div>
                <span className="text-xl xs:text-2xl font-bold text-white tracking-tight">
                  {formatNumber(stats.videoCount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
