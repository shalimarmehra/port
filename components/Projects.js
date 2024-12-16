"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Business Website - Using Next JS and Tailwind CSS Framework",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, conseconsequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus fe ipsum et, consequat niquat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus fe ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
      image: "/project1b.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
      githubcodelink: "https://247deliveryexperts.com",
    },
    {
      id: 2,
      title: "Portfolio Website - Using Next JS and Tailwind CSS Framework",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nuam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
      image: "/project2.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
      githubcodelink: "https://247deliveryexperts.com",
    },
    {
      id: 3,
      title:
        "Logistic Website - Using CMS with WordPress and Elementor Page Builder Plugin",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purt dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
      image: "/project3.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
      githubcodelink: "https://247deliveryexperts.com",
    },
    {
      id: 4,
      title:
        "News Website - Using CMS with WordPress and Elementor Page Builder Plugin",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit duidipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, moleolestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
      image: "/project4.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
      githubcodelink: "https://247deliveryexperts.com",
    },
    {
      id: 5,
      title: "3D Animation Website - Using Three.js and WebGL Technology",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie iponsequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie  feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie iponsequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
      image: "/project6.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
      githubcodelink: "https://247deliveryexperts.com",
    },
  ];

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
      <section id="projects" className="py-5">
        <span className="ml-5 font-Mitr xl:ml-24">
          .../Projects - Highlighted Projects ...
        </span>
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-3xl shadow-xl rounded-lg p-6">
            <div className="flex items-center justify-center md:hidden mb-2">
              <FaHandPointLeft className="animate-pulse mr-2" />
              <span>Swipe to navigate</span>
              <FaHandPointRight className="animate-pulse ml-2" />
            </div>
            <div
              className={`project ${
                isTransitioning
                  ? currentIndex > 0
                    ? "animate-slide-left"
                    : "animate-slide-right"
                  : ""
              } transition-transform duration-500 ease-in-out`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-auto h-full md:h-96 rounded-lg shadow-2xl object-fit transition-transform duration-500 ease-in-out transform hover:scale-105 mx-auto"
              />
              <h3 className="mt-4 text-lg font-bold transition-transform duration-500 ease-in-out transform hover:translate-x-2">
                {projects[currentIndex].title}
              </h3>
              <p className="mt-2 text-gray-600 transition-transform duration-500 ease-in-out text-justify">
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
                <a
                  href={projects[currentIndex].githubcodelink}
                  className="bg-black text-white hover:bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] hover:text-black transition-colors duration-300 ease-in-out border-2 border-black px-4 py-2 rounded-md text-center flex items-center"
                >
                  <FaGithub className="mr-2" />
                  GitHub Code
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
