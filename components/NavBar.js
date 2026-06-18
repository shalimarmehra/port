"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaSearch, FaFileDownload } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Bio", id: "quick-bio" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[72px] bg-white/95 backdrop-blur-md border-b border-warm-gray-200 shadow-sm`}
      >
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6 sm:px-8">
          {/* Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-ink text-white font-serif font-bold text-lg shadow-sm group-hover:bg-crimson transition-colors duration-300">
              SM.
            </div>
            <span className="font-serif text-ink text-lg font-bold tracking-tight">
              Shalimar{" "}
              <span className="text-crimson">Mehra</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="relative uppercase tracking-widest text-xs font-sans font-semibold text-gray-500 hover:text-crimson px-4 py-2 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-crimson transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
              className="flex items-center gap-2 px-3 py-2 border border-warm-gray-200 hover:border-crimson rounded-full text-xs text-gray-500 hover:text-crimson transition-all select-none mr-1 font-sans font-semibold tracking-wider bg-white"
              title="Open Command Palette (Cmd+K)"
              data-cursor-text="SEARCH"
            >
              <FaSearch className="text-[10px]" />
              <span className="text-[9px] bg-warm-gray-100 px-1.5 py-0.5 rounded text-gray-400 border border-warm-gray-200/50 font-bold font-mono">⌘K</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-widest text-xs font-semibold text-gray-500 hover:text-crimson px-4 py-2 border border-warm-gray-200 hover:border-crimson rounded-full transition-all duration-200 flex items-center gap-1.5 bg-white"
              data-cursor-text="PDF"
            >
              <FaFileDownload className="text-sm" /> Resume
            </a>

            <button
              onClick={() => handleScrollTo("contact")}
              className="bg-crimson hover:bg-crimson-dark text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95"
              data-cursor-text="SEND"
            >
              Get In Touch <IoMdMail className="text-base" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
              className="text-gray-500 hover:text-crimson p-2 border border-warm-gray-200 rounded-full hover:border-crimson transition-all bg-white"
              aria-label="Search Palette"
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center rounded-full border border-warm-gray-200 bg-white text-ink hover:border-crimson transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1 w-5">
                <span
                  className={`h-[2px] w-full bg-ink rounded transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-ink rounded transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-ink rounded transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`absolute top-[72px] left-0 w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden bg-white border-b border-warm-gray-200 shadow-lg ${
            isOpen
              ? "max-h-[420px] opacity-100 py-4 px-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="w-full text-ink hover:text-crimson text-left font-serif text-lg px-4 py-3 border-b border-warm-gray-100 hover:bg-cream/50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans uppercase tracking-widest text-gray-400">→</span>
              </button>
            ))}
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full mt-3 bg-crimson hover:bg-crimson-dark text-white font-sans font-bold uppercase tracking-widest text-xs py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              Get In Touch <IoMdMail className="text-base" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
