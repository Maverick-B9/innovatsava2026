"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Re-reveal the main logo in the final section
      gsap.fromTo(
        logoRef.current,
        { scale: 0.5, opacity: 0, filter: "drop-shadow(0 0 0px rgba(59,130,246,0))" },
        {
          scale: 1,
          opacity: 1,
          filter: "drop-shadow(0 0 30px rgba(139,92,246,0.3))",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slide in final text coordinates
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-36 pb-24 bg-black flex flex-col items-center justify-start overflow-hidden z-10"
    >
      {/* Dynamic Glowing Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-purple-600/5 via-emerald-600/2 to-amber-600/3 blur-[130px] pointer-events-none -z-10 animate-pulse" />

      {/* Main Container */}
      <div className="flex flex-col items-center text-center max-w-4xl px-6 w-full">
        
        {/* Reappearing Logo */}
        <div
          ref={logoRef}
          className="relative w-[clamp(8rem,18vw,12rem)] h-[clamp(8rem,18vw,12rem)] mb-8 filter drop-shadow-[0_0_20px_rgba(139,92,246,0.2)] animate-glow"
        >
          <img
            src="/assets/innovotsava.png"
            alt="Innovotsava 2026 Final Badge"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Coordinates */}
        <div ref={contentRef} className="flex flex-col items-center w-full">
          
          <h1 className="font-syne font-extrabold text-[clamp(2.25rem,7.5vw,5.5rem)] tracking-tight leading-none text-white mb-8 uppercase">
            INNOVOTSAVA
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
              2026
            </span>
          </h1>
          
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-lg leading-relaxed mb-8">
            Two days. Five competitions. Ten industry AI demonstrations. One unforgettable experience. We can&apos;t wait to see what you build.
          </p>

          {/* Quick Specifications Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-400">
              <Calendar size={12} className="text-purple-400" />
              <span>June 12–13, 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-400">
              <MapPin size={12} className="text-emerald-400" />
              <span>APJ Abdul Kalam OAT, MITM Mysore</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-400">
              <Users size={12} className="text-blue-400" />
              <span>1,000 Max Capacity</span>
            </div>
          </div>

          {/* Final glowing CTA */}
          <div className="mb-12">
            <a
              href="https://forms.gle/czSNtNMVkFj6h6jK9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full text-xs font-mono tracking-widest text-white uppercase border border-purple-500/40 bg-purple-500/10 font-bold transition-all duration-300 shadow-[0_4px_30px_-8px_rgba(168,85,247,0.4)] hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/60 cursor-pointer pointer-events-auto"
            >
              Register Now
            </a>
          </div>

          {/* Footer Credits & Metadata */}
          <div className="mt-16 border-t border-white/10 pt-8 w-full max-w-2xl text-center">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-loose">
              Organized by Stack Forge Club &bull; Dept. of CSE &bull; Maharaja Institute of Technology Mysore
            </div>
            <div className="text-[9px] text-neutral-600 font-mono mt-4">
              &copy; 2026 Innovotsava &mdash; Official Event Handbook &bull; All Rights Reserved
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
