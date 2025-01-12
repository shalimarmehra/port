"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-[url('/experience-bg.png')] bg-cover bg-center">
        <section ref={sectionRef} id="experience" className="py-5 opacity-0">
          <style jsx>{`
            @keyframes slideUp {
              from {
                transform: translateY(100px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .animate-slideUp {
              animation: slideUp 1s ease-in-out forwards;
            }
          `}</style>
          <span className="ml-5 xl:ml-24 font-Mitr">
            .../Experience - Professional Timeline ...
          </span>
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
              <ul className="font-ost list-disc ml-3 ">
                Founded and operate <b>Dev Dossier</b>, a successful web
                development business <b>delivering comprehensive services</b>{" "}
                including web design, development, and maintenance. Lead a team
                of <b>skilled developers and designers</b>, ensuring the
                delivery of <b>high-quality</b> web solutions for clients across
                various industries. Implement best practices in{" "}
                <b>
                  project management, client communication, and technical
                  development, driving customer satisfaction and business growth
                </b>
                .
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
              <ul className="font-ost list-disc ml-3">
                Designed and developed <b>custom websites</b> for diverse
                clients, utilizing both{" "}
                <b>WordPress and custom coding (HTML, CSS, JavaScript)</b>.
                Provided continuous <b>maintenance and updates</b>, ensuring{" "}
                <b>optimal performance and security</b> of client websites.
                Collaborated closely with clients to understand their needs and
                deliver tailored web solutions that enhanced their online
                presence.
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
              <ul className="font-ost list-disc ml-3">
                Launched and managed several websites, including blog websites,
                affiliate websites, and product comparison websites, gaining
                hands-on experience in web development and digital marketing.
                Developed strong skills in project management, user experience
                design, and troubleshooting, despite the eventual shutdown of
                these projects. Leveraged lessons learned from these initiatives
                to improve future projects and client work, demonstrating
                resilience and a commitment to continuous improvement.
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
