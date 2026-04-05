"use client";
import { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UACursorFollower076() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    // Normalize coordinates -0.5 to 0.5
    mouseX.set((e.clientX / width) - 0.5);
    mouseY.set((e.clientY / height) - 0.5);
  };

  const x = useTransform(mouseX,[-0.5, 0.5], ["10%", "-10%"]);
  const y = useTransform(mouseY,[-0.5, 0.5], ["10%", "-10%"]);

  // Grid Data
  const gridSlides =[...slides, ...slides, ...slides, ...slides];

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="w-full h-[600px] bg-[#020202] overflow-hidden relative cursor-move flex items-center justify-center"
    >
      <div className="absolute z-10 top-10 text-center pointer-events-none">
        <h2 className="text-white text-xl font-mono tracking-[0.5em]">EXPLORE</h2>
      </div>

      <motion.div 
        style={{ x, y }} 
        className="w-[150%] h-[150%] grid grid-cols-4 grid-rows-2 gap-8 p-10"
      >
        {gridSlides.map((slide, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden border border-white/5 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <img src={slide.img} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}