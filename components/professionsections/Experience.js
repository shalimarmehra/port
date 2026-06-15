"use client";
import React, { useEffect, useState, useRef } from "react";
import { PiChartLineUp } from "react-icons/pi";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Founder & Lead Developer",
      company: "Dev Dossier",
      period: "July 2024 - Present",
      duration: "Active",
      description:
        "Founded and operate Dev Dossier, a comprehensive web development business. Lead a team of developers and designers to build high-quality custom web applications, establish direct client relations, project manage timelines, and enforce coding and design system best practices.",
      glow: "border-l-indigo-500",
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "July 2023 - May 2024",
      duration: "11 mos",
      description:
        "Designed and built tailored digital spaces for various local and global clients. Programmed websites using custom HTML, CSS, JavaScript, and CMS systems (WordPress/Elementor), and maintained operational standards for performance and security.",
      glow: "border-l-purple-500",
    },
    {
      id: 3,
      role: "Web Developer & Side Ventures",
      company: "Self-Initiated Projects",
      period: "February 2022 - February 2023",
      duration: "1 year",
      description:
        "Launched and operated blog websites, affiliate marketing landing pages, and comparison tools. Developed core skills in traffic generation, debugging, responsive layouts, and user experience analytics.",
      glow: "border-l-teal-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-3">
            <PiChartLineUp />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl">
            My professional timeline as an engineer, freelancer, and digital entrepreneur.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Timeline dot node */}
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#030712] border-2 border-indigo-500">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
              </span>

              {/* Experience Card */}
              <div className={`glass-panel p-6 rounded-2xl border-l-4 ${exp.glow} hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      {exp.period}
                    </span>
                    <span className="block text-[10px] text-gray-500 mt-1 uppercase font-bold">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
