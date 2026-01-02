"use client";
import React, { useEffect, useState } from "react";
import Passion from "./passion/Passion";
import Profession from "./profession/Profession";

const PassionAndProfessionToggle = () => {
  const [view, setView] = useState("profession");

  // Load saved preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pp-view");
      if (saved === "passion" || saved === "profession") setView(saved);
    } catch (e) {}
  }, []);

  // Persist preference
  useEffect(() => {
    try {
      localStorage.setItem("pp-view", view);
    } catch (e) {}
  }, [view]);

  return (
    <>
      <div className="h-8 w-11/12 mx-auto flex justify-center items-center text-md md:text-xl font-semibold font-Pixelify uppercase rounded-full tracking-wide mt-8 bg-slate-100">
        Want to see my Profession or Passion?
      </div>

      <div className="flex justify-center my-6">
        <div
          role="tablist"
          aria-label="Choose Passion or Profession"
          className="relative inline-flex p-1 bg-gray-200 rounded-full shadow-sm"
        >
          {/* Sliding selection pill */}
          <div
            aria-hidden="true"
            className={`absolute top-1/2 left-0 h-[calc(100%-0.5rem)] w-1/2 -translate-y-1/2 transform rounded-full bg-black transition-all duration-300 motion-reduce:transition-none`}
            style={{ left: view === "profession" ? "0%" : "50%" }}
          />

          <button
            role="tab"
            aria-selected={view === "profession"}
            onClick={() => setView("profession")}
            className={`relative z-10 w-36 md:w-44 text-center px-4 py-2 rounded-full text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
              view === "profession" ? "text-white" : "text-black"
            }`}
          >
            Profession
          </button>

          <button
            role="tab"
            aria-selected={view === "passion"}
            onClick={() => setView("passion")}
            className={`relative z-10 w-36 md:w-44 text-center px-4 py-2 rounded-full text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
              view === "passion" ? "text-white" : "text-black"
            }`}
          >
            Passion
          </button>
        </div>
      </div>

      <div
        key={view}
        className="transition-opacity duration-400 ease-out motion-reduce:transition-none"
      >
        {view === "passion" ? <Passion /> : <Profession />}
      </div>
    </>
  );
};

export default PassionAndProfessionToggle;
