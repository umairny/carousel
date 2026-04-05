"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAElasticDrag071() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Calculate a skew effect based on drag distance
  const skewX = useTransform(x, [-1000, 0, 1000],[10, 0, -10]);

  return (
    <div className="w-full h-[600px] bg-[#050505] flex flex-col justify-center overflow-hidden cursor-grab active:cursor-grabbing">
      <div className="px-10 mb-8">
        <h2 className="text-white text-3xl font-bold">Elastic Drag</h2>
        <p className="text-white/40">Pull past the edges to feel the rubberband effect.</p>
      </div>

      <motion.div ref={trackRef} className="w-full overflow-visible">
        <motion.div
          drag="x"
          dragConstraints={{ left: -((slides.length - 1) * 440), right: 0 }}
          dragElastic={0.8} // High elasticity for rubberband effect
          style={{ x, skewX }}
          className="flex gap-10 px-10"
        >
          {slides.map((slide) => (
            <motion.div 
              key={slide.id} 
              className="min-w-[400px] h-[400px] relative rounded-3xl overflow-hidden shadow-2xl shrink-0 border border-white/10"
            >
              <img src={slide.img} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-widest">{slide.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}