"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaAngleRight, FaRegFolder, FaRegIdCard, FaPalette, FaFilePdf, FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { IoMdMail, IoMdCheckmark } from "react-icons/io";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const commandItems = [
    {
      id: "bio",
      title: "Jump to Bio",
      category: "Navigation",
      icon: <FaHome className="text-indigo-400" />,
      action: () => scrollToSection("quick-bio"),
    },
    {
      id: "projects",
      title: "Jump to Projects",
      category: "Navigation",
      icon: <FaRegFolder className="text-indigo-400" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "experience",
      title: "Jump to Experience",
      category: "Navigation",
      icon: <FaRegIdCard className="text-indigo-400" />,
      action: () => scrollToSection("experience"),
    },
    {
      id: "skills",
      title: "Jump to Skills",
      category: "Navigation",
      icon: <GiSkills className="text-indigo-400" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "about",
      title: "Jump to About",
      category: "Navigation",
      icon: <FaSearch className="text-indigo-400" />,
      action: () => scrollToSection("about"),
    },
    {
      id: "contact",
      title: "Jump to Contact",
      category: "Navigation",
      icon: <MdContacts className="text-indigo-400" />,
      action: () => scrollToSection("contact"),
    },
    {
      id: "copy-email",
      title: "Copy Email Address",
      category: "Actions",
      icon: <IoMdMail className="text-emerald-400" />,
      action: () => {
        navigator.clipboard.writeText("contact@shalimarmehra.com");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setIsOpen(false);
        }, 1500);
      },
    },
    {
      id: "resume",
      title: "Download Resume PDF",
      category: "Actions",
      icon: <FaFilePdf className="text-rose-400" />,
      action: () => {
        window.open("/resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "theme-indigo",
      title: "Set Theme: Obsidian Indigo",
      category: "Themes",
      icon: <FaPalette className="text-indigo-500" />,
      action: () => selectTheme("indigo"),
    },
    {
      id: "theme-teal",
      title: "Set Theme: Emerald Teal",
      category: "Themes",
      icon: <FaPalette className="text-teal-400" />,
      action: () => selectTheme("teal"),
    },
    {
      id: "theme-rose",
      title: "Set Theme: Neon Rose",
      category: "Themes",
      icon: <FaPalette className="text-rose-500" />,
      action: () => selectTheme("rose"),
    },
    {
      id: "theme-amber",
      title: "Set Theme: Solar Amber",
      category: "Themes",
      icon: <FaPalette className="text-amber-500" />,
      action: () => selectTheme("amber"),
    },
  ];

  const filteredItems = commandItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const selectTheme = (themeId) => {
    const root = document.documentElement;
    const themeMaps = {
      indigo: { primary: "#6366f1", primaryRgb: "99, 102, 241", secondary: "#8b5cf6", secondaryRgb: "139, 92, 246", tertiary: "#14b8a6" },
      teal: { primary: "#0ea5e9", primaryRgb: "14, 165, 233", secondary: "#10b981", secondaryRgb: "16, 185, 129", tertiary: "#3b82f6" },
      rose: { primary: "#f43f5e", primaryRgb: "244, 63, 94", secondary: "#a855f7", secondaryRgb: "168, 85, 247", tertiary: "#ec4899" },
      amber: { primary: "#f59e0b", primaryRgb: "245, 158, 11", secondary: "#ea580c", secondaryRgb: "234, 88, 12", tertiary: "#eab308" },
    };
    const t = themeMaps[themeId];
    if (t) {
      root.style.setProperty("--accent-primary", t.primary);
      root.style.setProperty("--accent-primary-rgb", t.primaryRgb);
      root.style.setProperty("--accent-secondary", t.secondary);
      root.style.setProperty("--accent-secondary-rgb", t.secondaryRgb);
      root.style.setProperty("--accent-tertiary", t.tertiary);
      localStorage.setItem("portfolio-theme", themeId);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (!isOpen) return;

      // Arrow navigation
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
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

  useEffect(() => {
    const handleCustomTrigger = () => {
      setIsOpen((prev) => !prev);
    };
    window.addEventListener("toggle-command-palette", handleCustomTrigger);
    return () => {
      window.removeEventListener("toggle-command-palette", handleCustomTrigger);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Dark Blur overlay backing */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#090d16]/95 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col max-h-[450px]">
        {/* Search header bar */}
        <div className="flex items-center gap-3 px-4 border-b border-white/5 h-14">
          <FaSearch className="text-gray-500 text-sm flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-gray-500"
          />
          <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-500 font-bold font-mono border border-white/5">
            ESC
          </span>
        </div>

        {/* Action Lists */}
        <div className="overflow-y-auto p-2 flex-1">
          {filteredItems.length > 0 ? (
            <div className="space-y-1">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                      isSelected
                        ? "bg-white/10 text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-xs font-semibold tracking-tight">{item.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                        {item.category}
                      </span>
                      {isSelected && <FaAngleRight className="text-xs text-indigo-400" />}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-xs text-gray-500 font-medium">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Copy success notice overlay */}
        {copied && (
          <div className="absolute inset-0 bg-[#090d16]/95 backdrop-blur-md flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xl animate-bounce">
              <IoMdCheckmark />
            </div>
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Email Copied to Clipboard!
            </p>
          </div>
        )}

        {/* Hotkey Guide footer */}
        <div className="h-10 border-t border-white/5 px-4 flex items-center justify-between text-[10px] text-gray-500 font-medium bg-[#05080f]">
          <span>Use arrows to navigate, Enter to select</span>
          <span className="font-mono">⌘K to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
export { CommandPalette };
