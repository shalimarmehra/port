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
    <section id="about" className="py-24 bg-transparent relative overflow-hidden" ref={ref} style={slideUpAnimation}>
      {/* Large section number */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        09
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            About Me
          </h2>
          <p className="text-gray-500 font-sans mt-3 text-sm sm:text-base max-w-xl">
            My background, academic accomplishments, and credentials that drive my engineering philosophy.
          </p>
        </div>

        {/* Tab Switcher for Mobile */}
        <div className="flex md:hidden justify-center bg-white p-1.5 rounded-full border border-warm-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("story")}
            className={`flex-1 text-center py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "story" ? "bg-crimson text-white" : "text-gray-400"
            }`}
          >
            My Story
          </button>
          <button
            onClick={() => setActiveTab("credentials")}
            className={`flex-1 text-center py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "credentials" ? "bg-crimson text-white" : "text-gray-400"
            }`}
          >
            Credentials
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Narrative Story (Visible on desktop or when active tab is story) */}
          <div className={`md:col-span-6 space-y-6 ${activeTab === "story" ? "block" : "hidden md:block"}`}>
            <div className="bg-white p-6 sm:p-8 rounded-3xl space-y-6 border border-warm-gray-200">
              {/* Stylized Profile Card (inspired by cyclorama cover layout) */}
              <div className="relative font-sans border-b border-warm-gray-100 pb-8 mb-6">
                {/* Horizontal line intersecting with lowercase 'profile' */}
                <div className="relative flex items-center my-6">
                  <div className="flex-grow border-t border-ink opacity-20"></div>
                  <span className="mx-4 font-sans font-black text-2xl tracking-tighter text-ink lowercase bg-white px-2 leading-none">
                    profile
                  </span>
                  <div className="flex-grow border-t border-ink opacity-20"></div>
                </div>

                {/* Typewriter-style metadata rows */}
                <div className="space-y-2 text-xs text-gray-500 font-mono tracking-tight max-w-sm">
                  <div className="flex justify-between border-b border-warm-gray-100 pb-1">
                    <span className="font-semibold text-gray-400">First name:</span>
                    <span className="text-ink font-bold">Shalimar</span>
                  </div>
                  <div className="flex justify-between border-b border-warm-gray-100 pb-1">
                    <span className="font-semibold text-gray-400">Last name:</span>
                    <span className="text-ink font-bold">Mehra</span>
                  </div>
                  <div className="flex justify-between border-b border-warm-gray-100 pb-1">
                    <span className="font-semibold text-gray-400">Profession:</span>
                    <span className="text-ink font-bold">Full-Stack Developer</span>
                  </div>
                  <div className="flex justify-between border-b border-warm-gray-100 pb-1">
                    <span className="font-semibold text-gray-400">Location:</span>
                    <span className="text-ink font-medium">New Delhi, India</span>
                  </div>
                  <div className="flex justify-between border-b border-warm-gray-100 pb-1">
                    <span className="font-semibold text-gray-400">Email:</span>
                    <a 
                      href="mailto:contact@shalimarmehra.com" 
                      className="text-crimson font-medium hover:underline transition-colors"
                      data-cursor-text="MAIL"
                    >
                      contact@shalimarmehra.com
                    </a>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="font-semibold text-gray-400">Telephone:</span>
                    <a 
                      href="tel:+919560362339" 
                      className="text-ink font-medium hover:underline transition-colors"
                      data-cursor-text="CALL"
                    >
                      +91 95603 62339
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Block */}
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded bg-crimson" />
                  Who I Am
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  Hello, I&apos;m <strong className="text-ink">Shalimar Mehra</strong>. I graduated with a Bachelor&apos;s degree in Computer Applications from <strong className="text-ink">IGNOU</strong>. My focus has always been bridging the gap between clean code architecture and elegant visual interface designs. Over the years, I&apos;ve completed advanced certifications in modern web frameworks and systems engineering to build a robust full-stack skill pipeline.
                </p>
              </div>

              {/* Business Block */}
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded bg-amber-500" />
                  Professional Ventures
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  Driven by an entrepreneurial spirit, I founded <strong className="text-ink">Dev Dossier</strong> to deliver web design, full-stack engineering, and digital support services. Running my own operations has taught me the real-world value of clear client communications, project timeline management, and robust web performance systems.
                </p>
              </div>

              {/* YouTube / Sharing Block */}
              <div>
                <h3 className="font-serif text-lg font-bold text-ink mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded bg-rose-500" />
                  Knowledge Sharing
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  I believe teaching is the best way to master a craft. I run two active YouTube channels:
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href="https://youtube.com/@shalimarmehra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-cream border border-warm-gray-200 hover:border-crimson transition-all group"
                    data-cursor-text="WATCH"
                  >
                    <BsYoutube className="text-2xl text-rose-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-sm font-bold text-ink">Shalimar Mehra (Personal Channel)</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Vlogs, event highlights, and tech community insights.</p>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com/@shalimarmehra" /* Dev Dossier link placeholder */
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-cream border border-warm-gray-200 hover:border-crimson transition-all group"
                    data-cursor-text="WATCH"
                  >
                    <BsYoutube className="text-2xl text-rose-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-sm font-bold text-ink">Dev Dossier (Business Channel)</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Coding tutorials, framework reviews, and digital system walkthroughs.</p>
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
              <h3 className="font-serif text-lg font-bold text-ink flex items-center gap-2 mb-4">
                <FaGraduationCap className="text-ink text-xl" />
                Education Achievements
              </h3>
              
              <div className="space-y-4">
                {academics.map((acad) => (
                  <div
                    key={acad.degree}
                    className="p-5 rounded-2xl bg-white border border-warm-gray-200 hover:border-crimson transition-all"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="font-serif text-sm font-bold text-ink">
                        {acad.degree}
                      </h4>
                      <span className="text-[10px] font-semibold text-gray-600 bg-cream border border-warm-gray-200 px-2 py-0.5 rounded-full flex-shrink-0">
                        {acad.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium mb-2">{acad.school}</p>
                    <p className="text-xs text-gray-400 leading-relaxed text-justify">{acad.details}</p>
                    {acad.link && (
                      <a
                        href={acad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-crimson hover:text-crimson-dark mt-3 transition-colors"
                        data-cursor-text="VIEW"
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
              <h3 className="font-serif text-lg font-bold text-ink flex items-center gap-2 mb-4">
                <FaCertificate className="text-ink text-xl" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-5 rounded-2xl bg-white border border-warm-gray-200 hover:border-crimson transition-all"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="font-serif text-sm font-bold text-ink">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-gray-600 bg-cream border border-warm-gray-200 px-2.5 py-0.5 rounded-full flex-shrink-0">
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400 mb-2.5">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>ID: <strong className="text-gray-400 font-semibold">{cert.credId}</strong></span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed text-justify">{cert.details}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-crimson hover:text-crimson-dark mt-3 transition-colors"
                      data-cursor-text="VERIFY"
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
