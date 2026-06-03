"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/eventData";
import { Compass, CheckCircle2 } from "lucide-react";

export default function TOC() {
  const [activeSection, setActiveSection] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="toc" ref={containerRef} className="py-24 border-y border-white/5 bg-transparent relative z-10">
      {/* Background visual detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 justify-center">
            <Compass size={14} className="animate-spin-slow" />
            <span>Journey Map</span>
          </div>
          
          <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white tracking-tight uppercase mb-4">
            EXPLORE{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
              INNOVOTSAVA
            </span>
          </h2>
          
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mb-6">
            Navigate through the official event handbook. Select any milestone below to travel directly to that sector of the innovation universe.
          </p>

          {/* Centered Indicator Pill */}
          {activeSection && (
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Current Sector:</span>
              <span className="text-white font-syne font-bold text-xs uppercase">
                {sections.find((s) => s.id === activeSection)?.label || "Exploration Phase"}
              </span>
            </div>
          )}
        </div>

        {/* Grid Map of Handbook Items */}
        <div ref={listRef} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sections.map((sec, index) => {
              const isActive = activeSection === sec.id;
              
              return (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className={`group text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 backdrop-blur-md cursor-pointer ${
                    isActive
                      ? "bg-blue-500/10 border-blue-500/30 text-white shadow-[0_4px_24px_-8px_rgba(59,130,246,0.2)]"
                      : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1"
                  }`}
                >
                  <span className={`font-mono text-xs font-semibold ${isActive ? "text-blue-400" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                    {sec.num}
                  </span>
                  
                  <span className="font-syne font-semibold text-xs uppercase tracking-wide flex-1">
                    {sec.label}
                  </span>

                  <span className={`text-[10px] font-mono transition-all duration-300 ${isActive ? "text-blue-400 translate-x-0" : "text-neutral-700 group-hover:text-neutral-400 group-hover:translate-x-1"}`}>
                    {isActive ? <CheckCircle2 size={14} className="text-blue-400" /> : "→"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
