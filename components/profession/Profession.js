import React from "react";
import {
  PiProjectorScreenFill,
  PiChartLineUp,
  PiAddressBook,
} from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { MdInfoOutline } from "react-icons/md";
import Hero from "../professionsections/Hero";
import Projects from "../professionsections/Projects";
import Experience from "../professionsections/Experience";
import Skills from "../professionsections/Skills";
import About from "../professionsections/About";
import ContactForm from "../ContactForm";

const Profession = () => {
  return (
    <>
      <Hero />
      <div className="flex items-center w-full my-6 opacity-60">
        <span className="flex-grow bg-white/10 rounded h-[1px] ml-[20px] md:ml-[72px]"></span>
        <PiProjectorScreenFill className="mx-3 text-indigo-400 w-5 h-5 flex-shrink-0" />
        <span className="flex-grow bg-white/10 rounded h-[1px] mr-[20px] md:mr-[72px]"></span>
      </div>
      <Projects />
      <div className="flex items-center w-full my-6 opacity-60">
        <span className="flex-grow bg-white/10 rounded h-[1px] ml-[20px] md:ml-[72px]"></span>
        <PiChartLineUp className="mx-3 text-indigo-400 w-5 h-5 flex-shrink-0" />
        <span className="flex-grow bg-white/10 rounded h-[1px] mr-[20px] md:mr-[72px]"></span>
      </div>
      <Experience />
      <div className="flex items-center w-full my-6 opacity-60">
        <span className="flex-grow bg-white/10 rounded h-[1px] ml-[20px] md:ml-[72px]"></span>
        <GiSkills className="mx-3 text-indigo-400 w-5 h-5 flex-shrink-0" />
        <span className="flex-grow bg-white/10 rounded h-[1px] mr-[20px] md:mr-[72px]"></span>
      </div>
      <Skills />
      <div className="flex items-center w-full my-6 opacity-60">
        <span className="flex-grow bg-white/10 rounded h-[1px] ml-[20px] md:ml-[72px]"></span>
        <MdInfoOutline className="mx-3 text-indigo-400 w-5 h-5 flex-shrink-0" />
        <span className="flex-grow bg-white/10 rounded h-[1px] mr-[20px] md:mr-[72px]"></span>
      </div>
      <About />
      <div className="flex items-center w-full my-6 opacity-60">
        <span className="flex-grow bg-white/10 rounded h-[1px] ml-[20px] md:ml-[72px]"></span>
        <PiAddressBook className="mx-3 text-indigo-400 w-5 h-5 flex-shrink-0" />
        <span className="flex-grow bg-white/10 rounded h-[1px] mr-[20px] md:mr-[72px]"></span>
      </div>
      <ContactForm />
    </>
  );
};

export default Profession;
