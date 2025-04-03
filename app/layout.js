import localFont from "next/font/local";
import "./globals.css";
import BottomToUpButton from "@/components/BottomToUpButton";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

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

export const metadata = {
  title: "Shalimar Mehra • Web Developer",
  description: "SM's Portfolio Website  •  Web Developer  •  Designer •  Shalimar Mehra •  Portfolio",
  image: "/hero-img.jpeg",
  url: "https://www.shalimarmehra.tech",
  type: "website",
  siteName: "Shalimar Mehra",
  creator: "Shalimar Mehra",
  keywords: "Shalimar Mehra, Portfolio, Web Developer, Designer",
  twitter: {
    card: "summary_large_image",
    site: "@shalimarmehra",
    creator: "@shalimarmehra",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Analytics />
        <GoogleAnalytics gaId="G-59ZWKHYBGY" />
        <BottomToUpButton />
      </body>
    </html>
  );
}
