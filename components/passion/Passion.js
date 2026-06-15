"use client";
import React, { useState } from "react";
import { BsYoutube, BsGearFill, BsCameraFill, BsHeartFill } from "react-icons/bs";
import { FaLaptopCode, FaGlobe, FaYoutube } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const Passion = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const cards = [
    {
      id: 1,
      category: "videos",
      title: "Dev Dossier Channel",
      sub: "Web Development Education",
      desc: "Creating rich web development tutorials covering React, Next.js, and CSS architectures. Sharing resources, reviewing tools, and teaching foundational principles to aspiring engineers.",
      icon: <FaYoutube className="text-rose-500" />,
      tag: "YouTube Business",
      link: "https://youtube.com/@shalimarmehra",
    },
    {
      id: 2,
      category: "coding",
      title: "AI API Integrations",
      sub: "Creative Sandbox",
      desc: "Developing side projects exploring generative AI pipelines, custom API endpoints, and serverless architectures. Playing with automated workflows and language model scripts.",
      icon: <FaLaptopCode className="text-teal-400" />,
      tag: "Experimental Tech",
      link: "https://github.com/shalimarmehra",
    },
    {
      id: 3,
      category: "design",
      title: "UI/UX Sandbox",
      sub: "Figma Prototypes",
      desc: "Crafting modern, visually premium interfaces and mockups. Designing layouts with glassmorphism, responsive wireframes, and curated color palettes before coding them.",
      icon: <SiFigma className="text-purple-400" />,
      tag: "Figma Designs",
      link: "https://www.linkedin.com/in/shalimarmehra/",
    },
    {
      id: 4,
      category: "videos",
      title: "Personal Vlogs & Events",
      sub: "Life Journey & Event Coverage",
      desc: "Creating occasional video stories and event summaries on my personal YouTube channel. Sharing vlogs that capture life experiences, personal thoughts, and creative journeys.",
      icon: <BsYoutube className="text-rose-500" />,
      tag: "YouTube Vlogs",
      link: "https://youtube.com/@shalimarmehra",
    },
    {
      id: 5,
      category: "hobbies",
      title: "Photography & Travel",
      sub: "Capturing Perspectives",
      desc: "Exploring new cities, scaling mountain trails, and capturing cinematic frames. Finding balance in nature to fuel creativity and maintain fresh perspective for technical design.",
      icon: <BsCameraFill className="text-yellow-400" />,
      tag: "Life Balance",
      link: "https://instagram.com/shalimarmehra",
    },
    {
      id: 6,
      category: "coding",
      title: "Indie Hacking & Startups",
      sub: "Building Digital Products",
      desc: "Brainstorming and prototyping lightweight micro-SaaS ideas. Launching mini products, running metrics analyses, and testing user retention loops.",
      icon: <FaGlobe className="text-sky-400" />,
      tag: "Entrepreneurship",
      link: "https://devdossier.in/",
    },
  ];

  const filteredCards = activeFilter === "all" ? cards : cards.filter(card => card.category === activeFilter);

  return (
    <div className="relative py-4">
      {/* Background ambient glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 h-90 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {[
          { id: "all", label: "Show All" },
          { id: "videos", label: "Video Channels" },
          { id: "coding", label: "Creative Dev" },
          { id: "design", label: "UI/UX Design" },
          { id: "hobbies", label: "Hobbies & Balance" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-tight uppercase border transition-all ${
              activeFilter === btn.id
                ? "bg-white text-black border-white shadow-md"
                : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid of Passions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/5 flex flex-col justify-between group transition-all duration-300"
          >
            <div>
              {/* Header block */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/15">
                  {card.tag}
                </span>
              </div>

              {/* Title info */}
              <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-indigo-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 font-semibold mb-3">
                {card.sub}
              </p>
              
              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify mb-6">
                {card.desc}
              </p>
            </div>

            {/* Link button */}
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-indigo-400 transition-colors pt-3 border-t border-white/5 w-full"
            >
              <span>Explore Passion</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Passion Footer Banner */}
      <div className="mt-16 text-center">
        <p className="text-xs text-gray-500 font-semibold flex items-center justify-center gap-1.5">
          <span>Always curious</span>
          <BsHeartFill className="text-rose-500 text-[10px] animate-pulse" />
          <span>Building for the future.</span>
        </p>
      </div>
    </div>
  );
};

export default Passion;