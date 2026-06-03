"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameCount = 40;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (imagesRef.current[currentFrame.frame]) {
        drawFrame(currentFrame.frame);
      }
    };

    const drawFrame = (index: number) => {
      const img = images[index];
      if (!img || !ctx) return;

      // Draw aspect fill (cover)
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      } else {
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const currentFrame = { frame: 0 };
    const triggers: ScrollTrigger[] = [];

    const initScrollTrigger = () => {
      imagesRef.current = images;
      setImagesLoaded(true);
      resizeCanvas();

      // Scrub the 40 frames from top of body to bottom of Event Overview
      const scrubAnim = gsap.to(currentFrame, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          endTrigger: "#overview",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1, // Smooth scrub delay to avoid skipping/glitching
          onUpdate: (self) => {
            // Self.progress ranges from 0 to 1
            const frameIndex = Math.min(
              frameCount - 1,
              Math.max(0, Math.floor(self.progress * frameCount))
            );
            currentFrame.frame = frameIndex;
            drawFrame(frameIndex);
          },
        },
      });
      if (scrubAnim.scrollTrigger) {
        triggers.push(scrubAnim.scrollTrigger);
      }

      // Overlay darkens on scroll from top of body to bottom of body
      const overlayAnim = gsap.to(overlayRef.current, {
        opacity: 0.70,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      if (overlayAnim.scrollTrigger) {
        triggers.push(overlayAnim.scrollTrigger);
      }
    };

    // Pre-load all 40 frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits (001, 002... 040)
      const frameStr = String(i).padStart(3, "0");
      img.src = `/assets/sequence scroll/ezgif-frame-${frameStr}.png`;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          initScrollTrigger();
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${frameStr}`);
        loadedCount++;
        if (loadedCount === frameCount) {
          initScrollTrigger();
        }
      };
      images.push(img);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-[#050505] pointer-events-none">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block object-cover transition-opacity duration-1000 ${
          imagesLoaded ? "opacity-70" : "opacity-0"
        }`}
      />
      {/* Scroll-controlled dark overlay - starts at 25% opacity */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: 0.25 }}
      />

      {/* Futuristic Preloader Overlay */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] z-50 text-white font-mono">
          <div className="relative w-48 h-1 bg-neutral-900 overflow-hidden rounded-full mb-4">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
            AWAKENING INNOVOTSAVA UNIVERSE ({loadingProgress}%)
          </div>
        </div>
      )}
    </div>
  );
}
