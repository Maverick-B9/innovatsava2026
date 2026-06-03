"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { codeOfConduct, emergencyProtocols } from "@/data/eventData";
import { CheckCircle2, XCircle, AlertOctagon, Heart, Flame, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ConductAndEmergency() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Stagger reveal of DOs vs DON'Ts list items
      gsap.fromTo(
        containerRef.current!.querySelectorAll(".conduct-item"),
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".conduct-trigger-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slide in emergency cards
      gsap.fromTo(
        containerRef.current!.querySelectorAll(".emergency-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".emergency-trigger-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const getEmergencyIcon = (title: string) => {
    if (title.includes("Medical")) return <Heart className="text-red-400" size={20} />;
    if (title.includes("Fire")) return <Flame className="text-amber-500" size={20} />;
    if (title.includes("Electrical")) return <Zap className="text-yellow-400" size={20} />;
    return <Users className="text-blue-400" size={20} />;
  };

  const getCardBorder = (title: string) => {
    if (title.includes("Medical")) return "border-red-500/10 bg-red-500/[0.01] hover:border-red-500/20";
    if (title.includes("Fire")) return "border-amber-500/10 bg-amber-500/[0.01] hover:border-amber-500/20";
    if (title.includes("Electrical")) return "border-yellow-500/10 bg-yellow-500/[0.01] hover:border-yellow-500/20";
    return "border-blue-500/10 bg-blue-500/[0.01] hover:border-blue-500/20";
  };

  return (
    <div ref={containerRef} className="relative bg-transparent z-10">
      
      {/* 1. CODE OF CONDUCT */}
      <section id="conduct" className="py-24 border-b border-white/5 relative">
        {/* Glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-red-950/5 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest mb-2">
              <AlertOctagon size={14} />
              <span>Sector 15 &mdash; Conduct & Policies</span>
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
              CODE OF <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">CONDUCT</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
              Expected operational protocols and behaviors for all delegates. Violation results in immediate disqualification and campus exit.
            </p>
          </div>

          {/* DOs & DON'Ts Split Layout */}
          <div className="conduct-trigger-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* DOs (Left) */}
            <div className="p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.01] backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="text-emerald-400" size={20} />
                <h3 className="font-syne font-bold text-sm text-white uppercase tracking-wider">
                  EXPECTED BEHAVIOR (DO)
                </h3>
              </div>
              <ul className="space-y-4">
                {codeOfConduct.dos.map((item, idx) => (
                  <li key={idx} className="conduct-item flex gap-3 items-start text-xs text-neutral-400 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DON'Ts (Right) */}
            <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.01] backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="text-red-400" size={20} />
                <h3 className="font-syne font-bold text-sm text-white uppercase tracking-wider">
                  DISQUALIFICATION CONDITIONS (DON&apos;T)
                </h3>
              </div>
              <ul className="space-y-4">
                {codeOfConduct.donts.map((item, idx) => (
                  <li key={idx} className="conduct-item flex gap-3 items-start text-xs text-neutral-400 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EMERGENCY PROTOCOLS */}
      <section id="emergency" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest mb-2">
              <Flame size={14} />
              <span>Sector 16 &mdash; Safety Manual</span>
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
              EMERGENCY <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">PROTOCOLS</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
              Medical responders, fire safety, battery handling guidelines, and crowd assembly coordinates during contingency events.
            </p>
          </div>

          {/* Emergency Protocols Cards Grid */}
          <div className="emergency-trigger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className={`emergency-card p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${getCardBorder(
                  protocol.title
                )}`}
              >
                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                  {getEmergencyIcon(protocol.title)}
                  <h4 className="font-syne font-bold text-xs text-white uppercase tracking-wide">
                    {protocol.title.split(" ")[1]} {protocol.title.split(" ")[2] || ""}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {protocol.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-[11px] text-neutral-400 leading-normal font-light">
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
