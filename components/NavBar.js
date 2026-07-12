"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { 
  FaSearch, 
  FaFileDownload, 
  FaCode, 
  FaGlobe, 
  FaYoutube, 
  FaGamepad, 
  FaCompass,
  FaChurch
} from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewState, setViewState] = useState("profession");
  const [activeId, setActiveId] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync with toggle, listen to view changes and scroll position
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
    }
    const handleViewChange = (e) => {
      const nextView = e.detail && e.detail.view ? e.detail.view : e.detail;
      if (nextView === "passion" || nextView === "profession") {
        setViewState(nextView);
      }
      setIsOpen(false);
      setActiveId("");
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("portfolio-view-change", handleViewChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("portfolio-view-change", handleViewChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = isScrolled ? 68 : 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const professionLinks = [
    { label: "Bio",        id: "quick-bio",  icon: null },
    { label: "Projects",   id: "projects",   icon: null },
    { label: "Experience", id: "experience", icon: null },
    { label: "Skills",     id: "skills",     icon: null },
    { label: "About",      id: "about",      icon: null },
    { label: "Contact",    id: "contact",    icon: null },
  ];

  const passionLinks = [
    { label: "Overview",  id: "creative-overview",  icon: <FaGlobe className="text-[10px]" /> },
    { label: "Videos",    id: "creative-videos",    icon: <FaYoutube className="text-[10px]" /> },
    { label: "Gaming",    id: "creative-gaming",    icon: <FaGamepad className="text-[10px]" /> },
    { label: "Travel",    id: "creative-hobbies",   icon: <FaCompass className="text-[10px]" /> },
    { label: "Church Media", id: "church-media",     icon: <FaChurch className="text-[10px]" /> },
    { label: "Contact",   id: "contact",            icon: <IoMdMail className="text-[10px]" /> },
  ];

  const navLinks = viewState === "passion" ? passionLinks : professionLinks;

  // Active section tracker (depends on active navLinks)
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const onScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveId(ids[i]);
          return;
        }
      }
      setActiveId("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Trigger scroll check immediately to set state on mount/change
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? viewState === "profession"
              ? "h-[68px] bg-white/75 border-warm-gray-200/50 shadow-[0_8px_32px_0_rgba(26,26,26,0.05)] backdrop-blur-xl"
              : "h-[68px] bg-white/65 border-rose-100/40 shadow-[0_8px_32px_0_rgba(244,63,94,0.06)] backdrop-blur-xl"
            : "h-[80px] bg-white/40 border-transparent backdrop-blur-md"
        }`}
      >
        {/* 3-column grid: [logo] [center links] [cta/hamburger] */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-full max-w-7xl mx-auto px-6 sm:px-8 gap-4">

          {/* COL 1 — Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 active:scale-95"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-serif font-bold text-lg shadow-sm transition-all duration-500 ${
              viewState === "profession" 
                ? "bg-ink text-white group-hover:bg-crimson group-hover:shadow-[0_4px_20px_rgba(198,40,40,0.35)]" 
                : "bg-gradient-to-r from-rose-600 to-amber-500 text-white group-hover:brightness-110 group-hover:shadow-[0_4px_20px_rgba(244,63,94,0.35)]"
            }`}>
              SM.
            </div>
            <span className="font-serif text-ink text-lg font-bold tracking-tight hidden xs:inline">
              Shalimar <span className={`transition-colors duration-500 hidden sm:inline ${viewState === "profession" ? "text-crimson" : "text-rose-600"}`}>Mehra</span>
            </span>
          </Link>

          {/* COL 2 — Center nav links (desktop only) */}
          <div className="hidden lg:flex items-center justify-center gap-1.5 bg-neutral-100/30 border border-neutral-200/20 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative uppercase tracking-widest text-[10px] font-sans font-bold px-4 py-2 rounded-full transition-all duration-300 group flex items-center gap-1.5 ${
                    isActive 
                      ? viewState === "profession" 
                        ? "text-crimson bg-crimson/5 border border-crimson/10 shadow-[0_2px_10px_-4px_rgba(198,40,40,0.2)]" 
                        : "text-rose-600 bg-rose-500/5 border border-rose-500/10 shadow-[0_2px_10px_-4px_rgba(244,63,94,0.2)]"
                      : "text-gray-500 hover:text-ink hover:bg-neutral-200/30 border border-transparent"
                  }`}
                >
                  {link.icon && <span className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? (viewState === "profession" ? "text-crimson" : "text-rose-600") : "text-gray-400"}`}>{link.icon}</span>}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* COL 3 — CTAs (desktop) + hamburger (mobile) */}
          <div className="flex items-center justify-end gap-2">

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
                className="flex items-center gap-2 px-3.5 py-2 border border-warm-gray-200/60 hover:border-crimson/50 rounded-full text-xs text-gray-500 hover:text-crimson transition-all select-none font-sans font-bold tracking-wider bg-white/80 shadow-sm hover:scale-[1.02]"
                title="Open Command Palette (Cmd+K)"
              >
                <FaSearch className="text-[10px] text-gray-400" />
                <span className="text-[9px] bg-warm-gray-100/80 px-1.5 py-0.5 rounded text-gray-400 border border-warm-gray-200/50 font-bold font-mono">⌘K</span>
              </button>

              <a
                href="/resume-protected.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-widest text-[10px] font-bold text-gray-500 hover:text-crimson px-4 py-2 border border-warm-gray-200/60 hover:border-crimson/50 rounded-full transition-all duration-200 flex items-center gap-1.5 bg-white/80 shadow-sm hover:scale-[1.02]"
              >
                <FaFileDownload className="text-xs text-gray-400" /> Resume
              </a>

              <button
                onClick={() => handleScrollTo("contact")}
                className={`text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-500 flex items-center gap-1.5 active:scale-95 ${
                  viewState === "profession"
                    ? "bg-crimson hover:bg-crimson-dark shadow-crimson/10 hover:shadow-crimson/20"
                    : "bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 shadow-rose-500/10 hover:shadow-rose-500/20"
                }`}
              >
                Get In Touch <IoMdMail className="text-sm" />
              </button>
            </div>

            {/* Mobile icon buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
                className="hidden sm:inline-block text-gray-500 hover:text-crimson p-2.5 border border-warm-gray-200/60 rounded-full hover:border-crimson/50 transition-all bg-white/80 shadow-sm active:scale-95"
                aria-label="Search"
              >
                <FaSearch className="text-sm" />
              </button>
              <a
                href="/resume-protected.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block text-gray-500 hover:text-crimson p-2.5 border border-warm-gray-200/60 rounded-full hover:border-crimson/50 transition-all bg-white/80 shadow-sm active:scale-95"
                aria-label="Resume"
              >
                <FaFileDownload className="text-sm" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex flex-col justify-center items-center rounded-full border border-warm-gray-200/60 bg-white/80 text-ink hover:border-crimson/50 shadow-sm transition-colors active:scale-95"
                aria-label="Toggle Menu"
              >
                <div className="flex flex-col gap-1 w-5">
                  <span className={`h-[2px] w-full bg-ink rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                  <span className={`h-[2px] w-full bg-ink rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`h-[2px] w-full bg-ink rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute left-0 w-full overflow-hidden transition-all duration-500 ease-in-out lg:hidden border-b shadow-2xl ${
            isScrolled 
              ? "top-[68px] border-warm-gray-200/45" 
              : "top-[80px] border-transparent"
          } ${
            viewState === "profession"
              ? "bg-white/85 border-warm-gray-200/50 backdrop-blur-xl"
              : "bg-white/80 border-rose-100/40 backdrop-blur-xl"
          } ${
            isOpen ? "max-h-[600px] opacity-100 py-6 px-6" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1.5 max-w-7xl mx-auto">
            {/* View badge */}
            <div className="px-4 py-1.5 mb-1.5">
              <span className={`text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border ${
                viewState === "passion"
                  ? "bg-rose-50/50 border-rose-200/60 text-rose-500"
                  : "bg-ink/5 border-warm-gray-200 text-gray-400"
              }`}>
                {viewState === "passion" ? "❤ Passion View" : "💼 Profession View"}
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`w-full text-left font-serif text-lg px-4 py-3.5 border-b border-warm-gray-100/30 hover:bg-cream/50 transition-colors flex items-center justify-between ${
                    isActive 
                      ? viewState === "profession" 
                        ? "text-crimson bg-crimson/5 border-l-2 border-l-crimson pl-3" 
                        : "text-rose-600 bg-rose-500/5 border-l-2 border-l-rose-500 pl-3" 
                      : viewState === "profession" 
                        ? "text-ink hover:text-crimson" 
                        : "text-ink hover:text-rose-600"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {link.icon && <span className={`text-base transition-colors duration-500 ${isActive ? (viewState === "profession" ? "text-crimson" : "text-rose-600") : "text-gray-400"}`}>{link.icon}</span>}
                    {link.label}
                  </span>
                  <span className={`text-xs font-sans uppercase tracking-widest transition-transform ${
                    isActive ? (viewState === "profession" ? "text-crimson translate-x-1" : "text-rose-600 translate-x-1") : "text-gray-400"
                  }`}>→</span>
                </button>
              );
            })}

            <button
              onClick={() => handleScrollTo("contact")}
              className={`w-full mt-4 text-white font-sans font-bold uppercase tracking-widest text-xs py-4 rounded-full flex items-center justify-center gap-2 shadow-md transition-all duration-300 active:scale-95 ${
                viewState === "profession"
                  ? "bg-crimson hover:bg-crimson-dark shadow-crimson/10"
                  : "bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 shadow-rose-500/10"
              }`}
            >
              Get In Touch <IoMdMail className="text-base" />
            </button>

            {/* Mobile-only Search and Resume buttons inside drawer */}
            <div className="flex sm:hidden items-center gap-3 mt-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("toggle-command-palette"));
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-warm-gray-200/60 rounded-full text-[10px] font-bold text-gray-600 hover:text-crimson hover:border-crimson bg-white/80 transition-all uppercase tracking-wider shadow-sm active:scale-95"
              >
                <FaSearch className="text-[10px]" /> Search
              </button>
              <a
                href="/resume-protected.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-warm-gray-200/60 rounded-full text-[10px] font-bold text-gray-600 hover:text-crimson hover:border-crimson bg-white/80 transition-all uppercase tracking-wider shadow-sm active:scale-95"
              >
                <FaFileDownload className="text-[10px]" /> Resume
              </a>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default NavBar;
