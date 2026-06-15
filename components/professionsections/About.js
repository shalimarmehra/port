"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { BsYoutube, BsBriefcaseFill } from "react-icons/bs";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("story");

  const slideUpAnimation = {
    transform: inView ? "translateY(0)" : "translateY(40px)",
    opacity: inView ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const academics = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      school: "Indira Gandhi National Open University (IGNOU)",
      period: "June 2019 - June 2022",
      details: "Core Computing: Problem Solving, Programming (C++, Java, PHP), Systems Analysis, Database Management, Computer Networks, and Software Engineering.",
    },
    {
      degree: "Master Diploma in Computer Engineering",
      school: "Indian Institute of Computer Sciences",
      period: "Feb 2019 - Feb 2022",
      link: "https://drive.google.com/file/d/1gGsIUvuMkPGVkzxDRAnze4EzM4UyzGC6/view",
      details: "IT Tools, Web Designing & Publishing, C++ OOP, OS Fundamentals, Database Technologies, and custom PHP Web Development.",
    },
    {
      degree: "Class 12th (CBSE Board)",
      school: "Central Board of Secondary Education",
      period: "April 2018 - March 2019",
      details: "Commerce Specialization: Accountancy, Business Studies, Economics, Hindi, English, and Physical Education.",
    },
  ];

  const certifications = [
    {
      title: "React JS - Complete Guide for Frontend",
      issuer: "Udemy",
      date: "Oct 2023",
      credId: "UC-4e91caf7-c484-4e33-b412-db5185f9bfc1",
      link: "https://www.udemy.com/certificate/UC-4e91caf7-c484-4e33-b412-db5185f9bfc1/",
      details: "Front-end creation using React.js components, state management, hooks, ES6 standards, and responsive UI optimization.",
    },
    {
      title: "MySQL Database Development Mastery",
      issuer: "Udemy",
      date: "Feb 2023",
      credId: "UC-546b187e-c260-4d7a-8e07-3c5306f583cc",
      link: "https://www.udemy.com/certificate/UC-546b187e-c260-4d7a-8e07-3c5306f583cc/",
      details: "Relational database modeling, query writing, schema engineering, aggregates, tables relationships, and data exports.",
    },
    {
      title: "Developer Virtual Experience Program",
      issuer: "Accenture (via Forage)",
      date: "Feb 2022",
      credId: "XspMgC4Fw5zfHkvgy",
      link: "https://drive.google.com/file/d/1yzrxQuVdv5Znb_Fp5R65fRlqBn2BLAdq/view",
      details: "Technical requirement specification, cloud architecture design, code review, debugging algorithms, and UAT operations.",
    },
    {
      title: "Tata Consultancy Services (TCS iON Career Edge)",
      issuer: "Tata Consultancy Services",
      date: "Feb 2021",
      credId: "119854-20189486-1016",
      link: "https://drive.google.com/file/d/1JwCmlhpVbKettWO4t0oIvG9hy0dEZ5F4/view",
      details: "Business etiquette, soft skills, telephone etiquette, presentation skills, accounting fundamentals, and IT fundamentals.",
    },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref} style={slideUpAnimation}>
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-3">
            <FaBookOpen />
            <span>Profile Details</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            About Me
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl">
            My background, academic accomplishments, and credentials that drive my engineering philosophy.
          </p>
        </div>

        {/* Tab Switcher for Mobile */}
        <div className="flex md:hidden justify-center bg-gray-900/60 p-1.5 rounded-full border border-white/5 mb-8">
          <button
            onClick={() => setActiveTab("story")}
            className={`flex-1 text-center py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "story" ? "bg-indigo-600 text-white" : "text-gray-400"
            }`}
          >
            My Story
          </button>
          <button
            onClick={() => setActiveTab("credentials")}
            className={`flex-1 text-center py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "credentials" ? "bg-indigo-600 text-white" : "text-gray-400"
            }`}
          >
            Credentials
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Narrative Story (Visible on desktop or when active tab is story) */}
          <div className={`md:col-span-6 space-y-6 ${activeTab === "story" ? "block" : "hidden md:block"}`}>
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-white/5">
              
              {/* Bio Block */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-6 rounded bg-indigo-500" />
                  Who I Am
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                  Hello, I&apos;m <strong>Shalimar Mehra</strong>. I graduated with a Bachelor&apos;s degree in Computer Applications from <strong>IGNOU</strong>. My focus has always been bridging the gap between clean code architecture and elegant visual interface designs. Over the years, I&apos;ve completed advanced certifications in modern web frameworks and systems engineering to build a robust full-stack skill pipeline.
                </p>
              </div>

              {/* Business Block */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-6 rounded bg-purple-500" />
                  Professional Ventures
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                  Driven by an entrepreneurial spirit, I founded <strong>Dev Dossier</strong> to deliver web design, full-stack engineering, and digital support services. Running my own operations has taught me the real-world value of clear client communications, project timeline management, and robust web performance systems.
                </p>
              </div>

              {/* YouTube / Sharing Block */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-display">
                  <span className="w-1.5 h-6 rounded bg-rose-500" />
                  Knowledge Sharing
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                  I believe teaching is the best way to master a craft. I run two active YouTube channels:
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href="https://youtube.com/@shalimarmehra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-rose-500/30 hover:bg-rose-500/5 transition-all group"
                  >
                    <BsYoutube className="text-2xl text-rose-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Shalimar Mehra (Personal Channel)</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Vlogs, event highlights, and tech community insights.</p>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com/@shalimarmehra" /* Dev Dossier link placeholder */
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                  >
                    <BsYoutube className="text-2xl text-rose-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Dev Dossier (Business Channel)</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Coding tutorials, framework reviews, and digital system walkthroughs.</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Credentials & Education (Visible on desktop or when active tab is credentials) */}
          <div className={`md:col-span-6 space-y-8 ${activeTab === "credentials" ? "block" : "hidden md:block"}`}>
            
            {/* Academics Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display mb-4">
                <FaGraduationCap className="text-indigo-400 text-xl" />
                Education Achievements
              </h3>
              
              <div className="space-y-4">
                {academics.map((acad) => (
                  <div
                    key={acad.degree}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                        {acad.degree}
                      </h4>
                      <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/15 flex-shrink-0">
                        {acad.period}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-400 font-medium mb-2">{acad.school}</p>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed text-justify">{acad.details}</p>
                    {acad.link && (
                      <a
                        href={acad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 mt-3"
                      >
                        View Diploma <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display mb-4">
                <FaCertificate className="text-purple-400 text-xl" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/15 flex-shrink-0">
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400 mb-2.5">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>ID: <strong className="text-gray-300 font-semibold">{cert.credId}</strong></span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed text-justify">{cert.details}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 mt-3"
                    >
                      Verify Credential <FaExternalLinkAlt className="text-[8px]" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
