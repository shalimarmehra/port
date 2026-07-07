"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const testimonials = [
  {
    id: 1,
    name: "Arjun Kapoor",
    role: "Founder, TechFlow SaaS",
    avatar: "AK",
    color: "from-violet-500 to-violet-700",
    rating: 5,
    quote:
      "Shalimar completely transformed our product's frontend. The attention to detail, performance optimization, and clean code structure were exceptional. Our load times dropped by 60% and user retention improved massively. I'd recommend him without hesitation.",
    tag: "Web Development",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Co-founder, Bloom Digital Agency",
    avatar: "PS",
    color: "from-rose-500 to-rose-700",
    rating: 5,
    quote:
      "Working with Shalimar through Dev Dossier was one of the best decisions we made. He didn't just deliver code — he delivered a vision. The e-commerce platform he built handles thousands of daily users without a hiccup. Extremely professional.",
    tag: "E-Commerce",
  },
  {
    id: 3,
    name: "Daniel Chen",
    role: "Senior PM, Finova Corp",
    avatar: "DC",
    color: "from-sky-500 to-sky-700",
    rating: 5,
    quote:
      "Shalimar's ability to translate complex business requirements into elegant, scalable solutions is rare. He delivered our internal dashboard ahead of schedule and the team has been using it every day. Clean UI, fast API, zero bugs.",
    tag: "Enterprise Dashboard",
  },
  {
    id: 4,
    name: "Meera Nair",
    role: "Startup Founder & YouTuber",
    avatar: "MN",
    color: "from-emerald-500 to-emerald-700",
    rating: 5,
    quote:
      "I found Shalimar through his Dev Dossier tutorials and then hired him for my SaaS MVP. The tutorial quality alone shows his depth of knowledge. As a developer, he's even more impressive — empathetic, clear communicator, and a phenomenal engineer.",
    tag: "SaaS MVP",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "Product Manager, Elevate Solutions",
    avatar: "SJ",
    color: "from-amber-500 to-amber-700",
    rating: 5,
    quote:
      "Shalimar brought a unique mix of technical expertise and product sense. He was proactive in suggesting UI improvements that significantly enhanced our user onboarding experience. Brilliant developer to collaborate with.",
    tag: "Product Strategy",
  },
  {
    id: 6,
    name: "Vikram Malhotra",
    role: "CTO, FinTech Labs",
    avatar: "VM",
    color: "from-blue-500 to-blue-700",
    rating: 5,
    quote:
      "The integration went incredibly smoothly, and the custom APIs he built are blazing fast and secure. Shalimar is highly reliable, responsive, and keeps code quality at the absolute highest standard.",
    tag: "API Integration",
  },
  {
    id: 7,
    name: "Elena Rostova",
    role: "Lead UI/UX Designer, Creative Space",
    avatar: "ER",
    color: "from-purple-500 to-purple-700",
    rating: 5,
    quote:
      "As a designer, I'm extremely picky about pixel perfection. Shalimar translated our Figma layouts into flawless, responsive React components down to the single pixel. Absolute pleasure to work with.",
    tag: "UI Development",
  },
  {
    id: 8,
    name: "David Kim",
    role: "Director of Engineering, CloudCore",
    avatar: "DK",
    color: "from-cyan-500 to-cyan-700",
    rating: 5,
    quote:
      "Outstanding communication and delivery speed. Shalimar set up our Next.js frontend with robust TypeScript support and modern state management, laying down a solid architectural foundation for our scale.",
    tag: "Next.js Architecture",
  },
];

const TestimonialCard = ({ testimonial, visible, delay }) => (
  <div
    className={`bg-white border border-warm-gray-200 rounded-3xl p-8 hover:border-crimson hover:shadow-xl transition-all duration-700 group flex flex-col justify-between ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Quote icon */}
    <div>
      <div className="flex items-start justify-between mb-6">
        <FaQuoteLeft className="text-crimson/20 text-4xl" />
        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-cream border border-warm-gray-200 rounded-full text-gray-400">
          {testimonial.tag}
        </span>
      </div>

      {/* Star Rating */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-amber-400 text-xs" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-gray-600 text-sm leading-relaxed font-sans mb-8">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>

    {/* Author */}
    <div className="flex items-center gap-4 pt-6 border-t border-warm-gray-100">
      <div
        className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-black text-xs flex-shrink-0`}
      >
        {testimonial.avatar}
      </div>
      <div>
        <p className="font-serif text-sm font-bold text-ink">{testimonial.name}</p>
        <p className="text-xs text-gray-400 font-medium">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 relative overflow-hidden bg-cream"
    >
      {/* Watermark — between Pinterest (06) and Playground (07) this is 06.5 so use subtle star */}
      <div className="scroll-watermark absolute top-2 left-4 lg:top-4 lg:left-12 font-serif font-light text-[100px] sm:text-[140px] md:text-[180px] leading-none text-warm-gray-300 pointer-events-none select-none z-0" data-speed="-0.15">
        07
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-16 text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="cross-marker mb-4 block text-crimson text-lg">✦</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl font-sans">
            What clients and collaborators say about working with me and the quality of work I deliver.
          </p>
          <div className="editorial-divider mt-6 w-16 h-px bg-warm-gray-300" />
        </div>

        {/* Testimonials Grid — Show only 4 initially */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              visible={isVisible}
              delay={i * 150}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group px-8 py-3.5 bg-white border border-warm-gray-200 hover:border-crimson rounded-full text-sm font-serif font-bold text-ink hover:text-crimson transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <span>View All Testimonials</span>
            <span className="text-crimson transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { label: "100%", sub: "Client Satisfaction" },
            { label: "10+", sub: "Projects Delivered" },
            { label: "3+", sub: "Years of Excellence" },
            { label: "0", sub: "Missed Deadlines" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="text-center px-8 py-4 bg-white border border-warm-gray-200 rounded-2xl hover:border-crimson transition-colors group"
            >
              <p className="font-serif text-3xl font-black text-crimson group-hover:scale-110 transition-transform">
                {badge.label}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">
                {badge.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for All Testimonials */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-cream border border-warm-gray-200 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col max-h-[85vh] animate-reveal-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cut Button on Top Right */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full border border-warm-gray-200 hover:border-crimson bg-white text-gray-400 hover:text-crimson transition-all duration-300 hover:rotate-90 active:scale-95 z-10"
              aria-label="Close testimonials dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-6 border-b border-warm-gray-200 pb-4">
              <span className="cross-marker mb-1 block text-crimson text-sm">✦</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                All Testimonials
              </h3>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm font-sans">
                Full list of feedback from clients and collaborators.
              </p>
            </div>

            {/* Scrollable list of testimonials */}
            <div className="overflow-y-auto pr-2 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                {testimonials.map((t) => (
                  <TestimonialCard
                    key={t.id}
                    testimonial={t}
                    visible={true}
                    delay={0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
