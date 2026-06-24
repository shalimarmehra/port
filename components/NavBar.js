"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaSearch, FaFileDownload, FaYoutube, FaPinterest } from "react-icons/fa";

const PROFESSION_LINKS = [
  { label: "Bio",        id: "quick-bio",  num: "01" },
  { label: "Projects",  id: "projects",   num: "02" },
  { label: "YouTube",   id: "youtube",    num: "03" },
  { label: "Experience",id: "experience", num: "04" },
  { label: "Skills",    id: "skills",     num: "05" },
  { label: "Creative",  id: "creative",   num: "06" },
  { label: "About",     id: "about",      num: "09" },
];

const PASSION_LINKS = [
  { label: "Overview",  id: "creative-overview", num: "01" },
  { label: "Videos",    id: "creative-videos",   num: "02" },
  { label: "Code Labs", id: "creative-coding",   num: "03" },
  { label: "Design",    id: "creative-design",   num: "04" },
  { label: "Travel",    id: "creative-hobbies",  num: "05" },
  { label: "Contact",   id: "contact",           num: "06" },
];

const NavBar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeId,  setActiveId]  = useState("");
  const [viewState, setViewState] = useState("profession");

  // Load view state and listen to changes
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
    }

    const handleViewChange = (e) => {
      setViewState(e.detail);
      // Reset active section tracker state on view change
      setActiveId("");
    };

    window.addEventListener("portfolio-view-change", handleViewChange);
    return () => window.removeEventListener("portfolio-view-change", handleViewChange);
  }, []);

  const navLinks = viewState === "profession" ? PROFESSION_LINKS : PASSION_LINKS;

  // Collapse drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll detection for sticky style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    // Trigger on scroll immediately to set state on mount/change
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

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "h-[64px] bg-white shadow-[0_1px_30px_rgba(0,0,0,0.06)] border-b border-warm-gray-200"
            : "h-[76px] bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />

        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-5 sm:px-8">

          {/* ── LOGO ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-cursor-text="HOME"
          >
            <div className="relative w-10 h-10 rounded-xl bg-ink flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-crimson/30 transition-shadow duration-300">
              <span className="font-serif font-black text-white text-sm tracking-tight relative z-10">SM</span>
              <div className="absolute inset-0 bg-crimson scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl origin-bottom" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-ink text-[15px] font-bold tracking-tight">
                Shalimar <span className="text-crimson">Mehra</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400 font-sans">
                Full-Stack · Creator
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-0.5 bg-cream border border-warm-gray-200 rounded-full px-2 py-1.5 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`relative group px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 ${
                      isActive
                        ? "bg-ink text-white shadow-sm"
                        : "text-gray-500 hover:text-ink hover:bg-white"
                    }`}
                  >
                    <span
                      className={`absolute -top-1 left-1/2 -translate-x-1/2 text-[7px] font-mono font-bold transition-all duration-200 ${
                        isActive ? "text-crimson opacity-100" : "opacity-0 group-hover:opacity-100 text-gray-400"
                      }`}
                    >
                      {link.num}
                    </span>
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── DESKTOP CTA GROUP ── */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
              className="flex items-center gap-1.5 px-3 py-2 bg-cream border border-warm-gray-200 hover:border-crimson rounded-full text-[10px] text-gray-500 hover:text-crimson transition-all select-none font-bold tracking-wider"
              title="Open Command Palette (Cmd+K)"
              data-cursor-text="SEARCH"
            >
              <FaSearch className="text-[9px]" />
              <kbd className="text-[8px] bg-white px-1.5 py-0.5 rounded border border-warm-gray-200 font-mono text-gray-400">⌘K</kbd>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-cream border border-warm-gray-200 hover:border-crimson text-gray-500 hover:text-crimson rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200"
              data-cursor-text="PDF"
            >
              <FaFileDownload className="text-xs" />
              Resume
            </a>

            <button
              onClick={() => handleScrollTo("contact")}
              className="relative overflow-hidden flex items-center gap-1.5 bg-crimson hover:bg-crimson/90 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(198,40,40,0.35)] hover:shadow-[0_6px_20px_rgba(198,40,40,0.5)] transition-all duration-300 active:scale-95 group"
              data-cursor-text="SEND"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <IoMdMail className="text-sm relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>

          {/* ── MOBILE CONTROLS ── */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
              className="text-gray-500 hover:text-crimson p-2 border border-warm-gray-200 rounded-full hover:border-crimson transition-all bg-white"
              aria-label="Search"
            >
              <FaSearch className="text-sm" />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-crimson p-2.5 border border-warm-gray-200 rounded-full hover:border-crimson transition-all bg-white"
              aria-label="Resume"
            >
              <FaFileDownload className="text-sm" />
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center rounded-full border border-warm-gray-200 bg-white text-ink hover:border-crimson transition-colors"
              aria-label="Toggle Menu"
            >
              <span className={`absolute block h-[1.5px] w-5 bg-ink rounded transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
              <span className={`absolute block h-[1.5px] w-5 bg-ink rounded transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute block h-[1.5px] w-5 bg-ink rounded transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE BACKDROP SCRIM ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: scrolled ? "64px" : "76px" }}
        onClick={() => setIsOpen(false)}
      />

      {/* ── MOBILE DRAWER PANEL ── */}
      <div
        className={`fixed left-0 right-0 z-50 bg-white border-b border-warm-gray-200 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: scrolled ? "64px" : "76px",
          maxHeight: isOpen ? "calc(100vh - 76px)" : "0px",
          transitionProperty: "max-height, opacity",
        }}
      >
        <div className="px-5 pt-4 pb-8 space-y-1.5 overflow-y-auto" style={{ maxHeight: "calc(100vh - 76px)" }}>

          {/* Nav links */}
          {navLinks.map((link, i) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-ink hover:bg-cream hover:text-crimson"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-crimson" : "text-gray-400"}`}>
                    {link.num}
                  </span>
                  <span className="font-serif text-base font-bold">{link.label}</span>
                </div>
                <span className={`text-sm transition-transform group-hover:translate-x-1 ${isActive ? "text-crimson" : "text-gray-400"}`}>→</span>
              </button>
            );
          })}

          {/* Divider */}
          <div className="h-px bg-warm-gray-100 !my-4" />

          {/* Social quick-links */}
          <div className="flex gap-2">
            <a
              href="https://youtube.com/@devdossier"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-[#FF0000]/8 border border-[#FF0000]/20 rounded-xl text-[#FF0000] text-[10px] font-bold uppercase tracking-wider hover:bg-[#FF0000]/15 transition-all"
            >
              <FaYoutube className="text-sm" /> Dev Dossier
            </a>
            <a
              href="https://pinterest.com/shalimarmehra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-[#E60023]/8 border border-[#E60023]/20 rounded-xl text-[#E60023] text-[10px] font-bold uppercase tracking-wider hover:bg-[#E60023]/15 transition-all"
            >
              <FaPinterest className="text-sm" /> Pinterest
            </a>
          </div>

          {/* Contact CTA */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full relative overflow-hidden bg-crimson text-white font-black uppercase tracking-widest text-xs py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-crimson/30 transition-all active:scale-95 group"
          >
            <span className="absolute inset-0 bg-white/10 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <IoMdMail className="text-base relative z-10" />
            <span className="relative z-10">Get In Touch</span>
          </button>

        </div>
      </div>
    </>
  );
};

export default NavBar;
