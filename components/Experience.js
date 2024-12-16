import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <>
      <div className="bg-[url('/experience-bg.png')] bg-cover bg-center">
        <section id="experience" className="py-5">
          <span className="ml-5 xl:ml-24 font-Mitr">
            .../Experience - Professional Timeline ...
          </span>
          {/* <div className="flex items-center md:py-5 xl:py-0 sm:pl-[7rem] xl:pl-[25rem] justify-end sm:justify-start">
          <h2 className="text-3xl sm:text-4xl lg:text-8xl font-bold mr-20 font-italianno opacity-25  sm:w-auto">
            <i>Professional Timeline</i>
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
                <b>Founder & Lead Developer →</b>
                <b className="text-sm md:text-xl font-MOD20 block">
                  Dev Dossier • July 2024 -{" "}
                  <span className="text-green-800">Present</span>
                </b>
              </p>
            </div>
            <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost pl-5">
              <ul className="italic font-ost list-disc ml-3 ">
                <li>
                  Founded and operate Dev Dossier, a successful web development
                  business delivering comprehensive services including web
                  design, development, and maintenance.
                </li>
                <li>
                  Lead a team of skilled developers and designers, ensuring the
                  delivery of high-quality web solutions for clients across
                  various industries.
                </li>
                <li>
                  Implement best practices in project management, client
                  communication, and technical development, driving customer
                  satisfaction and business growth.
                </li>
              </ul>
            </div>
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
                <b>Freelance Web Developer →</b>
                <b className="text-sm md:text-xl font-MOD20 block">
                  Self-Employed • July 2023 - May 2024 •{" "}
                  <span className="text-red-800">11 mos</span>
                </b>
              </p>
            </div>
            <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost pl-5">
              <ul className="italic font-ost list-disc ml-3">
                <li>
                  Designed and developed custom websites for diverse clients,
                  utilizing both WordPress and custom coding (HTML, CSS,
                  JavaScript).
                </li>
                <li>
                  Provided continuous maintenance and updates, ensuring optimal
                  performance and security of client websites.
                </li>
                <li>
                  Collaborated closely with clients to understand their needs
                  and deliver tailored web solutions that enhanced their online
                  presence.
                </li>
              </ul>
            </div>
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
                <b>Web Developer →</b>
                <b className="text-sm md:text-xl font-MOD20 block">
                  Self-Initiated Projects • February 2022 - February 2023 •{" "}
                  <span className="text-red-800">1 year</span>
                </b>
              </p>
            </div>
            <div className="text-gray-700 mb-4 text-justify text-sm sm:text-base max-w-full font-ost pl-5">
              <ul className="italic font-ost list-disc ml-3">
                <li>
                  Launched and managed several websites, including blog
                  websites, affiliate websites, and product comparison websites,
                  gaining hands-on experience in web development and digital
                  marketing.
                </li>
                <li>
                  Developed strong skills in project management, user experience
                  design, and troubleshooting, despite the eventual shutdown of
                  these projects.
                </li>
                <li>
                  Leveraged lessons learned from these initiatives to improve
                  future projects and client work, demonstrating resilience and
                  a commitment to continuous improvement.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
