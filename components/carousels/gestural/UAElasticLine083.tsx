"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAElasticLine083() {
  const [index, setIndex] = useState(0);
  const dragY = useMotionValue(0);
  
  // Transform the drag value into an SVG Quadratic curve path (Q)
  const path = useTransform(dragY, (y) => `M 0 100 Q 400 ${100 + y} 800 100`);

  const handleDragEnd = () => {
    if (dragY.get() > 100 || dragY.get() < -100) {
      setIndex((prev) => (prev + 1) % slides.length);
    }
    dragY.set(0); // Snap back
  };

  return (
    <div className="w-full h-[600px] bg-black flex flex-col items-center justify-center relative overflow-hidden select-none">
      <motion.div 
        key={index}
        initial={{ filter: "blur(20px)", opacity: 0, scale: 1.1 }}
        animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img src={slides[index].img} className="w-full h-full object-cover" />
      </motion.div>

      <div className="z-10 text-center mb-20 pointer-events-none">
        <h2 className="text-white text-6xl font-black">{slides[index].title}</h2>
        <p className="text-white/60 font-mono mt-2">Pull the line and release</p>
      </div>

      {/* SVG Elastic Line */}
      <div className="relative w-[800px] h-[200px] z-20 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <motion.path 
            d={path} 
            fill="transparent" 
            stroke="cyan" 
            strokeWidth="4" 
            animate={{ d: path.get() }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // Extreme rubber snap
          />
        </svg>

        {/* Draggable Handle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          style={{ y: dragY }}
          className="w-16 h-16 rounded-full bg-cyan-400 cursor-grab active:cursor-grabbing shadow-[0_0_30px_cyan] z-30 border-4 border-white flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}