"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { venueInfo } from "@/data/eventData";
import { Landmark, MapPin, ShieldAlert, Bus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Venue() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop layout: Pinned horizontal scroll
      mm.add("(min-width: 1024px)", () => {
        gsap.to(scrollRef.current, {
          x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: viewportRef.current,
            pinSpacing: true,
            scrub: 0.1, // synchronized scrub to prevent laggy unpin overlap
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile layout: Reset styles for vertical stack
      mm.add("(max-width: 1023px)", () => {
        gsap.set(scrollRef.current, { x: 0 });
      });

      return () => mm.revert();
    },
    { scope: triggerRef }
  );

  return (
    <div ref={triggerRef} id="venue" className="relative h-auto lg:h-[300vh] w-full bg-transparent z-10">
      {/* Pinned horizontal scrolling viewport */}
      <div
        ref={viewportRef}
        className="w-full min-h-screen lg:h-screen flex flex-col justify-center relative overflow-y-auto lg:overflow-hidden bg-[#050508] py-16 lg:py-0 lg:pt-28"
      >
        
        {/* Horizontal panels container */}
        <div
          ref={scrollRef}
          className="flex flex-col lg:flex-row h-auto lg:h-[80vh] items-stretch lg:items-center gap-12 px-6 md:px-12 lg:px-24 w-full lg:w-fit select-none flex-nowrap lg:flex-nowrap py-6 lg:py-0"
        >
          
          {/* Panel 1: Venue Title Slide */}
          <div className="w-full lg:w-[35vw] flex-shrink-0 flex flex-col justify-center h-auto lg:h-full lg:border-r border-white/5 pr-6 lg:pr-24 max-lg:pb-8 max-lg:border-b border-white/10">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
              <MapPin size={14} className="animate-pulse" />
              <span>Sector 03 &mdash; Venue</span>
            </div>
            
            <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white tracking-tight uppercase leading-none mb-6">
              VENUE &<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
                LOGISTICS
              </span>
            </h2>
            
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
              All official segments are hosted inside the APJ Abdul Kalam Open Air Theatre at Maharaja Institute of Technology Mysore. Scroll horizontally to explore arrival logistics, travel connections, and boarding.
            </p>
          </div>

          {/* Panel 2: Venue Specs */}
          <div className="w-full lg:w-[45vw] flex-shrink-0 flex flex-col justify-center h-auto lg:h-full lg:border-r border-white/5 pr-6 lg:pr-24 max-lg:pb-8 max-lg:border-b border-white/10 max-lg:pt-6">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="text-blue-500" size={24} />
              <h3 className="font-syne font-bold text-lg text-white uppercase tracking-wider">
                Amphitheater & Arenas
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {venueInfo.details.map((detail, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide mb-1">
                    {detail.label}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 3: Entry & Reporting Rules */}
          <div className="w-full lg:w-[45vw] flex-shrink-0 flex flex-col justify-center h-auto lg:h-full lg:border-r border-white/5 pr-6 lg:pr-24 max-lg:pb-8 max-lg:border-b border-white/10 max-lg:pt-6">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-amber-500" size={24} />
              <h3 className="font-syne font-bold text-lg text-white uppercase tracking-wider">
                Reporting & Check-ins
              </h3>
            </div>
            
            <div className="space-y-4">
              {venueInfo.logistics.map((log, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                  <span className="font-mono text-xs font-bold text-amber-500">0{idx+1}</span>
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">{log}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 4: Accommodation & Travel */}
          <div className="w-full lg:w-[40vw] flex-shrink-0 flex flex-col justify-center h-auto lg:h-full max-lg:pt-6">
            <div className="flex items-center gap-3 mb-6">
              <Bus className="text-purple-500" size={24} />
              <h3 className="font-syne font-bold text-lg text-white uppercase tracking-wider">
                Accommodation & Shuttle
              </h3>
            </div>
            
            <div className="space-y-4">
              {venueInfo.travel.map((travelItem, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-purple-500/10 bg-purple-500/5">
                  <span className="font-mono text-xs font-bold text-purple-500">0{idx+1}</span>
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">{travelItem}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
