"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="">
        <nav className="sticky top-0 w-full z-10 shadow-md backdrop-blur h-[64px] bg-[url('/hero-left3.png')]">
          <div className="mx-auto px-5 xl:px-10">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-black text-sm xl:text-xl font-bold hover:text-gray-700 flex items-center"
                >
                  <Image src="/logo.png" width={40} height={40} alt="Logo" />
                  <span className="ml-2">• Shalimar&apos;s Portfolio</span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden xl:block">
                <div className=" flex items-baseline">
                  <Link
                    href="/#home"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center"
                  >
                    Home <CgArrowTopRight className="ml-1" />
                  </Link>

                  <Link
                    href="/#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center"
                  >
                    Projects <CgArrowTopRight className="ml-1" />
                  </Link>
                  <Link
                    href="/#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("experience")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center"
                  >
                    Experience <CgArrowTopRight className="ml-1" />
                  </Link>
                  <Link
                    href="/#skills"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("skills")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center"
                  >
                    Skills <CgArrowTopRight className="ml-1" />
                  </Link>
                  <Link
                    href="/#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center"
                  >
                    About <CgArrowTopRight className="ml-1" />
                  </Link>
                  <Link
                    href="/#education"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("education")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center"
                  >
                    Education <CgArrowTopRight className="ml-1" />
                  </Link>
                  <div className="flex justify-center">
                    <a
                      href="/resume.pdf"
                      download
                      className="text-white font-semibold bg-zinc-800 hover:bg-zinc-700 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center gap-2 mx-2"
                    >
                      Resume
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>

                    <Link
                      href="/#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white font-semibold bg-zinc-800 hover:bg-zinc-700 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center gap-2 mx-2"
                    >
                      Contact Us <IoMdMail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 transition-colors"
                  aria-label="Menu"
                >
                  {isOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Mobile Menu */}
              {isOpen && (
                <div className="absolute top-16 left-0 w-full xl:hidden bg-[#d9d9d9] shadow-lg">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                      href="/#home"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document
                          .getElementById("home")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center px-2">
                        <AiFillHome className="mr-1" /> Home
                      </div>
                      <CgArrowTopRight className="mr-2" />
                    </Link>

                    <Link
                      href="/#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document
                          .getElementById("projects")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center px-2">
                        <AiFillProject className="mr-1" /> Projects
                      </div>
                      <CgArrowTopRight className="mr-2" />
                    </Link>
                    <Link
                      href="/#experience"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document
                          .getElementById("experience")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center px-2">
                        <MdWork className="mr-1" /> Experience
                      </div>
                      <CgArrowTopRight className="mr-2" />
                    </Link>
                    <Link
                      href="/#skills"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        const element = document.getElementById("skills");
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center px-2">
                        <GiSkills className="mr-1" /> Skills
                      </div>
                      <CgArrowTopRight className="mr-2" />
                    </Link>
                    <Link
                      href="/#about"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document
                          .getElementById("about")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center px-2">
                        <BsFillPersonFill className="mr-1" /> About
                      </div>
                      <CgArrowTopRight className="mr-2" />
                    </Link>
                    <Link
                      href="/#education"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document
                          .getElementById("education")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-black font-semibold hover:text-gray-700 px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center px-2">
                        <FaGraduationCap className="mr-1" /> Education
                      </div>
                      <CgArrowTopRight className="mr-2" />
                    </Link>
                    <div className="flex justify-center items-center">
                      <a
                        href="/resume.pdf"
                        download
                        onClick={() => setIsOpen(false)}
                        className="text-white font-semibold bg-zinc-800 hover:bg-zinc-700 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center gap-2"
                      >
                        Resume
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <Link
                        href="/#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-white font-semibold bg-zinc-800 hover:bg-zinc-700 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center gap-2 ml-4"
                      >
                        Contact Us <IoMdMail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;