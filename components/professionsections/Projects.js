"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaGithub, FaGlobe, FaSearch } from "react-icons/fa";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Dev Dossier Business Website",
      category: "Full-Stack Web App",
      description:
        "A premium business website crafted with Next.js and Tailwind CSS. Built with server-side rendering (SSR), optimized routing, and smooth page transitions for excellent speed and SEO. Features interactive landing pages and responsive contact features.",
      image: "/project1b.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "GSAP", "Vercel"],
      link: "https://devdossier.in/",
      github: "https://github.com/shalimarmehra",
    },
    {
      id: 2,
      title: "Personal Developer Portfolio",
      category: "Frontend Web App",
      description:
        "A sleek and highly responsive developer portfolio showcasing projects, credentials, and business insights. Optimized for smooth animations, custom loading transitions, and full responsive layout parameters.",
      image: "/project2.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "GSAP", "Analytics"],
      link: "https://shalimarmehra.vercel.app/",
      github: "https://github.com/shalimarmehra/port",
    },
    {
      id: 3,
      title: "24/7 Delivery Experts Logistics",
      category: "CMS Platform",
      description:
        "A robust logistics corporate platform built on WordPress and customized with Elementor Pro. Implements responsive landing sections, customized quote request forms, and detailed service timelines.",
      image: "/project3.jpg",
      tags: ["WordPress", "Elementor", "SEO", "Responsive UI"],
      link: "https://247deliveryexperts.com",
      github: "",
    },
    {
      id: 4,
      title: "The Lamen - News & Media Portal",
      category: "Publishing Platform",
      description:
        "A dynamic news platform utilizing advanced SEO optimization and custom content categories. Styled for rapid loading, responsive readability on mobile devices, and easy editorial management.",
      image: "/project4.jpg",
      tags: ["WordPress", "Elementor", "On-Page SEO", "Speed Optimization"],
      link: "https://thelamen.com/",
      github: "",
    },
    {
      id: 5,
      title: "VibeSync Social Networking Site",
      category: "PHP & Web Dev",
      description:
        "My first major web project. A custom social web application featuring user accounts, friend request pipelines, feed messaging, and basic backend integrations. Built to learn fundamental web pipelines.",
      image: "/project5.png",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/shalimarmehra/social-networking-site",
      github: "https://github.com/shalimarmehra/social-networking-site",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter tags list
  const filterTags = ["all", "Next.js", "React", "WordPress", "PHP", "Tailwind CSS", "MySQL"];

  // Filtered projects selector
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        02
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 font-sans mt-3 text-sm sm:text-base max-w-xl">
              Use search or filter tags to navigate through my web builds and client products.
            </p>
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:max-w-xs">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-warm-gray-200 rounded-xl text-ink placeholder-gray-400 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/10 text-sm transition-all font-medium"
            />
          </div>
        </div>

        {/* Filter Tags Row */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-tight uppercase border transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-crimson text-white border-crimson shadow-sm"
                  : "bg-white border-warm-gray-200 text-gray-500 hover:text-crimson hover:border-crimson"
              }`}
            >
              {tag === "all" ? "Show All" : tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white border border-warm-gray-200 rounded-2xl overflow-hidden group hover:border-crimson hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms, border-color 0.3s, box-shadow 0.3s`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-warm-gray-50" data-cursor-text="VIEW">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Light overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 to-white/0" />
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-cream text-crimson border border-warm-gray-200">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg font-bold text-ink mb-2 group-hover:text-crimson transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-gray-400 bg-cream border border-warm-gray-200 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-3 pt-4 border-t border-warm-gray-200">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-crimson hover:bg-crimson-dark px-4 py-2 rounded-lg transition-colors"
                        data-cursor-text="LIVE"
                      >
                        <FaGlobe className="text-xs" />
                        <span>Live Site</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-ink bg-cream border border-warm-gray-200 hover:border-crimson hover:text-crimson px-4 py-2 rounded-lg transition-all"
                        data-cursor-text="CODE"
                      >
                        <FaGithub className="text-xs" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white border border-warm-gray-200 rounded-2xl">
            <p className="text-gray-400 text-sm font-medium">
              No projects match your current search queries or tag selections.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("all");
              }}
              className="mt-4 px-5 py-2 bg-crimson hover:bg-crimson-dark text-white text-xs font-bold rounded-full transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;