"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX, BsThreads } from "react-icons/bs";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-300 mb-2">New Delhi, India</p>
            <a
              href="mailto:contact@shalimarmehra.com"
              className="block text-sm text-emerald-300 hover:underline"
            >
              contact@shalimarmehra.com
            </a>
            <a href="tel:+919560362339" className="block text-sm text-gray-300 mt-1">
              +91 95603 62339
            </a>
            <div className="mt-4">
              <Link
                href="/resume.pdf"
                className="inline-block bg-emerald-500 text-black px-3 py-1 rounded-md text-sm font-medium hover:bg-emerald-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleScrollTo("projects")}
                  className="text-gray-300 hover:text-emerald-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("experience")}
                  className="text-gray-300 hover:text-emerald-300"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("skills")}
                  className="text-gray-300 hover:text-emerald-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="text-gray-300 hover:text-emerald-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Follow</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/shalimarmehra"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shalimarmehra/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <IoLogoLinkedin />
              </a>

              <a
                href="https://www.instagram.com/shalimarmehra/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <FaSquareInstagram />
              </a>

              <a
                href="https://x.com/@shalimarmehra"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <BsTwitterX />
              </a>

              <a
                href="https://threads.com/@shalimarmehra"
                aria-label="Threads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <BsThreads />
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-gray-300 hover:text-emerald-300"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <PiCopyright />
            <span> {new Date().getFullYear()} Shalimar Mehra</span>
          </div>

          <div className="text-sm text-gray-400">Designed & built by Shalimar Mehra</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
