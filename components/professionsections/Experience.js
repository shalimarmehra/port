"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".exp-card");
    
    // Animate the line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top center",
            end: "bottom center",
            scrub: 1.5, // Smooth scrubbing
          },
        }
      );
    }

    // Animate cards popping in
    cards.forEach((card, i) => {
      // Find the dot inside the card
      const dot = card.querySelector('.timeline-dot');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
      
      tl.fromTo(dot, 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      )
      .fromTo(card.querySelector('.exp-card-body'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
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
    <section ref={sectionRef} id="experience" className="py-24 relative overflow-hidden">
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        04
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
        <div className="timeline-container relative pl-8 ml-4 space-y-12 pb-10">
          {/* Static Background Line */}
          <div className="absolute left-[-1px] top-4 bottom-0 w-[2px] bg-crimson/10 rounded-full" />
          
          {/* Animated Scroll Line */}
          <div 
            ref={lineRef} 
            className="absolute left-[-1px] top-4 bottom-0 w-[2px] bg-crimson origin-top rounded-full z-10" 
          />

          {experiences.map((exp, idx) => (
            <div key={exp.id} className="exp-card relative">
              {/* Timeline dot node */}
              <span className="timeline-dot absolute -left-[41px] top-3 w-4 h-4 rounded-full bg-crimson border-4 border-cream shadow-sm z-20" />

              {/* Experience Card */}
              <div className={`exp-card-body bg-white border border-warm-gray-200 rounded-2xl p-6 hover:border-crimson transition-colors duration-300 ${idx === 0 ? "border-l-4 border-l-crimson shadow-md" : "border-l-4 border-l-gray-300 hover:shadow-md"}`}>
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
