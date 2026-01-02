"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState, useEffect, Children } from "react";
import PreLoader from "@/components/PreLoader";
import CustomCursor from "@/components/CustomCursor";
import PassionAndProfessionToggle from "@/components/PassionAndProfessionToggle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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
          <CustomCursor/>
            <div className="sticky z-50">
              <NavBar />
            </div>
            <PassionAndProfessionToggle />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
