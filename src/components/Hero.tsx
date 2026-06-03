"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeBackground from "./ThreeBackground";
import { ArrowDown } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useGSAP(
    () => {
      // Pinned ScrollTrigger for the 200vh block
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: containerRef.current,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          // Track scroll progress to pass to WebGL particle system
          setScrollY(self.scroll());
        },
      });

      // Animate logo scaling and text fading
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.5,
        },
      });

      tl.to(logoRef.current, {
        scale: 0.45,
        y: -100,
        opacity: 0.9,
        filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))",
        ease: "none",
      })
        .to(
          textRef.current,
          {
            opacity: 0,
            y: -50,
            ease: "none",
          },
          0
        );
    },
    { scope: triggerRef }
  );

  return (
    <div ref={triggerRef} className="relative h-[130vh] w-full">
      {/* Pinned viewport */}
      <div
        ref={containerRef}
        className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent select-none"
      >
        {/* Three.js Orbit Background (WebGL) */}
        <ThreeBackground scrollY={scrollY} />

        {/* Ambient radial overlays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-10 w-[40vw] h-[40vw] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none z-0" />

        {/* Content container */}
        <div className="flex flex-col items-center justify-center text-center px-6 max-w-4xl z-10">
          {/* Main Logo */}
          <div
            ref={logoRef}
            className="relative w-[clamp(16rem,45vw,36rem)] mt-16 lg:mt-24 mb-4 transition-all duration-300 filter drop-shadow-[0_0_35px_rgba(59,130,246,0.35)] animate-glow flex justify-center z-20"
          >
            <img
              src="/assets/innovotsava.png"
              alt="Innovotsava 2026 Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text contents */}
          <div ref={textRef} className="flex flex-col items-center">
            {/* National Level Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-6 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse shrink-0" />
              <span className="truncate">National Level Technology Festival</span>
            </div>

            {/* Title */}
            <h1 className="font-syne font-extrabold text-[clamp(2.25rem,7.5vw,5.5rem)] tracking-tight leading-none text-white mb-4 uppercase">
              INNOVOTSAVA
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            {/* Date */}
            <p className="font-mono text-[clamp(0.75rem,1.8vw,1rem)] tracking-[0.3em] text-cyan-500/80 mb-6 uppercase">
              JUNE 12 &ndash; 13, 2026
            </p>

            {/* Tagline */}
            <p className="text-[clamp(0.8rem,1.8vw,1.1rem)] text-neutral-400 font-light max-w-xl leading-relaxed mb-8 px-4">
              Innovation at its Best &mdash; A convergence of competitive technology,
              applied research, entrepreneurship, and cultural celebration.
            </p>

            {/* Registration button */}
            <div className="mb-10">
              <a
                href="https://forms.gle/czSNtNMVkFj6h6jK9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-mono tracking-widest text-white uppercase border border-blue-500/40 bg-blue-500/10 font-bold transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(59,130,246,0.3)] hover:scale-105 hover:bg-blue-500/20 hover:border-blue-500/60 cursor-pointer pointer-events-auto"
              >
                Register Now
              </a>
            </div>

            {/* Call to Scroll */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] text-neutral-500 uppercase cursor-pointer"
              onClick={() => {
                const el = document.getElementById("welcome");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Explore Universe</span>
              <ArrowDown size={14} className="text-neutral-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
