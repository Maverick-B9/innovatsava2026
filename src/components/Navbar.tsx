"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "welcome", label: "Welcome" },
  { id: "overview", label: "Overview" },
  { id: "venue", label: "Venue" },
  { id: "day1", label: "Day 1" },
  { id: "events", label: "Competitions" },
  { id: "day2", label: "Day 2" },
  { id: "guidelines", label: "Guidelines" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background body scroll when mobile hamburger overlay is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none w-full"
      >
        {/* ================= DESKTOP NAV ================= */}
        <nav
          className={`hidden lg:flex items-center px-2 py-2 rounded-[24px] pointer-events-auto transition-all duration-500 border max-w-4xl ${
            scrolled
              ? "bg-black/40 backdrop-blur-[24px] border-white/5 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.7)]"
              : "bg-white/[0.02] backdrop-blur-[12px] border-white/[0.04]"
          }`}
          style={{ borderRadius: "24px" }}
        >
          <div className="flex items-center gap-1 shrink-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="relative px-4 py-2 text-xs font-medium font-mono uppercase tracking-widest transition-colors duration-300 rounded-[16px] cursor-pointer"
                  style={{
                    color: isActive ? "#ffffff" : isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)",
                  }}
                >
                  {isHovered && (
                    <motion.span
                      layoutId="navHoverBackdrop"
                      className="absolute inset-0 bg-white/[0.04] rounded-[14px] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 bg-white/10 rounded-[14px] border border-white/10 -z-10 shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* ================= MOBILE/TABLET HEADER BAR ================= */}
        <div
          className={`flex lg:hidden items-center justify-between w-full max-w-[95vw] md:max-w-xl bg-black/40 backdrop-blur-[24px] border px-6 py-4 rounded-[24px] pointer-events-auto transition-all duration-500 ${
            scrolled ? "border-white/5 shadow-2xl bg-black/60" : "border-white/[0.04]"
          }`}
        >
          {/* Logo Brand */}
          <span className="font-syne font-extrabold text-[13px] leading-none tracking-[0.2em] text-white uppercase select-none flex items-center pt-0.5">
            INNOVOTSAVA <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-extrabold ml-1">&apos;26</span>
          </span>

          {/* Hamburger Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none focus:ring-0 cursor-pointer pointer-events-auto"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-1"
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-screen h-screen bg-[#06060c]/98 backdrop-blur-[32px] z-40 flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Nav Items List */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="flex flex-col items-center gap-6 overflow-y-auto max-h-[80vh] w-full py-4 px-6 no-scrollbar"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      open: { y: 0, opacity: 1, filter: "blur(0px)" },
                      closed: { y: 15, opacity: 0, filter: "blur(3px)" },
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    className="w-full flex justify-center"
                  >
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleLinkClick(item.id);
                      }}
                      className={`relative font-mono text-sm sm:text-base tracking-[0.25em] uppercase transition-colors duration-300 py-1 cursor-pointer block text-center ${
                        isActive ? "text-cyan-400 font-extrabold scale-105" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
