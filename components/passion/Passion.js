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
      icon: <FaLaptopCode className="text-teal-600" />,
      tag: "Experimental Tech",
      link: "https://github.com/shalimarmehra",
    },
    {
      id: 3,
      category: "design",
      title: "UI/UX Sandbox",
      sub: "Figma Prototypes",
      desc: "Crafting modern, visually premium interfaces and mockups. Designing layouts with clean typography, responsive wireframes, and curated color palettes before coding them.",
      icon: <SiFigma className="text-purple-600" />,
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
      icon: <BsCameraFill className="text-amber-500" />,
      tag: "Life Balance",
      link: "https://instagram.com/shalimarmehra",
    },
    {
      id: 6,
      category: "coding",
      title: "Indie Hacking & Startups",
      sub: "Building Digital Products",
      desc: "Brainstorming and prototyping lightweight micro-SaaS ideas. Launching mini products, running metrics analyses, and testing user retention loops.",
      icon: <FaGlobe className="text-sky-600" />,
      tag: "Entrepreneurship",
      link: "https://devdossier.in/",
    },
  ];

  const filteredCards = activeFilter === "all" ? cards : cards.filter(card => card.category === activeFilter);

  return (
    <div className="relative py-12 max-w-6xl mx-auto px-6">

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
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
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-200 ${
              activeFilter === btn.id
                ? "bg-crimson text-white border-crimson shadow-sm"
                : "bg-white border-warm-gray-200 text-gray-500 hover:text-crimson hover:border-crimson"
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
            className="bg-white border border-warm-gray-200 p-8 rounded-3xl flex flex-col justify-between group hover:border-crimson hover:shadow-lg transition-all duration-300"
          >
            <div>
              {/* Header block */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-warm-gray-200 flex items-center justify-center text-xl group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="text-[10px] font-bold text-crimson uppercase tracking-widest bg-crimson/10 px-3 py-1 rounded-full">
                  {card.tag}
                </span>
              </div>

              {/* Title info */}
              <h3 className="font-serif text-xl font-bold text-ink mb-1 group-hover:text-crimson transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-gray-400 font-semibold mb-4 uppercase tracking-wider">
                {card.sub}
              </p>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed text-justify mb-8">
                {card.desc}
              </p>
            </div>

            {/* Link button */}
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink group-hover:text-crimson transition-colors pt-4 border-t border-warm-gray-200 w-full uppercase tracking-wider"
            >
              <span>Explore Passion</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Passion Footer Banner */}
      <div className="mt-20 text-center">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Always curious</span>
          <BsHeartFill className="text-rose-500 text-base animate-pulse" />
          <span>Building for the future.</span>
        </p>
      </div>
    </div>
  );
};

export default Passion;