"use client";
import React, { useEffect, useState, useRef } from "react";

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
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "July 2023 - May 2024",
      duration: "11 mos",
      description:
        "Designed and built tailored digital spaces for various local and global clients. Programmed websites using custom HTML, CSS, JavaScript, and CMS systems (WordPress/Elementor), and maintained operational standards for performance and security.",
    },
    {
      id: 3,
      role: "Web Developer & Side Ventures",
      company: "Self-Initiated Projects",
      period: "February 2022 - February 2023",
      duration: "1 year",
      description:
        "Launched and operated blog websites, affiliate marketing landing pages, and comparison tools. Developed core skills in traffic generation, debugging, responsive layouts, and user experience analytics.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 relative overflow-hidden"
    >
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        03
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">



        {/* Title Block */}
        <div className="mb-16 text-center md:text-left relative z-10">
          <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Professional Journey
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
            My professional timeline as an engineer, freelancer, and digital entrepreneur.
          </p>
          <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-crimson/20 pl-8 ml-4 space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Timeline dot node */}
              <span className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-crimson border-4 border-cream" />

              {/* Experience Card */}
              <div
                className={`bg-white border border-warm-gray-200 rounded-2xl p-6 hover:border-crimson transition-all duration-300 ${
                  idx === 0 ? "border-l-4 border-l-crimson" : "border-l-4 border-l-gray-300"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ink">
                      {exp.role}
                    </h3>
                    <p className="text-crimson font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right flex flex-col items-start sm:items-end gap-1">
                    <span className="inline-block bg-cream text-gray-600 text-xs px-3 py-1 rounded-full border border-warm-gray-200">
                      {exp.period}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
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
