"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader";
import PassionAndProfessionToggle from "@/components/PassionAndProfessionToggle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewState, setViewState] = useState("profession");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Keep footer in sync with the passion/profession toggle
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
    }
    const handleViewChange = (e) => {
      setViewState(e.detail.view);
    };
    window.addEventListener("portfolio-view-change", handleViewChange);
    return () => window.removeEventListener("portfolio-view-change", handleViewChange);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    let scrollTriggerInstance;

    const initParallax = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);
        scrollTriggerInstance = ScrollTrigger;

        const watermarks = gsap.utils.toArray(".scroll-watermark");

        watermarks.forEach((watermark) => {
          const speed = parseFloat(watermark.getAttribute("data-speed") || "-0.15");

          gsap.fromTo(watermark,
            { y: 0 },
            {
              yPercent: speed * 100,
              ease: "none",
              scrollTrigger: {
                trigger: watermark.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );
        });
      } catch (err) {
        console.error("GSAP ScrollTrigger loading failed:", err);
      }
    };

    initParallax();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, [isLoading]);

  return (
    <>
      <div className="z-0">
        {isLoading ? (
          <PreLoader />
        ) : (
          <>
            <NavBar />
            <div className="pt-[72px]">
              <PassionAndProfessionToggle />
              <Footer viewState={viewState} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
