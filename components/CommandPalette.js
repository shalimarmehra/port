"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaAngleRight, FaRegFolder, FaRegIdCard, FaPalette, FaFilePdf, FaHome, FaTerminal } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { IoMdMail, IoMdCheckmark } from "react-icons/io";
import { themes } from "./ThemeCustomizer";

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
      icon: <FaHome className="text-crimson" />,
      action: () => scrollToSection("quick-bio"),
    },
    {
      id: "projects",
      title: "Jump to Projects",
      category: "Navigation",
      icon: <FaRegFolder className="text-crimson" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "experience",
      title: "Jump to Experience",
      category: "Navigation",
      icon: <FaRegIdCard className="text-crimson" />,
      action: () => scrollToSection("experience"),
    },
    {
      id: "skills",
      title: "Jump to Skills",
      category: "Navigation",
      icon: <GiSkills className="text-crimson" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "about",
      title: "Jump to About",
      category: "Navigation",
      icon: <FaSearch className="text-crimson" />,
      action: () => scrollToSection("about"),
    },
    {
      id: "contact",
      title: "Jump to Contact",
      category: "Navigation",
      icon: <MdContacts className="text-crimson" />,
      action: () => scrollToSection("contact"),
    },
    {
      id: "copy-email",
      title: "Copy Email Address",
      category: "Actions",
      icon: <IoMdMail className="text-crimson" />,
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
      icon: <FaFilePdf className="text-crimson" />,
      action: () => {
        window.open("/resume-protected.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "terminal",
      title: "Toggle CLI Terminal Drawer",
      category: "Actions",
      icon: <FaTerminal className="text-crimson" />,
      action: () => {
        window.dispatchEvent(new CustomEvent("toggle-terminal-drawer"));
        setIsOpen(false);
      },
    },
    ...themes.map((t) => ({
      id: `theme-${t.id}`,
      title: `Set Theme Accent: ${t.name}`,
      category: "Accents",
      icon: <FaPalette style={{ color: t.primary }} />,
      action: () => {
        const root = document.documentElement;
        root.style.setProperty("--accent-primary", t.primary);
        root.style.setProperty("--accent-primary-rgb", t.primaryRgb);
        root.style.setProperty("--accent-secondary", t.secondary);
        root.style.setProperty("--accent-secondary-rgb", t.secondaryRgb);
        root.style.setProperty("--accent-light", t.light);
        root.style.setProperty("--accent-50", t.bg50);
        
        // Dynamically override selections
        const styleId = "custom-selection-style";
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = styleId;
          document.head.appendChild(styleEl);
        }
        styleEl.innerHTML = `
          ::selection {
            background-color: rgba(${t.primaryRgb}, 0.15) !important;
          }
        `;

        try {
          localStorage.setItem("portfolio-theme", t.id);
        } catch (e) {}
        window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: t }));
        setIsOpen(false);
      },
    })),
  ];

  const filteredItems = commandItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K to toggle
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (!isOpen) return;

      // Navigation within list
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
      document.body.style.overflow = "hidden"; // Prevent body scroll while open
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = ""; // Restore body scroll
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4 font-sans">
      {/* Light Blur backdrop overlay */}
      <div
        className="fixed inset-0 bg-ink/30 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette Box Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#FAF8F5] border border-warm-gray-200 shadow-2xl flex flex-col max-h-[420px] theme-transition">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3.5 px-4 border-b border-warm-gray-200 h-14">
          <FaSearch className="text-gray-400 text-sm flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or navigate..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-ink focus:outline-none placeholder-gray-400 font-medium"
          />
          <span className="text-[9px] bg-warm-gray-100 px-2 py-1 rounded text-gray-500 font-bold font-mono border border-warm-gray-200 select-none">
            ESC
          </span>
        </div>

        {/* Command Items List */}
        <div className="overflow-y-auto p-2 flex-1 scrollbar-thin">
          {filteredItems.length > 0 ? (
            <div className="space-y-0.5">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all border ${
                      isSelected
                        ? "bg-white border-crimson/30 shadow-sm text-ink pl-4 border-l-4 border-l-crimson"
                        : "text-gray-500 hover:text-ink border-transparent bg-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs">{item.icon}</span>
                      <span className="text-xs font-semibold tracking-tight">{item.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] uppercase tracking-widest font-bold text-gray-400 bg-warm-gray-100 px-2 py-0.5 rounded border border-warm-gray-200/50">
                        {item.category}
                      </span>
                      {isSelected && <FaAngleRight className="text-xs text-crimson" />}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
              No results found
            </div>
          )}
        </div>

        {/* Success alert overlay */}
        {copied && (
          <div className="absolute inset-0 bg-[#FAF8F5] flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson text-xl animate-bounce">
              <IoMdCheckmark />
            </div>
            <p className="text-xs font-bold text-ink uppercase tracking-widest">
              Email Copied to Clipboard!
            </p>
          </div>
        )}

        {/* Navigation Hotkey Footer */}
        <div className="h-10 border-t border-warm-gray-200 px-4 flex items-center justify-between text-[9px] text-gray-400 font-bold uppercase tracking-wider bg-white select-none">
          <span>Use arrows to navigate, Enter to select</span>
          <span>⌘K to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
export { CommandPalette };
