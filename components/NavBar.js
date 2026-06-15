"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { AiFillProject, AiOutlineFileText } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaBiohazard } from "react-icons/fa";

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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/70 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-lg"
            : "bg-transparent border-transparent"
        } border px-4 py-2.5 h-[64px]`}
      >
        <div className="flex items-center justify-between h-full mx-auto px-2 sm:px-4">
          {/* Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-300 active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-indigo-400 transition-colors">
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="Logo"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-white font-display text-sm sm:text-base font-bold tracking-tight">
              Shalimar <span className="text-indigo-400 group-hover:text-teal-400 transition-colors">Mehra</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleScrollTo("quick-bio")}
              className="text-gray-300 hover:text-white font-medium px-4 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-white/5 flex items-center gap-0.5"
            >
              Bio
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="text-gray-300 hover:text-white font-medium px-4 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-white/5"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo("experience")}
              className="text-gray-300 hover:text-white font-medium px-4 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-white/5"
            >
              Experience
            </button>
            <button
              onClick={() => handleScrollTo("skills")}
              className="text-gray-300 hover:text-white font-medium px-4 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-white/5"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="text-gray-300 hover:text-white font-medium px-4 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-white/5"
            >
              About
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xs font-semibold px-4 py-2 border border-white/15 rounded-full hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <AiOutlineFileText className="text-base" /> Resume
            </a>
            <button
              onClick={() => handleScrollTo("contact")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_16px_rgba(99,102,241,0.5)] transition-all flex items-center gap-1.5 active:scale-95"
            >
              Get In Touch <IoMdMail className="text-base" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white p-2 border border-white/10 rounded-full hover:bg-white/5 transition-all"
              aria-label="Resume"
            >
              <AiOutlineFileText className="text-lg" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1 w-5">
                <span
                  className={`h-[2px] w-full bg-white rounded transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-white rounded transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-white rounded transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`absolute top-[76px] left-0 w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.5)] ${
            isOpen ? "max-h-[380px] opacity-100 py-4 px-3" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleScrollTo("quick-bio")}
              className="text-gray-300 hover:text-white text-left font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <FaBiohazard className="text-indigo-400" /> Bio
              </span>
              <CgArrowTopRight className="text-gray-500" />
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="text-gray-300 hover:text-white text-left font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <AiFillProject className="text-indigo-400" /> Projects
              </span>
              <CgArrowTopRight className="text-gray-500" />
            </button>
            <button
              onClick={() => handleScrollTo("experience")}
              className="text-gray-300 hover:text-white text-left font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <MdWork className="text-indigo-400" /> Experience
              </span>
              <CgArrowTopRight className="text-gray-500" />
            </button>
            <button
              onClick={() => handleScrollTo("skills")}
              className="text-gray-300 hover:text-white text-left font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <GiSkills className="text-indigo-400" /> Skills
              </span>
              <CgArrowTopRight className="text-gray-500" />
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="text-gray-300 hover:text-white text-left font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <BsFillPersonFill className="text-indigo-400" /> About
              </span>
              <CgArrowTopRight className="text-gray-500" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              Contact Us <IoMdMail className="text-lg" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
