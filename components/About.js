"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="bg-[url('/about-bg.png')] bg-cover bg-center">
        <section
          id="about"
          className="py-5"
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
          }}
        >
          <span className="ml-5 font-Mitr xl:ml-24">
            .../About me - Who am i ...
          </span>

          {/* Rest of the code remains unchanged */}
          <div className="container mx-auto px-4 my-5">
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="sm:mt-1 mr-2"
              />
              <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                Hi, I&apos;m <b>Shalimar Mehra</b>. I hold a Bachelor&apos;s
                degree in Computer Applications and am currently pursuing a
                <b>Master of Computer Applications (MCA)</b> with a
                specialization in Computing and Software Systems from{" "}
                <b>IGNOU (Indira Gandhi National Open University)</b>.
                <br />
                <br />
                Throughout my educational journey, I have undertaken various
                <b>courses and certifications</b> to continually enhance my
                skills in the{" "}
                <b>ever-evolving fields of technology and design</b>. My
                academic background has provided me with a strong foundation in{" "}
                <b>
                  software engineering, web development, and UI/UX design,
                  enabling me to develop a versatile skill set that bridges the
                  gap between technical proficiency and creative innovation
                </b>
                .
              </p>
            </div>

            <br />
            <div className="mt-[-15px] md:mt-[-38px]">
              <div className="flex flex-row items-start p-2">
                <Image
                  src="/bullet-point.png"
                  width={16}
                  height={16}
                  alt="bullet point icon"
                  className="sm:mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Professional Experience →</b>
                  <br />
                  <br />
                  In addition to my academic endeavors, I have ventured into the
                  professional world by starting my own business offering web
                  development services. This entrepreneurial journey has allowed
                  me to apply my theoretical knowledge in real-world scenarios,
                  delivering customized web solutions that cater to the specific
                  needs of my clients. My business experience has equipped me
                  with valuable insights into the challenges and opportunities
                  within the tech industry, further fueling my passion for
                  continuous learning and improvement.
                </p>
              </div>
            </div>
            <br />
            <div className="mt-[-15px] md:mt-[-38px]">
              <div className="flex flex-row items-start p-2">
                <Image
                  src="/bullet-point.png"
                  width={16}
                  height={16}
                  alt="bullet point icon"
                  className="sm:mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Passion for Innovation →</b>
                  <br />
                  <br />I am deeply passionate about exploring{" "}
                  <b>new trends and innovations in the technology sector</b>. My
                  curiosity drives me to stay updated with the latest
                  developments, ensuring that I remain at the forefront of
                  industry advancements. Whether it&apos;s experimenting with
                  emerging technologies or integrating cutting-edge design
                  principles, I am always eager to push the boundaries of
                  what&apos;s possible.
                </p>
              </div>
            </div>
            <br />
            <div className="mt-[-15px] md:mt-[-38px]">
              <div className="flex flex-row items-start p-2">
                <Image
                  src="/bullet-point.png"
                  width={16}
                  height={16}
                  alt="bullet point icon"
                  className="sm:mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Freelancing and Collaborations →</b>
                  <br />
                  <br />
                  Beyond my entrepreneurial ventures, I actively seek
                  opportunities for <b>freelancing and collaborations</b>. I
                  believe that working with diverse teams and projects not only
                  broadens my perspective but also allows me to contribute my
                  unique skill set to a variety of creative and technical
                  endeavors.{" "}
                  <b>
                    My goal is to build meaningful connections and work on
                    projects that make a positive impact
                  </b>
                  .
                </p>
              </div>
            </div>
            <br />
            <div className="mt-[-15px] md:mt-[-38px]">
              <div className="flex flex-row items-start p-2">
                <Image
                  src="/bullet-point.png"
                  width={16}
                  height={16}
                  alt="bullet point icon"
                  className="sm:mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Sharing Knowledge →</b>
                  <br />
                  <br />
                  As a proponent of continuous learning and knowledge sharing, I
                  maintain an active and vibrant presence on my{" "}
                  <b>YouTube channels</b>.
                  <br />
                  <br />
                  Dev Dossier: My business YouTube channel, Dev Dossier, is a
                  hub for valuable insights and practical knowledge about web
                  development. Here, I cover everything from fundamental
                  concepts to advanced techniques. In addition to web
                  development tutorials, I also highlight interesting websites,
                  review essential tools, and share resources and emerging
                  technologies related to web development. My goal is to inspire
                  and educate others, offering a well-rounded perspective on the
                  latest industry trends and best practices.
                  <br />
                  <br />
                  Shalimar Mehra: On my personal YouTube channel, Shalimar
                  Mehra, I share occasional vlogs and events, offering a glimpse
                  into my personal life and experiences. This channel allows me
                  to connect with my audience on a more personal level, sharing
                  my journey, my thoughts, and the moments that matter to me.
                  It&apos;s a space where I can express myself freely and share
                  stories that resonate with viewers.
                  <br />
                  <br />
                  Both channels serve as platforms to foster a community of
                  like-minded individuals who are equally passionate about
                  technology and innovation. By engaging with my audience
                  through insightful discussions and interactive content, I
                  strive to create an enriching learning experience that
                  empowers viewers to enhance their skills and stay ahead in the
                  tech world. My content is designed not only to educate but
                  also to motivate and inspire my viewers to explore new ideas
                  and push their boundaries.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:bg-[url('/education-bg.png')] bg-[url('/education-bgm.png')] bg-cover bg-center">
            <section id="education">
              {/* <div className="flex items-center md:py-5 xl:py-0 sm:pl-[7rem] xl:pl-[25rem] justify-end sm:justify-start">
                    <h2 className="text-3xl sm:text-4xl lg:text-8xl font-bold mr-20 font-italianno opacity-25  sm:w-auto">
                      <i>Degrees, Courses & Certifications</i>
                    </h2>
                  </div> */}
              <div className="container mx-auto px-4 my-5">
                <div className="flex flex-row items-baseline p-2">
                  <Image
                    src="/bullet-point.png"
                    width={16}
                    height={16}
                    alt="bullet point icon"
                    className="mr-2"
                  />
                  <p className="text-gray-700 mb-4 text-justify text-xl sm:text-3xl max-w-full font-ost">
                    <b className="font-bold">Academic Achievements →</b>
                  </p>
                </div>

                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <span className="text-sm md:text-xl font-MOD20 block">
                    – June 2019 - June 2022
                  </span>
                  <b className="text-md md:text-2xl">
                    BCA (Bachelor of Computer Application) - Indira Gandhi
                    National Open University.
                  </b>
                  <br />
                  <br />
                  Core Computing: Problem Solving and Programming, Systems
                  Analysis and Design, Database Management • Programming
                  Languages: C++, Java, Web Programming • Web & Networks:
                  Internet Concepts, Computer Networks, Network Programming •
                  Additional Skills: Business Communication, Software
                  Engineering, Project Work.
                </p>
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <b className="text-sm md:text-xl font-MOD20 block">
                    – April 2018 - March 2019
                  </b>
                  <b className="text-md md:text-2xl">
                    Class 12th - Central Board of Secondary Education.
                  </b>
                  <br />
                  <br />
                  Commerce - Hindi • English • Accountancy • Economics •
                  Business Studies • Physical Education.
                </p>
              </div>
              <div className="container mx-auto px-4">
                <div className="flex flex-row items-baseline p-2">
                  <Image
                    src="/bullet-point.png"
                    width={16}
                    height={16}
                    alt="bullet point icon"
                    className="mr-2"
                  />
                  <p className="text-gray-700 mb-4 text-justify text-xl sm:text-3xl max-w-full font-ost">
                    <b>Courses Achievements →</b>
                  </p>
                </div>

                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <b className="text-sm md:text-xl font-MOD20 block">
                    – Feb 2019 - Feb 2022
                  </b>
                  <b className="flex text-md md:text-2xl items-center">
                    <a
                      href="https://drive.google.com/file/d/1gGsIUvuMkPGVkzxDRAnze4EzM4UyzGC6/view"
                      target="_blank"
                      className="text-md md:text-2xl items-center flex hover:text-black hover:underline hover:font-bold"
                    >
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 sm:hidden"
                      />
                      Master Diploma in Computer Engineering - Indian Institute
                      of Computer Sciences.
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 hidden sm:block"
                      />
                    </a>
                  </b>
                  <br />
                  IT Tools & Network Basics • Web Designing & Publishing • C++
                  Programming & Problem Solving • Data Structures with OOP •
                  Computer Organization & OS • Database Technologies • Web
                  Development with PHP
                </p>
              </div>
              <div className="container mx-auto px-4">
                <div className="flex flex-row items-baseline p-2">
                  <Image
                    src="/bullet-point.png"
                    width={16}
                    height={16}
                    alt="bullet point icon"
                    className="mr-2"
                  />
                  <p className="text-gray-700 mb-4 text-justify text-xl sm:text-3xl max-w-full font-ost">
                    <b>Certifications Achievements →</b>
                  </p>
                </div>

                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <b className="text-sm md:text-xl font-MOD20 block">
                    – Oct 2023
                  </b>
                  <b className="text-md md:text-2xl flex items-center">
                    <a
                      href="https://www.udemy.com/certificate/UC-4e91caf7-c484-4e33-b412-db5185f9bfc1/"
                      target="_blank"
                      className="text-md md:text-2xl items-center flex hover:text-black hover:underline hover:font-bold"
                    >
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 sm:hidden"
                      />
                      React JS- Complete Guide for Frontend Web Development -
                      Udemy.
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 hidden sm:block"
                      />
                    </a>
                  </b>
                  <br />
                  Crede.. ID : <span className="font-bold">UC-4e91caf7-c484-4e33-b412-db5185f9bfc1</span>
                  <br />
                  Elevate your front-end development skills with this
                  comprehensive course. Master the creation of basic web pages
                  using HTML5 and bring them to life with CSS3 styling and
                  animations. Advance your JavaScript expertise from fundamental
                  to advanced levels, including ES6. Develop responsive and
                  interactive web pages using JavaScript and jQuery, and create
                  user-friendly, visually stunning, high-performance websites
                  with React JS. Transform into an expert front-end developer
                  equipped with cutting-edge skills.
                </p>
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <b className="text-sm md:text-xl font-MOD20 block">
                    – Feb 2023
                  </b>
                  <b className="text-md md:text-2xl flex items-center">
                    <a
                      href="https://www.udemy.com/certificate/UC-546b187e-c260-4d7a-8e07-3c5306f583cc/"
                      target="_blank"
                      className="text-md md:text-2xl items-center flex hover:text-black hover:underline hover:font-bold"
                    >
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 sm:hidden"
                      />
                      MySQL Database Development Mastery - Udemy.
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 hidden sm:block"
                      />
                    </a>
                  </b>
                  <br />
                  Crede.. ID : <span className="font-bold">UC-546b187e-c260-4d7a-8e07-3c5306f583cc</span>
                  <br />
                  Master the essentials of MySQL with hands-on experience. Learn
                  to install MySQL Server and MySQL Workbench, establish
                  connections, and create robust databases. Develop expertise in
                  reverse engineering data models and forward engineering them
                  into efficient databases. Enhance your skills by creating
                  tables, running complex queries, and utilizing MySQL Workbench
                  for day-to-day operations. Build and manage relationships,
                  perform swift calculations with aggregate functions, and
                  seamlessly export data to Excel. Gain practical insights and
                  apply SQL effectively to solve real-world problems.
                </p>
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <b className="text-sm md:text-xl font-MOD20 block">
                    – Feb 2022
                  </b>
                  <b className="text-md md:text-2xl flex items-center">
                    <a
                      href="https://drive.google.com/file/d/1yzrxQuVdv5Znb_Fp5R65fRlqBn2BLAdq/view"
                      target="_blank"
                      className="text-md md:text-2xl items-center flex hover:text-black hover:underline hover:font-bold"
                    >
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 sm:hidden"
                      />
                      Developer Program - Accenture by Forage.
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 hidden sm:block"
                      />
                    </a>
                  </b>
                  <br />
                  Credential ID : <span className="font-bold">XspMgC4Fw5zfHkvgy</span>
                  <br />
                  Define technical requirements • Design changes to existing
                  architecture • Scale on-premise systems to the cloud • Read
                  and understand code • Attention to detail • Debugging
                  algorithms • Unit testing • User Acceptance Testing (UAT) •
                  Security maturity assessment • IAM policies and permissions •
                  Secure the Software Development Lifecycle (SDLC) • Shape the
                  problem • Data and privacy
                </p>
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
                  <b className="text-sm md:text-xl font-MOD20 block">
                    – Feb 2021
                  </b>
                  <b className="text-md md:text-2xl flex items-center">
                    <a
                      href="https://drive.google.com/file/d/1JwCmlhpVbKettWO4t0oIvG9hy0dEZ5F4/view"
                      target="_blank"
                      className="text-md md:text-2xl items-center flex hover:text-black hover:underline hover:font-bold"
                    >
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 sm:hidden"
                      />
                      TCS iON Career Edge - Tata Consultancy Services.
                      <Image
                        src="/link.gif"
                        alt="link"
                        width={30}
                        height={30}
                        className="mr-2 hidden sm:block"
                      />
                    </a>
                  </b>
                  <br />
                  Credential ID : <span className="font-bold">119854-20189486-1016</span>
                  <br />
                  Master Communication Skills • Excel in Presentation Skills •
                  Enhance Soft Skills • Follow a Career Guidance Framework •
                  Perfect Resume Writing • Sharpen Group Discussion Skills • Ace
                  Interview Skills • Learn Business Etiquette • Write Effective
                  Emails • Improve Telephone Etiquette • Grasp Accounting
                  Fundamentals • Build IT Foundational Skills • Get an Overview
                  of Artificial Intelligence
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
