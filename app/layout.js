import localFont from "next/font/local";
import "./globals.css";
import BottomToUpButton from "@/components/BottomToUpButton";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import TerminalConsole from "@/components/TerminalConsole";

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
  title: "Shalimar Mehra • Full-Stack Developer • Content Creator • Entrepreneur",
  description: "Shalimar Mehra is a full-stack developer, content creator, and entrepreneur. He specializes in building web applications and creating engaging content.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var themes = {
                    crimson: { primary: '#C62828', primaryRgb: '198, 40, 40', secondary: '#8B0000', secondaryRgb: '139, 0, 0', light: '#E57373', bg50: '#FEF2F2' },
                    sage: { primary: '#2A5A44', primaryRgb: '42, 90, 68', secondary: '#1E3F2F', secondaryRgb: '30, 63, 47', light: '#73A98C', bg50: '#EEF6F2' },
                    indigo: { primary: '#312E81', primaryRgb: '49, 46, 129', secondary: '#1E1B4B', secondaryRgb: '30, 27, 75', light: '#6366F1', bg50: '#EEF2FF' },
                    ochre: { primary: '#B25E00', primaryRgb: '178, 94, 0', secondary: '#7F4200', secondaryRgb: '127, 66, 0', light: '#F59E0B', bg50: '#FFFBEB' },
                    violet: { primary: '#581C87', primaryRgb: '88, 28, 135', secondary: '#3B0764', secondaryRgb: '59, 7, 100', light: '#8B5CF6', bg50: '#FAF5FF' }
                  };
                  if (saved && themes[saved]) {
                    var theme = themes[saved];
                    var root = document.documentElement;
                    root.style.setProperty('--accent-primary', theme.primary);
                    root.style.setProperty('--accent-primary-rgb', theme.primaryRgb);
                    root.style.setProperty('--accent-secondary', theme.secondary);
                    root.style.setProperty('--accent-secondary-rgb', theme.secondaryRgb);
                    root.style.setProperty('--accent-light', theme.light);
                    root.style.setProperty('--accent-50', theme.bg50);
                    
                    var styleEl = document.createElement('style');
                    styleEl.id = 'custom-selection-style';
                    styleEl.innerHTML = '::selection { background-color: rgba(' + theme.primaryRgb + ', 0.15) !important; }';
                    document.head.appendChild(styleEl);
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream relative theme-transition`}
      >
        <div 
          className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.05]"
          style={{ backgroundImage: 'url("/bg-texture.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <ScrollProgress />
        <CustomCursor />
        <CommandPalette />
        <ThemeCustomizer />
        <TerminalConsole />
        <main>{children}</main>
        <Analytics />
        <GoogleAnalytics gaId="G-59ZWKHYBGY" />
        <BottomToUpButton />
      </body>
    </html>
  );
}
