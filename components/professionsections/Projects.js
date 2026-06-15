"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
      tags: ["WordPress", "Elementor Pro", "SEO", "Responsive UI"],
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

  return (
    <section id="projects" className="py-20 relative">
      {/* Background soft glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-3">
            <PiProjectorScreenFill />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl">
            A showcase of web applications, custom designs, and professional client solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover flex flex-col rounded-2xl overflow-hidden group transition-all duration-300 opacity-0 translate-y-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 150}ms, border-color 0.3s, box-shadow 0.3s`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-900 border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-indigo-300 border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1 text-justify">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-lg transition-colors shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/30"
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
                      className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-lg transition-all"
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
      </div>
    </section>
  );
};

export default Projects;