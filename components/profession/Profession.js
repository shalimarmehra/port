import React from "react";
import Hero from "../professionsections/Hero";
import TechTicker from "../TechTicker";
import Projects from "../professionsections/Projects";
import Experience from "../professionsections/Experience";
import Skills from "../professionsections/Skills";
import About from "../professionsections/About";
import ContactForm from "../ContactForm";

const Profession = () => {


  return (
    <>
      <Hero />
      <TechTicker />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <ContactForm />
    </>
  );
};

export default Profession;
