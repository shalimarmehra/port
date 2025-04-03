"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        }
      });
    });

    const section = document.querySelector("#skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        #skills {
          opacity: 0;
          transform: translateY(100px);
        }
      `}</style>

      <div className="bg-[url('/skillsbg.png')] bg-cover bg-center">
        <section id="skills" className="py-5">
          <span className="ml-5 font-Mitr xl:ml-24">
            .../Skills - Skills & Proficiencies ...
          </span>
          <div className="container mx-auto px-4 my-5">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="sm:mt-1 mr-2"
              />
              <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-sans">
    
                  Showcasing a comprehensive blend of{" "}
                  <b>front-end and back-end development expertise</b>, my{" "}
                  <b>skill set</b> is designed to create&nbsp;
                  <b>dynamic, robust, and user-friendly web solutions</b>. With
                  proficiency in <b>modern technologies and frameworks</b>, I
                  excel in building responsive, high-performance applications
                  that meet diverse needs. I am deeply committed to{" "}
                  <b>continuous learning</b>
                  and staying abreast of the latest industry trends, ensuring
                  that my work is always cutting-edge. By combining technical
                  acumen with creative problem-solving, I bring innovative ideas
                  to life, delivering impactful and scalable solutions.
          
              </p>
            </div>
          </div>
          <br />
          <div className="container mt-[-15px] md:mt-[-38px] mx-auto px-4">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="sm:mt-2 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-3xl max-w-full font-sans">
                <b>Frontend Development →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm font-bold">
                  <li>Core Technologies: HTML, CSS, JavaScript (ES6+).</li>
                  <li>Frameworks & Libraries: React.js & Next.js.</li>
                  <li>
                    Responsive Design: Mastery in media queries and CSS
                    frameworks like Bootstrap or Tailwind CSS.
                  </li>
                  <li>
                    Performance Optimization: Efficient use of lazy loading,
                    asset compression, and caching.
                  </li>
                  <li>
                    UI/UX Design: Proficient in tools like Figma to create
                    visually appealing, user-friendly interfaces.
                  </li>
                  <li>
                    SEO: Implementation of on-page SEO techniques for better
                    search engine rankings.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="container mt-[-15px] md:mt-[-38px] mx-auto px-4">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="sm:mt-2 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-3xl max-w-full font-sans">
                <b>Backend Development →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm font-bold">
                  <li>Programming Languages: Node.js.</li>
                  <li>Frameworks: Express.js server-side logic.</li>
                  <li>API Development: Expertise in building RESTful APIs.</li>
                  <li>Database Management: MySQL, PostgreSQL, MongoDB.</li>
                  <li>
                    Authentication: Secure user authentication systems (OAuth,
                    JWT).
                  </li>
                  <li>
                    Performance: Backend optimization for faster response times.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="container mt-[-15px] md:mt-[-38px] mx-auto px-4">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="sm:mt-2 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-3xl max-w-full font-sans">
                <b>Other Tools & Technologies →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm font-bold">
                  <li>
                    Version Control: Mastery of Git and GitHub for version
                    control and collaborative development.
                  </li>
                  <li>
                    Build Tools: Skilled in using Webpack and Gulp for
                    automation and optimization.
                  </li>
                  <li>
                    Testing & Debugging: Experience with Jest and Mocha for unit
                    testing and debugging.
                  </li>
                  <li>
                    Content Management Systems (CMS): Proficient in WordPress
                    for building and managing websites with dynamic content.
                  </li>
                  <li>
                    Development Environments:
                    <br />
                    <ul>
                      <li>
                        • Visual Studio Code: Expertise in this versatile,
                        powerful code editor.
                      </li>
                      <li>
                        • Sublime Text: Proficiency in using this lightweight
                        and efficient text editor.
                      </li>
                      <li>
                        • IntelliJ IDEA: Skilled in using this integrated
                        development environment for Java and other languages.
                      </li>
                      <li>
                        • PyCharm: Proficient in using this powerful IDE for
                        Python development.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="container mt-[-15px] md:mt-[-38px] mx-auto px-4">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="sm:mt-2 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-3xl max-w-full font-sans">
                <b>Soft Skills →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm font-bold">
                  <li>
                    Problem Solving: Analyze challenges and implement effective,
                    innovative solutions.
                  </li>
                  <li>
                    Communication: Clearly convey technical concepts to diverse
                    audiences.
                  </li>
                  <li>
                    Team Collaboration: Work seamlessly with designers,
                    developers, and stakeholders.
                  </li>
                  <li>
                    Adaptability: Stay updated with the latest technologies and
                    industry trends.
                  </li>
                  <li>
                    Time Management: Prioritize and manage multiple tasks to
                    meet deadlines.
                  </li>
                  <li>
                    Attention to Detail: Ensure consistency and quality in all
                    aspects of development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center text-center p-4 ml-6">
            <div className="stats-block w-full sm:w-2/6 flex flex-col justify-center items-center">
              <div className="flex items-center text-left">
                <h3 className="font-Pixelify font-black text-5xl md:text-7xl">
                  03+
                </h3>
                <p className="text-sm md:text-xl font-sans">
                  YEARS OF <br />
                  <b>EXPERIENCE</b>
                </p>
              </div>
            </div>
            <div className="stats-block w-full sm:w-1/3 flex flex-col justify-center items-center">
              <div className="flex items-center text-left">
                <h3 className="font-Pixelify font-black text-5xl md:text-7xl">
                  4+
                </h3>
                <p className="text-xs md:text-xl font-sans">
                  COMPLETED WORKS<br />
                  <b className="uppercase text-sm"> professionally</b>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-6 px-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-3 w-full max-w-screen-lg mx-auto">
              <Link
                href="https://github.com/shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/shalimarmehra/"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="mr-2" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram className="mr-2" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube className="mr-2" />
                <span>YouTube</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
