import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div className="xl:bg-[url('/education-bg.png')] bg-[url('/education-bgm.png')] bg-cover bg-center">
        <section id="education">
          <span className="ml-5 xl:ml-24 font-Mitr">
            .../Education - Degrees & Certifications ...
          </span>
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
                className="mt-1 mr-2"
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
                BCA (Bachelor of Computer Application) - Indira Gandhi National
                Open University
              </b>
              <br />
              <br />
              Core Computing: Problem Solving and Programming, Systems Analysis
              and Design, Database Management • Programming Languages: C++,
              Java, Web Programming • Web & Networks: Internet Concepts,
              Computer Networks, Network Programming • Additional Skills:
              Business Communication, Software Engineering, Project Work.
            </p>
            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
              <b className="text-sm md:text-xl font-MOD20 block">
                – April 2018 - March 2019
              </b>
              <b className="text-md md:text-2xl">
                Class 12th - Central Board of Secondary Education
              </b>
              <br />
              <br />
              Commerce - Hindi • English • Accountancy • Economics • Business
              Studies • Physical Education.
            </p>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-row items-baseline p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="mt-1 mr-2"
              />
              <p className="text-gray-700 mb-4 text-justify text-xl sm:text-3xl max-w-full font-ost">
                <b>Courses Achievements →</b>
              </p>
            </div>

            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
              <b className="text-sm md:text-xl font-MOD20 block">
                – Feb 2019 - Feb 2022
              </b>
              <b className="text-md md:text-2xl flex">
                Master Diploma in Computer Engineering - Indian Institute of
                Computer Sciences
                <FaExternalLinkAlt className="ml-2" />
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
                className="mt-1 mr-2"
              />
              <p className="text-gray-700 mb-4 text-justify text-xl sm:text-3xl max-w-full font-ost">
                <b>Certifications Achievements →</b>
              </p>
            </div>

            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
              <b className="text-sm md:text-xl font-MOD20 block">– Oct 2023</b>
              <b className="text-md md:text-2xl flex">
                React JS- Complete Guide for Frontend Web Development - Udemy
                <FaExternalLinkAlt className="ml-2" />
              </b>
              <br />
              Crede.. ID : UC-4e91caf7-c484-4e33-b412-db5185f9bfc1
              <br />
              Elevate your front-end development skills with this comprehensive
              course. Master the creation of basic web pages using HTML5 and
              bring them to life with CSS3 styling and animations. Advance your
              JavaScript expertise from fundamental to advanced levels,
              including ES6. Develop responsive and interactive web pages using
              JavaScript and jQuery, and create user-friendly, visually
              stunning, high-performance websites with React JS. Transform into
              an expert front-end developer equipped with cutting-edge skills.
            </p>
            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
              <b className="text-sm md:text-xl font-MOD20 block">– Feb 2023</b>
              <b className="text-md md:text-2xl flex">
                MySQL Database Development Mastery - Udemy
                <FaExternalLinkAlt className="ml-2" />
              </b>
              <br />
              Crede.. ID : UC-546b187e-c260-4d7a-8e07-3c5306f583cc
              <br />
              Master the essentials of MySQL with hands-on experience. Learn to
              install MySQL Server and MySQL Workbench, establish connections,
              and create robust databases. Develop expertise in reverse
              engineering data models and forward engineering them into
              efficient databases. Enhance your skills by creating tables,
              running complex queries, and utilizing MySQL Workbench for
              day-to-day operations. Build and manage relationships, perform
              swift calculations with aggregate functions, and seamlessly export
              data to Excel. Gain practical insights and apply SQL effectively
              to solve real-world problems.
            </p>
            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
              <b className="text-sm md:text-xl font-MOD20 block">– Feb 2022</b>
              <b className="text-md md:text-2xl flex">
                Developer Program - Accenture by Forage
                <FaExternalLinkAlt className="ml-2" />
              </b>
              <br />
              Credential ID : XspMgC4Fw5zfHkvgy
              <br />
              Define technical requirements • Design changes to existing
              architecture • Scale on-premise systems to the cloud • Read and
              understand code • Attention to detail • Debugging algorithms •
              Unit testing • User Acceptance Testing (UAT) • Security maturity
              assessment • IAM policies and permissions • Secure the Software
              Development Lifecycle (SDLC) • Shape the problem • Data and
              privacy
            </p>
            <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost ml-7">
              <b className="text-sm md:text-xl font-MOD20 block">– Feb 2021</b>
              <b className="text-md md:text-2xl flex">
                TCS iON Career Edge - Tata Consultancy Services
                <FaExternalLinkAlt className="ml-2" />
              </b>
              <br />
              Credential ID : 119854-20189486-1016
              <br />
              Master Communication Skills • Excel in Presentation Skills •
              Enhance Soft Skills • Follow a Career Guidance Framework • Perfect
              Resume Writing • Sharpen Group Discussion Skills • Ace Interview
              Skills • Learn Business Etiquette • Write Effective Emails •
              Improve Telephone Etiquette • Grasp Accounting Fundamentals •
              Build IT Foundational Skills • Get an Overview of Artificial
              Intelligence
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
