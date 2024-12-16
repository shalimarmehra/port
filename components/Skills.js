import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="bg-[url('/skills-bg.png')] bg-cover bg-center">
        <section id="skills" className="py-5">
          <span className="ml-5 font-Mitr xl:ml-24">
            .../Skills - Skills & Proficiencies ...
          </span>
          {/* <div className="flex items-center md:py-5 xl:py-0 sm:pl-[7rem] xl:pl-[25rem] justify-end sm:justify-start">
        <h2 className="text-3xl sm:text-4xl lg:text-8xl font-bold mr-20 font-italianno opacity-25  sm:w-auto">
          <i>Skills & Proficiencies</i>
        </h2>
      </div> */}
          <div className="container mx-auto px-4 my-5">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="mt-1 mr-2"
              />
              <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                <i>
                  Showcasing a comprehensive blend of front-end and back-end
                  development expertise, my skill set is designed to create
                  dynamic, robust, and user-friendly web solutions. With
                  proficiency in modern technologies and frameworks, I excel in
                  building responsive, high-performance applications that meet
                  diverse needs. I am deeply committed to continuous learning
                  and staying abreast of the latest industry trends, ensuring
                  that my work is always cutting-edge. By combining technical
                  acumen with creative problem-solving, I bring innovative ideas
                  to life, delivering impactful and scalable solutions.
                </i>
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
                className="mt-1 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                <b>Frontend Development →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm ">
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
                className="mt-1 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                <b>Backend Development →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm ">
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
                className="mt-1 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                <b>Other Tools & Technologies →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm ">
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
                className="mt-1 mr-2"
              />
              <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                <b>Soft Skills →</b>
                <br />
                <br />
                <ul className="list-disc pl-5 space-y-2 text-sm ">
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
        </section>
      </div>
    </>
  );
};

export default Skills;
