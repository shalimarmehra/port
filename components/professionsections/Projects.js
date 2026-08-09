"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaGithub,
  FaExternalLinkAlt,
  FaThLarge,
  FaList,
  FaStar,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaFilter,
  FaSortAmountDown,
  FaExpandAlt,
  FaLaptopCode,
  FaLayerGroup,
  FaCalendarAlt,
  FaGlobe,
  FaCodeBranch,
} from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

// Projects dataset with rich metrics, architecture notes, and case study details
const PROJECTS = [
  {
    id: 1,
    title: "Dev Dossier Business Website",
    category: "Full-Stack Web App",
    year: "2024",
    description:
      "A premium digital agency website crafted with Next.js 15 and Tailwind CSS. Built with server-side rendering (SSR), optimized routing, and smooth page transitions for speed, SEO, and client conversion.",
    longDescription:
      "Dev Dossier is a high-impact business platform showcasing web engineering services, client portfolios, and automated lead generation pipelines. Engineered with a mobile-first responsive design, modern contrast typography, and custom micro-interactions.",
    image: "/project1b.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP", "Vercel"],
    metrics: [
      { label: "Lighthouse Score", value: "99/100", icon: "⚡" },
      { label: "Page Load Time", value: "<0.8s", icon: "🚀" },
      { label: "Lead Conversion", value: "+140%", icon: "📈" },
    ],
    features: [
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Interactive Agency Showcase & Service Catalog",
      "Automated Lead Capture & Contact Pipelines",
      "Structured Dynamic SEO & Schema Markup",
      "Custom Smooth Scroll & Micro-Animations",
    ],
    architecture:
      "Next.js 15 App Router, React 19, Tailwind CSS, Vercel Edge Network",
    link: "https://devdossier.in/",
    github: "https://github.com/shalimarmehra",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Developer Portfolio",
    category: "Frontend Web App",
    year: "2024",
    description:
      "A sleek, highly interactive developer portfolio featuring dual personality modes (Profession & Passion), custom terminal console, command palette, and GSAP-driven editorial aesthetics.",
    longDescription:
      "Engineered to blend aesthetic editorial minimalism with powerful interactive features. Includes an in-browser terminal console with custom commands, quick-jump command palette, live YouTube & GitHub statistics integration, and real-time layout customizers.",
    image: "/project2.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP", "Analytics"],
    metrics: [
      { label: "Animation FPS", value: "60 FPS", icon: "✨" },
      { label: "Interactive Modes", value: "Dual Persona", icon: "🎨" },
      { label: "Accessibility", value: "100%", icon: "♿" },
    ],
    features: [
      "Dual Personality Toggle (Dev & Content Creator)",
      "Interactive CLI Terminal Console & Command Palette",
      "Custom Theme Customizer with Palette Switching",
      "Responsive Interactive Project Showcase & Filters",
      "Dynamic YouTube & Code Stats Dashboard",
    ],
    architecture:
      "React 19, Next.js App Router, Custom CSS Utilities, Vercel Analytics",
    link: "https://shalimarmehra.vercel.app/",
    github: "https://github.com/shalimarmehra/port",
    featured: true,
  },
  {
    id: 3,
    title: "24/7 Delivery Experts Logistics",
    category: "CMS Platforms",
    year: "2023",
    description:
      "A robust corporate logistics platform built on WordPress and customized with Elementor Pro. Implements responsive landing sections, customized quote request forms, and detailed service timelines.",
    longDescription:
      "Designed to streamline B2B and B2C logistics inquiries for a high-volume delivery service. Built with custom booking forms, automated email notifications, and an intuitive fleet management showcase.",
    image: "/project3.jpg",
    tags: ["WordPress", "Elementor", "SEO", "Responsive UI", "PHP"],
    metrics: [
      { label: "Platform Uptime", value: "99.9%", icon: "🔒" },
      { label: "Lead Generation", value: "+210%", icon: "🎯" },
      { label: "Mobile Score", value: "100%", icon: "📱" },
    ],
    features: [
      "Instant Logistics & Freight Quote Calculator",
      "Interactive Fleet & Delivery Service Catalog",
      "Custom Multi-step Booking Form",
      "Speed Optimization & Cloudflare Caching",
    ],
    architecture:
      "WordPress CMS, Custom PHP Templates, Elementor Pro, Cloudflare CDN",
    link: "https://247deliveryexperts.com",
    github: "",
    featured: false,
  },
  {
    id: 4,
    title: "The Lamen - News & Media Portal",
    category: "Publishing Platform",
    year: "2023",
    description:
      "A high-traffic news platform utilizing advanced SEO optimization and custom content categories. Styled for rapid loading, responsive readability on mobile devices, and easy editorial content management.",
    longDescription:
      "Built for fast content delivery and maximum ad conversion efficiency. The Lamen delivers daily news with Google News optimized schemas, clean grid typography, and ultra-fast page speeds.",
    image: "/project4.jpg",
    tags: ["WordPress", "Elementor", "On-Page SEO", "Speed Optimization", "PHP"],
    metrics: [
      { label: "Monthly Readers", value: "50k+", icon: "👥" },
      { label: "Initial Load Time", value: "<1.0s", icon: "⚡" },
      { label: "News Schema", value: "Verified", icon: "📰" },
    ],
    features: [
      "Google News & Schema Structured Data",
      "Instant Reader Layout for Mobile Visitors",
      "Optimized AdSense & Monetization Slots",
      "Editorial Category Filtering & Search",
    ],
    architecture:
      "WordPress Engine, Redis Object Caching, Custom CSS Design System",
    link: "https://thelamen.com/",
    github: "",
    featured: false,
  },
  {
    id: 5,
    title: "VibeSync Social Networking Site",
    category: "Full-Stack Web App",
    year: "2022",
    description:
      "A custom social web application featuring user accounts, friend request pipelines, feed messaging, and relational database backend integrations.",
    longDescription:
      "A full-stack social networking platform developed to master low-level PHP session management, relational database indexing, secure password hashing, and dynamic DOM manipulation.",
    image: "/project5.png",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    metrics: [
      { label: "CRUD Engine", value: "Full Suite", icon: "💻" },
      { label: "Security Protocol", value: "Bcrypt & CSRF", icon: "🛡️" },
      { label: "Database", value: "MySQL Relational", icon: "🗄️" },
    ],
    features: [
      "User Registration, Login & Session Management",
      "Dynamic Activity Feed with Post Creation",
      "Friend Request & Network Pipelines",
      "Direct Messaging & Notification Triggers",
    ],
    architecture:
      "Native PHP 8, MySQL Relational Database, Vanilla JS Async Fetch",
    link: "https://github.com/shalimarmehra/social-networking-site",
    github: "https://github.com/shalimarmehra/social-networking-site",
    featured: false,
  },
  {
    id: 6,
    title: "DevFlow AI & Automation Platform",
    category: "AI & SaaS",
    year: "2024",
    description:
      "An intelligent developer workflow automation dashboard designed for AI task orchestration, code metrics telemetry, and real-time pipeline status monitoring.",
    longDescription:
      "A modern SaaS interface concept featuring dark glassmorphic panels, dynamic real-time graph visualizations, node-based workflow builder previews, and modular AI agent command integrations.",
    image: "/project6.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "AI Integration"],
    metrics: [
      { label: "API Latency", value: "<90ms", icon: "⚡" },
      { label: "WebSockets", value: "Real-Time", icon: "🔄" },
      { label: "AI Pipeline", value: "Multi-Model", icon: "🤖" },
    ],
    features: [
      "AI Code Generation & Task Orchestration",
      "Real-Time Telemetry & Metric Visualizers",
      "Interactive Drag-and-Drop Workflow Canvas",
      "Modular Dark Mode Glassmorphism Interface",
    ],
    architecture:
      "Next.js App Router, Tailwind CSS, TypeScript, OpenAI API, WebSockets",
    link: "https://github.com/shalimarmehra",
    github: "https://github.com/shalimarmehra",
    featured: true,
  },
];

const CATEGORIES = [
  "All",
  "Full-Stack Web App",
  "Frontend Web App",
  "CMS Platforms",
  "Publishing Platform",
  "AI & SaaS",
];

const TECH_TAGS = [
  "All Tech",
  "Next.js",
  "React",
  "Tailwind CSS",
  "WordPress",
  "PHP",
  "MySQL",
  "GSAP",
];

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All Tech");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list' | 'featured'
  const [sortBy, setSortBy] = useState("featured"); // 'featured' | 'newest' | 'title'
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProjectModal(null);
      }
    };
    if (selectedProjectModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProjectModal]);

  // Filter logic
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesTech =
      selectedTech === "All Tech" || project.tags.includes(selectedTech);

    return matchesSearch && matchesCategory && matchesTech;
  }).sort((a, b) => {
    if (sortBy === "featured") {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    if (sortBy === "newest") {
      return parseInt(b.year) - parseInt(a.year);
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-transparent relative overflow-hidden theme-transition"
    >
      {/* Large background watermark */}
      <div
        className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300/40 pointer-events-none select-none z-0"
        data-speed="-0.15"
      >
        02
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Block & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-crimson inline-block"></span>
              <span className="text-crimson text-xs font-mono tracking-widest uppercase font-bold">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 font-sans mt-3 text-sm sm:text-base max-w-xl leading-relaxed">
              An editorial curated collection of web platforms, enterprise CMS
              solutions, and full-stack digital builds engineered for performance.
            </p>
          </div>

          {/* Top Control Bar: Search & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Minimal Search Bar */}
            <div className="relative w-full sm:w-64 flex items-center border-b border-warm-gray-200 focus-within:border-crimson transition-colors py-1.5">
              <FaSearch className="text-gray-400 text-xs mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-ink placeholder-gray-400 focus:outline-none text-xs font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-ink text-xs p-1"
                  title="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center bg-white border border-warm-gray-200/80 rounded-lg p-1 shadow-sm shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "grid"
                    ? "bg-ink text-white shadow-sm"
                    : "text-gray-500 hover:text-ink"
                }`}
                title="Grid View"
              >
                <FaThLarge className="text-xs" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "list"
                    ? "bg-ink text-white shadow-sm"
                    : "text-gray-500 hover:text-ink"
                }`}
                title="List View"
              >
                <FaList className="text-xs" />
                <span className="hidden sm:inline">List</span>
              </button>
              <button
                onClick={() => setViewMode("featured")}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "featured"
                    ? "bg-crimson text-white shadow-sm"
                    : "text-gray-500 hover:text-ink"
                }`}
                title="Featured View"
              >
                <FaStar className="text-xs" />
                <span className="hidden sm:inline">Featured</span>
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Level Filtering & Sorting Bar */}
        <div className="bg-white/80 backdrop-blur-md border border-warm-gray-200/70 rounded-2xl p-4 sm:p-5 mb-12 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-warm-gray-100">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 shrink-0 mr-2 flex items-center gap-1">
              <FaLayerGroup className="text-crimson" /> Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-crimson text-white shadow-sm font-bold scale-[1.02]"
                    : "bg-warm-gray-100/70 text-gray-600 hover:bg-warm-gray-200/70 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tech Filters & Sorting Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Tech Stack Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 shrink-0 mr-1 flex items-center gap-1">
                <FaFilter className="text-crimson" /> Tech:
              </span>
              {TECH_TAGS.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md whitespace-nowrap border transition-all ${
                    selectedTech === tech
                      ? "border-crimson text-crimson font-bold bg-crimson-50"
                      : "border-warm-gray-200 text-gray-500 hover:border-gray-300 hover:text-ink bg-transparent"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Sort Selector & Result Count */}
            <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-warm-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FaSortAmountDown className="text-crimson text-xs" />
                <span className="hidden xs:inline text-[11px] uppercase tracking-wider font-semibold text-gray-400">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-ink focus:outline-none border-b border-warm-gray-200 py-0.5 cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="newest">Newest First</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>

              <span className="text-[11px] font-mono font-semibold text-gray-400 bg-warm-gray-100 px-2.5 py-1 rounded-full">
                {filteredProjects.length} {filteredProjects.length === 1 ? "build" : "builds"}
              </span>
            </div>
          </div>
        </div>

        {/* Projects Display Area */}
        {filteredProjects.length > 0 ? (
          <>
            {/* VIEW MODE 1: GRID VIEW */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="group flex flex-col bg-white border border-warm-gray-200/80 rounded-2xl overflow-hidden hover:border-crimson/50 hover:shadow-xl transition-all duration-500 relative"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
                        idx * 80
                      }ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
                        idx * 80
                      }ms`,
                    }}
                  >
                    {/* Featured Star Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20 bg-ink/90 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                        <FaStar className="text-amber-400 text-xs" /> Featured
                      </div>
                    )}

                    {/* Image Frame with Tilt Zoom */}
                    <div
                      className="relative aspect-[16/10] w-full overflow-hidden bg-warm-gray-100 cursor-pointer group/img"
                      onClick={() => setSelectedProjectModal(project)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Dark Overlay Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                        <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <FaExpandAlt className="text-crimson-light" /> View Case Study
                        </span>
                      </div>

                      {/* Category Label */}
                      <span className="absolute top-4 right-4 z-20 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-ink shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="p-6 flex flex-col flex-grow bg-white">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3
                          onClick={() => setSelectedProjectModal(project)}
                          className="font-serif text-xl sm:text-2xl font-bold text-ink hover:text-crimson transition-colors leading-tight cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono font-bold text-gray-300 shrink-0">
                          0{project.id}
                        </span>
                      </div>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Performance Metrics Bar */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-5 p-2.5 bg-warm-gray-50 rounded-xl border border-warm-gray-100">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="text-center">
                              <div className="text-[11px] sm:text-xs font-bold text-ink font-mono flex items-center justify-center gap-1">
                                <span>{m.icon}</span>
                                <span>{m.value}</span>
                              </div>
                              <div className="text-[9px] text-gray-400 font-medium truncate">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-warm-gray-100 text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Action Links */}
                      <div className="mt-auto pt-4 border-t border-warm-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProjectModal(project)}
                          className="text-xs font-bold text-crimson hover:underline flex items-center gap-1"
                        >
                          <span>Case Study</span>
                          <FaArrowRight className="text-[10px]" />
                        </button>

                        <div className="flex items-center gap-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-ink hover:text-crimson transition-colors flex items-center gap-1"
                              title="Visit Live Website"
                            >
                              <span>Live</span>
                              <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-gray-400 hover:text-ink transition-colors flex items-center gap-1"
                              title="View Code Repository"
                            >
                              <FaGithub className="text-xs" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VIEW MODE 2: LIST VIEW */}
            {viewMode === "list" && (
              <div className="flex flex-col divide-y divide-warm-gray-200 border-t border-b border-warm-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-5 sm:p-6 hover:bg-warm-gray-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                  >
                    {/* Left: Thumbnail & Info */}
                    <div className="flex items-center gap-5">
                      <div
                        className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 bg-warm-gray-100 cursor-pointer border border-warm-gray-200"
                        onClick={() => setSelectedProjectModal(project)}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-mono font-bold text-crimson">
                            0{project.id}
                          </span>
                          <h3
                            onClick={() => setSelectedProjectModal(project)}
                            className="font-serif text-lg font-bold text-ink group-hover:text-crimson transition-colors cursor-pointer"
                          >
                            {project.title}
                          </h3>
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-warm-gray-100 text-gray-600 rounded">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs line-clamp-1 max-w-xl">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Tech Stack & Actions */}
                    <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-warm-gray-100">
                      <div className="hidden lg:flex items-center gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-mono bg-warm-gray-100 text-gray-600 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[10px] font-mono text-gray-400">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedProjectModal(project)}
                          className="px-3 py-1.5 bg-warm-gray-100 hover:bg-crimson hover:text-white text-ink text-xs font-bold rounded-lg transition-colors"
                        >
                          Details
                        </button>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-ink hover:text-crimson transition-colors"
                            title="Live Site"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-ink transition-colors"
                            title="Code Repo"
                          >
                            <FaGithub className="text-sm" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VIEW MODE 3: FEATURED SHOWCASE VIEW */}
            {viewMode === "featured" && (
              <div className="flex flex-col gap-12">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="bg-white border border-warm-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row"
                  >
                    {/* Media Container */}
                    <div
                      className="lg:w-1/2 relative min-h-[280px] lg:min-h-[420px] bg-warm-gray-100 cursor-pointer group"
                      onClick={() => setSelectedProjectModal(project)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <span className="px-3 py-1 bg-ink/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-ink text-xs font-mono font-bold rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Information Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-crimson">
                            FEATURED BUILD 0{project.id}
                          </span>
                          <span className="text-xs text-gray-400 font-mono">
                            {project.architecture}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {project.longDescription || project.description}
                        </p>

                        {/* Feature Highlights Bullets */}
                        {project.features && (
                          <div className="mb-6 space-y-2">
                            <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">
                              Key Highlights:
                            </h4>
                            {project.features.slice(0, 3).map((feat, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs text-gray-700"
                              >
                                <FaCheckCircle className="text-crimson text-xs shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Footer Actions */}
                      <div className="pt-6 border-t border-warm-gray-100 flex flex-wrap items-center justify-between gap-4">
                        <button
                          onClick={() => setSelectedProjectModal(project)}
                          className="px-6 py-3 bg-crimson hover:bg-crimson-dark text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          <span>Explore Full Case Study</span>
                          <FaArrowRight />
                        </button>

                        <div className="flex items-center gap-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-ink hover:text-crimson transition-colors flex items-center gap-1.5"
                            >
                              <span>Live Site</span>
                              <FaExternalLinkAlt className="text-xs" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-gray-400 hover:text-ink transition-colors flex items-center gap-1.5"
                            >
                              <FaGithub className="text-sm" />
                              <span>Source Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-white border border-warm-gray-200/80 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-warm-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400 text-lg">
              <FaSearch />
            </div>
            <h3 className="font-serif text-lg font-bold text-ink mb-2">
              No project matches found
            </h3>
            <p className="text-gray-500 text-xs max-w-sm mx-auto mb-6">
              Try adjusting your keyword search, technology filter, or category selection.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedTech("All Tech");
              }}
              className="px-5 py-2.5 bg-crimson hover:bg-crimson-dark text-white text-xs font-bold rounded-full transition-colors shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Bottom Editorial Call To Action Banner */}
        <div className="mt-20 bg-ink text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-crimson/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <span className="text-crimson-light text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              Custom Engineering & Design
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Have a vision for your next web product?
            </h3>
            <p className="text-warm-gray-300 text-xs sm:text-sm leading-relaxed">
              Whether you need a high-performance Next.js application, an interactive
              SaaS dashboard, or a custom CMS build, I turn complex ideas into refined digital experiences.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-crimson hover:bg-crimson-dark text-white text-xs uppercase font-bold tracking-wider rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Initiate Project</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* FULL PROJECT CASE STUDY MODAL */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div
            className="bg-white text-ink w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative my-8 border border-warm-gray-200 animate-scale-in max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-warm-gray-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-crimson inline-block" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
                  Project Case Study 0{selectedProjectModal.id}
                </span>
              </div>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="w-8 h-8 rounded-full bg-warm-gray-100 hover:bg-crimson hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                title="Close modal (Esc)"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* Banner Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-warm-gray-100 border border-warm-gray-200 shadow-sm">
                <Image
                  src={selectedProjectModal.image}
                  alt={selectedProjectModal.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 bg-ink/90 backdrop-blur-md text-white text-xs font-bold rounded-full">
                    {selectedProjectModal.category}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-ink text-xs font-mono font-bold rounded-full">
                    {selectedProjectModal.year}
                  </span>
                </div>
              </div>

              {/* Title & Overview */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-3 leading-tight">
                  {selectedProjectModal.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedProjectModal.longDescription ||
                    selectedProjectModal.description}
                </p>
              </div>

              {/* Metrics Grid */}
              {selectedProjectModal.metrics && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 font-mono">
                    Performance Benchmarks
                  </h4>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-warm-gray-50 rounded-2xl border border-warm-gray-200/70">
                    {selectedProjectModal.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg sm:text-xl font-bold font-mono text-ink flex items-center justify-center gap-1.5 mb-0.5">
                          <span>{m.icon}</span>
                          <span>{m.value}</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              {selectedProjectModal.features && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 font-mono">
                    Key Deliverables & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProjectModal.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-gray-700 p-2.5 bg-white border border-warm-gray-100 rounded-xl"
                      >
                        <FaCheckCircle className="text-crimson text-xs shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture & Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                  Technical Architecture & Stack
                </h4>
                <div className="p-4 bg-ink text-white rounded-2xl text-xs space-y-3">
                  <div className="flex items-center gap-2 text-crimson-light font-mono font-bold">
                    <FaLaptopCode />
                    <span>{selectedProjectModal.architecture}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
                    {selectedProjectModal.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-mono bg-gray-800 text-warm-gray-200 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Links Bar */}
            <div className="p-6 bg-warm-gray-50 border-t border-warm-gray-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="px-5 py-2.5 text-xs font-bold text-gray-500 hover:text-ink transition-colors"
              >
                Close Case Study
              </button>

              <div className="flex items-center gap-4">
                {selectedProjectModal.github && (
                  <a
                    href={selectedProjectModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white border border-warm-gray-200 text-ink text-xs font-bold rounded-xl hover:border-ink transition-all flex items-center gap-2 shadow-sm"
                  >
                    <FaGithub />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProjectModal.link && (
                  <a
                    href={selectedProjectModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-crimson hover:bg-crimson-dark text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Visit Live Site</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

