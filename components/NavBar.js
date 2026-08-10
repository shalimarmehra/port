"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import {
  FaFileDownload,
  FaGlobe,
  FaYoutube,
  FaGamepad,
  FaCompass,
  FaChurch,
  FaSearch,
} from "react-icons/fa";
import { FiCommand } from "react-icons/fi";

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
      const navHeight = 72;
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleOpenSearch = (initialQuery = "") => {
    setIsOpen(false);
    window.dispatchEvent(
      new CustomEvent("open-command-palette", { detail: initialQuery })
    );
  };

  const professionLinks = [
    { label: "Bio", id: "quick-bio", icon: null },
    { label: "Projects", id: "projects", icon: null },
    { label: "DevDossier", id: "devdossier", icon: null },
    { label: "Experience", id: "experience", icon: null },
    { label: "Skills", id: "skills", icon: null },
    { label: "About", id: "about", icon: null },
    { label: "Contact", id: "contact", icon: null },
  ];

  const passionLinks = [
    {
      label: "Overview",
      id: "creative-overview",
      icon: <FaGlobe className="text-[10px]" />,
    },
    {
      label: "Videos",
      id: "creative-videos",
      icon: <FaYoutube className="text-[10px]" />,
    },
    {
      label: "Gaming",
      id: "creative-gaming",
      icon: <FaGamepad className="text-[10px]" />,
    },
    {
      label: "Travel",
      id: "creative-hobbies",
      icon: <FaCompass className="text-[10px]" />,
    },
    {
      label: "Church Media",
      id: "church-media",
      icon: <FaChurch className="text-[10px]" />,
    },
    {
      label: "Contact",
      id: "contact",
      icon: <IoMdMail className="text-[10px]" />,
    },
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? viewState === "profession"
              ? "h-[64px] sm:h-[68px] bg-white/85 border-warm-gray-200/60 shadow-[0_8px_32px_0_rgba(26,26,26,0.06)] backdrop-blur-xl"
              : "h-[64px] sm:h-[68px] bg-white/75 border-rose-100/50 shadow-[0_8px_32px_0_rgba(244,63,94,0.08)] backdrop-blur-xl"
            : "h-[76px] sm:h-[80px] bg-white/50 border-transparent backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-2 sm:gap-4">
          {/* LOGO & BRANDING */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group transition-transform duration-300 active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl font-serif font-bold text-base sm:text-lg shadow-sm transition-all duration-500 ${
                  viewState === "profession"
                    ? "bg-ink text-white group-hover:bg-crimson group-hover:shadow-[0_4px_20px_rgba(198,40,40,0.35)]"
                    : "bg-gradient-to-r from-rose-600 to-amber-500 text-white group-hover:brightness-110 group-hover:shadow-[0_4px_20px_rgba(244,63,94,0.35)]"
                }`}
              >
                SM.
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-ink text-sm sm:text-base md:text-lg font-bold tracking-tight leading-none hidden min-[380px]:inline">
                  Shalimar{" "}
                  <span
                    className={`transition-colors duration-500 hidden sm:inline ${
                      viewState === "profession" ? "text-crimson" : "text-rose-600"
                    }`}
                  >
                    Mehra
                  </span>
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-sans font-semibold text-emerald-700 uppercase tracking-wider hidden xs:inline">
                    Available for work
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* CENTER NAVIGATION LINKS (Desktop lg+) */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl px-2">
            <div className="flex items-center gap-1 bg-neutral-100/60 border border-neutral-200/50 p-1.5 rounded-full backdrop-blur-md shadow-inner overflow-x-auto no-scrollbar">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`relative uppercase tracking-widest text-[10px] font-sans font-bold px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap group flex items-center gap-1.5 ${
                      isActive
                        ? viewState === "profession"
                          ? "text-crimson bg-white border border-crimson/15 shadow-[0_2px_10px_-2px_rgba(198,40,40,0.2)]"
                          : "text-rose-600 bg-white border border-rose-500/15 shadow-[0_2px_10px_-2px_rgba(244,63,94,0.2)]"
                        : "text-gray-500 hover:text-ink hover:bg-neutral-200/50 border border-transparent"
                    }`}
                  >
                    {link.icon && (
                      <span
                        className={`transition-transform duration-300 group-hover:scale-110 ${
                          isActive
                            ? viewState === "profession"
                              ? "text-crimson"
                              : "text-rose-600"
                            : "text-gray-400"
                        }`}
                      >
                        {link.icon}
                      </span>
                    )}
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT ACTIONS & SEARCH BAR */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
            {/* WORKABLE SEARCH INPUT TRIGGER (Desktop & Tablet) */}
            <div
              onClick={() => handleOpenSearch()}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-warm-gray-200/80 bg-neutral-100/70 hover:bg-white text-gray-500 hover:text-ink hover:border-gray-400 shadow-xs cursor-pointer transition-all duration-200 group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenSearch();
                }
              }}
              aria-label="Open Search Command Palette"
            >
              <FaSearch className="text-gray-400 text-xs group-hover:text-crimson transition-colors" />
              <span className="text-[11px] font-sans font-medium text-gray-400 group-hover:text-gray-600 hidden xl:inline">
                Search projects, skills...
              </span>
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] font-mono font-semibold text-gray-500 bg-white border border-neutral-200/80 rounded shadow-2xs group-hover:border-gray-300">
                <FiCommand className="text-[9px]" /> K
              </kbd>
            </div>

            {/* Compact Search Button (Mobile & Small Tablet) */}
            <button
              onClick={() => handleOpenSearch()}
              className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 border border-warm-gray-200/80 rounded-full text-gray-600 hover:text-crimson bg-white/90 shadow-xs active:scale-95 transition-all text-xs font-sans font-medium"
              aria-label="Search"
            >
              <FaSearch className="text-xs text-gray-400" />
              <span className="text-[10px] uppercase font-bold tracking-wider hidden xs:inline">Search</span>
            </button>

            {/* Resume CTA (Tablet & Desktop) */}
            <a
              href="/resume-protected.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 uppercase tracking-widest text-[10px] font-bold text-gray-600 hover:text-crimson px-3.5 py-2 border border-warm-gray-200/80 hover:border-crimson/50 rounded-full transition-all duration-200 bg-white/90 shadow-xs hover:scale-[1.02] active:scale-95"
            >
              <FaFileDownload className="text-xs text-gray-400" />
              <span>Resume</span>
            </a>

            {/* Contact CTA (Desktop lg+) */}
            <button
              onClick={() => handleScrollTo("contact")}
              className={`hidden lg:flex items-center gap-1.5 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-500 active:scale-95 ${
                viewState === "profession"
                  ? "bg-crimson hover:bg-crimson-dark shadow-crimson/15"
                  : "bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 shadow-rose-500/15"
              }`}
            >
              Contact <IoMdMail className="text-sm" />
            </button>

            {/* Mobile Hamburger Toggle (Visible under lg breakpoint) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex flex-col justify-center items-center rounded-full border border-warm-gray-200/80 bg-white/90 text-ink hover:border-crimson/50 shadow-xs transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1 w-4 sm:w-5">
                <span
                  className={`h-[2px] w-full bg-ink rounded transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-[5px] sm:translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-ink rounded transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-ink rounded transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[5px] sm:-translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET DRAWER */}
        <div
          className={`absolute left-0 w-full overflow-hidden transition-all duration-500 ease-in-out lg:hidden border-b shadow-2xl ${
            isScrolled
              ? "top-[64px] sm:top-[68px] border-warm-gray-200/60"
              : "top-[76px] sm:top-[80px] border-transparent"
          } ${
            viewState === "profession"
              ? "bg-white/95 border-warm-gray-200/60 backdrop-blur-2xl"
              : "bg-white/90 border-rose-100/60 backdrop-blur-2xl"
          } ${
            isOpen
              ? "max-h-[640px] opacity-100 py-5 px-5 sm:px-8"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2 max-w-7xl mx-auto">
            {/* View badge & availability status */}
            <div className="flex items-center justify-between px-1 py-1 mb-1">
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                  viewState === "passion"
                    ? "bg-rose-50 border-rose-200/60 text-rose-600"
                    : "bg-neutral-100 border-warm-gray-200 text-gray-500"
                }`}
              >
                {viewState === "passion"
                  ? "❤ Passion View"
                  : "💼 Profession View"}
              </span>

              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-sans font-semibold text-emerald-700 uppercase tracking-wider">
                  Available
                </span>
              </div>
            </div>

            {/* WORKABLE SEARCH INPUT IN DRAWER */}
            <div
              onClick={() => handleOpenSearch()}
              className="w-full flex items-center justify-between px-4 py-3 bg-neutral-100/90 border border-neutral-200/80 rounded-xl text-gray-600 text-xs font-sans font-medium transition-colors hover:bg-neutral-200/60 cursor-pointer mb-1 active:scale-[0.99]"
            >
              <span className="flex items-center gap-2.5">
                <FaSearch className="text-crimson text-xs" />
                <span>Search sections, projects & skills...</span>
              </span>
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] font-mono font-semibold text-gray-500 bg-white border border-neutral-200 rounded">
                <FiCommand className="text-[9px]" /> K
              </kbd>
            </div>

            {/* Section links */}
            <div className="flex flex-col gap-1 my-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`w-full text-left font-serif text-base px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? viewState === "profession"
                          ? "text-crimson bg-crimson/5 border-l-4 border-l-crimson font-bold pl-3"
                          : "text-rose-600 bg-rose-500/5 border-l-4 border-l-rose-500 font-bold pl-3"
                        : viewState === "profession"
                          ? "text-ink hover:text-crimson hover:bg-neutral-100/50"
                          : "text-ink hover:text-rose-600 hover:bg-rose-50/50"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.icon && (
                        <span
                          className={`text-sm transition-colors duration-500 ${
                            isActive
                              ? viewState === "profession"
                                ? "text-crimson"
                                : "text-rose-600"
                              : "text-gray-400"
                          }`}
                        >
                          {link.icon}
                        </span>
                      )}
                      {link.label}
                    </span>
                    <span
                      className={`text-xs font-sans uppercase tracking-widest transition-transform ${
                        isActive
                          ? viewState === "profession"
                            ? "text-crimson translate-x-1"
                            : "text-rose-600 translate-x-1"
                          : "text-gray-400"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Action buttons inside drawer */}
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={() => handleScrollTo("contact")}
                className={`w-full text-white font-sans font-bold uppercase tracking-widest text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition-all duration-300 active:scale-95 ${
                  viewState === "profession"
                    ? "bg-crimson hover:bg-crimson-dark shadow-crimson/15"
                    : "bg-gradient-to-r from-rose-600 to-amber-500 hover:brightness-110 shadow-rose-500/15"
                }`}
              >
                Get In Touch <IoMdMail className="text-base" />
              </button>

              <a
                href="/resume-protected.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:hidden items-center justify-center gap-2 py-3 border border-warm-gray-200/80 rounded-full text-[10px] font-bold text-gray-600 hover:text-crimson hover:border-crimson bg-white/90 transition-all uppercase tracking-wider shadow-xs active:scale-95"
              >
                <FaFileDownload className="text-xs" /> Resume PDF
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

