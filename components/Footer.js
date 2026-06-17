"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaAngleUp } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX, BsThreads } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@shalimarmehra.com");
    // Could add toast here
  };

  return (
    <footer className="bg-white border-t border-warm-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Contact / Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-ink">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-500 font-medium">New Delhi, India</p>
              <button 
                onClick={copyEmail}
                className="block text-crimson hover:text-crimson-dark bg-crimson/5 px-3 py-1.5 rounded-full border border-crimson/20 text-xs font-bold uppercase tracking-wider transition-colors"
                title="Click to copy email"
              >
                contact@shalimarmehra.com
              </button>
              <a href="tel:+919560362339" className="block text-sm text-gray-500 hover:text-ink font-medium">
                +91 95603 62339
              </a>
            </div>
            <div className="pt-2">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink hover:bg-crimson text-white font-bold px-5 py-2 rounded-full text-xs transition-colors shadow-sm"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-ink mb-6">Explore</h3>
            <ul className="space-y-3">
              {[
                { label: "Bio", id: "quick-bio" },
                { label: "Projects", id: "projects" },
                { label: "Experience", id: "experience" },
                { label: "Skills", id: "skills" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-gray-500 hover:text-crimson font-medium text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Go to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-6">Connect</h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: <FaGithub />, link: "https://github.com/shalimarmehra" },
                  { icon: <IoLogoLinkedin />, link: "https://www.linkedin.com/in/shalimarmehra/" },
                  { icon: <FaSquareInstagram />, link: "https://www.instagram.com/shalimarmehra/" },
                  { icon: <IoLogoYoutube />, link: "https://youtube.com/@shalimarmehra" },
                  { icon: <BsTwitterX />, link: "https://x.com/shalimarmehra" },
                  { icon: <BsThreads />, link: "https://threads.net/@shalimarmehra" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="bg-cream border border-warm-gray-200 p-2.5 rounded-full hover:border-crimson hover:text-crimson hover:-translate-y-1 transition-all text-ink flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0 flex lg:justify-end">
              <button
                onClick={() => handleScrollTo("top")}
                className="flex items-center gap-2 text-gray-400 hover:text-crimson font-medium text-sm transition-colors group"
              >
                <span>Back to top</span>
                <span className="bg-cream border border-warm-gray-200 p-1.5 rounded-full group-hover:border-crimson group-hover:bg-crimson group-hover:text-white transition-all">
                  <FaAngleUp className="text-xs" />
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-ink text-white font-serif font-bold text-sm shadow-sm">
              SM.
            </div>
            <p className="text-xs font-semibold text-gray-500">
              &copy; {currentYear} Shalimar Mehra. All rights reserved.
            </p>
          </div>
          
          <p className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            Engineered with <span className="text-rose-500">♥</span> using Next.js & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
