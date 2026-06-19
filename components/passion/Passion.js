"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ContactForm from "../ContactForm";
import { BsYoutube, BsGearFill, BsCameraFill, BsHeartFill, BsInfoCircleFill } from "react-icons/bs";
import { 
  FaLaptopCode, 
  FaGlobe, 
  FaYoutube, 
  FaTimes, 
  FaTerminal, 
  FaPlay, 
  FaChevronLeft, 
  FaChevronRight, 
  FaExternalLinkAlt,
  FaSync
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";

// ─── 3D TILT CARD COMPONENT ───
const PassionCard = ({ card, onClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({ x: x * 12, y: -y * 12 }); // Limit tilt rotation angle
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Border colors matching category theme
  const getBorderColor = () => {
    switch (card.category) {
      case "videos":
        return "hover:border-rose-500 hover:shadow-[0_12px_30px_rgba(244,63,94,0.15)]";
      case "coding":
        return "hover:border-teal-500 hover:shadow-[0_12px_30px_rgba(20,184,166,0.15)]";
      case "design":
        return "hover:border-purple-500 hover:shadow-[0_12px_30px_rgba(168,85,247,0.15)]";
      case "hobbies":
        return "hover:border-amber-500 hover:shadow-[0_12px_30px_rgba(245,158,11,0.15)]";
      default:
        return "hover:border-crimson hover:shadow-lg";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
      className={`bg-white border border-warm-gray-200 p-8 rounded-[32px] flex flex-col justify-between group cursor-pointer transition-all duration-300 shadow-sm ${getBorderColor()}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
        transformStyle: "preserve-3d",
      }}
      data-cursor-text="EXPLORE"
    >
      <div style={{ transform: "translateZ(30px)" }} className="preserve-3d">
        {/* Header Block */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cream border border-warm-gray-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
            {card.icon}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
            card.category === "videos" ? "bg-rose-50 text-rose-600" :
            card.category === "coding" ? "bg-teal-50 text-teal-600" :
            card.category === "design" ? "bg-purple-50 text-purple-600" :
            "bg-amber-50 text-amber-600"
          }`}>
            {card.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-ink mb-1 group-hover:text-crimson transition-colors duration-300">
          {card.title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-xs text-gray-400 font-semibold mb-4 uppercase tracking-wider">
          {card.sub}
        </p>
        
        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed text-justify mb-8 font-sans">
          {card.desc}
        </p>
      </div>

      {/* Button interface */}
      <div 
        className="inline-flex items-center gap-1.5 text-xs font-bold text-ink group-hover:text-crimson transition-colors duration-300 pt-4 border-t border-warm-gray-200 w-full uppercase tracking-wider"
        style={{ transform: "translateZ(15px)" }}
      >
        <span>Explore Passion</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};


// ─── DRAWER SUBCOMPONENTS ───

// 1. YouTube Channel Showcase
const YoutubeShowcase = ({ card }) => {
  // Use Next.js crash course for Dev Dossier, scenic reel for personal vlog
  const videoId = card.id === 1 ? "Ke90Tje7VS0" : "2b9txcAt4e0";

  return (
    <div className="space-y-6">
      {/* Dynamic Embed Player */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-warm-gray-200 shadow-md">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0`}
          title={`${card.title} Video Preview`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Stats Counter Display */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-warm-gray-200 rounded-2xl p-4 text-center">
          <p className="font-serif text-2xl font-black text-rose-600">
            {card.id === 1 ? "15.4K+" : "3.2K+"}
          </p>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Subscribers</p>
        </div>
        <div className="bg-white border border-warm-gray-200 rounded-2xl p-4 text-center">
          <p className="font-serif text-2xl font-black text-rose-600">
            {card.id === 1 ? "120k+" : "25k+"}
          </p>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Views</p>
        </div>
      </div>

      {/* Narrative Info Box */}
      <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6">
        <h4 className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <BsInfoCircleFill className="text-sm" /> Channel Insights
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {card.id === 1 
            ? "Dev Dossier focuses on high-fidelity tutorial courses, structural patterns, and architectural breakdowns. Tailored for engineers learning Next.js, Framer Motion, and scalable frontend architectures."
            : "A documentation of adventures, cinematography tests, and cinematic stories. A pure sandbox for creative expression and testing camera equipment and color grading models."
          }
        </p>
      </div>

      {/* Content Pillar Tags */}
      <div>
        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Content Pillars</p>
        <div className="flex flex-wrap gap-2">
          {(card.id === 1 
            ? ["UI Engineering", "Next.js", "Design Systems", "Web Performance"]
            : ["Cinematography", "Travel Logs", "Creative Writing", "Gear Reviews"]
          ).map((pillar, i) => (
            <span key={i} className="text-xs font-semibold bg-white border border-warm-gray-200 text-gray-600 px-3 py-1 rounded-full shadow-2xs">
              {pillar}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Interactive CLI Terminal Sandbox
const TerminalSandbox = ({ card }) => {
  const [logs, setLogs] = useState([
    "Initializing shell...",
    "System ready. Select a script below to run simulation."
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const addLogLines = (lines) => {
    let currentLine = 0;
    setIsExecuting(true);

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setLogs((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsExecuting(false);
      }
    }, 450);
  };

  const handleRunPipeline = () => {
    if (isExecuting) return;
    setLogs((prev) => [...prev, "", "$ node ai-pipeline.js --verbose"]);
    const lines = [
      "[1] Connecting to Anthropic & OpenAI API endpoints...",
      "[2] Success: Response latency: 248ms (us-east-1)",
      "[3] Initializing file analysis context...",
      "[4] Log: Found 12 component files in client repository.",
      "[5] Refactoring algorithm: components/passion/Passion.js",
      "[6] Output: Injecting 3D Tilt parameters...",
      "[7] Build check: next build status -> SUCCESS",
      "Process finished with code 0"
    ];
    addLogLines(lines);
  };

  const handleGitLog = () => {
    if (isExecuting) return;
    setLogs((prev) => [...prev, "", "$ git log --oneline -n 3"]);
    const lines = [
      "* 81b2df9 (HEAD -> main) feat: upgrade passion section into interactive sandboxes",
      "* a7d94cf style: add editorial scroll watermark background",
      "* 92d13aa design: refactor glassmorphic filters with active toggle bubble",
    ];
    addLogLines(lines);
  };

  const handleBuild = () => {
    if (isExecuting) return;
    setLogs((prev) => [...prev, "", "$ npm run build"]);
    const lines = [
      "▲ Next.js 15.2.8",
      "Creating an optimized production build...",
      "✓ Compiled successfully in 1.9s",
      "✓ Collecting page data",
      "✓ Generating static pages (5/5)",
      "First Load JS shared by all: 87.2 kB"
    ];
    addLogLines(lines);
  };

  return (
    <div className="space-y-6">
      {/* Shell Container */}
      <div className="bg-[#0b0f17] text-teal-400 font-mono text-xs rounded-2xl overflow-hidden border border-warm-gray-300 shadow-2xl flex flex-col min-h-[280px]">
        {/* Terminal Titlebar */}
        <div className="bg-[#151b26] px-4 py-2 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">sh - interactive sandbox</span>
          <FaTerminal className="text-gray-600 text-xs" />
        </div>

        {/* Logs terminal printouts */}
        <div className="flex-1 p-4 overflow-y-auto max-h-[220px] space-y-1">
          {logs.map((log, index) => {
            let textColor = "text-teal-400/90";
            if (log.startsWith("$")) textColor = "text-yellow-400 font-bold";
            else if (log.includes("SUCCESS") || log.includes("successfully")) textColor = "text-emerald-400 font-bold";
            else if (log.includes("ERROR") || log.includes("failed")) textColor = "text-rose-400";
            else if (log.startsWith("[")) textColor = "text-gray-400";

            return (
              <div key={index} className={`${textColor} leading-relaxed break-all`}>
                {log}
              </div>
            );
          })}
          {isExecuting && (
            <div className="text-teal-400 animate-pulse font-bold">
              Executing pipeline<span className="cursor-blink">...</span>
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Terminal Actions */}
      <div className="space-y-2">
        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Simulate Script Execution</p>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={handleRunPipeline}
            disabled={isExecuting}
            className="py-2.5 px-2 bg-white hover:bg-teal-50 border border-warm-gray-200 hover:border-teal-400 text-[10px] font-bold text-gray-600 hover:text-teal-600 uppercase rounded-xl transition-colors active:scale-95 disabled:opacity-50"
            data-cursor-text="RUN"
          >
            Run API Pipeline
          </button>
          <button
            onClick={handleGitLog}
            disabled={isExecuting}
            className="py-2.5 px-2 bg-white hover:bg-teal-50 border border-warm-gray-200 hover:border-teal-400 text-[10px] font-bold text-gray-600 hover:text-teal-600 uppercase rounded-xl transition-colors active:scale-95 disabled:opacity-50"
            data-cursor-text="GIT"
          >
            Git Logs
          </button>
          <button
            onClick={handleBuild}
            disabled={isExecuting}
            className="py-2.5 px-2 bg-white hover:bg-teal-50 border border-warm-gray-200 hover:border-teal-400 text-[10px] font-bold text-gray-600 hover:text-teal-600 uppercase rounded-xl transition-colors active:scale-95 disabled:opacity-50"
            data-cursor-text="BUILD"
          >
            Next Build
          </button>
        </div>
        <button
          onClick={() => setLogs(["System refreshed.", "Type or click a script to start..."])}
          className="w-full py-2 bg-warm-gray-100 hover:bg-warm-gray-200 text-gray-500 hover:text-ink text-[10px] font-bold uppercase rounded-xl transition-colors flex items-center justify-center gap-1.5 mt-2"
        >
          <FaSync className="text-[8px]" /> Clear terminal logs
        </button>
      </div>
    </div>
  );
};

// 3. Figma Custom Swatch Inspector
const FigmaCanvas = () => {
  const [accentColor, setAccentColor] = useState("#C62828");
  const [headline, setHeadline] = useState("UI/UX Prototype Layout");
  const [isSerif, setIsSerif] = useState(true);

  const swatches = [
    { name: "Crimson", value: "#C62828", bg: "bg-[#C62828]" },
    { name: "Teal", value: "#0D9488", bg: "bg-[#0D9488]" },
    { name: "Purple", value: "#7C3AED", bg: "bg-[#7C3AED]" },
    { name: "Amber", value: "#D97706", bg: "bg-[#D97706]" },
    { name: "Ink", value: "#1A1A1A", bg: "bg-[#1A1A1A]" }
  ];

  return (
    <div className="space-y-6">
      {/* Virtual Canvas Box */}
      <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-warm-gray-300 shadow-xl relative min-h-[220px] flex flex-col justify-center items-center overflow-hidden">
        {/* Canvas Grid dots pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Canvas Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 bg-white/10 border border-white/10 rounded-md text-[9px] uppercase tracking-wider text-gray-300 font-mono">
          <SiFigma className="text-[#F24E1E]" /> Canvas Frame
        </div>

        {/* Real-time Custom Card Design inside Canvas */}
        <div 
          className="w-full max-w-sm p-6 rounded-xl bg-white text-ink shadow-2xl relative transition-all duration-300 z-10"
          style={{ borderTop: `6px solid ${accentColor}` }}
        >
          <span 
            className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full inline-block mb-3"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            Responsive Component
          </span>
          <h5 className={`text-lg font-bold text-ink mb-1 ${isSerif ? "font-serif" : "font-sans"}`}>
            {headline || "Prototype Title"}
          </h5>
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">Active Accent Sandbox</p>
          <p className="text-gray-500 text-xs leading-relaxed">
            Customize typography styles, colors, and content controls using the options below to review visual balance in real-time.
          </p>
        </div>
      </div>

      {/* Inspector Controls */}
      <div className="space-y-4">
        {/* Swatch Picker */}
        <div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Color Swatch Accent</p>
          <div className="flex gap-3">
            {swatches.map((swatch, i) => (
              <button
                key={i}
                onClick={() => setAccentColor(swatch.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 active:scale-90 ${swatch.bg} ${
                  accentColor === swatch.value ? "border-white ring-2 ring-crimson" : "border-transparent"
                }`}
                title={swatch.name}
                data-cursor-text="COLOR"
              />
            ))}
          </div>
        </div>

        {/* Font Toggle */}
        <div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Typography Setup</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setIsSerif(true)}
              className={`py-2 bg-white border rounded-xl text-xs font-bold transition-all uppercase ${
                isSerif ? "border-ink bg-ink/5" : "border-warm-gray-200 text-gray-500"
              }`}
            >
              Editorial Serif
            </button>
            <button
              onClick={() => setIsSerif(false)}
              className={`py-2 bg-white border rounded-xl text-xs font-bold transition-all uppercase ${
                !isSerif ? "border-ink bg-ink/5" : "border-warm-gray-200 text-gray-500"
              }`}
            >
              Modern Sans
            </button>
          </div>
        </div>

        {/* Dynamic Title Input */}
        <div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Inspect Component Text</p>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full bg-white border border-warm-gray-200 rounded-xl px-4 py-2.5 text-xs text-ink focus:outline-none focus:border-crimson transition-colors"
            placeholder="Type custom text..."
          />
        </div>
      </div>
    </div>
  );
};

// 4. Travel Photo Slider & Telemetry
const TravelGallery = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      caption: "Rohtang Pass peak, Himalayas - Landscape grading test"
    },
    {
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      caption: "Sony A7IV setup - Testing atmospheric lens flares"
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      caption: "Deep valleys in Spiti trail - Exploring high-contrast grading"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="space-y-6">
      {/* Slider Carousel Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-warm-gray-200 shadow-lg bg-black">
        <Image
          src={photos[activeIndex].url}
          alt={photos[activeIndex].caption}
          fill
          sizes="(max-width: 640px) 100vw, 500px"
          className="object-cover transition-opacity duration-500 ease-in-out"
          priority
        />
        
        {/* Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-12">
          <p className="text-[11px] font-sans font-medium text-white/95 leading-relaxed">
            {photos[activeIndex].caption}
          </p>
        </div>

        {/* Carousel Slider Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 flex justify-between pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors pointer-events-auto active:scale-90"
            data-cursor-text="PREV"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors pointer-events-auto active:scale-90"
            data-cursor-text="NEXT"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      {/* Telemetry Dashboard Stats */}
      <div className="bg-white border border-warm-gray-200 rounded-2xl p-6 space-y-4 shadow-2xs">
        <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1.5 border-b border-warm-gray-100 pb-3">
          <BsCameraFill className="text-sm" /> Gear & Travel Log
        </h4>
        
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          <div>
            <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Camera Body</p>
            <p className="text-xs font-bold text-ink">Sony Alpha A7IV</p>
          </div>
          <div>
            <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Lenses</p>
            <p className="text-xs font-bold text-ink">24-70mm f/2.8 DG DN</p>
          </div>
          <div>
            <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Trails Scaled</p>
            <p className="text-xs font-bold text-ink">12 Peaks Hiked</p>
          </div>
          <div>
            <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Next Expedition</p>
            <p className="text-xs font-bold text-ink">Ladakh Mountain Pass</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ─── THE IMMERSIVE SLIDE-OUT DRAWER ───
const PassionDrawer = ({ card, isOpen, onClose }) => {
  if (!card) return null;

  const renderContent = () => {
    switch (card.category) {
      case "videos":
        return <YoutubeShowcase card={card} />;
      case "coding":
        return <TerminalSandbox card={card} />;
      case "design":
        return <FigmaCanvas card={card} />;
      case "hobbies":
        return <TravelGallery card={card} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Overlay Backdrop Blur */}
      <div
        className={`fixed inset-0 bg-black/45 backdrop-blur-sm z-[200] transition-opacity duration-500 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer Layout Container */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] md:w-[600px] bg-[#FAF8F5] shadow-[0_0_60px_rgba(0,0,0,0.15)] z-[300] border-l border-warm-gray-200 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header Block */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-warm-gray-200 bg-white">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-cream border border-warm-gray-200 flex items-center justify-center text-xl shadow-2xs">
              {card.icon}
            </div>
            <div>
              <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block ${
                card.category === "videos" ? "bg-rose-50 text-rose-600 border border-rose-100" :
                card.category === "coding" ? "bg-teal-50 text-teal-600 border border-teal-100" :
                card.category === "design" ? "bg-purple-50 text-purple-600 border border-purple-100" :
                "bg-amber-50 text-amber-600 border border-amber-100"
              }`}>
                {card.tag}
              </span>
              <h2 className="font-serif text-xl font-bold leading-tight mt-1 text-ink">
                {card.title}
              </h2>
            </div>
          </div>
          
          {/* Close Action */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-warm-gray-200 hover:border-crimson flex items-center justify-center text-gray-500 hover:text-crimson bg-white transition-all duration-200 active:scale-90 shadow-2xs"
            data-cursor-text="CLOSE"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Scrollable sandbox wrapper */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-thin">
          {renderContent()}
        </div>

        {/* External Landing CTA */}
        <div className="p-8 border-t border-warm-gray-200 bg-white shadow-2xl">
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 bg-ink text-white hover:bg-crimson text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 group"
          >
            <span>Launch Live Space</span>
            <FaExternalLinkAlt className="text-[9px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </>
  );
};


// ─── MAIN PASSION MODULE ───
const Passion = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cards = [
    {
      id: 1,
      category: "videos",
      title: "Dev Dossier Channel",
      sub: "Web Development Education",
      desc: "Creating rich web development tutorials covering React, Next.js, and CSS architectures. Sharing resources, reviewing tools, and teaching foundational principles to aspiring engineers.",
      icon: <FaYoutube className="text-rose-500" />,
      tag: "YouTube Business",
      link: "https://youtube.com/@shalimarmehra",
    },
    {
      id: 2,
      category: "coding",
      title: "AI API Integrations",
      sub: "Creative Sandbox",
      desc: "Developing side projects exploring generative AI pipelines, custom API endpoints, and serverless architectures. Playing with automated workflows and language model scripts.",
      icon: <FaLaptopCode className="text-teal-600" />,
      tag: "Experimental Tech",
      link: "https://github.com/shalimarmehra",
    },
    {
      id: 3,
      category: "design",
      title: "UI/UX Sandbox",
      sub: "Figma Prototypes",
      desc: "Crafting modern, visually premium interfaces and mockups. Designing layouts with clean typography, responsive wireframes, and curated color palettes before coding them.",
      icon: <SiFigma className="text-purple-600" />,
      tag: "Figma Designs",
      link: "https://www.linkedin.com/in/shalimarmehra/",
    },
    {
      id: 4,
      category: "videos",
      title: "Personal Vlogs & Events",
      sub: "Life Journey & Event Coverage",
      desc: "Creating occasional video stories and event summaries on my personal YouTube channel. Sharing vlogs that capture life experiences, personal thoughts, and creative journeys.",
      icon: <BsYoutube className="text-rose-500" />,
      tag: "YouTube Vlogs",
      link: "https://youtube.com/@shalimarmehra",
    },
    {
      id: 5,
      category: "hobbies",
      title: "Photography & Travel",
      sub: "Capturing Perspectives",
      desc: "Exploring new cities, scaling mountain trails, and capturing cinematic frames. Finding balance in nature to fuel creativity and maintain fresh perspective for technical design.",
      icon: <BsCameraFill className="text-amber-500" />,
      tag: "Life Balance",
      link: "https://instagram.com/shalimarmehra",
    },
    {
      id: 6,
      category: "coding",
      title: "Indie Hacking & Startups",
      sub: "Building Digital Products",
      desc: "Brainstorming and prototyping lightweight micro-SaaS ideas. Launching mini products, running metrics analyses, and testing user retention loops.",
      icon: <FaGlobe className="text-sky-600" />,
      tag: "Entrepreneurship",
      link: "https://devdossier.in/",
    },
  ];

  // ─── LOCAL GSAP MOUNT PARALLAX BINDING ───
  useEffect(() => {
    let scrollTriggerInstance;

    const initParallax = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);
        scrollTriggerInstance = ScrollTrigger;

        const watermarks = gsap.utils.toArray(".passion-scroll-watermark");

        watermarks.forEach((watermark) => {
          const speed = parseFloat(watermark.getAttribute("data-speed") || "-0.15");

          gsap.fromTo(watermark,
            { y: 0 },
            {
              yPercent: speed * 100,
              ease: "none",
              scrollTrigger: {
                trigger: watermark.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );
        });
      } catch (err) {
        console.error("GSAP ScrollTrigger loading failed in Passion:", err);
      }
    };

    initParallax();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.getAll().forEach((trigger) => {
          if (trigger.trigger && trigger.trigger.querySelector && trigger.trigger.querySelector(".passion-scroll-watermark")) {
            trigger.kill();
          }
        });
      }
    };
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    // Delay clearing card structure so closing transition has card content
    setTimeout(() => {
      setSelectedCard(null);
    }, 500);
  };

  return (
    <div className="relative pb-12 w-full overflow-hidden">
      
      {/* SECTION 01: Hero & Intro */}
      <section id="creative-overview" className="py-24 relative overflow-hidden bg-transparent">
        {/* Large section number */}
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          01
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <span className="text-xs font-bold text-crimson uppercase tracking-[0.25em] mb-4 block">Creative Sandbox</span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight mb-6">
                Creative Mind, Balance & Side Quests
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Beyond my core client work and enterprise systems engineering, I believe in maintaining a creative sandbox. Exploring visual storytelling on YouTube, building automated AI pipelines, designing prototypes, and capturing cinematic travel frames helps me bring a unique perspective to full-stack architecture.
              </p>
              <div className="editorial-divider w-16 h-px bg-warm-gray-300" />
            </div>
            
            {/* Quick Metrics highlight */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-rose-500 transition-colors group text-center">
                <h3 className="font-serif text-3xl font-black text-rose-500 mb-1 group-hover:scale-105 transition-transform duration-300">18.6K+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Video Audience</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-teal-500 transition-colors group text-center">
                <h3 className="font-serif text-3xl font-black text-teal-500 mb-1 group-hover:scale-105 transition-transform duration-300">5+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">SaaS & API Sandboxes</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-purple-500 transition-colors group text-center">
                <h3 className="font-serif text-3xl font-black text-purple-500 mb-1 group-hover:scale-105 transition-transform duration-300">20+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Figma Artboards</p>
              </div>
              <div className="bg-white border border-warm-gray-200 rounded-3xl p-6 hover:border-amber-500 transition-colors group text-center">
                <h3 className="font-serif text-3xl font-black text-amber-500 mb-1 group-hover:scale-105 transition-transform duration-300">45+</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Cities Explored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 02: Video Production */}
      <section id="creative-videos" className="py-24 relative overflow-hidden bg-transparent">
        {/* Large section number */}
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          02
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center md:text-left relative z-10">
            <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Video Channels & Education
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
              Sharing technical web engineering tutorials, workflow systems, and lifestyle travel stories.
            </p>
            <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.filter(c => c.category === "videos").map((card) => (
              <PassionCard key={card.id} card={card} onClick={() => handleCardClick(card)} />
            ))}
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 03: Creative Dev */}
      <section id="creative-coding" className="py-24 relative overflow-hidden bg-transparent">
        {/* Large section number */}
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          03
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center md:text-left relative z-10">
            <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Experimental Code & API Labs
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
              Building generative AI endpoints, custom CLI automation frameworks, and product sandboxes.
            </p>
            <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.filter(c => c.category === "coding").map((card) => (
              <PassionCard key={card.id} card={card} onClick={() => handleCardClick(card)} />
            ))}
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 04: UI/UX Prototyping */}
      <section id="creative-design" className="py-24 relative overflow-hidden bg-transparent">
        {/* Large section number */}
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          04
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center md:text-left relative z-10">
            <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Interface Prototyping Boards
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
              Forging responsive wireframes, design swatches, and typography rules in Figma before building.
            </p>
            <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
          </div>

          <div className="max-w-2xl mx-auto">
            {cards.filter(c => c.category === "design").map((card) => (
              <PassionCard key={card.id} card={card} onClick={() => handleCardClick(card)} />
            ))}
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 05: Hobbies & Balance */}
      <section id="creative-hobbies" className="py-24 relative overflow-hidden bg-transparent">
        {/* Large section number */}
        <div className="scroll-watermark passion-scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
          05
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center md:text-left relative z-10">
            <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Cinematic Landscapes & Exploration
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
              Scaling peaks, hiking wilderness, and capturing high-contrast nature telemetry profiles.
            </p>
            <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
          </div>

          <div className="max-w-2xl mx-auto">
            {cards.filter(c => c.category === "hobbies").map((card) => (
              <PassionCard key={card.id} card={card} onClick={() => handleCardClick(card)} />
            ))}
          </div>
        </div>
      </section>

      <div className="editorial-divider max-w-6xl mx-auto" />

      {/* SECTION 06: Let's Connect */}
      <ContactForm />

      {/* Immersive Sandbox Details Drawer */}
      <PassionDrawer
        card={selectedCard}
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  );
};

export default Passion;