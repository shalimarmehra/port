"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

const Skills = () => {
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

  const skillGroups = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-ink" /> },
        { name: "Tailwind CSS", icon: <FaReact className="text-teal-400" /> },
        { name: "Figma (UI/UX)", icon: <FaFigma className="text-purple-400" /> },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "REST APIs", icon: <FaNodeJs className="text-indigo-400" /> },
        { name: "MySQL / Postgre", icon: <SiMysql className="text-sky-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "JWT / OAuth", icon: <SiExpress className="text-rose-400" /> },
      ],
    },
    {
      title: "Tools & Operations",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
        { name: "WordPress / Elementor", icon: <FaWordpress className="text-blue-400" /> },
        { name: "SEO Optimization", icon: <FaFigma className="text-yellow-500" /> },
        { name: "VS Code / IDEs", icon: <SiNextdotjs className="text-sky-400" /> },
        { name: "Performance Audits", icon: <FaReact className="text-emerald-400" /> },
        { name: "Cloud Deployments", icon: <SiExpress className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        04
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">



        {/* Section Header */}
        <div className="mb-16 text-center md:text-left relative z-10">
          <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
            A comprehensive overview of my technical stack, system tools, and development frameworks.
          </p>
          <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title}
              className={`bg-white border border-warm-gray-200 rounded-2xl p-6 hover:border-crimson transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${groupIdx * 150}ms` }}
            >
              <h3 className="font-serif text-base font-bold text-ink border-b border-warm-gray-200 pb-3 mb-6">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-all"
                  >
                    <div className="text-xl flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Metrics */}
        <div className="border-t border-warm-gray-200 pt-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">

            {/* Metric 1 */}
            <div
              className={`bg-white border border-warm-gray-200 rounded-2xl p-6 text-center hover:border-crimson transition-all duration-500 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <h4 className="font-serif text-5xl font-black text-crimson mb-2 group-hover:scale-105 transition-transform duration-300">
                03+
              </h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                Years of Experience
              </p>
            </div>

            {/* Metric 2 */}
            <div
              className={`bg-white border border-warm-gray-200 rounded-2xl p-6 text-center hover:border-crimson transition-all duration-500 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h4 className="font-serif text-5xl font-black text-crimson mb-2 group-hover:scale-105 transition-transform duration-300">
                10+
              </h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                Completed Deliveries
              </p>
            </div>

          </div>
        </div>

        {/* Background Code Ornament */}
        <div className="absolute right-8 bottom-6 font-mono text-[9px] text-gray-400/30 select-none pointer-events-none hidden xl:block text-left leading-relaxed font-semibold">
          <p>const developer = &#123;</p>
          <p className="pl-4">name: &quot;Shalimar Mehra&quot;,</p>
          <p className="pl-4">role: &quot;Full-Stack Engineer&quot;,</p>
          <p className="pl-4">ventures: [&quot;Dev Dossier&quot;],</p>
          <p className="pl-4">skills: [&quot;React&quot;, &quot;Next.js&quot;, &quot;Node&quot;, &quot;SQL&quot;]</p>
          <p>&#125;;</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
