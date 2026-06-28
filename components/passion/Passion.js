"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../ContactForm";
import PersonalYouTube from "./PersonalYouTube";
import { BsYoutube, BsCameraFill, BsHeartFill } from "react-icons/bs";
import { 
  FaLaptopCode, 
  FaGlobe, 
  FaYoutube, 
  FaSync,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";

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

// ─── WIDGET 2: MOCK API CODE TERMINAL ───
const MockTerminalShowcase = () => {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([
    "System initialized. Ready for API query...",
    "Type a prompt below and click Run to execute simulated sandbox.",
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const runCommand = () => {
    if (!input.trim() || isRunning) return;
    setIsRunning(true);
    setLogs((prev) => [...prev, `> user@sandbox:~$ query-model --prompt "${input}"`]);

    const steps = [
      "Connecting to local model pipeline...",
      "Status: 200 OK. Parsing prompt token parameters...",
      "Generating serverless endpoints...",
      "Exporting code module: export const handler = async (event) => { ... }",
      "API Sandbox successfully compiled. Route registered: /api/sandbox/v1/generate",
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, `[system] ${step}`]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 800);
    });
    setInput("");
  };

  return (
    <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[360px] w-full max-w-lg mx-auto text-left">
      {/* Terminal Header */}
      <div className="bg-white/[0.03] px-4 py-3 flex items-center justify-between border-b border-white/5 flex-shrink-0 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
        </div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">query-model.sh</span>
        <span className="w-10" />
      </div>

      {/* Terminal Logs */}
      <div className="p-5 flex-1 overflow-y-auto space-y-2 text-left font-mono text-[11px] text-emerald-400 leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {logs.map((log, i) => (
          <p key={i} className="whitespace-pre-wrap">{log}</p>
        ))}
      </div>
      
      {/* Terminal Input */}
      <div className="px-5 py-4 border-t border-white/5 bg-white/[0.01] flex items-center gap-2 flex-shrink-0 text-left">
        <span className="text-emerald-500 font-bold font-mono">❯</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI sandbox... (e.g. generate DB schema)"
          className="bg-transparent text-emerald-400 focus:outline-none flex-1 font-mono placeholder-emerald-950/50 text-[11px]"
          onKeyDown={(e) => e.key === "Enter" && runCommand()}
          disabled={isRunning}
        />
        <button
          onClick={runCommand}
          disabled={isRunning || !input.trim()}
          className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center"
        >
          {isRunning ? <FaSync className="animate-spin" /> : "Run"}
        </button>
      </div>
    </div>
  );
};

// ─── WIDGET 3: FIGMA CAROUSEL SLIDER ───
const DesignShowcase = () => {
  const images = [
    "/project2.jpg",
    "/project3.jpg",
    "/project4.jpg",
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-warm-gray-200 rounded-3xl p-4 shadow-md flex flex-col gap-4 text-left">
      {/* Browser Mock Frame */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-warm-gray-100 bg-warm-gray-50 flex flex-col">
        {/* Browser bar */}
        <div className="h-8 bg-warm-gray-100 border-b border-warm-gray-200/50 px-4 flex items-center justify-between flex-shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-warm-gray-300 inline-block" />
            <span className="w-2 h-2 rounded-full bg-warm-gray-300 inline-block" />
            <span className="w-2 h-2 rounded-full bg-warm-gray-300 inline-block" />
          </div>
          <span className="text-[9px] text-gray-400 font-sans tracking-wide">figma.com/file/sandbox-prototype</span>
          <span className="w-10" />
        </div>
        
        {/* Slide Image */}
        <div className="flex-1 relative">
          <Image
            src={images[activeIdx]}
            alt={`Figma Artboard ${activeIdx + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          
          {/* Navigation Controls Overlay */}
          <button
            onClick={() => setActiveIdx((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-warm-gray-200/50 flex items-center justify-center text-[10px] text-ink shadow-sm hover:scale-105 transition-all z-10"
            aria-label="Previous Design"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-warm-gray-200/50 flex items-center justify-center text-[10px] text-ink shadow-sm hover:scale-105 transition-all z-10"
            aria-label="Next Design"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      
      {/* Indicator Dots and Stats Footer */}
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Artboard {activeIdx + 1} of {images.length}
        </span>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === i ? "bg-purple-500 w-3" : "bg-warm-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── WIDGET 4: PHOTO GALLERY MASONRY SWATCH ───
const PhotographyShowcase = () => {
  const photos = [
    { src: "/project1.jpg", caption: "Mountain telemetries" },
    { src: "/project1b.jpg", caption: "Visual structures" },
    { src: "/project6.jpg", caption: "High contrast frames" },
    { src: "/project3.jpg", caption: "Urban paths" },
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

// ─── WIDGET 5: DYNAMIC BIDIRECTIONAL MARQUEE BAND ───
const CreativeTicker = () => {
  const row1Items = [
    "VISUAL STORYTELLER",
    "OUTDOOR EXPLORER",
    "INDIE HACKER",
    "INTERFACE DESIGNER",
    "CINEMATIC VLOGGER",
  ];

  const row2Items = [
    "CREATIVE SANDBOX",
    "API PIPELINES",
    "FIGMA ARTBOARDS",
    "MOUNTAIN TELEMETRY",
    "SIDE QUESTS & BALANCE",
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

// ─── 5. MAIN PRESENTATION PAGE RESTYLING ───

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
                Beyond my core client work and enterprise systems engineering, I believe in maintaining a creative sandbox. Exploring visual storytelling on YouTube, building automated AI pipelines, designing prototypes, and capturing cinematic travel frames helps me bring a unique perspective to full-stack architecture.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-rose-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-rose-500 mb-1 group-hover:scale-105 transition-transform duration-300">18.6K+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Video Audience</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-teal-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-teal-500 mb-1 group-hover:scale-105 transition-transform duration-300">5+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">SaaS & API Sandboxes</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-purple-500 transition-colors group text-center shadow-sm">
                <h3 className="font-serif text-3xl font-black text-purple-500 mb-1 group-hover:scale-105 transition-transform duration-300">20+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Figma Artboards</p>
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
                Video Channels & Education
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                I share my technical engineering workflows, structured system patterns, and lifestyle vlogs across my video channels. Through Dev Dossier, I teach Next.js and frontend scaling layouts to help developers level up. My personal channel hosts visual diaries capturing travel experiences and daily entrepreneurial insights.
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

      {/* SECTION 03: Creative Dev */}
      <section id="creative-coding" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          03
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(20,184,166,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className="cross-marker mb-4 block text-rose-600 text-lg">✦</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                Experimental Code & API Labs
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                My software sandbox contains custom generative AI orchestration layers, lightweight microservices, and serverless product backbones. I build and test automated command-line frameworks, developer tool bundles, and metric analysis hooks. Test out a live model prompt response in the terminal window.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full">
              <MockTerminalShowcase />
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 04: UI/UX Prototyping */}
      <section id="creative-design" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          04
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(168,85,247,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className="cross-marker mb-4 block text-rose-600 text-lg">✦</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
                Interface Prototyping Boards
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Every project I build starts with pixel-perfect layouts, interactive components, and comprehensive design grids in Figma. I prototype wireframes, experiment with design tokens, and draft typography systems before writing a single line of React. Cycle through some of my favorite recent prototype interfaces.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            <div className="flex-1 w-full">
              <DesignShowcase />
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 05: Hobbies & Balance */}
      <section id="creative-hobbies" className="py-24 relative overflow-hidden bg-transparent">
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          05
        </div>

        {/* Dynamic decorative backdrop highlight */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-40 bg-[radial-gradient(circle,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
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