import React from "react";
import {
  PiProjectorScreenFill,
  PiChartLineUp,
  PiAddressBook,
} from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { MdInfoOutline } from "react-icons/md";
import Hero from "../professionsections/Hero"
import Projects from "../professionsections/Projects";
import Experience from "../professionsections/Experience";
import Skills from "../professionsections/Skills";
import About from "../professionsections/About";

const Profession = () => {
  return (
    <>
      <Hero />
      <h3 className="flex items-center w-full">
        <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
        <PiProjectorScreenFill className="mx-1 text-md font-bold w-8 h-8" />
        <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
      </h3>
      <Projects />
      <h3 className="flex items-center w-full">
        <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
        <PiChartLineUp className="mx-1 text-md font-bold w-8 h-8" />
        <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
      </h3>
      <Experience />
      <h3 className="flex items-center w-full">
        <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
        <GiSkills className="mx-1 text-md font-bold w-8 h-8" />
        <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
      </h3>
      <Skills />
      <h3 className="flex items-center w-full">
        <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
        <MdInfoOutline className="mx-1 text-md font-bold w-8 h-8" />
        <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
      </h3>
      <About />
      <h3 className="flex items-center w-full">
        <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
        <PiAddressBook className="mx-1 text-md font-bold w-8 h-8" />
        <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
      </h3>
    </>
  );
};

export default Profession;
