"use client";
import React, { useState, useEffect, useRef } from "react";

const quotes = [
  "To understand recursion, one must first understand recursion.",
  "There are 10 types of people in this world: Those who understand binary, and those who don't.",
  "Coding is like poetry; it should be short, concise, and beautiful.",
  "First, solve the problem. Then, write the code.",
  "Make it work, make it right, make it fast.",
  "Before software can be reusable, it first has to be usable.",
];

const TerminalConsole = () => {
  const [history, setHistory] = useState([
    { text: "Welcome to Shalimar's Portfolio CLI v1.0.0", type: "system" },
    { text: "Type 'help' to see all available commands.", type: "system" },
    { text: "", type: "spacing" },
  ]);
  const [input, setInput] = useState("");
  const [matrixMode, setMatrixMode] = useState(false);
  
  const consoleEndRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Matrix Effect Logic
  useEffect(() => {
    if (!matrixMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 200;

    const columns = Math.floor(canvas.width / 12);
    const yPositions = Array(columns).fill(0);

    const matrixRain = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#10b981"; // Emerald green rain
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
    
    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [matrixMode]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmdClean = input.trim().toLowerCase();
    if (!cmdClean) return;

    const newHistory = [...history, { text: `visitor@shalimar:~$ ${input}`, type: "input" }];

    // Command parser
    if (cmdClean === "help") {
      newHistory.push(
        { text: "Available Commands:", type: "output" },
        { text: "  about    - Print background and career philosophy", type: "output" },
        { text: "  skills   - List core technologies and frameworks", type: "output" },
        { text: "  projects - List selected projects", type: "output" },
        { text: "  theme    - Switch accent theme (e.g. theme teal, theme rose, theme indigo, theme amber)", type: "output" },
        { text: "  matrix   - Toggle the secret Matrix code rain animation", type: "output" },
        { text: "  coffee   - Dispense a random developer quote", type: "output" },
        { text: "  clear    - Clear terminal window logs", type: "output" }
      );
    } else if (cmdClean === "about") {
      newHistory.push(
        { text: "Shalimar Mehra - Full-Stack Developer", type: "output" },
        { text: "Education: BCA from IGNOU & Master Diploma in Computer Eng.", type: "output" },
        { text: "Philosophy: Bridging frontend aesthetics with optimized server logic.", type: "output" },
        { text: "Business: Founder of Dev Dossier, delivering high-speed web services.", type: "output" }
      );
    } else if (cmdClean === "skills") {
      newHistory.push(
        { text: "Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind, Figma", type: "output" },
        { text: "Backend: Node.js, Express.js, MySQL, PostgreSQL, MongoDB, REST APIs", type: "output" },
        { text: "Tools: Git, GitHub, WordPress, Elementor, Linux, VS Code", type: "output" }
      );
    } else if (cmdClean === "projects") {
      newHistory.push(
        { text: "1. Dev Dossier Business Web App (Next.js & Tailwind)", type: "output" },
        { text: "2. Personal Developer Portfolio (Next.js & Tailwind)", type: "output" },
        { text: "3. 24/7 Delivery Experts Logistics (WordPress & Elementor Pro)", type: "output" },
        { text: "4. The Lamen - News Media Hub (WordPress & Elementor)", type: "output" },
        { text: "5. VibeSync Social Networking (PHP, JS, MySQL)", type: "output" },
        { text: "Type the name in search or click navbar to view details.", type: "output" }
      );
    } else if (cmdClean.startsWith("theme")) {
      const parts = cmdClean.split(" ");
      const themeId = parts[1];
      const validThemes = ["indigo", "teal", "rose", "amber"];
      
      if (themeId && validThemes.includes(themeId)) {
        const root = document.documentElement;
        const themeMaps = {
          indigo: { primary: "#6366f1", primaryRgb: "99, 102, 241", secondary: "#8b5cf6", secondaryRgb: "139, 92, 246", tertiary: "#14b8a6" },
          teal: { primary: "#0ea5e9", primaryRgb: "14, 165, 233", secondary: "#10b981", secondaryRgb: "16, 185, 129", tertiary: "#3b82f6" },
          rose: { primary: "#f43f5e", primaryRgb: "244, 63, 94", secondary: "#a855f7", secondaryRgb: "168, 85, 247", tertiary: "#ec4899" },
          amber: { primary: "#f59e0b", primaryRgb: "245, 158, 11", secondary: "#ea580c", secondaryRgb: "234, 88, 12", tertiary: "#eab308" },
        };
        const t = themeMaps[themeId];
        root.style.setProperty("--accent-primary", t.primary);
        root.style.setProperty("--accent-primary-rgb", t.primaryRgb);
        root.style.setProperty("--accent-secondary", t.secondary);
        root.style.setProperty("--accent-secondary-rgb", t.secondaryRgb);
        root.style.setProperty("--accent-tertiary", t.tertiary);
        localStorage.setItem("portfolio-theme", themeId);
        newHistory.push({ text: `Accent color theme changed to: ${themeId}`, type: "output" });
      } else {
        newHistory.push({ text: "Error: Invalid theme. Select 'indigo', 'teal', 'rose', or 'amber'.", type: "error" });
      }
    } else if (cmdClean === "matrix") {
      setMatrixMode(!matrixMode);
      newHistory.push({ text: matrixMode ? "Matrix digital rain disabled." : "Matrix digital rain activated. Wake up, Neo...", type: "output" });
    } else if (cmdClean === "coffee") {
      const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
      newHistory.push({ text: `☕ "${randQuote}"`, type: "output" });
    } else if (cmdClean === "clear") {
      setHistory([]);
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
    <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-black/90 border border-white/15 shadow-2xl flex flex-col h-[280px]">
      
      {/* OS window topbar bar */}
      <div className="bg-[#0b0e14] h-10 border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer hover:bg-rose-500" onClick={() => setHistory([])} title="Clear Terminal" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer hover:bg-emerald-500" onClick={() => setMatrixMode(!matrixMode)} title="Toggle Matrix Rain" />
        </div>
        <span className="text-[10px] text-gray-500 font-mono tracking-tight select-none">
          terminal-console (bash)
        </span>
        <div className="w-14" />
      </div>

      {/* Terminal Viewports */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-xs text-emerald-400 space-y-1 relative">
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
            if (line.type === "input") color = "text-indigo-300";
            if (line.type === "system") color = "text-gray-400";
            
            return (
              <div key={idx} className={`${color} leading-relaxed break-words`}>
                {line.text}
              </div>
            );
          })}
          
          {/* Input Form Prompt */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-1.5 pt-1">
            <span className="text-indigo-400 flex-shrink-0">visitor@shalimar:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-emerald-400 focus:outline-none placeholder-emerald-950/60 font-mono text-xs"
              placeholder="Type help..."
              autoComplete="off"
              spellCheck="false"
            />
            {/* Blinking square cursor */}
            <span className="w-1.5 h-3.5 bg-emerald-500 cursor-blink flex-shrink-0" />
          </form>
          
          <div ref={consoleEndRef} />
        </div>
      </div>
    </div>
  );
};

export default TerminalConsole;
export { TerminalConsole };
