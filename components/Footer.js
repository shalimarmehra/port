"use client";
import React from "react";
import {
  FaGithub,
  FaAngleUp,
  FaMapMarkerAlt,
  FaHeart,
  FaGlobe,
  FaYoutube,
  FaGamepad,
  FaCompass,
} from "react-icons/fa";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMdMail,
} from "react-icons/io";
import { FaSquareInstagram, FaCode } from "react-icons/fa6";

const Footer = ({ viewState = "profession" }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@shalimarmehra.com");
  };

  const socials = [
    {
      icon: <FaGithub className="text-base" />,
      link: "https://github.com/shalimarmehra",
      label: "GitHub",
    },
    {
      icon: <IoLogoLinkedin className="text-base" />,
      link: "https://www.linkedin.com/in/shalimarmehra/",
      label: "LinkedIn",
    },
    {
      icon: <FaSquareInstagram className="text-base" />,
      link: "https://www.instagram.com/shalimarmehra/",
      label: "Instagram",
    },
    {
      icon: <IoLogoYoutube className="text-base" />,
      link: "https://youtube.com/@shalimarmehra",
      label: "YouTube",
    },
  ];

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
    { label: "Contact",   id: "contact",            icon: <IoMdMail className="text-[10px]" /> },
  ];

  const navLinks = viewState === "passion" ? passionLinks : professionLinks;

  return (
    <footer className="bg-ink text-white relative overflow-hidden">

      {/* Decorative crimson gradient top rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-crimson to-transparent opacity-60" />

      {/* Large background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif font-bold text-[12vw] text-white/[0.03] whitespace-nowrap tracking-tight">
          SHALIMAR MEHRA
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* ── Main Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1+2 — Brand block */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-crimson text-white font-serif font-bold text-lg shadow-lg shadow-crimson/20">
                SM.
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-white leading-none">
                  Shalimar Mehra
                </p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium mt-0.5">
                  {viewState === "passion"
                    ? "Creator · Camera Op · Gamer"
                    : "Full-Stack Developer · Designer"}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              {viewState === "passion"
                ? "Beyond the code — exploring creativity through videography, faith, gaming, and community. Always showing up, always curious."
                : "Building premium digital experiences at the intersection of design and engineering. Available for freelance and collaboration."}
            </p>

            <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
              <FaMapMarkerAlt className="text-crimson shrink-0" />
              <span>New Delhi, India</span>
            </div>

            {/* Social icon row */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-crimson hover:border-crimson transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Quick links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
              {viewState === "passion" ? "Explore Passions" : "Navigate"}
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200 group"
                  >
                    {link.icon && (
                      <span className="text-crimson">{link.icon}</span>
                    )}
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact / Connect */}
          <div>
            {viewState === "profession" ? (
              <>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
                  Let&apos;s Talk
                </p>
                <div className="space-y-4">
                  <button
                    onClick={copyEmail}
                    title="Click to copy email"
                    className="flex items-start gap-2.5 group text-left"
                  >
                    <IoMdMail className="text-crimson mt-0.5 shrink-0" />
                    <span className="text-sm text-white/50 group-hover:text-white transition-colors break-all">
                      contact@shalimarmehra.com
                    </span>
                  </button>
                  <a
                    href="tel:+919560362339"
                    className="flex items-start gap-2.5 group"
                  >
                    <span className="text-crimson mt-0.5 shrink-0 text-sm">📞</span>
                    <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                      +91 95603 62339
                    </span>
                  </a>
                  <div className="pt-2">
                    <a
                      href="/resume-protected.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson/80 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-crimson/20"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5">
                  Connect With Me
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-white/50 leading-relaxed">
                    Want to collaborate on a video project, attend an event together, or just say hey?
                  </p>
                  <button
                    onClick={copyEmail}
                    title="Click to copy"
                    className="flex items-center gap-2 text-crimson hover:text-white text-sm font-medium transition-colors"
                  >
                    <IoMdMail />
                    <span>contact@shalimarmehra.com</span>
                  </button>
                  <div className="pt-1">
                    <a
                      href="https://www.linkedin.com/in/shalimarmehra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/10 hover:border-crimson text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200"
                    >
                      Say Hello →
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* ── Bottom Bar ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 font-medium">
            © {currentYear} Shalimar Mehra — All rights reserved.
          </p>

          <p className="text-[10px] text-white/20 uppercase tracking-widest font-medium flex items-center gap-1.5">
            Crafted with <FaHeart className="text-crimson animate-pulse" /> using Next.js & Tailwind
          </p>

          <button
            onClick={() => handleScrollTo("top")}
            className="flex items-center gap-2 text-white/30 hover:text-white text-xs font-medium transition-colors group"
          >
            <span>Back to top</span>
            <span className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson transition-all">
              <FaAngleUp className="text-xs" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
