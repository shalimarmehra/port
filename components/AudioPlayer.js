"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaMusic } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Note: Make sure to place a relaxing ambient.mp3 file in your public/audio/ folder!
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/ambient.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const togglePlay = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => {
        console.warn("Audio play failed. Make sure /public/audio/ambient.mp3 exists.", e);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="fixed bottom-24 right-6 z-40 flex items-center justify-end"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hover Tooltip */}
      <div 
        className={`absolute right-16 bg-ink text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded whitespace-nowrap pointer-events-none transition-all duration-300 origin-right ${isHovering ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-2'}`}
      >
        {isPlaying ? 'Focus Mode Active' : 'Enter Focus Mode'}
      </div>
      
      {/* Floating Button */}
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center w-12 h-12 rounded-full border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 group relative ${isPlaying ? 'bg-crimson text-white border-crimson' : 'bg-white text-gray-500 border-warm-gray-200 hover:text-crimson hover:border-crimson'}`}
        aria-label="Toggle Ambient Audio"
        data-cursor-text={isPlaying ? "PAUSE" : "MUSIC"}
      >
        {isPlaying ? (
          <div className="flex gap-[2px] items-center justify-center h-4">
            <span className="w-1 bg-white h-full animate-[pulse_1s_infinite_0ms]" />
            <span className="w-1 bg-white h-2/3 animate-[pulse_1s_infinite_200ms]" />
            <span className="w-1 bg-white h-4/5 animate-[pulse_1s_infinite_400ms]" />
          </div>
        ) : (
          <FaMusic className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
