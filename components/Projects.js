"use client";
import React from "react";
import { useState } from "react";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"]; // Add your slide content here

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section id="projects">
        <span className="ml-5 xl:ml-24 font-Mitr">.../Projects ...</span>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-screen-lg">
            <div className="overflow-hidden h-64">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 h-64 flex items-center justify-center"
                  >
                    {slide}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 rounded-3xl bg-black text-white"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 rounded-3xl bg-black text-white"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
