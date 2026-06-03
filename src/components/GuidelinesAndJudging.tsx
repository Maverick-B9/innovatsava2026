"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { guidelines } from "@/data/eventData";
import { Check, ClipboardList, Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const judgingCriteria = [
  { item: "Rise of Autobots - Live Demo & Complexity", weight: 50 },
  { item: "DroneX - Flight Stability & Safety Compliance", max: 40 },
  { item: "Gaming Mania - Custom AI Agent Depth", max: 30 },
  { item: "Capital Clash - Business Viability & AI Innovation", max: 50 },
  { item: "Discovery Day Expo - Technical Merit & Feasibility", max: 50 },
];

export default function GuidelinesAndJudging() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Checklist reveals
      const checklistItems = containerRef.current!.querySelectorAll(".checklist-item");
      checklistItems.forEach((item) => {
        const check = item.querySelector(".check-icon");
        
        gsap.fromTo(
          item,
          { opacity: 0.3, y: 15 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 70%",
              scrub: true,
            },
          }
        );

        // Animate the checking trigger
        gsap.fromTo(
          check,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Progress bars in Judging
      const progressBars = containerRef.current!.querySelectorAll(".progress-bar-fill");
      progressBars.forEach((bar: any) => {
        const targetWidth = bar.getAttribute("data-width");
        
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${targetWidth}%`,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-transparent z-10">
      
      {/* 1. PARTICIPANT GUIDELINES */}
      <section id="guidelines" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">
              <ClipboardList size={14} />
              <span>Sector 14 &mdash; Handbook Guidelines</span>
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
              PARTICIPANT <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">GUIDELINES</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
              Rules and timelines for registrations, on-site dress codes, faculty sign-offs, and project material submissions.
            </p>
          </div>

          {/* Guidelines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Registration */}
            <div className="space-y-6">
              <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-blue-400 pb-2 border-b border-white/5">
                REGISTRATION & ELIGIBILITY
              </h3>
              <div className="space-y-4">
                {guidelines.registration.map((rule, idx) => (
                  <div key={idx} className="checklist-item flex gap-4 items-start">
                    <div className="check-icon w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conduct */}
            <div className="space-y-6">
              <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-cyan-400 pb-2 border-b border-white/5">
                ON-SITE CONDUCT & DRESS CODE
              </h3>
              <div className="space-y-4">
                {guidelines.conduct.map((rule, idx) => (
                  <div key={idx} className="checklist-item flex gap-4 items-start">
                    <div className="check-icon w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & IP */}
            <div className="space-y-6">
              <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-purple-400 pb-2 border-b border-white/5">
                EQUIPMENT & INTELLECTUAL PROPERTY
              </h3>
              <div className="space-y-4">
                {guidelines.equipment.map((rule, idx) => (
                  <div key={idx} className="checklist-item flex gap-4 items-start">
                    <div className="check-icon w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Advisor */}
            <div className="space-y-6">
              <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-emerald-400 pb-2 border-b border-white/5">
                FACULTY ADVISORY SYSTEM
              </h3>
              <div className="space-y-4">
                {guidelines.advisor.map((rule, idx) => (
                  <div key={idx} className="checklist-item flex gap-4 items-start">
                    <div className="check-icon w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Submission Deadlines */}
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
            <h4 className="font-syne font-bold text-xs uppercase tracking-wider text-white mb-4">
              SUBMISSION DEADLINES
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-neutral-500">
                    <th className="pb-3 pr-4 font-mono font-medium">SUBMISSION ITEM</th>
                    <th className="pb-3 pr-4 font-mono font-medium">DEADLINE</th>
                    <th className="pb-3 font-mono font-medium">WHERE TO SUBMIT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {guidelines.deadlines.map((dl, idx) => (
                    <tr key={idx}>
                      <td className="py-3 pr-4 font-medium text-white">{dl.item}</td>
                      <td className="py-3 pr-4 font-mono text-cyan-400">{dl.date}</td>
                      <td className="py-3 font-mono">{dl.destination}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 2. JUDGING FRAMEWORK */}
      <section id="judging" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Scale size={14} />
              <span>Sector 15 &mdash; Judging Rubrics</span>
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
              JUDGING <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FRAMEWORK</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
              To guarantee fairness and absolute clarity, all submissions are scored against standard criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                Every domain is evaluated by a panel of academic researchers and industry practitioners. Projects are judged based on their relevance, ingenuity, complexity, and presentation.
              </p>
              
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">TIE-BREAKER PROTOCOL</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  In the event of a score tie-breaker, the <strong>Technical Complexity & AI Depth</strong> subscore decides the rank. Judges declaration forms and conflict mitigations are fully integrated.
                </p>
              </div>
            </div>

            {/* Right: Score weights bars */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-syne font-bold text-xs uppercase tracking-wider text-white mb-2">
                CRITICAL CORE WEIGHTS
              </h3>
              <div className="space-y-4">
                {judgingCriteria.map((crit, idx) => {
                  const percent = crit.weight || crit.max || 50;
                  return (
                    <div key={idx} className="space-y-2 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-neutral-300 font-bold uppercase tracking-wide">{crit.item.split(" - ")[0]}</span>
                        <span className="text-cyan-400 font-semibold">{crit.item.split(" - ")[1]} ({percent}%)</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="progress-bar-fill h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          data-width={percent}
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
