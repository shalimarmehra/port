"use client";
import Image from "next/image";
import Link from "next/link";
import { MdInfoOutline } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="bg-[url('/about-bg.png')] bg-cover bg-center">
        <section id="about" className="py-5">
          <span className="ml-5 font-Mitr xl:ml-24">
            .../About me - Who am i ...
          </span>

          <div className="container mx-auto px-4 my-5">
            {/* <div className="flex items-center md:py-5 xl:py-0 sm:pl-[7rem] xl:pl-[25rem] justify-end sm:justify-start">
            <h2 className="text-3xl sm:text-4xl lg:text-8xl font-bold mr-20 font-italianno opacity-25  sm:w-auto">
              <i>WHO AM I</i>
            </h2>
          </div> */}
            <div className="flex flex-row items-start p-2">
              <Image
                src="/bullet-point.png"
                width={16}
                height={16}
                alt="bullet point icon"
                className="mt-1 mr-2"
              />
              <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                Hi, I&apos;m <b>Shalimar Mehra</b>. I hold a Bachelor&apos;s
                degree in Computer Applications and am currently pursuing a
                Master of Computer Applications (MCA) with a specialization in
                Computing and Software Systems from IGNOU (Indira Gandhi
                National Open University).
                <br />
                <br />
                Throughout my educational journey, I have undertaken various
                courses and certifications to continually enhance my skills in
                the ever-evolving fields of technology and design. My academic
                background has provided me with a strong foundation in software
                engineering, web development, and UI/UX design, enabling me to
                develop a versatile skill set that bridges the gap between
                technical proficiency and creative innovation.
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
                  className="mt-1 mr-2"
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
                  className="mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Passion for Innovation →</b>
                  <br />
                  <br />I am deeply passionate about exploring new trends and
                  innovations in the technology sector. My curiosity drives me
                  to stay updated with the latest developments, ensuring that I
                  remain at the forefront of industry advancements. Whether
                  it&apos;s experimenting with emerging technologies or
                  integrating cutting-edge design principles, I am always eager
                  to push the boundaries of what&apos;s possible.
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
                  className="mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Freelancing and Collaborations →</b>
                  <br />
                  <br />
                  Beyond my entrepreneurial ventures, I actively seek
                  opportunities for freelancing and collaborations. I believe
                  that working with diverse teams and projects not only broadens
                  my perspective but also allows me to contribute my unique
                  skill set to a variety of creative and technical endeavors. My
                  goal is to build meaningful connections and work on projects
                  that make a positive impact.
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
                  className="mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost">
                  <b>Sharing Knowledge →</b>
                  <br />
                  <br />
                  As a proponent of continuous learning and knowledge sharing, I
                  maintain an active and vibrant presence on my YouTube
                  channels.
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
          <div className="flex flex-row justify-center items-center text-center p-4 ml-6">
            <div className="stats-block w-full sm:w-2/6 flex flex-col justify-center items-center">
              <div className="flex items-center text-left">
                <h3 className="font-Pixelify font-black text-5xl md:text-7xl">
                  03+
                </h3>
                <p className="text-sm md:text-xl font-ost">
                  YEARS OF <br />
                  <b>EXPERIENCE</b>
                </p>
              </div>
            </div>
            <div className="stats-block w-full sm:w-1/3 flex flex-col justify-center items-center">
              <div className="flex items-center text-left">
                <h3 className="font-Pixelify font-black text-5xl md:text-7xl">
                  10+
                </h3>
                <p className="text-sm md:text-xl font-ost">
                  COMPLETED <br />
                  <b>WORKS</b>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-6 px-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-3 w-full max-w-screen-lg mx-auto">
              <Link
                href="https://github.com/shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/shalimarmehra/"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>X</span>
              </Link>
              <Link
                href="https://instagram.com/shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center col-span-2 sm:col-span-1 w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>YouTube</span>
              </Link>
            </div>
            <a
              href="/resume.pdf"
              download
              className="text-white font-semibold bg-zinc-800 hover:bg-zinc-700 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base transition-colors flex items-center gap-2 mx-2 my-5"
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
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
