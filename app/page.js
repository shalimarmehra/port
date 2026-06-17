"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader";
import PassionAndProfessionToggle from "@/components/PassionAndProfessionToggle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}
