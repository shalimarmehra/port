"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { GiSkills } from "react-icons/gi";

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
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <FaReact className="text-teal-400" /> },
        { name: "Figma (UI/UX)", icon: <FaFigma className="text-purple-400" /> },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
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
      className="py-20 relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-3">
            <GiSkills />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl">
            A comprehensive overview of my technical stack, system tools, and development frameworks.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title}
              className={`glass-panel p-6 rounded-2xl border border-white/5 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${groupIdx * 150}ms` }}
            >
              <h3 className="text-base font-bold text-white mb-6 border-b border-white/5 pb-3 font-display">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.05] transition-all"
                  >
                    <div className="text-xl flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Metrics */}
        <div className="border-t border-white/5 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            
            {/* Metric 1 */}
            <div
              className={`glass-panel p-6 rounded-2xl text-center hover:border-indigo-500/30 transition-all duration-300 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <h4 className="text-4xl sm:text-5xl font-black font-display text-white mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                03+
              </h4>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Years of Experience
              </p>
            </div>

            {/* Metric 2 */}
            <div
              className={`glass-panel p-6 rounded-2xl text-center hover:border-indigo-500/30 transition-all duration-300 group ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h4 className="text-4xl sm:text-5xl font-black font-display text-white mb-2 bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                10+
              </h4>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Completed Deliveries
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
