import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#030712] z-50">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative flex flex-col items-center gap-6">
        {/* Pulsing Dots Loader */}
        <div className="flex space-x-3 items-center justify-center h-16">
          <div className="w-3.5 h-3.5 bg-indigo-500 rounded-full animate-bounce shadow-[0_0_12px_rgba(99,102,241,0.6)]" style={{ animationDelay: "0s" }} />
          <div className="w-3.5 h-3.5 bg-purple-500 rounded-full animate-bounce shadow-[0_0_12px_rgba(168,85,247,0.6)]" style={{ animationDelay: "0.2s" }} />
          <div className="w-3.5 h-3.5 bg-teal-400 rounded-full animate-bounce shadow-[0_0_12px_rgba(20,184,166,0.6)]" style={{ animationDelay: "0.4s" }} />
        </div>
        
        {/* Loading text */}
        <div className="text-gray-400 font-display font-medium text-sm tracking-widest uppercase animate-pulse">
          Loading Shalimar&apos;s Portfolio
        </div>
      </div>
    </div>
  );
};

export default PreLoader;