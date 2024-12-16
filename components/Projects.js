"use client";
import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Business Website",
      description:
        "Dev Dossier is a dynamic web development service provider dedicated to crafting innovative and user-friendly websites. We specialize in creating custom solutions tailored to meet the unique needs of our clients, ensuring seamless functionality and engaging user experiences. Our services include front-end and back-end development, responsive design, e-commerce solutions, content management systems, and ongoing maintenance and support. At Dev Dossier, we combine cutting-edge technologies with creative design to bring your digital visions to life.",
      languages: [
        "Next.js",
        "Tailwind css",
        "Rest API",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Firebase",
      ],
      category:
        "Web Development Project using Next.js & Tailwind CSS & MongoDB & Node.js & Express.js & Firebase & Rest API",
      link: "https://example.com/project2",
    },
    {
      title: "Logistic Website",
      description:
        "Overview: A comprehensive courier and logistics service provider offering same-day and last-mile deliveries. Role: Lead Developer Technologies Used: Wordpress Challenges: Theme Modification & Mobile-Friendly.",
      languages: ["Wordpress"],
      category: "CMS Project with wordpress",
      link: "https://247deliveryexperts.com",
    },
    {
      title: "My Portfolio Shalimar Mehra",
      description: "This is the third project",
      languages: ["Java", "Android", "Kotlin"],
      category: "Mobile Development",
      link: "https://example.com/project3",
    },
    {
      title: "News Website Akul",
      description: "This is the fourth project",
      languages: ["C++", "OpenGL", "GLSL"],
      category: "Game Development",
      link: "https://example.com/project4",
    },
    {
      title: "Social Netwroking Site",
      description: "This is the fifth project",
      languages: ["Ruby", "Rails", "PostgreSQL"],
      category: "Web Development",
      link: "https://example.com/project5",
    },
    {
      title: "3D Portfolio",
      description: "This is the fifth project",
      languages: ["Ruby", "Rails", "PostgreSQL"],
      category: "Web Development",
      link: "https://example.com/project5",
    },
    {
      title: "Project with html css js",
      description: "This is the fifth project",
      languages: ["Ruby", "Rails", "PostgreSQL"],
      category: "Web Development",
      link: "https://example.com/project5",
    },
    {
      title: "Blog Site by Flowbite host on Netlify",
      description: "This is the fifth project",
      languages: ["Ruby", "Rails", "PostgreSQL"],
      category: "Web Development",
      link: "https://example.com/project5",
    },
    {
      title: "Atul Portfolio",
      description: "This is the fifth project",
      languages: ["Ruby", "Rails", "PostgreSQL"],
      category: "Web Development",
      link: "https://example.com/project5",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section id="projects">
        <span className="ml-5 xl:ml-24 font-Mitr">
          .../Projects - Highlighted Projects ...
        </span>
        <div className="flex flex-col items-center my-5 xl:my-10">
          <div className="container relative w-full">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col items-center justify-center bg-transparent"
                  >
                    <div className="border-b border-gray-800 my-4 w-25">
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                    </div>
                    <p className="mx-10 text-justify">{slide.description}</p>

                    {/* <div className="flex space-x-2 mb-2"> */}
                    {/* {slide.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 rounded-md"
                    >
                      {language}<div className="bg-image-blur bg-[url('/hero-image.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-50 blur-lg"></div>
                    </span>
                  ))} */}
                    {/* </div> */}
                    <div className="border-t border-gray-800 my-4">

                    <p className="mb-2 mx-10 text-center">{slide.category}</p></div>
                    <a
                      href={slide.link}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center"
                    >
                      View Project Work &nbsp; <FaArrowRight />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform-translate-y-1/2 py-2 pl-2 rounded-3xl text-black"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform-translate-y-1/2 py-2 pr-2 rounded-3xl text-black"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
