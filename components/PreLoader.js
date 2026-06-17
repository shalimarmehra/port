import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-cream z-50">
      <div className="relative flex flex-col items-center gap-8">
        {/* SM Monogram */}
        <div className="font-serif text-6xl font-bold text-ink animate-pulse">
          SM
        </div>

        {/* Crimson loading bar */}
        <div className="w-48 h-[2px] bg-warm-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-crimson rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>

        {/* Loading text */}
        <div className="text-xs uppercase tracking-widest text-gray-400 font-sans">
          Loading Portfolio
        </div>
      </div>

      {/* Loading bar animation */}
      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 60%;
            margin-left: 20%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PreLoader;