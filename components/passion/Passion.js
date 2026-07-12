"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../ContactForm";
import PersonalYouTube from "./PersonalYouTube";
import { BsYoutube, BsCameraFill, BsHeartFill } from "react-icons/bs";
import { 
  FaGlobe, 
  FaYoutube, 
  FaGamepad,
  FaChurch,
  FaVideo,
  FaSlidersH,
  FaTv
} from "react-icons/fa";

// ─── WIDGET 1: YOUTUBE EMBED & AUDIENCE STATS ───
const YoutubeShowcase = ({ isPersonal }) => {
  return (
    <div className="w-full bg-white border border-warm-gray-200 rounded-3xl p-6 shadow-md text-left max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-cream border border-warm-gray-200/60 rounded-2xl p-6 text-center">
          <p className="font-serif text-2xl font-black text-rose-600 mb-1">
            {isPersonal ? "3.2K+" : "15.4K+"}
          </p>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Subscribers</p>
        </div>
        <div className="bg-cream border border-warm-gray-200/60 rounded-2xl p-6 text-center">
          <p className="font-serif text-2xl font-black text-rose-600 mb-1">
            {isPersonal ? "25K+" : "120K+"}
          </p>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Views</p>
        </div>
      </div>
    </div>
  );
};

// ─── WIDGET 2: GAMING SHOWCASE (DIGITAL & PHYSICAL) ───
const GamingShowcase = () => {
  const [activeTab, setActiveTab] = useState("digital");

  const digitalGames = [
    { title: "The Witcher 3: Wild Hunt", genre: "Open-World RPG", hours: "200+ hrs", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80" },
    { title: "Elden Ring", genre: "Action RPG", hours: "150+ hrs", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80" },
    { title: "Hades II", genre: "Rogue-like Action", hours: "60+ hrs", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80" },
    { title: "Cyberpunk 2077", genre: "Sci-Fi RPG", hours: "100+ hrs", image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=600&q=80" }
  ];

  const physicalGames = [
    { title: "Catan", genre: "Resource Strategy", players: "3-4 Players", image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80" },
    { title: "Dungeons & Dragons", genre: "Tabletop RPG", players: "4-6 Players", image: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&w=600&q=80" },
    { title: "Chess", genre: "Classic Strategy", players: "2 Players", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80" },
    { title: "Ticket to Ride", genre: "Tactical Route Building", players: "2-5 Players", image: "https://images.unsplash.com/photo-1606500549045-36272b0aa4f6?auto=format&fit=crop&w=600&q=80" }
  ];

  const games = activeTab === "digital" ? digitalGames : physicalGames;

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-warm-gray-200 rounded-3xl p-6 shadow-md flex flex-col gap-6 text-left">
      <div className="flex bg-warm-gray-100 p-1 rounded-2xl border border-warm-gray-200/50">
        <button
          onClick={() => setActiveTab("digital")}
          className={`flex-1 py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
            activeTab === "digital"
              ? "bg-rose-500 text-white shadow-sm"
              : "text-gray-500 hover:text-ink"
          }`}
        >
          Digital Realm
        </button>
        <button
          onClick={() => setActiveTab("physical")}
          className={`flex-1 py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
            activeTab === "physical"
              ? "bg-rose-500 text-white shadow-sm"
              : "text-gray-500 hover:text-ink"
          }`}
        >
          Physical Tabletop
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {games.map((game, idx) => (
          <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-warm-gray-200 shadow-sm bg-warm-gray-50">
            <Image
              src={game.image}
              alt={game.title}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 text-left">
              <span className="text-[9px] uppercase tracking-widest text-rose-400 font-bold mb-1">
                {activeTab === "digital" ? game.hours : game.players}
              </span>
              <h4 className="text-white text-xs font-serif font-bold leading-tight group-hover:text-rose-100 transition-colors">
                {game.title}
              </h4>
              <p className="text-white/60 text-[9px] mt-0.5 font-mono">
                {game.genre}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── WIDGET 3: PHOTO GALLERY MASONRY SWATCH ───
const PhotographyShowcase = () => {
  const photos = [
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", caption: "Mountain telemetries" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", caption: "Scenic shorelines" },
    { src: "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&w=800&q=80", caption: "Lush valley fields" },
    { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80", caption: "Forest pathways" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 text-left w-full max-w-lg mx-auto">
      <div className="flex flex-col gap-4">
        <div className="relative h-44 sm:h-64 rounded-3xl overflow-hidden group border border-warm-gray-200/50 shadow-sm">
          <Image
            src={photos[0].src}
            alt={photos[0].caption}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="text-white font-serif text-xs font-bold text-center leading-relaxed">
              {photos[0].caption}
            </span>
          </div>
        </div>
        <div className="relative h-56 sm:h-72 rounded-3xl overflow-hidden group border border-warm-gray-200/50 shadow-sm">
          <Image
            src={photos[1].src}
            alt={photos[1].caption}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="text-white font-serif text-xs font-bold text-center leading-relaxed">
              {photos[1].caption}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <div className="relative h-60 sm:h-80 rounded-3xl overflow-hidden group border border-warm-gray-200/50 shadow-sm">
          <Image
            src={photos[2].src}
            alt={photos[2].caption}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="text-white font-serif text-xs font-bold text-center leading-relaxed">
              {photos[2].caption}
            </span>
          </div>
        </div>
        <div className="relative h-40 sm:h-56 rounded-3xl overflow-hidden group border border-warm-gray-200/50 shadow-sm">
          <Image
            src={photos[3].src}
            alt={photos[3].caption}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="text-white font-serif text-xs font-bold text-center leading-relaxed">
              {photos[3].caption}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── WIDGET 4: CHURCH MEDIA SHOWCASE ───
const ChurchMediaShowcase = () => {
  const mediaRoles = [
    {
      icon: <FaVideo className="text-xl text-rose-500" />,
      title: "Camera Operations & Setup",
      desc: "Handling, operating, and setting up professional video cameras and equipment rigs to capture weekly services."
    },
    {
      icon: <FaTv className="text-xl text-teal-500" />,
      title: "Lyrics Presentation",
      desc: "Coordinating and running live lyric screens in real time, keeping in perfect sync with the worship team and congregation."
    },
    {
      icon: <FaSlidersH className="text-xl text-purple-500" />,
      title: "Console Handling",
      desc: "Managing the video switcher and control console to transition between camera feeds, monitor streams, and direct live output."
    }
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-warm-gray-200 rounded-3xl p-6 shadow-md flex flex-col gap-6 text-left relative overflow-hidden group">
      {/* Background print glow */}
      <div className="absolute -right-24 -bottom-24 w-52 h-52 rounded-full bg-rose-500/5 blur-[80px] pointer-events-none group-hover:bg-rose-500/10 transition-colors duration-500" />
      
      {/* Upper header card banner */}
      <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-warm-gray-100 bg-warm-gray-100 flex-shrink-0 select-none">
        <Image
          src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80"
          alt="Church Media Control Booth"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-500/90 text-white rounded-full text-[9px] font-bold uppercase tracking-widest w-fit mb-2">
            <FaChurch /> Active Media Ministry
          </span>
          <h4 className="text-white text-base font-serif font-black tracking-tight leading-tight">
            Production Booth & Broadcaster Control
          </h4>
        </div>
      </div>

      {/* Role list */}
      <div className="flex flex-col gap-5">
        {mediaRoles.map((role, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="p-3 bg-cream border border-warm-gray-200/50 rounded-2xl flex-shrink-0">
              {role.icon}
            </div>
            <div>
              <h5 className="font-serif text-sm font-bold text-ink mb-1">
                {role.title}
              </h5>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                {role.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── WIDGET 5: DYNAMIC BIDIRECTIONAL MARQUEE BAND ───
const CreativeTicker = () => {
  const row1Items = [
    "VISUAL STORYTELLER",
    "OUTDOOR EXPLORER",
    "GAMER & COLLECTOR",
    "CINEMATIC VLOGGER",
    "TRAVEL PHOTOGRAPHER",
  ];

  const row2Items = [
    "DIGITAL & PHYSICAL GAMES",
    "BOARD GAME STRATEGIST",
    "CINEMATIC LANDSCAPES",
    "SIDE QUESTS & BALANCE",
    "TRAVEL DIARIES",
  ];

  return (
    <div className="w-full border-y border-warm-gray-200/80 bg-white py-6 overflow-hidden select-none relative z-10 my-16 theme-transition flex flex-col gap-4">
      {/* Row 1: Scrolling Left */}
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-ink uppercase font-serif text-[11px] sm:text-xs tracking-[0.25em] font-extrabold">
        {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
          <div key={`row1-${idx}`} className="flex items-center gap-16">
            <span>{item}</span>
            <span className="text-rose-500 text-sm sm:text-base animate-pulse">✦</span>
          </div>
        ))}
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="flex animate-[marquee_24s_linear_infinite_reverse] whitespace-nowrap gap-16 text-gray-500 uppercase font-mono text-[9px] sm:text-[10px] tracking-[0.2em] border-t border-warm-gray-100/50 pt-4">
        {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
          <div key={`row2-${idx}`} className="flex items-center gap-16">
            <span>{item}</span>
            <span className="text-rose-500 text-xs">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Passion = () => {
  return (
    <div className="relative pb-12 w-full overflow-hidden">
      
      {/* SECTION 01: Hero & Intro */}
      <section id="creative-overview" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          01
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(244,63,94,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-[0.25em] mb-4 block">Creative Sandbox</span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight mb-6">
                Creative Mind, Balance & Side Quests
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Beyond my core client work and enterprise systems engineering, I believe in maintaining a creative sandbox. Sharing travel vlogs on YouTube, immersing myself in digital and physical gaming, and capturing cinematic travel landscapes helps me bring a fresh, creative perspective to everything I do.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-rose-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-rose-500 mb-1 group-hover:scale-105 transition-transform duration-300">18.6K+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Video Audience</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-teal-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-teal-500 mb-1 group-hover:scale-105 transition-transform duration-300">120+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Digital Games Played</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-purple-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-purple-500 mb-1 group-hover:scale-105 transition-transform duration-300">40+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Physical & Tabletop</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-amber-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-amber-500 mb-1 group-hover:scale-105 transition-transform duration-300">45+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Cities Explored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symmetric Ticker Banner */}
      <CreativeTicker />

      {/* SECTION 02: Video Production */}
      <section id="creative-videos" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          02
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            <div className="flex-1 text-left">
              <span className="cross-marker mb-4 block text-rose-600 text-lg">✦</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                Video Channels & Travelling
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                I capture my journeys, global explorations, and cultural encounters across my video channels. Through cinematic travel vlogs and life diaries, I share the beauty of different destinations, local cuisines, and travel stories to inspire others to step out and explore the world.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full">
              <YoutubeShowcase isPersonal={false} />
            </div>
          </div>

          {/* Personal YouTube Vlog Showcase Slider */}
          <div className="border-t border-warm-gray-200/60 pt-16">
            <PersonalYouTube />
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 03: Gaming (Digital & Physical) */}
      <section id="creative-gaming" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          03
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(244,63,94,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className="cross-marker mb-4 block text-rose-600 text-lg">✦</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                Digital & Physical Gaming
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Gaming is my ultimate creative sandbox and escape. I play and analyze both digital video games and physical tabletop board games. Whether strategizing routes in physical tabletop games or exploring lore-rich open-world RPGs on PC, gaming provides both entertainment and deep system design inspiration.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full">
              <GamingShowcase />
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 04: Cinematic Landscapes */}
      <section id="creative-hobbies" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          04
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className="cross-marker mb-4 block text-rose-600 text-lg">✦</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                Cinematic Landscapes & Exploration
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Hiking back-country trails and traveling to new environments provides the essential life balance needed to stay creative. I capture high-contrast travel photography along the way, cataloging natural frameworks, lighting patterns, and structural scales. Hover over photo frames to check captions.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full">
              <PhotographyShowcase />
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 05: Church Media (Faith & Production Service) */}
      <section id="church-media" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          05
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(244,63,94,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className="cross-marker mb-4 block text-rose-600 text-lg">✦</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                Media Ministry & Service
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                I am proud to serve as an active media team member for the Full Gospel Pentecostal Church of God. Handling and operating video cameras, setting up equipment rigs, running lyrics presentations, and managing switcher consoles lets me combine my technological experience with community service. Supporting spiritual worship through live media is a passion that gives deep purpose and balance to my life.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full">
              <ChurchMediaShowcase />
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 06: Let's Connect */}
      <ContactForm />

      {/* Passion Footer Banner */}
      <div className="mt-12 text-center pb-8">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Always curious</span>
          <BsHeartFill className="text-rose-500 text-base animate-pulse" />
          <span>Building for the future.</span>
        </p>
      </div>

    </div>
  );
};

export default Passion;