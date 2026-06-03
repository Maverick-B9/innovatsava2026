"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { competitionData } from "@/data/eventData";
import { Trophy, CheckCircle, ShieldAlert } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Competitions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Background glow color transitions between sections
      const sections = gsap.utils.toArray(".comp-chapter");
      
      sections.forEach((section: any, index: number) => {
        const glow = section.querySelector(".section-glow-overlay");
        
        gsap.fromTo(
          glow,
          { opacity: 0 },
          {
            opacity: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "top 20%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="events" className="relative bg-transparent z-10">
      
      {/* Competitions Section Header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <span className="font-mono text-xs tracking-[0.25em] text-blue-500 uppercase block mb-2">
          § 05 &mdash; Tournaments
        </span>
        <h2 className="font-syne font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] text-white uppercase tracking-tight mb-4">
          COMPETITIONS
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
          Five flagship technology domains. Showcasing elite robotic engineering, tactical drone piloting, competitive gaming, and business pitches.
        </p>
      </div>

      {/* Chapter 1: Rise of Autobots */}
      <CompetitionChapter
        data={competitionData.autobots}
        id="autobots"
        glowColor="rgba(109, 109, 121, 0.4)" // Metallic Grey
      />

      {/* Chapter 2: DroneX */}
      <CompetitionChapter
        data={competitionData.drone}
        id="drone"
        glowColor="rgba(31, 109, 77, 0.4)" // Futuristic Green
      />

      {/* Chapter 3: Gaming Mania */}
      <CompetitionChapter
        data={competitionData.gamemania}
        id="gamemania"
        glowColor="rgba(48, 37, 128, 0.4)" // Purple Blue Energy
      />

      {/* Chapter 4: Capital Clash */}
      <CompetitionChapter
        data={competitionData.capital}
        id="conclave-prelims"
        glowColor="rgba(154, 116, 18, 0.4)" // Gold
      />

      {/* Chapter 5: Discovery Day */}
      <CompetitionChapter
        data={competitionData.discovery}
        id="expo"
        glowColor="rgba(125, 34, 34, 0.4)" // Future Innovation Red
      />

    </div>
  );
}

// Subcomponent for each competition section
function CompetitionChapter({ data, id, glowColor }: { data: any; id: string; glowColor: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="comp-chapter relative min-h-screen py-24 border-b border-white/5 overflow-hidden flex items-center"
    >
      {/* Scroll-triggered Glow overlay */}
      <div
        className="section-glow-overlay absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-[140px] pointer-events-none -z-10 transition-opacity duration-500"
        style={{ backgroundColor: glowColor }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Logo Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col items-start lg:pr-6">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">
              Technology Domain
            </span>
            
            {/* The Logo Image */}
            <div className="relative w-36 h-36 mb-6 p-2 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
              <img
                src={data.logoPath}
                alt={`${data.title} Badge`}
                className="w-full h-full object-contain p-4"
              />
            </div>

            <h3
              className="font-syne font-extrabold text-[clamp(1.5rem,4vw,2.5rem)] text-white uppercase tracking-tight leading-none mb-3"
              style={{ textShadow: `0 0 30px ${data.primary}33` }}
            >
              {data.title}
            </h3>
            
            <p className="font-mono text-[10px] lg:text-xs tracking-wider uppercase mb-6" style={{ color: data.primary }}>
              {data.sub}
            </p>

            {/* Registration button */}
            <a
              href="https://forms.gle/czSNtNMVkFj6h6jK9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-mono tracking-widest text-white uppercase border font-semibold transition-all duration-300 shadow-md backdrop-blur-md hover:scale-105"
              style={{
                borderColor: `${data.primary}44`,
                backgroundColor: `${data.primary}11`,
                boxShadow: `0 4px 20px -8px ${data.primary}55`,
              }}
            >
              Register for Event
            </a>
          </div>

          {/* Right Column: Progressive scrolling content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Overview */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                01 / Overview
              </h4>
              <p className="text-neutral-300 text-base leading-relaxed font-light">
                {data.overview}
              </p>
            </div>

            {/* 2. Focus Areas */}
            {data.focusAreas && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  02 / Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.focusAreas.map((area: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono border backdrop-blur-md"
                      style={{
                        borderColor: `${data.primary}22`,
                        backgroundColor: `${data.primary}0a`,
                        color: data.primary,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

             {/* 3. Domains (for Capital Clash) */}
            {data.domains && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  02 / Sectors of Clash
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.domains.map((dom: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border bg-white/[0.01] backdrop-blur-md"
                      style={{ borderColor: `${data.primary}12` }}
                    >
                      <div className="font-mono text-xs font-bold mb-1" style={{ color: data.primary }}>
                        #{dom.num}
                      </div>
                      <div className="text-sm font-bold text-white uppercase mb-2">{dom.name}</div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">{dom.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selection Phases (for Discovery Day) */}
            {data.selection && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  02 / Selection Phases
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.selection.map((step: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border bg-white/[0.01] backdrop-blur-md"
                      style={{ borderColor: `${data.primary}12` }}
                    >
                      <div className="font-mono text-xs font-bold mb-1" style={{ color: data.primary }}>
                        {step.step}
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Requirements / Guidelines */}
            {(data.techReqs || data.safety) && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  03 / Specifications & Reqs
                </h4>
                <ul className="space-y-3">
                  {(data.techReqs || data.safety).map((req: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 font-light leading-relaxed">
                      <CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: data.primary }} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Presentation Format (for Discovery Day) */}
            {data.format && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  03 / Presentation Format
                </h4>
                <ul className="space-y-3">
                  {data.format.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 font-light leading-relaxed">
                      <CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: data.primary }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5. Scorecard (Visualized Filled Bars) */}
            {data.scoring && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  04 / Scoring Weights
                </h4>
                <div className="space-y-4">
                  {data.scoring.map((score: any, idx: number) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono uppercase tracking-wide">
                        <span className="text-neutral-400">{score.criteria}</span>
                        <span style={{ color: data.primary }}>{score.max}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${score.max}%`,
                            backgroundColor: data.primary,
                            boxShadow: `0 0 8px ${data.primary}cc`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Scorecard (for Capital Clash Prelims/Finals) */}
            {data.scoringPrelims && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
                    Prelims Scoring
                  </h5>
                  <div className="space-y-3">
                    {data.scoringPrelims.map((score: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-2">
                        <span className="text-neutral-400">{score.criteria}</span>
                        <span className="font-bold" style={{ color: data.primary }}>{score.max}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-3">
                    Finals Scoring
                  </h5>
                  <div className="space-y-3">
                    {data.scoringFinals.map((score: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-mono border-b border-white/5 pb-2">
                        <span className="text-neutral-400">{score.criteria}</span>
                        <span className="font-bold" style={{ color: data.primary }}>{score.max}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 7. Pitch structure (for Capital Clash) */}
            {data.pitchStructure && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  05 / Pitch Structure (12 Mins)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.pitchStructure.map((pit: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border bg-white/[0.01]"
                      style={{ borderColor: `${data.primary}12` }}
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="text-sm font-bold text-white uppercase">{pit.section}</div>
                        <div className="font-mono text-[10px]" style={{ color: data.primary }}>{pit.time}</div>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">{pit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. Prizes (for Capital Clash) */}
            {data.prizes && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  06 / Prize Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.prizes.map((prz: any, idx: number) => {
                    const colors = [
                      "rgba(255, 210, 95, 0.1)", // Gold
                      "rgba(203, 213, 225, 0.06)", // Silver
                      "rgba(217, 119, 6, 0.1)" // Bronze
                    ];
                    const borderColors = [
                      "rgba(255, 210, 95, 0.3)",
                      "rgba(203, 213, 225, 0.2)",
                      "rgba(217, 119, 6, 0.25)"
                    ];
                    
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border text-center backdrop-blur-md"
                        style={{
                          backgroundColor: colors[idx] || "rgba(255,255,255,0.02)",
                          borderColor: borderColors[idx] || "rgba(255,255,255,0.05)"
                        }}
                      >
                        <Trophy size={20} className="mx-auto mb-2" style={{ color: idx === 0 ? "#FFD25F" : idx === 1 ? "#cbd5e1" : "#d97706" }} />
                        <div className="font-syne font-bold text-xs uppercase tracking-wide mb-1 text-white">{prz.pos}</div>
                        <p className="text-[10px] text-neutral-400 font-light leading-relaxed">{prz.prize}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 9. Key Restrictions (if any) */}
            {data.restrictions && (
              <div className="flex gap-4 p-4 rounded-xl border border-red-500/10 bg-red-500/5 items-start">
                <ShieldAlert size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  <strong className="text-red-400 uppercase tracking-wide block mb-1">Key Restrictions:</strong>
                  {data.restrictions}
                </p>
              </div>
            )}

            {/* 10. Dos & Don'ts (for DroneX) */}
            {data.dos && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">✅ Do&apos;s</div>
                  <ul className="space-y-1 text-xs text-neutral-400 leading-relaxed font-light">
                    {data.dos.map((item: string, idx: number) => (
                      <li key={idx}>&bull; {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-red-500/10 bg-red-500/5">
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-2">❌ Don&apos;ts</div>
                  <ul className="space-y-1 text-xs text-neutral-400 leading-relaxed font-light">
                    {data.donts.map((item: string, idx: number) => (
                      <li key={idx}>&bull; {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>
          
        </div>
      </div>
    </section>
  );
}
