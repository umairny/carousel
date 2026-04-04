"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAGlassParallax059() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div className="w-full bg-[#0a0a0a] py-20">
      <div 
        ref={containerRef}
        className="flex space-x-10 px-20 overflow-x-auto no-scrollbar cursor-ew-resize snap-x snap-mandatory"
      >
        {slides.map((slide, i) => {
          // Internal parallax values
          const bgX = useTransform(scrollXProgress, [0, 1], [0, 300]);
          const textX = useTransform(scrollXProgress, [0, 1], [0, -100]);

          return (
            <div key={i} className="min-w-[600px] h-[450px] relative rounded-3xl overflow-hidden snap-center shrink-0 border border-white/10 bg-white/5 backdrop-blur-sm p-10 flex items-center">
              
              {/* Parallax Background */}
              <motion.div style={{ x: bgX }} className="absolute inset-0 -z-10 w-[150%] -left-[25%] opacity-40">
                <img src={slide.img} className="w-full h-full object-cover" />
              </motion.div>

              {/* Glass Foreground Panel */}
              <motion.div style={{ x: textX }} className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-cyan-400 font-mono text-sm mb-2">{slide.subtitle}</h3>
                <h2 className="text-white text-5xl font-black">{slide.title}</h2>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}