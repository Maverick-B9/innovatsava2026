"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Top section fade in
      gsap.fromTo(
        topRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Giant brand text reveal
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brandRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Bottom credits fade
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#050508] overflow-hidden z-10"
    >
      {/* ============== TOP SECTION ============== */}
      <div
        ref={topRef}
        className="relative max-w-6xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-20"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-gradient-to-b from-blue-950/10 via-purple-950/5 to-transparent blur-[120px] pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          {/* Left: Logo + Title + Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 mb-5 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              <img
                src="/assets/innovotsava.png"
                alt="Innovotsava 2026 Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="font-syne font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight leading-none mb-2">
              INNOVOTSAVA
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-2">
                &apos;26
              </span>
            </h2>
            <p className="font-mono text-[10px] md:text-xs text-neutral-500 uppercase tracking-[0.25em]">
              National Level Technology Festival
            </p>
          </div>

          {/* Right: CTA + Social */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {/* Register Button */}
            <a
              href="https://forms.gle/czSNtNMVkFj6h6jK9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-3.5 rounded-full text-xs font-mono tracking-[0.2em] text-white uppercase border border-purple-500/40 bg-purple-500/10 font-bold transition-all duration-300 shadow-[0_4px_30px_-8px_rgba(168,85,247,0.4)] hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/60 cursor-pointer"
            >
              Register Now
              <span className="absolute inset-0 rounded-full bg-purple-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/stack.forge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors duration-300"
              aria-label="Follow Stack Forge on Instagram"
            >
              {/* Instagram SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-widest">
                @stack.forge
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ============== GIANT BRAND TEXT ============== */}
      <div
        ref={brandRef}
        className="relative w-full overflow-hidden select-none py-8 md:py-12"
      >
        {/* Large "INNOVOTSAVA" text like the "parallel" reference */}
        <div className="flex justify-center px-4">
          <h1 className="font-syne font-extrabold text-[clamp(3.5rem,15vw,12rem)] tracking-tighter leading-none text-white/[0.04] uppercase whitespace-nowrap pointer-events-none">
            INNOVOTSAVA
          </h1>
        </div>
      </div>

      {/* ============== BOTTOM SECTION ============== */}
      <div
        ref={bottomRef}
        className="relative border-t border-white/[0.06] bg-[#030306]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col items-center gap-8">
          {/* Stack Forge Logo + Tagline */}
          <div className="flex flex-col items-center gap-4">
            {/* Stack Forge Logo */}
            <div className="w-12 h-12 md:w-14 md:h-14 filter drop-shadow-[0_0_12px_rgba(139,92,246,0.2)]">
              <img
                src="/assets/stack_forge.png"
                alt="Stack Forge Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="font-syne font-semibold text-sm md:text-base text-neutral-300 uppercase tracking-[0.15em]">
              A Stack Forge&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
                Utsava
              </span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Credits */}
          <div className="text-center">
            <p className="font-mono text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-[0.2em] leading-relaxed max-w-lg">
              Developed by{" "}
              <span className="text-neutral-300 font-semibold">Shreyas M</span>
              ,{" "}
              <span className="text-neutral-300 font-semibold">Balaram B</span>
              {" "}of Department of Computer Science and Engineering
            </p>
          </div>

          {/* Copyright */}
          <div className="text-[8px] md:text-[9px] text-neutral-600 font-mono tracking-wider">
            &copy; 2026 Innovotsava &mdash; All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
