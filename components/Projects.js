"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaHandPointLeft,
  FaHandPointRight,
} from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Business Website - Using Next JS and Tailwind CSS Framework",
      description:
        "A dynamic business website built with Next.js and Tailwind CSS. This modern web application takes advantage of Next.js's powerful features including server-side rendering, static site generation, and optimized routing for exceptional performance and SEO. The UI is crafted using Tailwind CSS's utility-first framework, enabling rapid development of responsive. Key features include smooth animations, interactive components, and a fully responsive layout that adapts seamlessly across all devices.",
      image: "/project1b.jpg",
      viewprojectworklink: "https://dd-teal-gamma.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website - Using Next JS and Tailwind CSS Framework",
      description:
        "A modern and responsive portfolio website built using Next.js and Tailwind CSS. Next.js provides server-side rendering, automatic code splitting, and optimized performance, while Tailwind CSS enables rapid UI development with utility-first classes. The site features a clean, minimalist design with smooth animations, responsive layouts that work across all devices, and dynamic content loading. Key features include a projects showcase, skills section, contact form.",
      image: "/project2.jpg",
      viewprojectworklink: "https://portfolio-woad-tau-79.vercel.app/",
    },
    {
      id: 3,
      title:
        "Logistic Website - Using CMS with WordPress and Elementor Page Builder Plugin",
      description:
        "A modern logistics website built using WordPress CMS and enhanced with the powerful Elementor page builder plugin. This dynamic platform offers seamless management of logistics content and services through WordPress's intuitive backend system. The Elementor page builder integration enables drag-and-drop customization of layouts, making it easy to create and update professional-looking pages without coding knowledge. Features include responsive design, service showcases, and contact forms. The combination of WordPress CMS and Elementor provides flexibility in content management while maintaining a visually appealing and user-friendly interface optimized for logistics business needs.",
      image: "/project3.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
    },
    {
      id: 4,
      title:
        "News Website - Using CMS with WordPress and Elementor Page Builder Plugin",
      description:
        "A dynamic news website built using WordPress, the world's leading Content Management System (CMS), enhanced with the powerful Elementor Page Builder plugin. This combination allows for flexible content management and intuitive drag-and-drop design capabilities. Elementor's advanced widgets and design elements are utilized to create engaging news layouts, interactive elements, and seamless content updates. Built with SEO best practices in mind, the website ensures optimal visibility for news content while maintaining fast loading speeds and mobile responsiveness. The CMS architecture allows for easy content organization, tagging, and archiving, making it an efficient solution for managing and delivering news content across multiple channels.",
      image: "/project4.jpg",
      viewprojectworklink: "https://thelamen.com/",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const minSwipeDistance = 50;

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
      <section
        id="projects"
        className="py-5"
        style={{
          transform: isLoaded ? "translateX(0)" : "translateX(100%)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
        }}
      >
        <span className="ml-5 font-Mitr xl:ml-24">
          .../Projects - Highlighted Projects ...
        </span>
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-3xl shadow-xl rounded-lg p-6">
            <div className="flex items-center justify-center md:hidden mb-2">
              <FaHandPointLeft className="animate-pulse mr-2" />
              <span>Swipe to navigate</span>
              <FaHandPointRight className="animate-pulse ml-2" />
            </div>
            <div
              className={`project ${
                isTransitioning
                  ? currentIndex > 0
                    ? "translate-x-[-100%] transition-transform duration-500 ease-in-out"
                    : "translate-x-[100%] transition-transform duration-500 ease-in-out"
                  : "transform translate-x-0 transition-transform duration-500 ease-in-out"
              }`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                width={500}
                height={300}
                className="w-auto h-full md:h-96 rounded-lg shadow-2xl object-fit transition-transform duration-500 ease-in-out transform hover:scale-105 mx-auto"
              />
              <h3 className="mt-4 text-xl text-center font-bold transition-transform duration-500 ease-in-out transform hover:translate-x-2 font-ost">
                {projects[currentIndex].title}
              </h3>
              <p className="mt-2 text-gray-600 transition-transform duration-500 ease-in-out text-center font-ost">
                {projects[currentIndex].description}
              </p>
              <br />
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <a
                  href={projects[currentIndex].viewprojectworklink}
                  className="bg-black text-white hover:bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] hover:text-black transition-colors duration-300 ease-in-out border-2 border-black px-4 py-2 rounded-md text-center flex items-center"
                >
                  <PiProjectorScreenFill className="mr-2" /> View project work
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-between items-center mt-4 flex-wrap">
              <button
                onClick={handlePrev}
                className="bg-black bg-opacity-80 backdrop-blur-sm shadow-lg rounded-full p-2 hover:bg-gray-800 transition-colors duration-300 ease-in-out mb-2 sm:mb-0 hidden md:block"
              >
                <FaChevronLeft className="text-white transition-transform duration-300 ease-in-out transform hover:-translate-x-1" />
              </button>
              <div className="project-pagination flex space-x-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ease-in-out ${
                      index === currentIndex
                        ? "bg-black scale-125"
                        : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="bg-black bg-opacity-80 backdrop-blur-sm shadow-lg rounded-full p-2 hover:bg-gray-800 transition-colors duration-300 ease-in-out mb-2 sm:mb-0 hidden md:block"
              >
                <FaChevronRight className="text-white transition-transform duration-300 ease-in-out transform hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
