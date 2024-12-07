import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { PiCopyright } from "react-icons/pi";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <span className="ml-5 xl:ml-24 font-Mitr">.../Contact ...</span>
        <div className="flex items-center md:py-5 xl:py-0 sm:pl-[7rem] xl:pl-[25rem] justify-end sm:justify-start">
          <h2 className="text-3xl sm:text-4xl lg:text-8xl font-bold mr-20 font-italianno opacity-25  sm:w-auto">
            <i>Let&apos;s Talk</i>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center text-center p-4 ml-6">
          <div className="stats-block w-full sm:w-full md:w-full flex flex-col justify-center items-center">
            <div className="flex items-center justify-center">
              <h3 className="font-MS text-3xl md:text-5xl lg:text-7xl">
                SHALIMAR MEHRA
              </h3>
            </div>
            {/* <h3 className="font-MS text-3xl md:text-5xl lg:text-7xl text-center">
              MEHRA
            </h3> */}
          </div>{" "}
          <div className="stats-block w-full  flex flex-col justify-center items-center">
            <div className="flex items-center text-left">
              <div className="items-baseline p-2">
                <p className="text-gray-700 mb-4 text-justify text-xl sm:text-2xl md:text-3xl max-w-full font-MSD">
                  <b className="flex">Contact Details:-</b>
                  <b className="text-sm md:text-lg lg:text-xl font-MOD20 block">
                    Whatsapp : +91 00000000000
                  </b>
                  <b className="text-sm md:text-lg lg:text-xl font-MOD20 block">
                    Email : shalimarmehra3@gmail.com
                  </b>
                </p>
                <p className="text-gray-700 mb-4 text-justify text-xl sm:text-2xl md:text-3xl max-w-full font-MSD">
                  <b className="flex">Important Links:-</b>
                  <b className="text-sm md:text-lg lg:text-xl font-MOD20 flex">
                    Portfolio : shalimarmehra.com
                    <FaExternalLinkAlt className="ml-2" />
                  </b>
                  <b className="text-sm md:text-lg lg:text-xl font-MOD20 flex">
                    Resume : Shalimar Mehra
                    <FaExternalLinkAlt className="ml-2" />
                  </b>
                  <b className="text-sm md:text-lg lg:text-xl font-MOD20 flex">
                    Site : devdossier.in
                    <FaExternalLinkAlt className="ml-2" />
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-6 px-10 mb-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-3 w-full max-w-screen-lg mx-auto">
            <Link
              href="https://github.com/yourusername"
              className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>X</span>
            </Link>
            <Link
              href="https://instagram.com/yourusername"
              className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
            </Link>
            <Link
              href="https://youtube.com/@yourusername"
              className="flex items-center px-3 py-2 sm:px-4 rounded-full border-2 border-black hover:bg-gray-100 transition-colors font-bold text-xs sm:text-sm justify-center col-span-2 sm:col-span-1 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>YouTube</span>
            </Link>
          </div>
        </div>
        <h3 className="flex items-center w-full">
          <span className="flex-grow bg-black rounded h-1 ml-[20px] md-ml-[72px]"></span>
          <PiCopyright className="mx-1 text-md font-bold w-8 h-8" />
          <span className="flex-grow bg-black rounded h-1 mr-[20px] md-mr-[72px]"></span>
        </h3>
        <div className="flex justify-center items-center font-serif text-center p-4">
          <span>
            Copyright © 2024 - 2025 Shalimar Mehra. All rights reserved.️
          </span>
        </div>
      </section>
    </>
  );
};

export default Contact;
