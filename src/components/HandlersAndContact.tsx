"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { organizers } from "@/data/eventData";
import { Users, Phone, Shield, Cpu, MessageSquare } from "lucide-react";

export default function HandlersAndContact() {
  return (
    <div id="contact" className="relative bg-transparent z-10">
      
      {/* 1. EVENT HANDLERS */}
      <section className="py-24 border-b border-white/5 relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/5 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">
              <Users size={14} />
              <span>Sector 20 &mdash; Handlers</span>
            </div>
            <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
              EVENT <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">HANDLERS</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light leading-relaxed">
              Meet the core committee heads, faculty heads, and student coordinators driving the operations of Innovotsava 2026.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((org, idx) => (
              <TiltCard key={idx} org={org} />
            ))}
          </div>

        </div>
      </section>

      {/* 2. CONTACT COMMAND CENTER */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Cpu size={14} className="animate-spin-slow" />
                <span>Sector 21 &mdash; Command Center</span>
              </div>
              
              <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3.5rem)] text-white uppercase tracking-tight leading-none mb-6">
                SUPPORT <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  CENTER
                </span>
              </h2>
              
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-8 max-w-sm">
                Have queries or operational issues? Connect with our technical grid or report directly to the grievance desk located in the central amphitheater quad.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md flex gap-4">
                  <Phone size={18} className="text-cyan-400 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">HOTLINE</div>
                    <div className="text-sm font-bold text-white font-mono">Nishanth: 7975057085</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Pranamya: 7483206176</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md flex gap-4">
                  <Shield size={18} className="text-blue-400 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">GRIEVANCE POINT</div>
                    <div className="text-sm font-bold text-white uppercase">Central Help Desk</div>
                    <p className="text-xs text-neutral-400 mt-1 leading-normal font-light">
                      Located at the APJ Abdul Kalam OAT entrance. Volunteers can page security and medical grids.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Holographic Card details */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-2xl border border-cyan-500/20 bg-cyan-950/5 backdrop-blur-lg shadow-[0_24px_50px_rgba(0,180,216,0.15)] overflow-hidden">
                {/* Visual Grid overlays */}
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/10 pb-4">
                  <MessageSquare className="text-cyan-400" size={24} />
                  <div>
                    <h3 className="font-syne font-bold text-sm text-white uppercase tracking-wider">
                      GRID NETWORK CHANNELS
                    </h3>
                    <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest">
                      ONLINE COMMUNICATIONS
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[9px] font-mono text-cyan-500 uppercase tracking-wide mb-1">
                      OFFICIAL PORTAL
                    </div>
                    <a
                      href="https://innovatsava2026.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-cyan-400 font-mono transition-colors duration-200"
                    >
                      innovatsava2026.vercel.app
                    </a>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-normal">
                      Primary registration check-ins, rulebook queries, and live announcements.
                    </p>
                  </div>

                  <div>
                    <div className="text-[9px] font-mono text-cyan-500 uppercase tracking-wide mb-1">
                      SPONSORSHIP CHANNELS
                    </div>
                    <a
                      href="https://innovatsava2026.vercel.app/"
                      target="_blank"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
                    >
                      invest@innovatsava2026.vercel.app
                    </a>
                  </div>

                  <div className="pt-4 border-t border-cyan-500/10 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                    SECURED NODE &mdash; INNV26-21
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// 3D Tilt Card implementation using framer motion
function TiltCard({ org }: { org: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map position to degree rotation (max 15 deg)
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to card center (-100 to 100 scale)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="perspective-800"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md flex flex-col items-center text-center transition-all duration-200 transform-gpu h-full"
      >
        {/* Profile Avatar */}
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border border-white/10 bg-white/[0.02]">
          <Image
            src={`/assets/${org.avatar}.png`}
            alt={org.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider mb-1">
          {org.name}
        </h4>
        <div className="font-mono text-[9px] text-blue-400 uppercase tracking-widest mb-3">
          {org.role}
        </div>
        
        {org.phone !== "N/A" && (
          <div className="flex gap-2 items-center text-[10px] font-mono text-neutral-400 mt-auto border-t border-white/5 pt-3 w-full justify-center">
            <Phone size={10} className="text-blue-400" />
            <span>{org.phone}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
