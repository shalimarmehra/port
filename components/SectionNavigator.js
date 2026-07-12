"use client";
import { useEffect, useState } from "react";

const PROFESSION_SECTIONS = [
  { id: "quick-bio",   label: "Bio" },
  { id: "projects",   label: "Projects" },
  { id: "youtube",    label: "YouTube" },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills" },
  { id: "creative",   label: "Creative" },
  { id: "playground", label: "Playground" },
  { id: "about",      label: "About" },
  { id: "contact",    label: "Contact" },
];

const PASSION_SECTIONS = [
  { id: "creative-overview", label: "Overview" },
  { id: "creative-videos",   label: "Videos" },
  { id: "creative-gaming",   label: "Gaming" },
  { id: "creative-hobbies",  label: "Travel" },
  { id: "church-media",      label: "Church Media" },
  { id: "contact",           label: "Contact" },
];

const SectionNavigator = () => {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const [viewState, setViewState] = useState("profession");

  // Load view state and listen to changes
  useEffect(() => {
    const saved = localStorage.getItem("portfolioViewState");
    if (saved === "passion" || saved === "profession") {
      setViewState(saved);
    }

    const handleViewChange = (e) => {
      const nextView = e.detail && e.detail.view ? e.detail.view : e.detail;
      if (nextView === "passion" || nextView === "profession") {
        setViewState(nextView);
      }
      setActive("");
    };

    window.addEventListener("portfolio-view-change", handleViewChange);
    return () => window.removeEventListener("portfolio-view-change", handleViewChange);
  }, []);

  const currentSections = viewState === "passion" ? PASSION_SECTIONS : PROFESSION_SECTIONS;

  useEffect(() => {
    // Show navigator after scrolling past hero
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      // Find the currently visible section
      const ids = currentSections.map((s) => s.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setActive(ids[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger scroll immediately to calculate active section on load or perspective shift
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
      }`}
    >
      {currentSections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          title={section.label}
          className="group relative flex items-center justify-end gap-2"
        >
          {/* Label tooltip */}
          <span className="absolute right-6 text-[10px] font-bold uppercase tracking-widest text-ink bg-white border border-warm-gray-200 px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            {section.label}
          </span>

          {/* Dot indicator */}
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === section.id
                ? viewState === "profession"
                  ? "w-3 h-3 bg-crimson shadow-[0_0_8px_rgba(198,40,40,0.6)]"
                  : "w-3 h-3 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                : "w-1.5 h-1.5 bg-warm-gray-300 " +
                  (viewState === "profession"
                    ? "group-hover:bg-crimson/60 group-hover:scale-125"
                    : "group-hover:bg-rose-500/60 group-hover:scale-125")
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default SectionNavigator;
