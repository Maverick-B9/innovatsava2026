"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sentences = [
  "Innovotsava 2026 is more than a college festival — it is a movement.",
  "We have designed this two-day national-level experience to bridge the gap between academia, industry, and society.",
  "Giving students from across the country a platform to demonstrate technology that solves real problems.",
  "Whether you're here to compete in robotics, pitch a groundbreaking AI startup, showcase your research, or witness the future of AI from industry leaders — there is something here for every curious mind.",
  "We encourage you to collaborate, to push boundaries, and to leave inspired.",
  "This handbook is your complete guide to Innovotsava 2026.",
  "Please read it carefully and carry it with you throughout the event.",
  "We wish you the very best in your endeavours.",
];

export default function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = textRef.current?.querySelectorAll(".sentence-span");
      if (!targets || targets.length === 0) return;

      const mm = gsap.matchMedia();

      // Desktop layout: pin and scrub sentences sentence-by-sentence
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: containerRef.current,
            pinSpacing: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        // Set initial state: all sentences hidden
        gsap.set(targets, { opacity: 0, filter: "blur(2px)" });

        targets.forEach((target, index) => {
          tl.to(
            target,
            {
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.6,
              ease: "power2.out",
            },
            index * 0.8
          );
        });
      });

      // Mobile layout: simple stagger fade in
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          targets,
          { opacity: 0.15, filter: "blur(2px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: triggerRef }
  );

  return (
    <div ref={triggerRef} id="welcome" className="relative h-auto lg:h-[180vh] w-full">
      <div
        ref={containerRef}
        className="w-full min-h-screen lg:h-screen flex items-center justify-center lg:justify-start lg:pt-36 relative overflow-y-auto lg:overflow-hidden bg-transparent z-10 px-6 md:px-12 py-16 lg:py-0"
      >
        <div className="max-w-4xl w-full flex flex-col items-center text-center mx-auto">
          
          {/* Centered Heading and Info */}
          <div className="mb-8 flex flex-col items-center">
            <span className="font-mono text-xs tracking-[0.25em] text-blue-500 uppercase mb-2">
              § 01 &mdash; Inauguration
            </span>
            <h2 className="font-syne font-extrabold text-[clamp(1.5rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4 text-center">
              A MESSAGE FROM THE{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                ORGANIZERS
              </span>
            </h2>
            
            {/* Centered Organizers Metadata */}
            <div className="flex flex-wrap justify-center gap-6 mt-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider text-center">
              <div>
                Dr. Murali S &bull; <span className="text-neutral-500">Patron, Principal MITM</span>
              </div>
              <div className="text-neutral-600 max-sm:hidden">|</div>
              <div>
                Dr. Shivamurthy R C &bull; <span className="text-neutral-500">Event Convenor, HOD CSE</span>
              </div>
            </div>
          </div>

          {/* Centered card block */}
          <div className="w-full">
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-xl shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <p
                ref={textRef}
                className="text-[clamp(0.875rem,2vw,1.35rem)] font-syne font-medium leading-relaxed text-white tracking-tight relative z-10 text-center"
              >
                {sentences.map((sentence, idx) => (
                  <span
                    key={idx}
                    className="sentence-span transition-all duration-300 mx-1.5 inline"
                  >
                    {sentence}
                  </span>
                ))}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
