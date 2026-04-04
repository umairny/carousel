// src/components/carousels/UAParallaxMagnetic.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { slides } from "@/utils/mockData";



export const UAParallaxMagnetic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  // Internal image parallax
  const x = useTransform(scrollXProgress, [0, 1], [-100, 100]);

  return (
    <div className="w-full bg-[#0a0a0a] py-20">
      <div className="px-10 mb-10">
        <h2 className="text-4xl font-bold text-white tracking-tight">Magnetic Parallax</h2>
        <p className="text-gray-400 mt-2 font-mono">Series // 004</p>
      </div>

      <div 
        ref={containerRef}
        className="flex space-x-12 px-10 overflow-x-scroll no-scrollbar cursor-ew-resize"
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-[60vw] h-[60vh] relative overflow-hidden rounded-3xl group">
            <motion.div style={{ x }} className="absolute inset-0 w-[120%] -left-[10%]">
              <img src={slide.img} alt={slide.title || `Parallax ${i}`} className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700 ease-out" />
            </motion.div>
            <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500">
              <motion.h2 className="text-4xl font-bold text-white tracking-tight">{slide.title}</motion.h2>
              <motion.p className="text-gray-400 mt-2 font-mono">{slide.subtitle}</motion.p>
            </motion.div>
            
          </div>
        ))}
      </div>
    </div>
  );
};