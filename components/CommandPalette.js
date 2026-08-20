"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaAngleRight,
  FaRegFolder,
  FaRegIdCard,
  FaPalette,
  FaFilePdf,
  FaHome,
  FaTerminal,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaYoutube,
  FaGamepad,
  FaCompass,
  FaCode,
  FaLayerGroup,
  FaExchangeAlt,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { IoMdMail, IoMdCheckmark } from "react-icons/io";
import { themes } from "./ThemeCustomizer";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const itemsListRef = useRef(null);

  // Comprehensive Search Items Dataset
  const commandItems = [
    // --- NAVIGATION SECTIONS ---
    {
      id: "nav-bio",
      title: "Jump to Quick Bio",
      category: "Navigation",
      keywords: ["bio", "intro", "summary", "profile", "about", "home"],
      icon: <FaHome className="text-crimson" />,
      action: () => scrollToSection("quick-bio"),
    },
    {
      id: "nav-projects",
      title: "Jump to Featured Projects",
      category: "Navigation",
      keywords: ["projects", "work", "portfolio", "case studies", "apps"],
      icon: <FaRegFolder className="text-crimson" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-devdossier",
      title: "Jump to DevDossier Studio",
      category: "Navigation",
      keywords: ["devdossier", "agency", "studio", "business", "services", "freelance"],
      icon: <FaLaptopCode className="text-crimson" />,
      action: () => scrollToSection("devdossier"),
    },
    {
      id: "nav-experience",
      title: "Jump to Experience & Timeline",
      category: "Navigation",
      keywords: ["experience", "career", "history", "jobs", "timeline", "resume"],
      icon: <FaRegIdCard className="text-crimson" />,
      action: () => scrollToSection("experience"),
    },
    {
      id: "nav-skills",
      title: "Jump to Skills & Tech Stack",
      category: "Navigation",
      keywords: ["skills", "tech stack", "languages", "tools", "react", "next.js", "python"],
      icon: <GiSkills className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-about",
      title: "Jump to About & Education",
      category: "Navigation",
      keywords: ["about", "education", "degree", "background", "ai student"],
      icon: <FaSearch className="text-crimson" />,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-contact",
      title: "Jump to Contact & Hire Me",
      category: "Navigation",
      keywords: ["contact", "email", "hire", "message", "social", "form"],
      icon: <MdContacts className="text-crimson" />,
      action: () => scrollToSection("contact"),
    },

    // --- FEATURED PROJECTS ---
    {
      id: "project-1",
      title: "Dev Dossier Business Website",
      category: "Projects",
      description: "Next.js 15, React, Tailwind CSS, GSAP, Vercel",
      keywords: ["dev dossier", "next.js", "react", "tailwind", "gsap", "ssr", "seo", "agency"],
      icon: <FaLayerGroup className="text-crimson" />,
      action: () => {
        scrollToSection("projects");
        window.open("https://devdossier.in/", "_blank");
      },
    },
    {
      id: "project-2",
      title: "Personal Developer Portfolio",
      category: "Projects",
      description: "Next.js, React, Dual Mode, Terminal Console, GSAP",
      keywords: ["portfolio", "shalimar", "next.js", "react", "terminal", "dual mode"],
      icon: <FaLayerGroup className="text-crimson" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "project-3",
      title: "24/7 Delivery Experts Logistics",
      category: "Projects",
      description: "WordPress, Elementor Pro, PHP, SEO, Fleet Management",
      keywords: ["24/7", "delivery", "logistics", "wordpress", "elementor", "php"],
      icon: <FaLayerGroup className="text-crimson" />,
      action: () => {
        scrollToSection("projects");
        window.open("https://247deliveryexperts.com", "_blank");
      },
    },
    {
      id: "project-4",
      title: "The Lamen - News & Media Portal",
      category: "Projects",
      description: "WordPress, On-Page SEO, Speed Optimization, News Schema",
      keywords: ["the lamen", "news", "media", "wordpress", "seo", "publishing"],
      icon: <FaLayerGroup className="text-crimson" />,
      action: () => {
        scrollToSection("projects");
        window.open("https://thelamen.com/", "_blank");
      },
    },
    {
      id: "project-5",
      title: "VibeSync Social Networking Site",
      category: "Projects",
      description: "PHP 8, MySQL, JavaScript, Activity Feed, Authentication",
      keywords: ["vibesync", "social", "network", "php", "mysql", "javascript", "crud"],
      icon: <FaLayerGroup className="text-crimson" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "project-6",
      title: "DevFlow AI & Automation Platform",
      category: "Projects",
      description: "Next.js, React, Tailwind, TypeScript, OpenAI API",
      keywords: ["devflow", "ai", "automation", "saas", "typescript", "openai"],
      icon: <FaLayerGroup className="text-crimson" />,
      action: () => scrollToSection("projects"),
    },

    // --- SKILLS & TECHNOLOGIES ---
    {
      id: "skill-nextjs",
      title: "Next.js 15 & React 19 Framework",
      category: "Skills",
      description: "App Router, SSR, SSG, Server Actions, Dynamic Routing",
      keywords: ["next.js", "nextjs", "react", "react 19", "frontend", "framework"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-tailwind",
      title: "Tailwind CSS & Modern Styling",
      category: "Skills",
      description: "Utility-First Styling, Responsive Layouts, Dark Themes",
      keywords: ["tailwind", "css", "styling", "design system", "flexbox", "grid"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-gsap",
      title: "GSAP & Advanced Web Animations",
      category: "Skills",
      description: "ScrollTrigger, Timeline Animations, Micro-Interactions",
      keywords: ["gsap", "animation", "scrolltrigger", "motion", "transitions"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-python",
      title: "Python & Machine Learning",
      category: "Skills",
      description: "AI Algorithms, Data Structures, Automation Scripts",
      keywords: ["python", "ai", "machine learning", "ml", "data", "scripts"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-php-mysql",
      title: "PHP 8 & MySQL Relational DB",
      category: "Skills",
      description: "Backend APIs, Database Queries, Authentication & Sessions",
      keywords: ["php", "mysql", "sql", "backend", "database", "crud"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-wordpress",
      title: "WordPress & Elementor Pro CMS",
      category: "Skills",
      description: "Custom Themes, Plugins, Speed Optimization, E-commerce",
      keywords: ["wordpress", "elementor", "cms", "blog", "seo"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-git-docker",
      title: "Git, GitHub & Docker Containers",
      category: "Skills",
      description: "Version Control, Containerization, Deployment Pipelines",
      keywords: ["git", "github", "docker", "devops", "ci/cd", "deployment"],
      icon: <FaCode className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },

    // --- PASSION & HOBBIES ---
    {
      id: "passion-youtube",
      title: "YouTube Channel & Developer Content",
      category: "Passion",
      description: "Tech Tutorials, Coding Vlogs, Developer Lifestyle",
      keywords: ["youtube", "video", "content", "channel", "tutorials", "vlog"],
      icon: <FaYoutube className="text-crimson" />,
      action: () => {
        window.dispatchEvent(
          new CustomEvent("portfolio-view-change", { detail: "passion" })
        );
        scrollToSection("creative-videos");
      },
    },
    {
      id: "passion-gaming",
      title: "Gaming & Live Streams",
      category: "Passion",
      description: "PC Gaming, Setup Showcase, Esports & Entertainment",
      keywords: ["gaming", "games", "stream", "twitch", "esports", "setup"],
      icon: <FaGamepad className="text-crimson" />,
      action: () => {
        window.dispatchEvent(
          new CustomEvent("portfolio-view-change", { detail: "passion" })
        );
        scrollToSection("creative-gaming");
      },
    },
    {
      id: "passion-travel",
      title: "Travel & Personal Hobbies",
      category: "Passion",
      description: "Photography, Exploration, Fitness & Creative Projects",
      keywords: ["travel", "hobbies", "photography", "explore", "lifestyle"],
      icon: <FaCompass className="text-crimson" />,
      action: () => {
        window.dispatchEvent(
          new CustomEvent("portfolio-view-change", { detail: "passion" })
        );
        scrollToSection("creative-hobbies");
      },
    },

    // --- ACTIONS ---
    {
      id: "action-toggle-view",
      title: "Switch Mode (Profession / Passion)",
      category: "Actions",
      description: "Toggle between Developer Persona & Creative Persona",
      keywords: ["switch", "mode", "toggle", "profession", "passion", "persona"],
      icon: <FaExchangeAlt className="text-crimson" />,
      action: () => {
        const current = localStorage.getItem("portfolioViewState") || "profession";
        const next = current === "profession" ? "passion" : "profession";
        window.dispatchEvent(
          new CustomEvent("portfolio-view-change", { detail: next })
        );
        setIsOpen(false);
      },
    },
    {
      id: "action-email",
      title: "Copy Email Address (contact@shalimarmehra.com)",
      category: "Actions",
      keywords: ["email", "copy", "contact", "reach out", "mail"],
      icon: <IoMdMail className="text-crimson" />,
      action: () => {
        navigator.clipboard.writeText("contact@shalimarmehra.com");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setIsOpen(false);
        }, 1200);
      },
    },
    {
      id: "action-resume",
      title: "Download Resume PDF",
      category: "Actions",
      keywords: ["resume", "cv", "download", "pdf", "bio"],
      icon: <FaFilePdf className="text-crimson" />,
      action: () => {
        window.open("/resume-protected.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "action-terminal",
      title: "Toggle Interactive CLI Terminal Drawer",
      category: "Actions",
      keywords: ["terminal", "cli", "console", "command", "bash", "shell"],
      icon: <FaTerminal className="text-crimson" />,
      action: () => {
        window.dispatchEvent(new CustomEvent("toggle-terminal-drawer"));
        setIsOpen(false);
      },
    },

    // --- THEMES ---
    ...themes.map((t) => ({
      id: `theme-${t.id}`,
      title: `Set Theme Accent: ${t.name}`,
      category: "Themes",
      keywords: ["theme", "color", t.name.toLowerCase(), t.id, "accent", "style"],
      icon: <FaPalette style={{ color: t.primary }} />,
      action: () => {
        const root = document.documentElement;
        root.style.setProperty("--accent-primary", t.primary);
        root.style.setProperty("--accent-primary-rgb", t.primaryRgb);
        root.style.setProperty("--accent-secondary", t.secondary);
        root.style.setProperty("--accent-secondary-rgb", t.secondaryRgb);
        root.style.setProperty("--accent-light", t.light);
        root.style.setProperty("--accent-50", t.bg50);

        const styleId = "custom-selection-style";
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = styleId;
          document.head.appendChild(styleEl);
        }
        styleEl.innerHTML = `
          ::selection {
            background-color: rgba(${t.primaryRgb}, 0.15) !important;
          }
        `;

        try {
          localStorage.setItem("portfolio-theme", t.id);
        } catch (e) { }
        window.dispatchEvent(
          new CustomEvent("portfolio-theme-change", { detail: t })
        );
        setIsOpen(false);
      },
    })),
  ];

  // Helper function to smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  // Filter items based on search query and active category
  const filteredItems = commandItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      item.category.toLowerCase() === activeCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!search.trim()) return true;

    const q = search.toLowerCase().trim();
    const titleMatch = item.title.toLowerCase().includes(q);
    const categoryMatch = item.category.toLowerCase().includes(q);
    const descMatch = item.description
      ? item.description.toLowerCase().includes(q)
      : false;
    const keywordMatch = item.keywords
      ? item.keywords.some((k) => k.toLowerCase().includes(q))
      : false;

    return titleMatch || categoryMatch || descMatch || keywordMatch;
  });

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }

      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0
        );
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : 0
        );
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  // Custom Event Listeners to Open Palette from Navbar or Terminal
  useEffect(() => {
    const handleCustomToggle = () => {
      setIsOpen((prev) => !prev);
    };

    const handleCustomOpen = (e) => {
      setIsOpen(true);
      if (e.detail && typeof e.detail === "string") {
        setSearch(e.detail);
      } else {
        setSearch("");
      }
    };

    window.addEventListener("toggle-command-palette", handleCustomToggle);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("toggle-command-palette", handleCustomToggle);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  // Manage Body Scroll & Focus State when Palette opens/closes
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 40);
    } else {
      document.body.style.overflow = "";
      setSearch("");
    }
  }, [isOpen]);

  // Reset selected index when search query or category filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search, activeCategory]);

  if (!isOpen) return null;

  const categories = ["All", "Navigation", "Projects", "Skills", "Actions", "Themes"];

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[10vh] sm:pt-[14vh] px-4 font-sans select-none">
      {/* Dark Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Main Palette Modal Box */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#FAF8F5] border border-warm-gray-200 shadow-2xl flex flex-col max-h-[80vh] sm:max-h-[520px] theme-transition z-10 animate-reveal-up">
        {/* TOP SEARCH BAR */}
        <div className="flex items-center gap-3 px-4 border-b border-warm-gray-200 h-14 shrink-0 bg-white">
          <FaSearch className="text-gray-400 text-sm flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, skills, commands, or sections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-ink focus:outline-none placeholder-gray-400 font-medium"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-[10px] text-gray-400 hover:text-ink px-1.5 py-0.5 rounded bg-warm-gray-100 uppercase font-mono font-bold"
            >
              CLEAR
            </button>
          )}
          <kbd className="hidden sm:inline-flex text-[9px] bg-warm-gray-100 px-2 py-1 rounded text-gray-500 font-bold font-mono border border-warm-gray-200">
            ESC
          </kbd>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-warm-gray-200/60 bg-warm-gray-50/50 overflow-x-auto scrollbar-none text-xs shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-tight whitespace-nowrap transition-all ${activeCategory === cat
                ? "bg-crimson text-white shadow-xs font-semibold"
                : "bg-white border border-warm-gray-200 text-gray-600 hover:text-ink hover:border-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* COMMAND ITEMS LIST */}
        <div ref={itemsListRef} className="overflow-y-auto p-2 flex-1 scrollbar-thin space-y-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all border text-left ${isSelected
                    ? "bg-white border-crimson/40 shadow-sm text-ink pl-4 border-l-4 border-l-crimson"
                    : "text-gray-600 hover:text-ink border-transparent bg-transparent"
                    }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-sm shrink-0">{item.icon}</span>
                    <div className="flex flex-col truncate">
                      <span className="text-xs font-semibold tracking-tight text-ink truncate">
                        {item.title}
                      </span>
                      {item.description && (
                        <span className="text-[10px] text-gray-400 font-normal truncate">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[8px] uppercase tracking-widest font-bold text-gray-400 bg-warm-gray-100 px-2 py-0.5 rounded border border-warm-gray-200/60">
                      {item.category}
                    </span>
                    {isSelected && (
                      <FaAngleRight className="text-xs text-crimson animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
              <FaSearch className="text-2xl text-gray-300" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                No matching results found
              </p>
              <p className="text-[11px] text-gray-400">
                Try searching for &quot;Next.js&quot;, &quot;Projects&quot;, &quot;Skills&quot;, &quot;Resume&quot; or &quot;Theme&quot;.
              </p>
            </div>
          )}
        </div>

        {/* COPIED TOAST NOTIFICATION */}
        {copied && (
          <div className="absolute inset-0 bg-[#FAF8F5]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-2 z-20 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson text-lg">
              <IoMdCheckmark />
            </div>
            <p className="text-xs font-bold text-ink uppercase tracking-widest">
              Email Copied to Clipboard!
            </p>
          </div>
        )}

        {/* FOOTER HOTKEYS BAR */}
        <div className="h-10 border-t border-warm-gray-200 px-4 flex items-center justify-between text-[9px] text-gray-400 font-bold uppercase tracking-wider bg-white shrink-0 select-none">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>⌘K to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
