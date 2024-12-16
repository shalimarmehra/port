"use client";
import localFont from "next/font/local";
import "./globals.css";
import BottomToUpButton from "@/components/BottomToUpButton";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader";
import CustomCursor from "@/components/CustomCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Shalimar Mehra",
//   description: "SM's Portfolio",
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor/>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <main>{children}</main>
            <BottomToUpButton />
          </>
        )}
      </body>
    </html>
  );
}
