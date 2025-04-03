"use client";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCheckSquare, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#hero-section",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    const tl = gsap.timeline({ ease: "slow", duration: 1 });
    window.addEventListener("mousemove", (e) => {
      gsap.utils.toArray(".circle").forEach((layer) => {
        const depth = layer.dataset.depth;
        const moveX = e.pageX - window.innerWidth / 2;
        const moveY = e.pageY - window.innerHeight / 2;
        tl.to(
          layer,
          {
            x: moveX / depth,
            y: moveY / depth,
          },
          0
        );
      });
    });
  }, []);

  return (
    <>
      <div className="bg-[url('/hero-left.png')] bg-cover bg-center">
        <section id="quick-bio">
          <div id="hero-section" className="mt-3 px-4 sm:px-6 lg:px-8">
            <span className=" font-Mitr xl:ml-24">.../Quick Bio ...</span>

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
                  Shalimar Mehra&nbsp;• Full-Stack Developer
                </h6>
                <p className="text-sm sm:text-base text-gray-600 font-serif text-justify mb-4">
                  Hi, I&apos;m <b>Shalimar Mehra</b>. I have a{" "}
                  <b>Bachelor&apos;s in Computer Applications</b>. I&apos;ve
                  enhanced my skills through various{" "}
                  <b>courses and certifications</b> in technology and design.
                  I&apos;m passionate about{" "}
                  <b>
                    Web development, UI/UX design & explore new technologies
                  </b>
                  . I love to learn and grow in this field.
                </p>
                <p className="text-sm sm:text-base text-gray-600 font-serif text-justify">
                  I&apos;ve started my own <b>web development business</b> and
                  also explore new{" "}
                  <b>trends, freelance, and entrepreneurial ventures</b>. I
                  share my insights on my <b>YouTube channel</b>.............
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-3 w-full">
                    <Link
                      href="https://github.com/shalimarmehra"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/shalimarmehra/"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin className="mr-2" />
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/shalimarmehra/"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareInstagram className="mr-2" />
                      <span>Instagram</span>
                    </Link>
                    <Link
                      href="https://youtube.com/@shalimarmehra"
                      className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="mr-2" />
                      <span>YouTube</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1 md:ml-8 px-4 mt-8">
                <Image
                  src="/hero-img.jpeg"
                  width={400}
                  height={400}
                  alt="Hero"
                  data-depth="15"
                  className="circle w-full max-w-[300px] sm:max-w-[400px] h-auto rounded-full shadow-lg mx-auto
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
        </section>
      </div>
    </>
  );
};

export default Hero;
