"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaRocket,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearchDollar,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaBriefcase,
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DevDossierSection = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("web");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in header elements
      gsap.from(".devdossier-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate stat counters container
      gsap.from(".devdossier-stat-card", {
        scrollTrigger: {
          trigger: ".devdossier-stats-grid",
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const businessMetrics = [
    {
      value: "50+",
      label: "Projects Delivered",
      subtext: "Web, Mobile & SaaS Applications",
      icon: <FaRocket className="text-crimson text-xl" />,
    },
    {
      value: "99.9%",
      label: "Client Satisfaction",
      subtext: "High client retention rate",
      icon: <FaUsers className="text-crimson text-xl" />,
    },
    {
      value: "5+",
      label: "Core Service Pillars",
      subtext: "End-to-end digital solutions",
      icon: <FaBriefcase className="text-crimson text-xl" />,
    },
    {
      value: "<100ms",
      label: "Performance Benchmark",
      subtext: "Lightning fast user experiences",
      icon: <HiLightningBolt className="text-crimson text-xl" />,
    },
  ];

  const services = [
    {
      id: "web",
      title: "Full-Stack Web & SaaS Engineering",
      icon: <FaCode className="text-lg" />,
      shortDesc:
        "High-performance web apps built with Next.js, React, Node.js & modern cloud infrastructure.",
      features: [
        "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
        "Scalable REST & GraphQL API Architecture",
        "Headless CMS Integration (WordPress, Sanity, Strapi)",
        "Secure Authentication & Payment Gateway Integration",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Vercel",
      ],
    },
    {
      id: "mobile",
      title: "Custom Mobile & Enterprise Apps",
      icon: <FaMobileAlt className="text-lg" />,
      shortDesc:
        "Cross-platform mobile applications & bespoke software tailored to your business needs.",
      features: [
        "Native-feel React Native & Progressive Web App (PWA) solutions",
        "Real-time database synchronization & offline storage",
        "Push notifications & deep link integration",
        "Enterprise-grade security & encryption",
      ],
      techStack: ["React Native", "PWA", "Firebase", "PostgreSQL", "REST APIs"],
    },
    {
      id: "design",
      title: "UI/UX & Brand Design Systems",
      icon: <FaPaintBrush className="text-lg" />,
      shortDesc:
        "Captivating, modern interface design and reusable design systems built for conversion.",
      features: [
        "Custom Figma prototypes & interactive wireframes",
        "Responsive, accessible (WCAG) component design",
        "Micro-interactions & fluid GSAP/Framer motion animations",
        "Comprehensive brand style guides & UI asset packages",
      ],
      techStack: [
        "Figma",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
        "Design Tokens",
      ],
    },
    {
      id: "seo",
      title: "SEO & Speed Performance Optimization",
      icon: <FaSearchDollar className="text-lg" />,
      shortDesc:
        "Dominate search results and boost conversion with Core Web Vitals optimization.",
      features: [
        "Technical SEO audit & structured schema data",
        "95+ Lighthouse score optimization (LCP, CLS, INP)",
        "CDN caching strategy & image optimization pipelines",
        "Google Analytics 4 & Vercel Web Analytics setup",
      ],
      techStack: [
        "Core Web Vitals",
        "Schema.org",
        "Google Search Console",
        "GA4",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your business goals, target audience, and market landscape to define a tailored digital strategy.",
    },
    {
      number: "02",
      title: "Architecture & Design",
      desc: "Designing high-converting UI prototypes and modular software architecture built for scalability.",
    },
    {
      number: "03",
      title: "Agile Engineering",
      desc: "Writing clean, production-grade code with continuous testing, optimization, and transparent progress updates.",
    },
    {
      number: "04",
      title: "Deployment & Growth",
      desc: "Launching your product on fast cloud infrastructure with ongoing monitoring, maintenance, and support.",
    },
  ];

  const currentService =
    services.find((s) => s.id === activeTab) || services[0];

  return (
    <section
      ref={sectionRef}
      id="devdossier"
      className="py-24 relative overflow-hidden bg-cream/40 border-y border-warm-gray-200"
    >
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
        <span className="scroll-watermark block text-[140px] md:text-[220px] font-black uppercase text-warm-gray-200/50 tracking-tighter leading-none">
          DEVDOSSIER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="devdossier-animate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 border border-crimson/20 mb-4">
            <FaLaptopCode className="text-crimson text-xs" />
            <span className="text-xs font-bold uppercase tracking-widest text-crimson">
              Digital Studio & Business Showcase
            </span>
          </div>

          <h2 className="devdossier-animate text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-ink mb-6">
            Building High-Impact Digital Experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-crimson to-crimson-dark">
              DevDossier
            </span>
          </h2>

          <p className="devdossier-animate text-base sm:text-lg text-charcoal/80 leading-relaxed">
            As the founder of <strong>DevDossier</strong>, I partner with
            startup founders, agencies, and growing enterprises to craft custom
            web applications, scalable cloud solutions, and conversion-driven
            digital platforms.
          </p>

          {/* Action Buttons */}
          <div className="devdossier-animate mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://devdossier.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-crimson hover:bg-crimson-dark text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Visit DevDossier.in</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-warm-gray-100 text-ink border border-warm-gray-300 font-bold text-sm tracking-wide transition-all duration-300"
            >
              <span>Hire DevDossier</span>
              <FaArrowRight className="text-xs text-crimson" />
            </a>
          </div>
        </div>

        {/* Business Metrics Grid */}
        <div className="devdossier-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {businessMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="devdossier-stat-card p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-warm-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-crimson/10 flex items-center justify-center mb-3">
                {metric.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-ink mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-charcoal/60">{metric.subtext}</div>
            </div>
          ))}
        </div>

        {/* Services & Capabilities Interactive Section */}
        <div className="devdossier-animate bg-white rounded-3xl border border-warm-gray-200 p-6 sm:p-10 shadow-lg mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-warm-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-ink">
                DevDossier Core Capabilities
              </h3>
              <p className="text-sm text-charcoal/70 mt-1">
                Explore the technical solutions and business services provided
                by DevDossier.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeTab === s.id
                      ? "bg-crimson text-white shadow-sm"
                      : "bg-warm-gray-100 text-charcoal hover:bg-warm-gray-200"
                  }`}
                >
                  {s.icon}
                  <span>{s.title.split("&")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-warm-gray-100 text-crimson font-bold text-xs">
                {currentService.icon}
                <span>{currentService.title}</span>
              </div>

              <p className="text-base sm:text-lg font-medium text-ink leading-relaxed">
                {currentService.shortDesc}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                  Key Deliverables & Highlights:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-crimson text-sm mt-1 shrink-0" />
                      <span className="text-sm text-charcoal leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2">
                  Technology Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentService.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-cream text-ink border border-warm-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-ink via-charcoal to-ink p-6 text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full bg-crimson/20 blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
                      DEVDOSSIER.IN
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <h4 className="text-xl font-bold text-white leading-tight">
                    Ready to build your next product with DevDossier?
                  </h4>

                  <p className="text-xs text-warm-gray-300 leading-relaxed">
                    From technical architecture to final deployment, we ensure
                    your project is built with enterprise standards and modern
                    speed.
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs font-bold text-cream">
                      Custom Quotes & Estimates Available
                    </div>
                    <a
                      href="https://devdossier.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-crimson hover:bg-crimson-dark text-white text-xs font-bold transition-all"
                    >
                      <span>Explore</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="devdossier-animate mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-ink mb-3">
              The DevDossier Workflow
            </h3>
            <p className="text-sm text-charcoal/70">
              A structured, transparent engineering process to transform ideas
              into market-ready software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-white border border-warm-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl font-black text-crimson/30 group-hover:text-crimson transition-colors duration-300 mb-3">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold text-ink mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DevDossier Banner Call to Action */}
        <div className="devdossier-animate relative rounded-3xl bg-gradient-to-r from-crimson-dark via-crimson to-crimson p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Accelerate Your Tech Vision with DevDossier
              </h3>
              <p className="text-sm sm:text-base text-cream/90 font-medium">
                Looking to build a custom web app, revamp your agency website,
                or optimize your platform for maximum speed? Let&apos;s discuss your
                project today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="https://devdossier.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink hover:bg-cream font-bold text-sm shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Visit DevDossier.in</span>
                <FaExternalLinkAlt className="text-xs text-crimson" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black/30 hover:bg-black/40 text-white border border-white/20 font-bold text-sm transition-all duration-300"
              >
                <span>Get in Touch</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevDossierSection;
