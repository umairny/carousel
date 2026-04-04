"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAFocusPull042() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[600px] bg-black overflow-hidden cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={next}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.img 
            src={slides[currentIndex].img} 
            animate={{ filter: isHovered ? "blur(0px) brightness(0.8)" : "blur(15px) brightness(0.3)", scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        animate={{ filter: isHovered ? "blur(10px)" : "blur(0px)", opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <h1 className="text-white text-7xl font-bold tracking-tight">{slides[currentIndex].title}</h1>
        <p className="text-cyan-400 font-mono mt-4">// {slides[currentIndex].subtitle}</p>
      </motion.div>
    </div>
  );
}