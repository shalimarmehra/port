"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { PiCopyright } from "react-icons/pi";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <div className="bg-[url('/contact-bg.png')] bg-cover bg-center">
        <section id="contact">
          <span className="ml-5 xl:ml-24 font-Mitr fade-in">
            .../Contact - Let&apos;s talk ...
          </span>
          <div className="container mx-auto px-4 my-5">
            <div className="w-full md:w-auto flex flex-col fade-in">
              <div className="flex flex-row items-baseline p-2">
                <Image
                  src="/bullet-point.png"
                  width={16}
                  height={16}
                  alt="bullet point icon"
                  className="mt-1 mr-2"
                />
                <p className="text-gray-700 mb-4 text-justify text-xl sm:text-3xl max-w-full font-ost">
                  <b className="font-bold">Contact Details →</b>
                </p>
              </div>
              <p className="text-gray-700 mb-4 text-justify text-xl sm:text-2xl md:text-3xl font-ost ml-7 fade-in">
                <b className="text-sm md:text-lg lg:text-xl font-MOD20 flex items-center">
                  <Image
                    src="/whatsapp.gif"
                    alt="Whatsapp Chat"
                    width={50}
                    height={50}
                  />
                  Whatsapp-chat :&nbsp;
                  <a
                    href="https://wa.me/919560362339"
                    className="underline flex items-center"
                  >
                    +91 9560362339
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                </b>
                <b className="text-sm md:text-lg lg:text-xl font-MOD20 flex items-center">
                  <Image
                    src="/gmail.gif"
                    alt="Whatsapp Chat"
                    width={20}
                    height={20}
                    className="ml-4 mr-4"
                  />
                  Email-me :&nbsp;
                  <a
                    href="mailto:shalimarmehra3@gmail.com"
                    className="underline flex items-center"
                  >
                    shalimarmehra3@gmail.com
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                </b>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-6 px-10 mb-5 fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-3 w-full max-w-screen-lg mx-auto">
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
                href="https://x.com/shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="mr-2" />
                <span>X</span>
              </Link>
              <Link
                href="https://www.instagram.com/shalimarmehra/"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram className="mr-2" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@shalimarmehra"
                className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-900 hover:text-white transition-colors font-bold text-xs sm:text-sm justify-center col-span-2 sm:col-span-1 w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube className="mr-2" />
                <span>YouTube</span>
              </Link>
            </div>
          </div>
          <h3 className="flex items-center w-full fade-in">
            <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
            <PiCopyright className="mx-1 text-md font-bold w-8 h-8" />
            <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
          </h3>
          <div className="flex justify-center items-center font-serif text-center p-4 text-sm sm:text-lg fade-in">
            <span>
              Copyright © 2024 - 2025 Shalimar Mehra. All rights reserved.️
            </span>
          </div>
        </section>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          visibility: hidden;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease forwards;
          visibility: visible;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;