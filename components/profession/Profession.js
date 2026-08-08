import React from "react";
import Hero from "../professionsections/Hero";
import TechTicker from "../TechTicker";
import Projects from "../professionsections/Projects";
import DevDossierSection from "../professionsections/DevDossierSection";
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

      {/* 03 — DevDossier Digital Studio & Business */}
      <DevDossierSection />

      {/* 04 — Dev Dossier YouTube */}
      <YouTubeSection />

      {/* 05 — Professional Journey */}
      <Experience />

      {/* 06 — Technical Expertise */}
      <Skills />

      {/* 06 — Design Inspiration (Pinterest) */}
      <PinterestSection />

      {/* 07 — Client Testimonials */}
      <Testimonials />

      {/* 08 — Live Code Playground */}
      <Playground />

      {/* 09 — About Me */}
      <About />

      {/* 10 — Contact */}
      <ContactForm />
    </>
  );
};

export default Profession;
