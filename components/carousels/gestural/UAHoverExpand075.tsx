"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAHoverExpand075() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-[600px] bg-black flex overflow-hidden p-4 gap-2" onMouseLeave={() => setHoveredIndex(null)}>
      {slides.map((slide, i) => {
        const isHovered = hoveredIndex === i;
        
        return (
          <motion.div
            key={slide.id}
            onMouseEnter={() => setHoveredIndex(i)}
            animate={{ 
              flex: hoveredIndex === null ? 1 : isHovered ? 4 : 0.5,
              opacity: hoveredIndex === null || isHovered ? 1 : 0.4
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="relative h-full rounded-2xl overflow-hidden cursor-crosshair border border-white/10"
          >
            <img src={slide.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent p-6 pointer-events-none">
              <motion.h2 
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
                className="text-white text-4xl font-bold tracking-tight whitespace-nowrap"
              >
                {slide.title}
              </motion.h2>
              {!isHovered && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-mono opacity-50 whitespace-nowrap rotate-90 origin-left">
                  {slide.title}
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}