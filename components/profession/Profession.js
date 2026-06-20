import React from "react";
import Hero from "../professionsections/Hero";
import TechTicker from "../TechTicker";
import Projects from "../professionsections/Projects";
import YouTubeSection from "../professionsections/YouTubeSection";
import Experience from "../professionsections/Experience";
import Skills from "../professionsections/Skills";
import PinterestSection from "../professionsections/PinterestSection";
import Testimonials from "../professionsections/Testimonials";
import Playground from "../professionsections/Playground";
import About from "../professionsections/About";
import ContactForm from "../ContactForm";

const Profession = () => {
  return (
    <>
      {/* 01 — Hero */}
      <Hero />

      {/* Tech Ticker Band */}
      <TechTicker />

      {/* 02 — Selected Works */}
      <Projects />

      {/* 03 — Dev Dossier YouTube */}
      <YouTubeSection />

      {/* 04 — Professional Journey */}
      <Experience />

      {/* 05 — Technical Expertise */}
      <Skills />

      {/* 06 — Design Inspiration (Pinterest) */}
      <PinterestSection />

      {/* Client Testimonials */}
      <Testimonials />

      {/* 07 — Live Code Playground */}
      <Playground />

      {/* 08 — About Me */}
      <About />

      {/* 09 — Contact */}
      <ContactForm />
    </>
  );
};

export default Profession;
