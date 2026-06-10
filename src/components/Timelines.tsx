"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { day1Schedule, day2Schedule } from "@/data/eventData";
import { Calendar, Clock, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TimelineProps {
  day: 1 | 2;
}

export default function Timelines({ day }: TimelineProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop Refs
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineDesktopRef = useRef<HTMLDivElement>(null);

  // Mobile Refs
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineMobileRef = useRef<HTMLDivElement>(null);

  const schedule = day === 1 ? day1Schedule : day2Schedule;
  const themeHex = day === 1 ? "#06b6d4" : "#a855f7";
  const themeBorder = day === 1 ? "rgba(6,182,212,0.4)" : "rgba(168,85,247,0.4)";

  // Reset arrays on render
  desktopCardRefs.current = [];
  desktopDotRefs.current = [];
  desktopTextRefs.current = [];
  mobileCardRefs.current = [];
  mobileDotRefs.current = [];
  mobileTextRefs.current = [];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop layout: Pinned timeline and card deck animation
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: containerRef.current,
            pinSpacing: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        const N = schedule.length;
        const duration = N - 1;

        // Progress line scaleY over the whole scroll
        tl.to(lineDesktopRef.current, { scaleY: 1, ease: "none", duration: duration }, 0);

        schedule.forEach((_, idx) => {
          const card = desktopCardRefs.current[idx];
          const dot = desktopDotRefs.current[idx];
          const text = desktopTextRefs.current[idx];

          if (!card || !dot || !text) return;

          const activeColor = themeHex;
          const activeBorderColor = themeBorder;
          const activeGlow = day === 1 
            ? "0 0 20px rgba(6,182,212,0.25)" 
            : "0 0 20px rgba(168,85,247,0.25)";

          // Set initial visual states for desktop
          if (idx === 0) {
            gsap.set(card, { opacity: 1, y: 0, scale: 1, zIndex: 10, borderColor: activeBorderColor, boxShadow: activeGlow });
            gsap.set(dot, { scale: 1.35, backgroundColor: activeColor, borderColor: activeBorderColor, boxShadow: activeGlow });
            gsap.set(text.querySelector(".desktop-time-label"), { color: "#ffffff", fontWeight: "bold" });
            gsap.set(text.querySelector(".desktop-activity-label"), { color: "#e5e5e5" });
          } else {
            gsap.set(card, { opacity: 0, y: 80, scale: 0.95, zIndex: 1, borderColor: "rgba(255,255,255,0.08)", boxShadow: "none" });
            gsap.set(dot, { scale: 0.8, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", boxShadow: "none" });
            gsap.set(text.querySelector(".desktop-time-label"), { color: "#737373", fontWeight: "normal" });
            gsap.set(text.querySelector(".desktop-activity-label"), { color: "#525252" });
          }

          // Card idx entry: from hidden below to active (occurs from idx - 1 to idx)
          if (idx > 0) {
            tl.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              zIndex: 10,
              borderColor: activeBorderColor,
              boxShadow: activeGlow,
              ease: "power2.out",
              duration: 1
            }, idx - 1);

            tl.to(dot, {
              scale: 1.35,
              backgroundColor: activeColor,
              borderColor: activeBorderColor,
              boxShadow: activeGlow,
              ease: "power2.out",
              duration: 0.5
            }, idx - 0.5);

            tl.to(text.querySelector(".desktop-time-label"), {
              color: "#ffffff",
              fontWeight: "bold",
              ease: "power2.out",
              duration: 0.5
            }, idx - 0.5);

            tl.to(text.querySelector(".desktop-activity-label"), {
              color: "#e5e5e5",
              ease: "power2.out",
              duration: 0.5
            }, idx - 0.5);
          }

          // Card idx exit: from active to completed deck style behind (occurs from idx to idx + 1)
          if (idx < N - 1) {
            tl.to(card, {
              opacity: 0.35,
              y: -45,
              scale: 0.95,
              zIndex: 5,
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "none",
              ease: "power2.inOut",
              duration: 1
            }, idx);

            tl.to(dot, {
              scale: 1.0,
              backgroundColor: activeColor,
              boxShadow: "none",
              ease: "power2.inOut",
              duration: 0.5
            }, idx);

            tl.to(text.querySelector(".desktop-time-label"), {
              color: "rgba(255,255,255,0.6)",
              fontWeight: "normal",
              ease: "power2.inOut",
              duration: 0.5
            }, idx);

            tl.to(text.querySelector(".desktop-activity-label"), {
              color: "rgba(163,163,163,0.5)",
              ease: "power2.inOut",
              duration: 0.5
            }, idx);
          }

          // Card idx disappearing: from completed to hidden above (occurs from idx + 1 to idx + 2)
          if (idx < N - 2) {
            tl.to(card, {
              opacity: 0,
              y: -90,
              scale: 0.9,
              zIndex: 1,
              ease: "power2.in",
              duration: 1
            }, idx + 1);
          }
        });
      });

      // Mobile layout: Pinned timeline and horizontal row indicator sync
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: containerRef.current,
            pinSpacing: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        const N = schedule.length;
        const duration = N - 1;

        // Progress line scaleX over the whole scroll
        tl.to(lineMobileRef.current, { scaleX: 1, ease: "none", duration: duration }, 0);

        schedule.forEach((_, idx) => {
          const card = mobileCardRefs.current[idx];
          const dot = mobileDotRefs.current[idx];
          const text = mobileTextRefs.current[idx];

          if (!card || !dot || !text) return;

          const activeColor = themeHex;
          const activeBorderColor = themeBorder;
          const activeGlow = day === 1 
            ? "0 0 15px rgba(6,182,212,0.25)" 
            : "0 0 15px rgba(168,85,247,0.25)";

          // Set initial visual states for mobile
          if (idx === 0) {
            gsap.set(card, { opacity: 1, y: 0, scale: 1, zIndex: 10, borderColor: activeBorderColor, boxShadow: activeGlow });
            gsap.set(dot, { scale: 1.3, backgroundColor: activeColor, borderColor: activeBorderColor, boxShadow: activeGlow });
            gsap.set(text.querySelector(".mobile-time-label"), { color: "#ffffff", fontWeight: "bold" });
          } else {
            gsap.set(card, { opacity: 0, y: 60, scale: 0.95, zIndex: 1, borderColor: "rgba(255,255,255,0.08)", boxShadow: "none" });
            gsap.set(dot, { scale: 0.8, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", boxShadow: "none" });
            gsap.set(text.querySelector(".mobile-time-label"), { color: "#737373", fontWeight: "normal" });
          }

          // Entry
          if (idx > 0) {
            tl.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              zIndex: 10,
              borderColor: activeBorderColor,
              boxShadow: activeGlow,
              ease: "power2.out",
              duration: 1
            }, idx - 1);

            tl.to(dot, {
              scale: 1.3,
              backgroundColor: activeColor,
              borderColor: activeBorderColor,
              boxShadow: activeGlow,
              ease: "power2.out",
              duration: 0.5
            }, idx - 0.5);

            tl.to(text.querySelector(".mobile-time-label"), {
              color: "#ffffff",
              fontWeight: "bold",
              ease: "power2.out",
              duration: 0.5
            }, idx - 0.5);
          }

          // Exit to Completed
          if (idx < N - 1) {
            tl.to(card, {
              opacity: 0.35,
              y: -30,
              scale: 0.95,
              zIndex: 5,
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "none",
              ease: "power2.inOut",
              duration: 1
            }, idx);

            tl.to(dot, {
              scale: 1.0,
              backgroundColor: activeColor,
              boxShadow: "none",
              ease: "power2.inOut",
              duration: 0.5
            }, idx);

            tl.to(text.querySelector(".mobile-time-label"), {
              color: "rgba(255,255,255,0.6)",
              fontWeight: "normal",
              ease: "power2.inOut",
              duration: 0.5
            }, idx);
          }

          // Exit to Hidden Above
          if (idx < N - 2) {
            tl.to(card, {
              opacity: 0,
              y: -60,
              scale: 0.9,
              zIndex: 1,
              ease: "power2.in",
              duration: 1
            }, idx + 1);
          }
        });
      });

      return () => mm.revert();
    },
    { scope: triggerRef }
  );

  return (
    <div ref={triggerRef} id={day === 1 ? "day1" : "day2"} className="relative h-[300vh] sm:h-[350vh] lg:h-[400vh] w-full bg-transparent z-10">
      
      {/* Sticky Inner Container with solid space background */}
      <div
        ref={containerRef}
        className="w-full h-screen flex items-center justify-center overflow-hidden bg-[#06060c] pt-20 lg:pt-24"
      >
        <div className="max-w-6xl w-full h-[80vh] px-6 relative flex items-center">
          
          {/* ================= DESKTOP VIEW ================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 w-full items-center">
            
            {/* Header info (Col 1-4) */}
            <div className="col-span-4 flex flex-col justify-center h-[520px] pr-8 border-r border-white/5 py-4">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                  <Calendar size={12} className="animate-pulse" />
                  <span>Sector 04 &mdash; Operations</span>
                </div>

                <div className="flex flex-col justify-start">
                  <span className={`font-mono text-[9px] uppercase tracking-widest mb-2 block ${day === 1 ? "text-cyan-400" : "text-purple-400"}`}>
                    Day 0{day} &bull; {day === 1 ? "TechXcelerate" : "AI Conclave"}
                  </span>
                  <h2 className="font-syne font-extrabold text-3xl lg:text-4xl text-white uppercase tracking-tight leading-none mb-4">
                    THE SCHEDULE <br />
                    <span className={`bg-gradient-to-r ${day === 1 ? "from-blue-500 to-cyan-400" : "from-purple-500 to-indigo-400"} bg-clip-text text-transparent`}>
                      DAY 0{day}
                    </span>
                  </h2>
                  <p className="text-neutral-400 text-xs leading-relaxed font-light mb-6">
                    {day === 1
                      ? "Competitive robotics, drone racing trails, startup conclave pitches, and students showcase."
                      : "Industry product demos, keynotes, NGO showcases, and the final cultural program valedictory."}
                  </p>
                </div>
              </div>

              <div className="font-mono text-[10px] text-neutral-500 space-y-2 mt-auto">
                <div className="flex items-center gap-2">
                  <Clock size={12} className={day === 1 ? "text-blue-500" : "text-purple-500"} />
                  <span>{day === 1 ? "08:00 AM – 05:30 PM" : "08:30 AM – 07:30 PM"}</span>
                </div>
              </div>
            </div>

            {/* Vertical timeline outline tracker (Col 5-7) */}
            <div className="col-span-3 flex flex-col justify-center h-[520px] relative pl-8 py-4">
              {/* Background vertical line */}
              <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-white/10" />
              {/* Dynamic vertical progress line */}
              <div
                ref={lineDesktopRef}
                className={`absolute left-[27px] top-6 bottom-6 w-[2px] origin-top bg-gradient-to-b ${
                  day === 1 ? "from-cyan-500 to-blue-500" : "from-purple-500 to-indigo-500"
                }`}
                style={{ transform: "scaleY(0)", transformOrigin: "top center" }}
              />
              
              {/* Dots and short descriptions */}
              <div className="relative flex flex-col justify-between h-full py-2">
                {schedule.map((item, idx) => (
                  <div
                    key={`desktop-node-${idx}`}
                    ref={el => { if (el) desktopTextRefs.current[idx] = el; }}
                    className="flex items-center gap-4 transition-all duration-300"
                  >
                    {/* Dot */}
                    <div className="relative flex items-center justify-center shrink-0 w-[6px]">
                      <div
                        ref={el => { if (el) desktopDotRefs.current[idx] = el; }}
                        className="w-3 h-3 rounded-full border border-white/20 bg-slate-950 z-10 transition-all duration-300"
                      />
                    </div>
                    {/* Event Time & Activity snippet */}
                    <div className="flex flex-col select-none">
                      <span className="desktop-time-label font-mono text-[10px] text-neutral-500 transition-colors duration-300">
                        {item.time.split(" – ")[0]}
                      </span>
                      <span className="desktop-activity-label text-[9px] text-neutral-500 font-light truncate max-w-[120px] lg:max-w-[140px] transition-colors duration-300">
                        {item.activity.split(" — ")[0].replace(/^[^\w]*/, "")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stacked Cards Stack (Col 8-12) */}
            <div className="col-span-5 relative h-[480px] flex items-center justify-center">
              {schedule.map((item, idx) => {
                const title = item.activity.split(" — ")[0];
                const description = item.activity.includes(" — ") ? item.activity.split(" — ")[1] : null;

                return (
                  <div
                    key={`desktop-card-${idx}`}
                    ref={el => { if (el) desktopCardRefs.current[idx] = el; }}
                    className="absolute inset-x-0 w-full h-[450px] p-6 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                    style={{
                      opacity: idx === 0 ? 1 : 0,
                      transform: idx === 0 ? "translateY(0px) scale(1)" : "translateY(80px) scale(0.95)",
                      zIndex: idx === 0 ? 10 : 1,
                    }}
                  >
                    <div>
                      {/* Card Header metadata */}
                      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                        <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md bg-white/5 border border-white/10 ${
                          day === 1 ? "text-cyan-400" : "text-purple-400"
                        }`}>
                          {item.time}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                          <Sparkles size={10} className={day === 1 ? "text-cyan-500" : "text-purple-500"} />
                          <span>EVENT 0{idx + 1} / 0{schedule.length}</span>
                        </div>
                      </div>

                      {/* Main Title & Description */}
                      <h3 className="font-syne font-extrabold text-base lg:text-lg text-white uppercase tracking-wide leading-snug mb-3">
                        {title}
                      </h3>
                      {description && (
                        <p className="text-xs text-neutral-300 leading-relaxed font-light">
                          {description}
                        </p>
                      )}
                    </div>

                    {/* Detailed subtasks / parallel tracks */}
                    {item.details && (
                      <div className="mt-4 pt-3 border-t border-white/5 flex-1 overflow-hidden flex flex-col justify-end">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider mb-2 block">
                          Event Details & Sub-tracks
                        </span>
                        <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[160px] pr-2 custom-scrollbar">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="text-[10px] text-neutral-400 font-light flex items-start gap-2 py-0.5 leading-tight">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${day === 1 ? "bg-cyan-500" : "bg-purple-500"}`} />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* ================= MOBILE VIEW ================= */}
          <div className="flex lg:hidden flex-col w-full h-[85vh] justify-between py-4 select-none">
            
            {/* Header / Meta */}
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className={`font-mono text-[9px] uppercase tracking-widest ${day === 1 ? "text-cyan-400" : "text-purple-400"}`}>
                  Day 0{day} &bull; {day === 1 ? "TechXcelerate" : "AI Conclave"}
                </span>
                <span className="font-mono text-[9px] text-neutral-500">
                  {day === 1 ? "08:00 AM – 05:30 PM" : "08:30 AM – 07:30 PM"}
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-xl text-white uppercase tracking-tight leading-none">
                THE SCHEDULE - DAY 0{day}
              </h2>
            </div>

            {/* Horizontal Timeline Track */}
            <div className="relative w-full h-12 flex items-center justify-between px-3 sm:px-6 bg-white/[0.01] border border-white/5 rounded-xl mb-4 overflow-x-auto no-scrollbar">
              {/* Base grey line */}
              <div className="absolute left-6 right-6 h-[2px] bg-white/10 top-[23px]" />
              {/* Colored active scale line */}
              <div
                ref={lineMobileRef}
                className={`absolute left-6 right-6 h-[2px] origin-left bg-gradient-to-r ${
                  day === 1 ? "from-cyan-500 to-blue-500" : "from-purple-500 to-indigo-500"
                } top-[23px]`}
                style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
              />
              
              {schedule.map((item, idx) => (
                <div
                  key={`mobile-node-${idx}`}
                  ref={el => { if (el) mobileTextRefs.current[idx] = el; }}
                  className="flex flex-col items-center justify-center relative z-10"
                >
                  <div
                    ref={el => { if (el) mobileDotRefs.current[idx] = el; }}
                    className="w-2.5 h-2.5 rounded-full border border-white/20 bg-slate-950 transition-all duration-300"
                  />
                  <span className="mobile-time-label text-[8px] font-mono text-neutral-500 mt-1 transition-colors duration-300">
                    {item.time.split(" – ")[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile Stacked Card Deck */}
            <div className="relative w-full h-[330px] sm:h-[400px] max-w-md mx-auto flex items-center justify-center">
              {schedule.map((item, idx) => {
                const title = item.activity.split(" — ")[0];
                const description = item.activity.includes(" — ") ? item.activity.split(" — ")[1] : null;

                return (
                  <div
                    key={`mobile-card-${idx}`}
                    ref={el => { if (el) mobileCardRefs.current[idx] = el; }}
                    className="absolute inset-x-0 w-full h-[300px] sm:h-[350px] p-5 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.55)]"
                    style={{
                      opacity: idx === 0 ? 1 : 0,
                      transform: idx === 0 ? "translateY(0px) scale(1)" : "translateY(60px) scale(0.95)",
                      zIndex: idx === 0 ? 10 : 1,
                    }}
                  >
                    <div>
                      {/* Card meta */}
                      <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                        <span className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-white/5 border border-white/10 ${
                          day === 1 ? "text-cyan-400" : "text-purple-400"
                        }`}>
                          {item.time}
                        </span>
                        <span className="text-[9px] font-mono text-neutral-500">
                          0{idx + 1} / 0{schedule.length}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-syne font-bold text-sm text-white uppercase tracking-wide leading-tight mb-2">
                        {title}
                      </h3>
                      {description && (
                        <p className="text-[11px] text-neutral-300 leading-relaxed font-light">
                          {description}
                        </p>
                      )}
                    </div>

                    {/* Details content scrollable list */}
                    {item.details && (
                      <div className="mt-3 pt-2 border-t border-white/5 flex-1 overflow-hidden flex flex-col justify-end">
                        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider mb-1.5 block">
                          Detailed Sub-Tracks
                        </span>
                        <div className="grid grid-cols-1 gap-1.5 overflow-y-auto max-h-[130px] pr-1 custom-scrollbar">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="text-[9px] text-neutral-400 font-light flex items-start gap-1.5 py-0.5 leading-tight">
                              <span className={`w-1 h-1 rounded-full mt-1 shrink-0 ${day === 1 ? "bg-cyan-500" : "bg-purple-500"}`} />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
