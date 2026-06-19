"use client";
import React, { useState, useEffect } from "react";
import { FaCode, FaPlay } from "react-icons/fa";

const Playground = () => {
  const [htmlCode, setHtmlCode] = useState(
`<div class="card">
  <div class="logo">✦</div>
  <h2>Interactive Element</h2>
  <p>Edit this code in real-time. Change colors, layouts, or text instantly!</p>
  <button>Click Me</button>
</div>`
  );

  const [cssCode, setCssCode] = useState(
`.card {
  background: var(--accent-primary, #C62828);
  color: white;
  padding: 2.5rem;
  border-radius: 16px;
  font-family: 'Geist', system-ui, sans-serif;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 300px;
  text-align: center;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 30px -10px rgba(198,40,40,0.4);
}

.logo {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

h2 { margin: 0 0 0.5rem 0; font-size: 1.5rem; }
p { font-size: 0.875rem; opacity: 0.9; line-height: 1.5; margin-bottom: 1.5rem; }

button {
  background: white;
  color: #C62828;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

button:hover { background: #f0f0f0; transform: scale(1.05); }`
  );

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>
              body { 
                margin: 0; 
                padding: 1.5rem; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                min-height: 100vh; 
                background: #FAF8F5; 
              }
              ${cssCode}
            </style>
          </head>
          <body>
            ${htmlCode}
          </body>
        </html>
      `);
    }, 250); 
    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode]);

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-ink text-white">
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-white/5 pointer-events-none select-none z-0" data-speed="-0.15">
        04
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Title Block */}
        <div className="mb-12 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-warm-gray-200 border border-white/10">
            <FaCode className="text-crimson" /> Sandbox Mode
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Live Code Playground
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl font-sans">
            A real-time IDE built directly into my portfolio. Edit the HTML and CSS below to see your changes render instantly.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-black/40 border border-white/10 rounded-2xl p-2 backdrop-blur-sm shadow-2xl">
          
          {/* Editors Container */}
          <div className="flex flex-col gap-2">
            {/* HTML Editor */}
            <div className="flex-1 bg-[#0c0f15] rounded-xl overflow-hidden border border-white/10 flex flex-col min-h-[200px]">
              <div className="bg-[#151a23] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HTML</span>
              </div>
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="flex-1 w-full bg-transparent text-rose-300 p-4 font-mono text-xs focus:outline-none resize-none leading-relaxed"
                spellCheck="false"
                data-cursor-text="EDIT"
              />
            </div>
            
            {/* CSS Editor */}
            <div className="flex-1 bg-[#0c0f15] rounded-xl overflow-hidden border border-white/10 flex flex-col min-h-[250px]">
              <div className="bg-[#151a23] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CSS</span>
              </div>
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="flex-1 w-full bg-transparent text-sky-300 p-4 font-mono text-xs focus:outline-none resize-none leading-relaxed"
                spellCheck="false"
                data-cursor-text="EDIT"
              />
            </div>
          </div>

          {/* Live Preview Output */}
          <div className="bg-white rounded-xl overflow-hidden border border-warm-gray-200 relative min-h-[400px] flex flex-col group">
            <div className="bg-warm-gray-100 px-4 py-2 border-b border-warm-gray-200 flex items-center gap-2">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="ml-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <FaPlay className="text-[8px] text-crimson animate-pulse" /> Live Preview
              </span>
            </div>
            <div className="flex-1 w-full h-full relative" data-cursor-text="OUTPUT">
               <iframe
                srcDoc={srcDoc}
                title="Live Sandbox"
                sandbox="allow-scripts allow-same-origin"
                className="w-full h-full absolute inset-0 bg-transparent"
                frameBorder="0"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Playground;
