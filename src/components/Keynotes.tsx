"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { keynoteSpeakers } from "@/data/eventData";
import { Mic2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Keynotes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current!.querySelectorAll(".keynote-row");
      
      items.forEach((item) => {
        const image = item.querySelector(".parallax-bg");
        
        // Simple parallax scroll trigger on the background image
        gsap.fromTo(
          image,
          { y: "-10%" },
          {
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Slide text in on scroll (use y-axis to avoid horizontal overflow on mobile)
        gsap.fromTo(
          item.querySelector(".keynote-text-card"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="keynotes" ref={containerRef} className="py-24 bg-transparent relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[50vw] h-[50vh] bg-blue-950/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">
            <Mic2 size={14} className="animate-pulse" />
            <span>Sector 12 &mdash; Conclave Keynotes</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
            KEYNOTE <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">SESSIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
            Distinguished executives and technologists deliver keynotes sharing insights on the future of generative intelligence, funding models, and infrastructure.
          </p>
        </div>

        {/* Parallax Speakers List */}
        <div className="space-y-24">
          {keynoteSpeakers.map((speaker, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="keynote-row flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full"
              >
                
                {/* Speaker Portrait (Parallax Container) */}
                <div
                  className={`w-full md:w-[40%] h-[250px] md:h-[350px] rounded-2xl overflow-hidden relative border border-white/5 bg-white/[0.01] backdrop-blur-md ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div
                    className="parallax-bg absolute inset-0 w-full h-[120%] pointer-events-none scale-105"
                  >
                    <Image
                      src={`/assets/${speaker.avatar}.png`}
                      alt={speaker.name}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                  {/* Decorative glowing overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6 font-mono text-xs text-cyan-400 uppercase tracking-widest">
                    KEYNOTE SPEAKER
                  </div>
                </div>

                {/* Speaker Text Detail */}
                <div
                  className={`keynote-text-card w-full md:w-[60%] flex flex-col justify-center ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <span className="font-mono text-xs text-blue-500 uppercase tracking-wider mb-2">
                    Topic / {speaker.topic}
                  </span>
                  
                  <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight mb-2">
                    {speaker.name}
                  </h3>
                  
                  <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
                    {speaker.role}
                  </div>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6 border-l-2 border-blue-500/30 pl-4 py-1">
                    {speaker.bio}
                  </p>

                  <div className="flex gap-4 items-center">
                    <span className="font-mono text-[10px] text-neutral-600 uppercase">Track B</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="font-mono text-[10px] text-neutral-600 uppercase">APJ ABDUL KALAM OAT</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
