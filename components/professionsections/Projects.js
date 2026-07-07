"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

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

  const filterTags = ["all", "Next.js", "React", "WordPress", "PHP", "Tailwind CSS", "MySQL"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Large section watermark */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        02
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Block & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
              Selected Works
            </h2>
            <p className="text-gray-500 font-sans mt-3 text-sm sm:text-base max-w-xl">
              Typographic showcase of web systems, client products, and custom builds.
            </p>
          </div>

          {/* Minimal Search Bar */}
          <div className="relative w-full md:max-w-xs flex items-center border-b border-warm-gray-200 focus-within:border-crimson transition-colors py-1">
            <FaSearch className="text-gray-400 text-xs mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search builds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-ink placeholder-gray-400 focus:outline-none text-sm font-medium"
            />
          </div>
        </div>

        {/* Minimal Underline Filter Tags */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-16 border-b border-warm-gray-100 pb-4">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-[10px] tracking-[0.25em] font-bold uppercase transition-all duration-300 relative py-1 ${
                selectedTag === tag
                  ? "text-crimson font-black"
                  : "text-gray-400 hover:text-ink"
              }`}
            >
              {tag === "all" ? "Show All" : tag}
              {selectedTag === tag && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-crimson" />
              )}
            </button>
          ))}
        </div>

        {/* Minimal Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group flex flex-col transition-all duration-500"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms`,
                }}
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-warm-gray-50 mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Category Label */}
                  <span className="absolute top-4 right-4 text-[9px] uppercase font-bold tracking-[0.15em] px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-ink shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-crimson transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-gray-300">
                      0{project.id}
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack dot list */}
                  <div className="flex flex-wrap items-center gap-2 mb-6 text-[10px] sm:text-xs font-semibold text-gray-400 font-mono">
                    {project.tags.join("  •  ")}
                  </div>

                  {/* Premium Action Links */}
                  <div className="flex items-center gap-6 pt-4 border-t border-warm-gray-100">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink hover:text-crimson transition-colors group/link"
                      >
                        <span>Live Site</span>
                        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-ink transition-colors group/link"
                      >
                        <span>Code</span>
                        <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white border border-warm-gray-200/60 rounded-2xl">
            <p className="text-gray-400 text-sm font-medium">
              No builds found matching your search.
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