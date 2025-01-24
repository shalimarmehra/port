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
        "A dynamic business website meticulously crafted with **Next.js** and styled with **Tailwind CSS**. This modern web application leverages Next.js's capabilities for **server-side rendering, static site generation, and optimized routing**, ensuring exceptional performance and SEO. The UI is built using Tailwind CSS's **utility-first framework**, enabling rapid development of responsive designs.  **Key Features:** Smooth animations, interactive components, and a fully responsive layout across all devices.",
      image: "/project1b.jpg",
      viewprojectworklink: "https://devdossier.in/",
    },
    {
      id: 2,
      title: "Portfolio Website - Using Next JS and Tailwind CSS Framework",
      description:
        "A sleek and responsive portfolio website built using **Next.js** for enhanced performance and **Tailwind CSS** for rapid UI development. **Next.js** provides server-side rendering, automatic code splitting, and optimizations. **Tailwind CSS**, with its utility-first approach, enables quick styling. The site boasts a clean, minimalist design with smooth animations and responsive layouts, ensuring a seamless experience across devices.  **Key Features:** Project showcase, skills section, contact form, dynamic content loading.",
      image: "/project2.jpg",
      viewprojectworklink: "https://shalimarmehra.vercel.app/",
    },
    {
      id: 3,
      title:
        "Logistic Website - Using CMS with WordPress and Elementor Page Builder Plugin",
      description:
        "A robust logistics website powered by **WordPress CMS** and enhanced with the versatile **Elementor Page Builder** plugin. This platform ensures seamless management of logistics content and services through WordPress's intuitive backend. **Elementor** empowers users to customize layouts using drag-and-drop functionality, eliminating the need for coding.   **Key Features:** Responsive design, service showcases, contact forms, easy content management, visually appealing interface.",
      image: "/project3.jpg",
      viewprojectworklink: "https://247deliveryexperts.com",
    },
    {
      id: 4,
      title:
        "News Website - Using CMS with WordPress and Elementor Page Builder Plugin",
      description:
        "A dynamic news website built on **WordPress**, the leading Content Management System (CMS), and enhanced with the powerful **Elementor Page Builder**. This combination offers flexibility in content management and intuitive design capabilities.  **Elementor's** advanced widgets and design elements are used to create engaging news layouts, interactive features, and seamless content updates. The website is built with SEO in mind, ensuring optimal visibility while maintaining fast loading speeds and responsiveness. **Key Features:** Easy content organization, SEO optimization, mobile responsiveness, engaging layouts.",
      image: "/project4.jpg",
      viewprojectworklink: "https://thelamen.com/",
    },
    {
      id: 5,
      title:
        "Social Networking Site - HTML, CSS, JavaScript & PHP (My First Project)",
      description:
        "A social networking platform designed to facilitate online interactions. Users can create and manage accounts, connect with friends, and engage in conversations. Developed using **PHP, HTML, CSS, JSON, and JavaScript**, the project features core functionalities such as account creation, friend requests, and messaging. External resources like websites and tutorials aided in learning and implementing these features. **Key Features:** User account management, friend connections, messaging functionality.",
      image: "/project5.png",
      viewprojectworklink: "https://github.com/shalimarmehra/social-networking-site",
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
          <div className="backdrop-blur-3xl rounded-lg p-6">
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
              {" "}
              <h3 className="py-4 pb-8 text-xl md:text-3xl text-center font-bold transition-transform duration-500 ease-in-out transform hover:translate-x-2 font-ost">
                {projects[currentIndex].title}
              </h3>
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                width={500}
                height={300}
                className="w-auto h-full md:h-96 rounded-lg shadow-2xl object-fit transition-transform duration-500 ease-in-out transform hover:scale-105 mx-auto rounded-bl-3xl rounded-br-3xl"
              />
              <p className="mt-8 text-gray-600 transition-transform duration-500 ease-in-out text-center font-ost">
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