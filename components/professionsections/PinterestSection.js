"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPinterest, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PinCard = ({ pin }) => {
  const [liked, setLiked] = useState(false);

  return (
    <a
      href={pin.link}
      target="_blank"
      rel="noopener noreferrer"
      className="pinterest-pin block relative overflow-hidden rounded-2xl group cursor-pointer bg-white border border-warm-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
      data-cursor-text="VIEW"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden w-full bg-warm-gray-50 flex items-center justify-center">
        {pin.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={pin.image}
            alt={pin.title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          /* Fallback Art Board if no image */
          <div className="h-48 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
            <span className="text-4xl opacity-40">{pin.emoji || "✦"}</span>
          </div>
        )}

        {/* Hover Actions Overlay (Quick save & External Link) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 z-10">
          {/* Top Row: Category (Left) and Link Icon (Right) */}
          <div className="flex items-center justify-between w-full">
            <span
              className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/95 text-ink backdrop-blur-sm shadow-sm"
              style={{ color: pin.accent }}
            >
              {pin.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/95 text-ink flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
              <FaExternalLinkAlt className="text-[9px]" />
            </div>
          </div>

          {/* Bottom Row: Save (Like) Button */}
          <div className="flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                setLiked(!liked);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#E60023] hover:bg-[#C0001E] text-white text-[9px] font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <FaHeart className={`text-xs ${liked ? "text-white" : "text-white/80"}`} />
              <span>{liked ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card Content Footer (Always Visible for readability) */}
      <div className="p-4 bg-white border-t border-warm-gray-100/60 text-left">
        <h3 className="font-serif text-sm font-bold text-ink leading-snug line-clamp-2 group-hover:text-[#E60023] transition-colors duration-300">
          {pin.title}
        </h3>
        
        {/* Saves / Likes & Profile indicator */}
        <div className="flex items-center justify-between mt-3 text-[10px] text-gray-400 font-medium">
          <span className="flex items-center gap-1">
            <FaPinterest className="text-[#E60023] text-xs" />
            <span>devdossier</span>
          </span>
          <span className="flex items-center gap-1">
            <FaHeart className="text-gray-300 text-xs" />
            <span>{liked ? parseInt(pin.saves) + 1 : pin.saves} saves</span>
          </span>
        </div>
      </div>
    </a>
  );
};

const SkeletonPin = ({ index }) => {
  const heights = ["h-64", "h-52", "h-80", "h-56", "h-72", "h-48"];
  const height = heights[index % heights.length];
  return (
    <div className={`break-inside-avoid mb-4 rounded-2xl overflow-hidden border border-warm-gray-200/50 bg-warm-gray-100 ${height} animate-pulse relative`}>
      <div className="absolute inset-0 bg-gradient-to-r from-warm-gray-100 via-warm-gray-200 to-warm-gray-100 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
    </div>
  );
};

const PinterestSection = ({ handle = "devdossier" }) => {
  const sectionRef = useRef(null);
  const [feedInfo, setFeedInfo] = useState(null);
  const [displayPins, setDisplayPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPinterestPins() {
      try {
        const res = await fetch(`/api/pinterest/${handle}`);
        if (!res.ok) {
          throw new Error("Failed to fetch Pinterest feed");
        }
        const data = await res.json();
        
        setFeedInfo({
          title: data.title,
          description: data.description,
          link: data.link
        });

        const ACCENT_COLORS = ["#6366F1", "#C62828", "#F59E0B", "#0EA5E9", "#8B5CF6", "#6B7280", "#D97706", "#10B981"];
        const GRADIENTS = [
          "from-slate-800 to-slate-900",
          "from-rose-900 to-rose-950",
          "from-zinc-800 to-zinc-950",
          "from-sky-900 to-sky-950",
          "from-violet-900 to-violet-950",
          "from-neutral-800 to-neutral-950",
          "from-amber-900 to-amber-950",
          "from-emerald-900 to-emerald-950"
        ];
        const EMOJIS = ["🖥️", "✦", "🎨", "🚀", "💎", "📷", "Aa", "✨"];
        const HEIGHTS = ["h-64", "h-52", "h-80", "h-56", "h-72", "h-48", "h-60", "h-44"];

        const getPinCategory = (title = "") => {
          const text = title.toLowerCase();
          if (text.includes("minimal") || text.includes("setup") || text.includes("desk")) return "Setup";
          if (text.includes("ui") || text.includes("ux") || text.includes("design") || text.includes("layout")) return "UI/UX";
          if (text.includes("ai") || text.includes("api") || text.includes("model") || text.includes("gemini")) return "AI";
          if (text.includes("game") || text.includes("valorant") || text.includes("gta")) return "Gaming";
          if (text.includes("tech") || text.includes("developer") || text.includes("code")) return "Tech";
          return "Creative";
        };

        const isRelatedToWebsite = (pin) => {
          const title = (pin.title || "").toLowerCase();
          const desc = (pin.description || "").toLowerCase();
          const text = `${title} ${desc}`;
          
          // Related to design/development/setups/workspaces
          const relatedKeywords = [
            'web', 'ui', 'ux', 'design', 'setup', 'desk', 'developer', 'code', 
            'coding', 'saas', 'api', 'ai', 'keyboard', 'notion', 'figma', 
            'software', 'workstation', 'macbook', 'app', 'development', 
            'programming', 'minimalist'
          ];
          
          // Unrelated categories (gaming vlogs, off-topic posts)
          const unrelatedKeywords = [
            'gaming', 'gta', 'valorant', 'game', 'backlash', 'quote', 'hike'
          ];
          
          const hasRelated = relatedKeywords.some(keyword => text.includes(keyword));
          const hasUnrelated = unrelatedKeywords.some(keyword => text.includes(keyword));
          
          return hasRelated && !hasUnrelated;
        };

        const filteredPins = (data.pins || []).filter(isRelatedToWebsite);
        const limitedPins = filteredPins.slice(0, 6);

        const processed = limitedPins.map((pin, index) => {
          return {
            ...pin,
            accent: ACCENT_COLORS[index % ACCENT_COLORS.length],
            bgGradient: GRADIENTS[index % GRADIENTS.length],
            emoji: EMOJIS[index % EMOJIS.length],
            category: getPinCategory(pin.title),
            saves: `${((index * 47) % 400 + 43)}`,
            height: HEIGHTS[index % HEIGHTS.length]
          };
        });

        setDisplayPins(processed);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPinterestPins();
  }, [handle]);

  useEffect(() => {
    if (displayPins.length > 0) {
      ScrollTrigger.refresh();
      
      // Re-trigger GSAP animation for the newly loaded cards
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
    }
  }, [displayPins]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
          toggleActions: "play none none none",
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
              {feedInfo?.title ? `${feedInfo.title} Pins` : "Design Inspiration"}
            </h2>
            <p className="text-gray-500 mt-3 font-sans text-sm sm:text-base max-w-xl">
              {feedInfo?.description || "A curated collection of design ideas, UI patterns, typographic explorations, and creative references that fuel my work."}
            </p>
          </div>

          {/* Pinterest Stats */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <div className="text-center px-6 py-3 bg-white border border-warm-gray-200 rounded-2xl hover:border-[#E60023] transition-colors">
              <p className="font-serif text-2xl font-bold text-[#E60023]">{displayPins.length}+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Live Pins</p>
            </div>
            <div className="text-center px-6 py-3 bg-white border border-warm-gray-200 rounded-2xl hover:border-[#E60023] transition-colors">
              <p className="font-serif text-2xl font-bold text-ink">150+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Boards</p>
            </div>
          </div>
        </div>

        {/* Loading state, Error state, or Masonry Grid */}
        {loading ? (
          <div className="columns-1 xs:columns-2 sm:columns-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonPin key={index} index={index} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-white border border-warm-gray-200 rounded-3xl p-8">
            <p className="text-rose-600 font-bold mb-2">Failed to load live feed</p>
            <p className="text-xs text-gray-400">Please make sure the Pinterest profile exists and is public.</p>
          </div>
        ) : (
          <div className="columns-1 xs:columns-2 sm:columns-3 gap-4">
            {displayPins.map((pin) => (
              <div key={pin.id} className="break-inside-avoid mb-4">
                <PinCard pin={pin} />
              </div>
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <a
            href={feedInfo?.link || "https://pinterest.com/devdossier"}
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
