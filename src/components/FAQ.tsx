"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "@/data/eventData";
import { HelpCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current!.querySelectorAll(".faq-item-scroll");
      
      items.forEach((item) => {
        const answer = item.querySelector(".faq-answer-scroll");
        const dot = item.querySelector(".faq-dot-scroll");
        const qText = item.querySelector(".faq-q-text");

        // ScrollTrigger to automatically expand answer and brighten question on scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 0.5,
            toggleActions: "play reverse play reverse",
          },
        });

        tl.to(answer, {
          height: "auto",
          opacity: 1,
          paddingTop: 12,
          paddingBottom: 8,
          duration: 0.4,
        })
          .to(
            qText,
            {
              color: "#ffffff",
              duration: 0.2,
            },
            0
          )
          .to(
            dot,
            {
              backgroundColor: "#3b82f6",
              borderColor: "rgba(59,130,246,0.5)",
              scale: 1.25,
              duration: 0.2,
            },
            0
          );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="faq" ref={containerRef} className="py-24 bg-transparent border-b border-white/5 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">
            <HelpCircle size={14} />
            <span>Sector 19 &mdash; FAQ</span>
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.75rem,4.5vw,3rem)] text-white uppercase tracking-tight mb-4">
            FREQUENTLY ASKED <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">QUESTIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto font-light leading-relaxed">
            Answers to common queries regarding registration rules, advisor sign-offs, and logistics. Answers unfold automatically as you scroll.
          </p>
        </div>

        {/* FAQ Scroll List */}
        <div className="space-y-8 relative pl-8">
          {/* Vertical left timeline bar */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-white/5" />

          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item-scroll relative flex flex-col w-full pb-6 border-b border-white/5 last:border-b-0"
            >
              {/* Timeline Indicator Dot */}
              <div className="faq-dot-scroll absolute left-[-31px] top-1.5 w-3.5 h-3.5 rounded-full border border-white/10 bg-slate-900 -translate-x-1/2 z-10 shadow-[0_0_8px_rgba(0,0,0,0.8)] transition-all duration-300" />
              
              {/* Question Text */}
              <h4 className="faq-q-text font-syne font-bold text-sm md:text-base text-neutral-500 transition-colors duration-300 leading-snug">
                {faq.q}
              </h4>
              
              {/* Answer block (will expand height on scroll) */}
              <div
                className="faq-answer-scroll h-0 opacity-0 overflow-hidden text-xs md:text-sm text-neutral-400 font-light leading-relaxed transition-all duration-300"
                style={{ height: 0 }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
