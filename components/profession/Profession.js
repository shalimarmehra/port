import React from "react";
import Hero from "../professionsections/Hero";
import Projects from "../professionsections/Projects";
import Experience from "../professionsections/Experience";
import Skills from "../professionsections/Skills";
import About from "../professionsections/About";
import ContactForm from "../ContactForm";

const Profession = () => {
  const EditorialDivider = () => (
    <div className="flex items-center w-full my-12 opacity-60">
      <span className="flex-grow h-[1px] bg-warm-gray-200 ml-6 md:ml-20"></span>
      <span className="cross-marker mx-4 text-warm-gray-300"></span>
      <span className="flex-grow h-[1px] bg-warm-gray-200 mr-6 md:mr-20"></span>
    </div>
  );

  return (
    <>
      <Hero />
      <EditorialDivider />
      <Projects />
      <EditorialDivider />
      <Experience />
      <EditorialDivider />
      <Skills />
      <EditorialDivider />
      <About />
      <EditorialDivider />
      <ContactForm />
    </>
  );
};

export default Profession;
