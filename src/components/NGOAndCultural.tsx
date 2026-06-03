"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ngos } from "@/data/eventData";
import { Globe, HeartHandshake, Film } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function NGOAndCultural() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const mapSvgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // Connect network path animation in SVG map
      const paths = mapSvgRef.current!.querySelectorAll(".network-path");
      paths.forEach((path) => {
        const length = (path as SVGPathElement).getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapSvgRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
          },
        });
      });

      // NGO cards revealing
      gsap.fromTo(
        containerRef.current!.querySelectorAll(".ngo-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".ngo-cards-trigger",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Motion typography scroll animation (infinite ticker tape)
      gsap.to(tickerRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".ticker-trigger-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-transparent z-10">
      
      {/* 1. NGO SESSIONS - Impact-driven Storytelling & World Map */}
      <section id="ngo" className="py-24 border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
                <HeartHandshake size={14} />
                <span>Sector 13 &mdash; Social Impact</span>
              </div>
              
              <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight leading-none mb-6">
                NGO <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  SESSIONS
                </span>
              </h2>
              
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-8 max-w-sm">
                Innovotsava partners with national NGOs to address socio-technological challenges. On Day 1 they present their mission, and on Day 2 they highlight impact results and volunteer opportunities.
              </p>

              <div className="ngo-cards-trigger space-y-4">
                {ngos.map((ngo, idx) => (
                  <div key={idx} className="ngo-card p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md">
                    <div className="font-mono text-xs text-emerald-400 mb-1">PARTNER NGO 0{idx+1}</div>
                    <div className="text-sm font-bold text-white uppercase mb-2">{ngo.name}</div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light mb-3">{ngo.mission}</p>
                    <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">
                      PROJECT TARGETS: {ngo.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: SVG Interactive Network Map */}
            <div className="lg:col-span-7 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-emerald-950/5 rounded-full blur-[80px] -z-10" />
              
              <svg
                ref={mapSvgRef}
                viewBox="0 0 800 450"
                className="w-full max-w-lg border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Simulated World Grid Mesh Background */}
                <path d="M 50,0 L 50,450 M 150,0 L 150,450 M 250,0 L 250,450 M 350,0 L 350,450 M 450,0 L 450,450 M 550,0 L 550,450 M 650,0 L 650,450 M 750,0 L 750,450" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                <path d="M 0,50 L 800,50 M 0,150 L 800,150 M 0,250 L 800,250 M 0,350 L 800,350" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                
                {/* Node: MIT Mysore (Center hub) */}
                <circle cx="400" cy="225" r="8" fill="#10b981" />
                <circle cx="400" cy="225" r="20" fill="transparent" stroke="rgba(16,185,129,0.3)" strokeWidth="1" className="animate-ping" style={{ transformOrigin: "400px 225px" }} />
                <text x="400" y="200" fill="#ffffff" fontFamily="monospace" fontSize="10" textAnchor="middle" letterSpacing="1">
                  MIT MYSORE HUB
                </text>
                
                {/* Node: CodeForChange (Rural) */}
                <circle cx="200" cy="120" r="5" fill="#06b6d4" />
                <text x="200" y="100" fill="#a3a3a3" fontFamily="monospace" fontSize="8" textAnchor="middle">
                  CODEFORCHANGE
                </text>
                
                {/* Node: EcoRestore (Western Ghats) */}
                <circle cx="620" cy="320" r="5" fill="#06b6d4" />
                <text x="620" y="305" fill="#a3a3a3" fontFamily="monospace" fontSize="8" textAnchor="middle">
                  ECORESTORE
                </text>

                {/* Connection paths */}
                <path
                  className="network-path"
                  d="M 400,225 Q 300,120 200,120"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                
                <path
                  className="network-path"
                  d="M 400,225 Q 520,320 620,320"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CULTURAL PROGRAMME - Motion Typography Celebration */}
      <section id="cultural" className="ticker-trigger-section py-24 bg-transparent relative overflow-hidden">
        {/* Purple Atmosphere Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-violet-950/20 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Film size={14} className="animate-pulse" />
                <span>Sector 14 &mdash; Celebration</span>
              </div>
              
              <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight leading-none mb-4">
                CULTURAL <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  PROGRAMME
                </span>
              </h2>
            </div>
            <div>
              <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-sm md:ml-auto">
                An energy shift on Day 2. A 1-hour student performing arts showcase &mdash; dance, music, theater &mdash; followed by formal prize distributions.
              </p>
            </div>
          </div>
        </div>

        {/* Motion Typography (Scrolling Ticker Tape) */}
        <div className="w-full border-y border-white/5 py-8 bg-black/30 backdrop-blur-md overflow-hidden relative">
          <div
            ref={tickerRef}
            className="flex whitespace-nowrap text-6xl md:text-8xl lg:text-9xl font-syne font-black tracking-tighter uppercase text-white/5 leading-none select-none"
            style={{ width: "fit-content" }}
          >
            {/* Repeated text for seamless looping */}
            <span className="px-8 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 bg-clip-text text-transparent">DANCE &bull;</span>
            <span className="px-8 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 bg-clip-text text-transparent">MUSIC &bull;</span>
            <span className="px-8 bg-gradient-to-r from-pink-500/20 to-violet-500/20 bg-clip-text text-transparent">THEATRE &bull;</span>
            <span className="px-8 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 bg-clip-text text-transparent">CELEBRATION &bull;</span>
            <span className="px-8 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 bg-clip-text text-transparent">DANCE &bull;</span>
            <span className="px-8 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 bg-clip-text text-transparent">MUSIC &bull;</span>
            <span className="px-8 bg-gradient-to-r from-pink-500/20 to-violet-500/20 bg-clip-text text-transparent">THEATRE &bull;</span>
            <span className="px-8 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 bg-clip-text text-transparent">CELEBRATION &bull;</span>
          </div>
        </div>

      </section>

    </div>
  );
}
