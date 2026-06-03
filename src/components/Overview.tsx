"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statistics } from "@/data/eventData";
import { Info } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Overview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  
  // State variables for count values (as floats)
  const [counts, setCounts] = useState<number[]>(statistics.map(() => 0));

  useEffect(() => {
    const statsElements = statsContainerRef.current?.querySelectorAll(".stat-value-ref");
    if (!statsElements) return;

    const counterTargets = statistics.map((stat) => ({ val: 0, target: stat.count }));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: statsContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    counterTargets.forEach((item, idx) => {
      tl.to(
        item,
        {
          val: item.target,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => {
            setCounts((prev) => {
              const updated = [...prev];
              updated[idx] = item.val; // Store full float value
              return updated;
            });
          },
        },
        0 // Animate all counters in parallel starting at time 0
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === statsContainerRef.current) t.kill();
      });
    };
  }, []);

  const formatNumber = (val: number, label: string) => {
    if (label.includes("Prize Pool")) {
      return val.toFixed(2); // Smooth decimal float value
    }
    return Math.floor(val).toLocaleString();
  };

  return (
    <section id="overview" ref={sectionRef} className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-blue-500 uppercase block mb-2">
            § 02 &mdash; Specifications
          </span>
          <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
            EVENT <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">OVERVIEW</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
            Innovotsava 2026 is the premier technology convergence hosted by Maharaja Institute of Technology Mysore. Here are the core specifications of the festival.
          </p>
        </div>

        {/* Massive Animated Counters Grid */}
        <div
          ref={statsContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-x-6 mb-16 border-y border-white/5 py-12 bg-white/[0.01] backdrop-blur-md rounded-2xl px-4 md:px-6"
        >
          {statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="font-syne font-extrabold text-[clamp(1.25rem,3.5vw,2.25rem)] text-white mb-2 tracking-tight flex items-baseline justify-center gap-x-1">
                {stat.prefix && <span className="text-blue-500 text-base md:text-lg lg:text-xl">{stat.prefix}</span>}
                <span className="stat-value-ref">
                  {formatNumber(counts[idx], stat.label)}
                </span>
                {stat.suffix && (
                  <span
                    className={`font-syne font-bold ${
                      stat.label.includes("Prize Pool")
                        ? "text-[10px] sm:text-xs md:text-sm text-neutral-400 uppercase tracking-wider font-mono"
                        : "text-cyan-400 text-base md:text-lg lg:text-xl"
                    }`}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="font-mono text-[10px] md:text-xs tracking-[0.15em] text-neutral-400 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: The Domain */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-blue-400 mb-4">
              ORGANIZER & FORMAT
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">ORGANIZING BODY</div>
                <div className="text-sm font-medium text-white">Stack Forge Club, Dept. of CSE, MITM</div>
              </li>
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">CAMPUS FORMAT</div>
                <div className="text-sm font-medium text-white">Two-Day Physical Event inside MITM, Mysore</div>
              </li>
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">TEAM REQUIREMENTS</div>
                <div className="text-sm font-medium text-white">4 members per team (min. 1 from different dept.)</div>
              </li>
            </ul>
          </div>

          {/* Card 2: Schedule Overview */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-cyan-400 mb-4">
              THEMES & TIMELINE
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">DATES</div>
                <div className="text-sm font-medium text-white">June 12 &ndash; June 13, 2026</div>
              </li>
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">DAY 1 THEME</div>
                <div className="text-sm font-medium text-white">TechXcelerate &mdash; Competitions & Project Expo</div>
              </li>
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">DAY 2 THEME</div>
                <div className="text-sm font-medium text-white">AI Conclave &mdash; Industry Demonstrations & Finals</div>
              </li>
            </ul>
          </div>

          {/* Card 3: Admission & Logistics */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-purple-400 mb-4">
              REGISTRATION & CAPACITY
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">REGISTRATION PORTAL</div>
                <div className="text-sm font-medium text-white">Pre-registration mandatory &mdash; Online only</div>
              </li>
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">ADMISSION FEE</div>
                <div className="text-sm font-medium text-emerald-400 font-mono font-semibold">FREE FOR ALL PARTICIPANTS</div>
              </li>
              <li>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">TOTAL VENUE CAPACITY</div>
                <div className="text-sm font-medium text-white">1,000 Attendees maximum capacity</div>
              </li>
            </ul>
          </div>

        </div>

        {/* Mission Statement Callout */}
        <div className="flex gap-4 p-5 rounded-2xl border border-blue-500/10 bg-blue-500/5 backdrop-blur-md items-start max-w-3xl">
          <Info size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1 font-semibold">Mission Statement</div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              To cultivate a generation of technologists and entrepreneurs by creating high-impact experiential platforms that bridge academia, industry, and society.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
