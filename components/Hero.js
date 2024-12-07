"use client";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCheckSquare } from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="home">
        <div className="mt-3 px-4 sm:px-6 lg:px-8">
          <span className="text-sm sm:text-base font-Mitr">.../Home ...</span>
          <div className="bg-[url('/hero-left3.png')] bg-cover bg-center">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
              <div className="flex-1 text-left p-4">
                <span className="text-md sm:text-lg lg:text-xl font-Mitr">
                  {/* PRAISE THE GOD → */}
                  Hi 👋 →
                </span>
                <h6 className="mb-4 font-Mitr flex items-center text-justify text-sm sm:text-base lg:text-xl">
                  <span className="mr-2">
                    <FaCheckSquare className="inline-block text-gray-800 rounded-lg" />
                  </span>
                  Shalimar Mehra&nbsp;• Web Developer
                </h6><i>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-ost text-justify mb-4">
                  Hi, I&apos;m Shalimar Mehra. I have a Bachelor&apos;s in
                  Computer Applications and am pursuing an MCA in Computing and
                  Software Systems from IGNOU. I&apos;ve enhanced my skills
                  through various courses and certifications in technology and
                  design. I&apos;m passionate about software engineering, web
                  development, and UI/UX design.
                </p></i>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-ost text-justify"><i>
                  I&apos;ve started my own web development business and also
                  explore new trends, freelance, and entrepreneurial ventures. I
                  share my insights on my YouTube channel.............</i>
                  <span className="text-center sm:text-right mt-4 block">
                    <Link
                      href="/#about"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("about")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-black hover:text-gray-700 px-3 py-1 sm:px-4 sm:py-2 inline-flex items-center border-2 border-black rounded-md text-sm sm:text-base transition-colors"
                    >
                      Know more about me <CgArrowTopRight className="ml-2" />
                    </Link>
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6">
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 w-full">
                    <Link
                      href="https://github.com/yourusername"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://linkedin.com/in/yourusername"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="https://twitter.com/yourusername"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>X</span>
                    </Link>
                    <Link
                      href="https://instagram.com/yourusername"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Instagram</span>
                    </Link>
                    <Link
                      href="https://youtube.com/@yourusername"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center col-span-2 sm:col-span-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>YouTube</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1 md:ml-8 px-4 mt-8">
                <Image
                  src="/hero-image.png"
                  width={400}
                  height={400}
                  alt="Hero"
                  className="w-full max-w-[300px] sm:max-w-[400px] h-auto rounded-full shadow-lg mx-auto
                  hover:scale-110 hover:rotate-6 hover:shadow-3xl
                  animate-float
                  transform transition-all duration-700 ease-in-out
                  motion-safe:animate-pulse 
                  border-6 border-black hover:border-gray-900
                  filter hover:brightness-125 hover:contrast-110
                  cursor-pointer"
                  priority
                  style={{
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>

              <style jsx>{`
                @keyframes float {
                  0% {
                    transform: translateY(0px) rotate(0deg);
                  }
                  50% {
                    transform: translateY(-25px) rotate(3deg);
                  }
                  100% {
                    transform: translateY(0px) rotate(0deg);
                  }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
                .animate-pulse {
                  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
