"use client";
import React, { useState } from "react";
import {
  BsYoutube,
  BsCameraFill,
  BsHeartFill,
  BsController,
  BsCameraVideo,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaLaptopCode, FaGlobe, FaYoutube, FaChurch, FaCross, FaVideo, FaTicketAlt, FaUsers, FaPray } from "react-icons/fa";
import { SiFigma, SiTwitch, SiAdobepremierepro } from "react-icons/si";
import { MdSportsEsports, MdEventAvailable } from "react-icons/md";
import { GiFilmProjector } from "react-icons/gi";

/* ─── Section Header ─────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="mb-10">
    <p className="text-[10px] font-bold text-crimson uppercase tracking-[0.25em] mb-2">{eyebrow}</p>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-2">{title}</h2>
    {subtitle && (
      <p className="text-sm text-gray-400 font-medium max-w-xl leading-relaxed">{subtitle}</p>
    )}
    <div className="mt-4 h-px w-16 bg-crimson/40 rounded-full" />
  </div>
);

/* ─── Passion Card ───────────────────────────────────────────── */
const PassionCard = ({ card }) => (
  <div
    className="bg-white border border-warm-gray-200 p-8 rounded-3xl flex flex-col justify-between group hover:border-crimson hover:shadow-lg transition-all duration-300"
  >
    <div>
      {/* Header block */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-cream border border-warm-gray-200 flex items-center justify-center text-xl group-hover:scale-105 transition-transform duration-300">
          {card.icon}
        </div>
        <span className="text-[10px] font-bold text-crimson uppercase tracking-widest bg-crimson/10 px-3 py-1 rounded-full">
          {card.tag}
        </span>
      </div>

      {/* Title info */}
      <h3 className="font-serif text-xl font-bold text-ink mb-1 group-hover:text-crimson transition-colors">
        {card.title}
      </h3>
      <p className="text-xs text-gray-400 font-semibold mb-4 uppercase tracking-wider">
        {card.sub}
      </p>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed text-justify mb-8">
        {card.desc}
      </p>
    </div>

    {/* Link button */}
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink group-hover:text-crimson transition-colors pt-4 border-t border-warm-gray-200 w-full uppercase tracking-wider"
    >
      <span>Explore Passion</span>
      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>
);

/* ─── Filter Pill ────────────────────────────────────────────── */
const FilterBtn = ({ id, label, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-200 ${
      active
        ? "bg-crimson text-white border-crimson shadow-sm"
        : "bg-white border-warm-gray-200 text-gray-500 hover:text-crimson hover:border-crimson"
    }`}
  >
    {label}
  </button>
);

/* ─── Data ───────────────────────────────────────────────────── */
const sections = [
  /* ── Creative Content & Video ── */
  {
    id: "content",
    eyebrow: "01 — Creative Content",
    title: "Video & Content Creation",
    subtitle:
      "From scripted tutorials to cinematic storytelling — I live behind and in front of the camera.",
    filters: [
      { id: "all", label: "Show All" },
      { id: "youtube", label: "YouTube" },
      { id: "videography", label: "Videography" },
    ],
    cards: [
      {
        id: 1,
        category: "youtube",
        title: "Dev Dossier Channel",
        sub: "Web Development Education",
        desc: "Creating rich web development tutorials covering React, Next.js, and CSS architectures. Sharing resources, reviewing tools, and teaching foundational principles to aspiring engineers.",
        icon: <FaYoutube className="text-rose-500" />,
        tag: "YouTube Business",
        link: "https://youtube.com/@shalimarmehra",
      },
      {
        id: 2,
        category: "youtube",
        title: "Personal Vlogs & Events",
        sub: "Life Journey & Event Coverage",
        desc: "Creating occasional video stories and event summaries on my personal YouTube channel. Sharing vlogs that capture life experiences, personal thoughts, and creative journeys.",
        icon: <BsYoutube className="text-rose-500" />,
        tag: "YouTube Vlogs",
        link: "https://youtube.com/@shalimarmehra",
      },
      {
        id: 3,
        category: "videography",
        title: "Cinematic Videography",
        sub: "Short Films & Visual Stories",
        desc: "Crafting cinematic short films and visual narratives — from pre-production scripting and storyboarding to color grading and final delivery. Inspired by natural light, human emotion, and compelling composition.",
        icon: <GiFilmProjector className="text-orange-500" />,
        tag: "Filmmaker",
        link: "https://instagram.com/shalimarmehra",
      },

    ],
  },

  /* ── Church Media ── */
  {
    id: "church",
    eyebrow: "02 — Church & Community",
    title: "Church Media Team",
    subtitle:
      "Part of the church media team — operating camera during live services and occasionally helping with the sound console.",
    filters: [
      { id: "all", label: "Show All" },
      { id: "camera", label: "Camera" },
      { id: "console", label: "Console" },
    ],
    cards: [
      {
        id: 5,
        category: "camera",
        title: "Live Service Camera Op",
        sub: "Sunday Services & Events",
        desc: "Operating the camera during live Sunday services — framing worship moments, sermon sequences, and congregation shots. Focused on capturing what's happening on stage in a way that feels present and purposeful.",
        icon: <FaChurch className="text-indigo-500" />,
        tag: "Camera Op",
        link: "#",
      },
      {
        id: 6,
        category: "camera",
        title: "Event & Testimony Filming",
        sub: "Church Moments on Camera",
        desc: "Filming special church events, testimonies, and highlight moments with intentional composition. Whether it's a baptism, youth event, or a powerful testimony — I'm behind the lens making it count.",
        icon: <BsCameraVideo className="text-violet-500" />,
        tag: "Event Filming",
        link: "#",
      },
      {
        id: 7,
        category: "console",
        title: "Console Assistance",
        sub: "Audio Support — Learning the Board",
        desc: "Occasionally stepping in to help with the sound console during services. Still learning the ropes — basic audio routing, monitor levels, and mic management. A growing area of interest alongside camera work.",
        icon: <BsMusicNoteBeamed className="text-teal-500" />,
        tag: "Sound Console",
        link: "#",
      },
    ],
  },

  /* ── Gaming ── */
  {
    id: "gaming",
    eyebrow: "03 — Gaming & Esports",
    title: "Gaming & Interactive Play",
    subtitle:
      "From competitive strategy to casual exploration — gaming sharpens focus, problem-solving, and creativity.",
    filters: [
      { id: "all", label: "Show All" },
      { id: "competitive", label: "Competitive" },
      { id: "casual", label: "Casual & Story" },
    ],
    cards: [
      {
        id: 9,
        category: "competitive",
        title: "Competitive Strategy Games",
        sub: "Ranked & Team Play",
        desc: "Competing in ranked strategy and team-based titles. Gaming sharpens quick decision-making, team communication, and adaptability under pressure — skills that carry into every project.",
        icon: <MdSportsEsports className="text-emerald-500" />,
        tag: "Esports",
        link: "#",
      },
      {
        id: 10,
        category: "casual",
        title: "Story & Adventure Games",
        sub: "Narrative Exploration",
        desc: "Immersing in narrative-driven adventure games and open-world RPGs. Appreciating the craft behind game design, world-building, and interactive storytelling — fuel for my own creative work.",
        icon: <BsController className="text-blue-500" />,
        tag: "Story-Driven",
        link: "#",
      },
    ],
  },

  /* ── Creative Dev & Design ── */
  {
    id: "creative",
    eyebrow: "04 — Creative Development",
    title: "Design, Code & Side Projects",
    subtitle:
      "Where technology meets creativity — experimental projects, UI craft, and entrepreneurial exploration.",
    filters: [
      { id: "all", label: "Show All" },
      { id: "coding", label: "Creative Dev" },
      { id: "design", label: "UI/UX Design" },
      { id: "hobbies", label: "Hobbies" },
    ],
    cards: [
      {
        id: 11,
        category: "coding",
        title: "AI API Integrations",
        sub: "Creative Sandbox",
        desc: "Developing side projects exploring generative AI pipelines, custom API endpoints, and serverless architectures. Playing with automated workflows and language model scripts.",
        icon: <FaLaptopCode className="text-teal-600" />,
        tag: "Experimental Tech",
        link: "https://github.com/shalimarmehra",
      },
      {
        id: 12,
        category: "design",
        title: "UI/UX Sandbox",
        sub: "Figma Prototypes",
        desc: "Crafting modern, visually premium interfaces and mockups. Designing layouts with clean typography, responsive wireframes, and curated color palettes before coding them.",
        icon: <SiFigma className="text-purple-600" />,
        tag: "Figma Designs",
        link: "https://www.linkedin.com/in/shalimarmehra/",
      },
      {
        id: 13,
        category: "hobbies",
        title: "Photography & Travel",
        sub: "Capturing Perspectives",
        desc: "Exploring new cities, scaling mountain trails, and capturing cinematic frames. Finding balance in nature to fuel creativity and maintain fresh perspective for technical design.",
        icon: <BsCameraFill className="text-amber-500" />,
        tag: "Life Balance",
        link: "https://instagram.com/shalimarmehra",
      },
      {
        id: 14,
        category: "coding",
        title: "Indie Hacking & Startups",
        sub: "Building Digital Products",
        desc: "Brainstorming and prototyping lightweight micro-SaaS ideas. Launching mini products, running metrics analyses, and testing user retention loops.",
        icon: <FaGlobe className="text-sky-600" />,
        tag: "Entrepreneurship",
        link: "https://devdossier.in/",
      },
    ],
  },

  /* ── Events I Attend ── */
  {
    id: "events",
    eyebrow: "05 — Events & Experiences",
    title: "Events I Attend",
    subtitle:
      "From tech meetups to church gatherings — showing up, connecting with people, and soaking in experiences that inspire and grow me.",
    filters: [
      { id: "all", label: "Show All" },
      { id: "tech", label: "Tech Events" },
      { id: "church", label: "Church Events" },
      { id: "community", label: "Community" },
    ],
    cards: [
      {
        id: 15,
        category: "tech",
        title: "Tech Conferences & Meetups",
        sub: "Staying Current in the Industry",
        desc: "Attending tech conferences, developer meetups, and product launches to stay plugged into the industry. Great way to discover new tools, meet other builders, and get inspired by what people are shipping.",
        icon: <FaTicketAlt className="text-emerald-500" />,
        tag: "Tech Meetups",
        link: "#",
      },
      {
        id: 16,
        category: "church",
        title: "Church Conferences & Camps",
        sub: "Faith, Fellowship & Growth",
        desc: "Attending church conferences, youth camps, and special services. These events are some of the most impactful moments in my year — deepening faith, building friendships, and being part of something bigger.",
        icon: <FaPray className="text-indigo-400" />,
        tag: "Church Events",
        link: "#",
      },
      {
        id: 17,
        category: "community",
        title: "Community Gatherings",
        sub: "Connecting with People",
        desc: "Showing up to local community events, creative meetups, and social gatherings. I believe real connection happens in person — and I make it a point to be present in the spaces and communities I care about.",
        icon: <FaUsers className="text-amber-500" />,
        tag: "Community",
        link: "#",
      },
      {
        id: 18,
        category: "tech",
        title: "Product Launches & Expos",
        sub: "Exploring What's Next",
        desc: "Visiting product expos, startup demos, and creative showcases. Love being in the room when something new is being unveiled — whether it's cutting-edge tech, indie products, or creative work from peers.",
        icon: <MdEventAvailable className="text-sky-500" />,
        tag: "Expos",
        link: "#",
      },
    ],
  },
];

/* ─── Section Block ──────────────────────────────────────────── */
const PassionSection = ({ section }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCards =
    activeFilter === "all"
      ? section.cards
      : section.cards.filter((c) => c.category === activeFilter);

  return (
    <section id={`passion-${section.id}`} className="mb-20">
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        subtitle={section.subtitle}
      />

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {section.filters.map((f) => (
          <FilterBtn
            key={f.id}
            id={f.id}
            label={f.label}
            active={activeFilter === f.id}
            onClick={setActiveFilter}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <PassionCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

/* ─── Main Component ─────────────────────────────────────────── */
const Passion = () => {
  return (
    <div className="relative pt-4 pb-12 max-w-6xl mx-auto px-6">
      {/* Page Intro */}
      <div className="mb-14 text-center">
        <p className="text-[10px] font-bold text-crimson uppercase tracking-[0.3em] mb-3">
          Beyond the Code
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
          Things I Love Doing
        </h1>
        <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
          A curated look into my world outside of professional work — the passions that
          fuel my creativity, faith, and curiosity every day.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-warm-gray-200 rounded-full" />
          <BsHeartFill className="text-rose-500 text-sm animate-pulse" />
          <div className="h-px w-12 bg-warm-gray-200 rounded-full" />
        </div>
      </div>

      {/* Quick Nav Anchors */}
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#passion-${s.id}`}
            className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-warm-gray-200 text-gray-400 hover:text-crimson hover:border-crimson transition-all duration-200 bg-white"
          >
            {s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}
          </a>
        ))}
      </div>

      {/* All Sections */}
      {sections.map((section) => (
        <PassionSection key={section.id} section={section} />
      ))}

      {/* Footer Banner */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Always curious</span>
          <BsHeartFill className="text-rose-500 text-base animate-pulse" />
          <span>Building for the future.</span>
        </p>
      </div>
    </div>
  );
};

export default Passion;