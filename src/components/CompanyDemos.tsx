"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyDemos } from "@/data/eventData";
import { HardHat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CompanyDemos() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = scrollRef.current!.querySelectorAll(".demo-3d-card");
      const mm = gsap.matchMedia();

      // Desktop layout: pin viewport and scrub horizontal slide
      mm.add("(min-width: 1024px)", () => {
        const horizontalTween = gsap.to(scrollRef.current, {
          x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: ".inner-pin-container",
            scrub: 0.1, // synchronized scrub to prevent laggy unpin overlap
            invalidateOnRefresh: true,
          },
        });

        // Apply 3D tilt/rotation and focus scaling based on card position
        cards.forEach((card) => {
          const cardTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 95%",
              end: "right 5%",
              scrub: true,
            },
          });

          // Set initial transform perspective
          gsap.set(card, { transformPerspective: 1000 });

          cardTimeline
            .fromTo(
              card,
              { rotateY: 35, scale: 0.8, opacity: 0.3 },
              { rotateY: 0, scale: 1.05, opacity: 1, duration: 0.5, ease: "power1.out" }
            )
            .to(
              card,
              { rotateY: -35, scale: 0.8, opacity: 0.3, duration: 0.5, ease: "power1.in" }
            );
        });
      });

      // Mobile layout: Reset styles for native touch swipe scrolling
      mm.add("(max-width: 1023px)", () => {
        gsap.set(scrollRef.current, { x: 0 });
        cards.forEach((card) => {
          gsap.set(card, { rotateY: 0, scale: 1, opacity: 1, transformPerspective: "none" });
        });
      });

      return () => mm.revert();
    },
    { scope: triggerRef }
  );

  return (
    <div ref={triggerRef} id="demos" className="relative h-auto lg:h-[300vh] w-full bg-transparent z-10 lg:overflow-hidden">
      {/* Absolute Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />

      {/* Pinned Viewport */}
      <div className="inner-pin-container w-full min-h-screen lg:h-screen flex flex-col justify-center bg-transparent py-16 lg:py-0 lg:overflow-hidden lg:pt-28">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase block mb-2">
            § 11 &mdash; Showcase
          </span>
          <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-2">
            COMPANY AI <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">DEMONSTRATIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl font-light">
            10 industry-leading technology vendors demonstrate actual AI implementations on the main stage. Scroll horizontally to preview the products.
          </p>
        </div>

        {/* 3D Stack Container */}
        <div
          ref={scrollRef}
          className="flex h-auto lg:h-[55vh] items-center gap-8 lg:gap-16 px-6 lg:px-24 w-full lg:w-fit overflow-x-auto lg:overflow-x-visible no-scrollbar select-none py-4 lg:py-0"
          style={{ perspective: "1200px" }}
        >
          
          {/* Card 1: Intro Panel */}
          <div className="w-[80vw] lg:w-[30vw] flex-shrink-0 flex flex-col justify-center h-full border-r border-white/5 pr-8 lg:pr-12 max-lg:pb-6 max-lg:border-b max-lg:border-r-0 max-lg:mb-6">
            <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-4">
              <HardHat size={14} className="animate-pulse" />
              <span>Conclave Stage</span>
            </div>
            <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight leading-none mb-4">
              THE VENDOR<br />SHOWCASE
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed font-light">
              Each vendor has a 15-minute slot to demonstrate live applications and 5 minutes for technical Q&A with students and faculty delegates.
            </p>
          </div>

          {/* Company Cards */}
          {companyDemos.map((demo, idx) => (
            <div
              key={idx}
              className="demo-3d-card w-[80vw] sm:w-[32vw] h-[40vh] flex-shrink-0 p-8 rounded-2xl glass-card border border-white/5 flex flex-col justify-between transform-gpu"
              style={{
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <div>
                <div className="font-mono text-xs text-purple-400 mb-2">0{idx+1} / VENDOR</div>
                <h4 className="font-syne font-extrabold text-xl text-white uppercase tracking-wider mb-2">
                  {demo.name}
                </h4>
                <div className="inline-block px-3 py-1 rounded-md text-[10px] font-mono border border-purple-500/20 bg-purple-500/10 text-purple-300 mb-6 uppercase">
                  {demo.product}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {demo.desc}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                <span>STAGE ARENA A</span>
                <span className="text-purple-400 font-semibold">15 MIN SLOT</span>
              </div>
            </div>
          ))}

          {/* Spacer at the end to center FinFlow (the last card) on desktop */}
          <div className="hidden lg:block w-[35vw] flex-shrink-0 pointer-events-none" />

        </div>
      </div>
    </div>
  );
}
