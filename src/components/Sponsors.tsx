"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // Connect network paths
      const paths = svgRef.current!.querySelectorAll(".sponsor-link-path");
      paths.forEach((path) => {
        const length = (path as SVGPathElement).getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: true,
          },
        });
      });

      // Stagger highlight tier nodes
      gsap.fromTo(
        svgRef.current!.querySelectorAll(".sponsor-node"),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger details cards
      gsap.fromTo(
        containerRef.current!.querySelectorAll(".tier-detail-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".tier-trigger-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="sponsors" ref={containerRef} className="py-24 bg-transparent border-b border-white/5 relative z-10">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-950/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">
            <Handshake size={14} className="animate-pulse" />
            <span>Sector 16 &mdash; Partners</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
            SPONSORSHIP <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">ECOSYSTEM</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
            A network of leading enterprises supporting technology development. Explore the tiers of involvement and matching branding benefits.
          </p>
        </div>

        {/* Network Diagram Row */}
        <div className="flex justify-center mb-16 relative">
          <svg
            ref={svgRef}
            viewBox="0 0 800 300"
            className="w-full max-w-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Center Node: Innovotsava 2026 */}
            <circle cx="400" cy="150" r="30" fill="#3b82f6" opacity="0.1" />
            <circle cx="400" cy="150" r="12" fill="#3b82f6" className="sponsor-node" />
            <text x="400" y="110" fill="#ffffff" fontFamily="monospace" fontSize="9" textAnchor="middle" letterSpacing="2">
              INNOVOTSAVA HUB
            </text>

            {/* Tier 1 Node: Title Sponsor (Left) */}
            <circle cx="150" cy="150" r="24" fill="#f59e0b" opacity="0.1" />
            <circle cx="150" cy="150" r="8" fill="#f59e0b" className="sponsor-node" />
            <text x="150" y="110" fill="#f59e0b" fontFamily="monospace" fontSize="8" textAnchor="middle" letterSpacing="1">
              TITLE SPONSOR
            </text>

            {/* Tier 2 Node: Co-Sponsor (Right) */}
            <circle cx="650" cy="150" r="24" fill="#a5b4fc" opacity="0.1" />
            <circle cx="650" cy="150" r="8" fill="#a5b4fc" className="sponsor-node" />
            <text x="650" y="110" fill="#a5b4fc" fontFamily="monospace" fontSize="8" textAnchor="middle" letterSpacing="1">
              CO-SPONSOR
            </text>

            {/* Tier 3 Node: Associate Sponsor (Bottom) */}
            <circle cx="400" cy="250" r="20" fill="#67e8f9" opacity="0.1" />
            <circle cx="400" cy="250" r="6" fill="#67e8f9" className="sponsor-node" />
            <text x="400" y="285" fill="#67e8f9" fontFamily="monospace" fontSize="8" textAnchor="middle" letterSpacing="1">
              ASSOCIATE SPONSOR
            </text>

            {/* Connection Network Paths */}
            {/* Center to Left */}
            <path
              className="sponsor-link-path"
              d="M 400,150 L 150,150"
              fill="none"
              stroke="rgba(245,158,11,0.5)"
              strokeWidth="2"
              strokeDasharray="4"
            />
            {/* Center to Right */}
            <path
              className="sponsor-link-path"
              d="M 400,150 L 650,150"
              fill="none"
              stroke="rgba(165,180,252,0.5)"
              strokeWidth="2"
              strokeDasharray="4"
            />
            {/* Center to Bottom */}
            <path
              className="sponsor-link-path"
              d="M 400,150 L 400,250"
              fill="none"
              stroke="rgba(103,232,249,0.5)"
              strokeWidth="2"
              strokeDasharray="4"
            />
          </svg>
        </div>

        {/* Sponsorship Details Grid */}
        <div className="tier-trigger-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Title Sponsor */}
          <div className="tier-detail-card p-6 rounded-2xl border border-amber-500/10 bg-amber-500/[0.01] backdrop-blur-md">
            <div className="font-mono text-xs text-amber-500 uppercase tracking-widest mb-1 font-bold">🥇 Title Sponsor</div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-4">Premier Integration</div>
            <ul className="space-y-3 text-xs text-neutral-400 font-light leading-relaxed">
              <li>&bull; Event naming rights (e.g. Innovotsava in Association with...)</li>
              <li>&bull; Prime branding coordinates on main stage and entry arenas</li>
              <li>&bull; Dedicated 20-minute keynote slot on Day 2 morning</li>
              <li>&bull; Large display booth in central exhibition quadrangle</li>
              <li>&bull; Maximum visibility on all physical and digital collaterals</li>
            </ul>
          </div>

          {/* Co-Sponsor */}
          <div className="tier-detail-card p-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.01] backdrop-blur-md">
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-1 font-bold">🥈 Co-Sponsor</div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-4">Major Integration</div>
            <ul className="space-y-3 text-xs text-neutral-400 font-light leading-relaxed">
              <li>&bull; Stage mentions and regular callouts during all tracks</li>
              <li>&bull; Banner placements in primary competition quadrants</li>
              <li>&bull; Dedicated display stall in OAT lobby</li>
              <li>&bull; Dedicated features on official social media channels</li>
              <li>&bull; Full-page advertisement space in the official handbook</li>
            </ul>
          </div>

          {/* Associate Sponsor */}
          <div className="tier-detail-card p-6 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.01] backdrop-blur-md">
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1 font-bold">🥉 Associate Sponsor</div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-4">Standard Integration</div>
            <ul className="space-y-3 text-xs text-neutral-400 font-light leading-relaxed">
              <li>&bull; Logo listings on all official brochures and websites</li>
              <li>&bull; Display stall setup option in expo quad</li>
              <li>&bull; 2 delegate passes for Day 2 Conclave</li>
              <li>&bull; Combined sponsorship mentions on social media channels</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
