"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube, IoMdCopy, IoMdCheckmark } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX, BsThreads } from "react-icons/bs";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@shalimarmehra.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#05070f] border-t border-white/5 text-gray-400 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Contact Details */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-base font-bold font-display uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-400 mb-1">Based in New Delhi, India</p>
            
            {/* Copyable Email Widget */}
            <div className="group relative flex items-center mt-2.5">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-semibold bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 hover:border-indigo-500/40 transition-all active:scale-95"
                title="Click to copy email"
              >
                <span>contact@shalimarmehra.com</span>
                {copied ? (
                  <IoMdCheckmark className="text-emerald-400 animate-pulse" />
                ) : (
                  <IoMdCopy className="text-gray-400 group-hover:text-white transition-colors" />
                )}
              </button>
            </div>

            <a
              href="tel:+919560362339"
              className="text-sm text-gray-400 hover:text-white transition-colors mt-3 block font-medium"
            >
              +91 95603 62339
            </a>
            
            <div className="mt-5">
              <a
                href="/resume.pdf"
                className="inline-block bg-white text-black font-bold px-4.5 py-2 rounded-full text-xs hover:bg-indigo-600 hover:text-white transition-all shadow-md active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col md:items-center">
            <div className="md:text-left text-left w-full md:max-w-[120px]">
              <h3 className="text-white text-base font-bold font-display uppercase tracking-wider mb-4">
                Explore
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    onClick={() => handleScrollTo("projects")}
                    className="text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo("experience")}
                    className="text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo("skills")}
                    className="text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo("about")}
                    className="text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social connections */}
          <div>
            <h3 className="text-white text-base font-bold font-display uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/shalimarmehra"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/shalimarmehra/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
              >
                <IoLogoLinkedin className="text-lg" />
              </a>

              <a
                href="https://www.instagram.com/shalimarmehra/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
              >
                <FaSquareInstagram className="text-lg" />
              </a>

              <a
                href="https://x.com/@shalimarmehra"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
              >
                <BsTwitterX className="text-lg" />
              </a>

              <a
                href="https://threads.com/@shalimarmehra"
                aria-label="Threads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white transition-all hover:-translate-y-1"
              >
                <BsThreads className="text-lg" />
              </a>
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xs text-gray-500 hover:text-white border-b border-gray-800 hover:border-white transition-all pb-0.5"
              >
                Scroll to top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright banner */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <PiCopyright />
            <span>{new Date().getFullYear()} Shalimar Mehra. All rights reserved.</span>
          </div>

          <div className="text-xs text-gray-500">
            Engineered with <span className="text-rose-500">♥</span> using Next.js & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
