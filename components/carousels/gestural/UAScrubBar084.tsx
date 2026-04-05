"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAScrubBar084() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const { width, left } = containerRef.current.getBoundingClientRect();
    const xPos = e.clientX - left;
    
    // Map X position to array index
    const percentage = Math.max(0, Math.min(1, xPos / width));
    const targetIndex = Math.min(Math.floor(percentage * slides.length), slides.length - 1);
    
    if (targetIndex !== index) setIndex(targetIndex);
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full h-[600px] bg-[#050505] overflow-hidden cursor-ew-resize touch-none"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} exit={{ opacity: 0.8 }}
          transition={{ duration: 0 }} // Instant transition for scrubbing feel
          src={slides[index].img}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </AnimatePresence>

      <div className="absolute bottom-10 w-full px-20">
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden relative">
          <motion.div 
            animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_cyan]" 
          />
        </div>
        <div className="mt-4 flex justify-between text-white font-mono text-sm">
          <span>01</span>
          <span>Scrub to navigate</span>
          <span>0{slides.length}</span>
        </div>
      </div>
    </div>
  );
}