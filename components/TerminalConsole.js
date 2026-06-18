"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTerminal, FaTimes } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { themes } from "./ThemeCustomizer";

const quotes = [
  "To understand recursion, one must first understand recursion.",
  "There are 10 types of people in this world: Those who understand binary, and those who don't.",
  "Coding is like poetry; it should be short, concise, and beautiful.",
  "First, solve the problem. Then, write the code.",
  "Make it work, make it right, make it fast.",
  "Before software can be reusable, it first has to be usable.",
];

const TerminalConsole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { text: "Welcome to Shalimar's Portfolio CLI v1.1.0", type: "system" },
    { text: "Type 'help' to see all available commands.", type: "system" },
    { text: "", type: "spacing" },
  ]);
  const [input, setInput] = useState("");
  const [matrixMode, setMatrixMode] = useState(false);
  
  const consoleEndRef = useRef(null);
  const canvasRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  // Handle custom toggle event
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
    window.addEventListener("toggle-terminal-drawer", handleToggle);
    return () => window.removeEventListener("toggle-terminal-drawer", handleToggle);
  }, []);

  // Close when clicking outside drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && 
        drawerRef.current && 
        !drawerRef.current.contains(event.target) &&
        !event.target.closest(".terminal-toggle-btn")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Matrix Effect Logic
  useEffect(() => {
    if (!matrixMode || !isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 12);
    const yPositions = Array(columns).fill(0);

    const matrixRain = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "var(--accent-primary, #C62828)"; // Rain matches active accent color!
      ctx.font = "10px monospace";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(33 + Math.random() * 93);
        const x = index * 12;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 10;
        }
      });
    };

    const interval = setInterval(matrixRain, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [matrixMode, isOpen]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmdClean = input.trim();
    if (!cmdClean) return;

    const newHistory = [...history, { text: `visitor@shalimar:~$ ${input}`, type: "input" }];
    const cmdLower = cmdClean.toLowerCase();

    // Command parser
    if (cmdLower === "help") {
      newHistory.push(
        { text: "Available Commands:", type: "output" },
        { text: "  about    - Print background and career philosophy", type: "output" },
        { text: "  skills   - List core technologies and frameworks", type: "output" },
        { text: "  projects - List selected projects", type: "output" },
        { text: "  theme    - Switch accent theme (e.g. theme sage, theme violet, theme crimson)", type: "output" },
        { text: "  matrix   - Toggle the secret Matrix code rain animation", type: "output" },
        { text: "  coffee   - Dispense a random developer quote", type: "output" },
        { text: "  clear    - Clear terminal window logs", type: "output" },
        { text: "  exit     - Close the terminal console", type: "output" }
      );
    } else if (cmdLower === "about") {
      newHistory.push(
        { text: "Shalimar Mehra - Full-Stack Developer", type: "output" },
        { text: "Education: BCA from IGNOU & Master Diploma in Computer Eng.", type: "output" },
        { text: "Philosophy: Bridging frontend aesthetics with optimized server logic.", type: "output" },
        { text: "Business: Founder of Dev Dossier, delivering high-speed web services.", type: "output" }
      );
    } else if (cmdLower === "skills") {
      newHistory.push(
        { text: "Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind, Figma", type: "output" },
        { text: "Backend: Node.js, Express.js, MySQL, PostgreSQL, MongoDB, REST APIs", type: "output" },
        { text: "Tools: Git, GitHub, WordPress, Elementor, Linux, VS Code", type: "output" }
      );
    } else if (cmdLower === "projects") {
      newHistory.push(
        { text: "1. Dev Dossier Business Web App (Next.js & Tailwind)", type: "output" },
        { text: "2. Personal Developer Portfolio (Next.js & Tailwind)", type: "output" },
        { text: "3. 24/7 Delivery Experts Logistics (WordPress & Elementor Pro)", type: "output" },
        { text: "4. The Lamen - News Media Hub (WordPress & Elementor)", type: "output" },
        { text: "5. VibeSync Social Networking (PHP, JS, MySQL)", type: "output" },
        { text: "Type the name in search or click navbar to view details.", type: "output" }
      );
    } else if (cmdLower.startsWith("theme")) {
      const parts = cmdLower.split(" ");
      const themeId = parts[1];
      
      if (themeId) {
        const found = themes.find((t) => t.id === themeId);
        if (found) {
          const root = document.documentElement;
          root.style.setProperty("--accent-primary", found.primary);
          root.style.setProperty("--accent-primary-rgb", found.primaryRgb);
          root.style.setProperty("--accent-secondary", found.secondary);
          root.style.setProperty("--accent-secondary-rgb", found.secondaryRgb);
          root.style.setProperty("--accent-light", found.light);
          root.style.setProperty("--accent-50", found.bg50);
          
          const styleId = "custom-selection-style";
          let styleEl = document.getElementById(styleId);
          if (!styleEl) {
            styleEl = document.createElement("style");
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
          }
          styleEl.innerHTML = `
            ::selection {
              background-color: rgba(${found.primaryRgb}, 0.15) !important;
            }
          `;

          try {
            localStorage.setItem("portfolio-theme", found.id);
          } catch (e) {}
          window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: found }));
          newHistory.push({ text: `Accent color theme changed to: ${found.name}`, type: "output" });
        } else {
          newHistory.push({ text: `Error: Invalid theme. Select 'crimson', 'sage', 'indigo', 'ochre', or 'violet'.`, type: "error" });
        }
      } else {
        newHistory.push({ text: "Current available themes: crimson, sage, indigo, ochre, violet.", type: "output" });
      }
    } else if (cmdLower === "matrix") {
      setMatrixMode(!matrixMode);
      newHistory.push({ text: matrixMode ? "Matrix digital rain disabled." : "Matrix digital rain activated. Follow the white rabbit...", type: "output" });
    } else if (cmdLower === "coffee") {
      const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
      newHistory.push({ text: `☕ "${randQuote}"`, type: "output" });
    } else if (cmdLower === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (cmdLower === "exit") {
      setIsOpen(false);
      setInput("");
      return;
    } else {
      newHistory.push({ text: `bash: ${input}: command not found. Type 'help' for options.`, type: "error" });
    }

    newHistory.push({ text: "", type: "spacing" });
    setHistory(newHistory);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="terminal-toggle-btn fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-warm-gray-200 hover:border-crimson text-gray-500 hover:text-crimson shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 group"
        aria-label="Toggle Developer Terminal"
        data-cursor-text="CLI"
      >
        <FaTerminal className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-xs transition-opacity duration-300" />
      )}

      {/* Slide-out Drawer Panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-black/95 text-emerald-400 z-50 shadow-2xl flex flex-col font-mono transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Bar */}
        <div className="bg-[#0c0f15] h-14 border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setHistory([])} title="Clear" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setMatrixMode(!matrixMode)} title="Toggle Matrix Rain" />
            </div>
            <span className="text-xs text-gray-500 font-semibold select-none ml-2">
              terminal-console (bash)
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Close Terminal"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Console Viewport */}
        <div className="flex-1 overflow-y-auto p-6 text-xs space-y-1.5 relative scrollbar-thin">
          {matrixMode && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none opacity-20 z-0"
            />
          )}
          
          <div className="relative z-10 space-y-1">
            {history.map((line, idx) => {
              if (line.type === "spacing") {
                return <div key={idx} className="h-2" />;
              }
              let color = "text-emerald-400";
              if (line.type === "error") color = "text-rose-400";
              if (line.type === "input") color = "text-sky-300";
              if (line.type === "system") color = "text-gray-500 font-semibold";
              
              // If terminal matches dynamic style
              if (line.type === "output" && !line.text.startsWith("  ")) {
                color = "text-white font-bold";
              }
              
              return (
                <div key={idx} className={`${color} leading-relaxed break-words`}>
                  {line.text}
                </div>
              );
            })}
            
            {/* Command Input Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2 border-t border-white/5 mt-4">
              <span className="text-sky-400 flex-shrink-0">visitor@shalimar:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-emerald-400 focus:outline-none placeholder-emerald-950/40 font-mono text-xs"
                placeholder="Type command..."
                autoComplete="off"
                spellCheck="false"
                disabled={!isOpen}
              />
              <span className="w-1.5 h-3.5 bg-emerald-500 cursor-blink flex-shrink-0" />
            </form>
            
            <div ref={consoleEndRef} />
          </div>
        </div>
        
        {/* Footer info bar */}
        <div className="h-9 border-t border-white/5 px-6 flex items-center justify-between text-[9px] text-gray-600 bg-[#070a0e] select-none">
          <span>Commands: help, about, skills, theme, matrix, coffee</span>
          <span>exit to close</span>
        </div>
      </div>
    </>
  );
};

export default TerminalConsole;
export { TerminalConsole };
