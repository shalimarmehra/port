"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaFigma, FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMysql, SiMongodb } from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Engineering",
    accent: "#C62828",
    skills: [
      { name: "HTML5 / CSS3",      icon: <FaHtml5 className="text-orange-500" />,  level: 95 },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" />,      level: 90 },
      { name: "React.js",          icon: <FaReact className="text-cyan-400" />,     level: 88 },
      { name: "Next.js",           icon: <SiNextdotjs className="text-ink" />,      level: 85 },
      { name: "Tailwind CSS",      icon: <FaReact className="text-teal-400" />,     level: 90 },
      { name: "Figma (UI/UX)",     icon: <FaFigma className="text-purple-400" />,   level: 75 },
    ],
  },
  {
    title: "Backend & Systems",
    accent: "#0EA5E9",
    skills: [
      { name: "Node.js",          icon: <FaNodeJs className="text-green-500" />,   level: 80 },
      { name: "Express.js",       icon: <SiExpress className="text-gray-600" />,   level: 78 },
      { name: "REST APIs",        icon: <FaNodeJs className="text-indigo-400" />,  level: 85 },
      { name: "MySQL / Postgre",  icon: <SiMysql className="text-sky-500" />,      level: 75 },
      { name: "MongoDB",          icon: <SiMongodb className="text-emerald-500" />,level: 70 },
      { name: "JWT / OAuth",      icon: <SiExpress className="text-rose-400" />,   level: 72 },
    ],
  },
  {
    title: "Tools & Operations",
    accent: "#8B5CF6",
    skills: [
      { name: "Git & GitHub",           icon: <FaGitAlt className="text-red-500" />,        level: 92 },
      { name: "WordPress / Elementor",  icon: <FaWordpress className="text-blue-400" />,    level: 88 },
      { name: "SEO Optimization",       icon: <FaFigma className="text-yellow-500" />,       level: 80 },
      { name: "VS Code / IDEs",         icon: <SiNextdotjs className="text-sky-400" />,     level: 95 },
      { name: "Performance Audits",     icon: <FaReact className="text-emerald-400" />,     level: 78 },
      { name: "Cloud Deployments",      icon: <SiExpress className="text-purple-500" />,    level: 74 },
    ],
  },
];

const SkillBar = ({ name, icon, level, accent, visible, delay }) => (
  <div
    className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="text-sm text-gray-700 font-medium">{name}</span>
      </div>
      <span className="text-xs font-bold text-gray-400">{level}%</span>
    </div>
    <div className="h-1.5 w-full bg-warm-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: visible ? `${level}%` : "0%",
          background: accent,
          transitionDelay: `${delay + 200}ms`,
        }}
      />
    </div>
  </div>
);

const AnimatedCount = ({ value, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 1500; // milliseconds
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  // Format to ensure double digits if it's a small number
  const formattedCount = typeof count === "number" && count < 10 ? `0${count}` : count;
  return <>{formattedCount}{suffix}</>;
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Large section number (updated to 05) */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        05
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

        {/* Skills Cards Grid — each with animated progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title}
              className={`bg-white border border-warm-gray-200 rounded-2xl p-6 hover:border-crimson hover:shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${groupIdx * 150}ms` }}
            >
              {/* Group header with coloured accent */}
              <div className="flex items-center gap-2 border-b border-warm-gray-100 pb-4 mb-6">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ backgroundColor: group.accent }}
                />
                <h3 className="font-serif text-base font-bold text-ink">{group.title}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    accent={group.accent}
                    visible={isVisible}
                    delay={groupIdx * 150 + skillIdx * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Metrics */}
        <div className="border-t border-warm-gray-200 pt-12 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "3", suffix: "+", label: "Years Experience" },
              { value: "10", suffix: "+", label: "Deliveries" },
              { value: "18", suffix: "+", label: "Technologies" },
              { value: "100", suffix: "%", label: "Passion" },
            ].map((metric, i) => (
              <div
                key={metric.label}
                className={`bg-white border border-warm-gray-200 rounded-2xl p-6 hover:border-crimson transition-all duration-500 group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${450 + i * 100}ms` }}
              >
                <h4 className="font-serif text-4xl font-black text-crimson mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCount 
                    value={metric.value} 
                    suffix={metric.suffix} 
                    isVisible={isVisible} 
                  />
                </h4>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  {metric.label}
                </p>
              </div>
            ))}
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
