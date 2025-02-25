"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { MdInfoOutline } from "react-icons/md";
import { PiProjectorScreenFill } from "react-icons/pi";
import { PiChartLineUp } from "react-icons/pi";
import { PiAddressBook } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="z-0">
        {isLoading ? (
          <PreLoader />
        ) : (
          <>
          <CustomCursor/>
            <div className="sticky z-50">
              <NavBar />
            </div>
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
            <Contact />
          </>
        )}
      </div>
    </>
  );
}
