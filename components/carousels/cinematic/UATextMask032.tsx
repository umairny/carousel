"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UATextMask032() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const[isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="relative w-full h-[600px] bg-[#050505] overflow-hidden flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={next}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {/* Text Mask Background */}
          <div 
            className="text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-center bg-cover transition-all duration-700 ease-in-out"
            style={{ 
              backgroundImage: `url(${slides[currentIndex].img})`,
              WebkitTextStroke: isRevealed ? "0px transparent" : "1px rgba(255,255,255,0.1)",
              opacity: isRevealed ? 1 : 0.8
            }}
          >
            {slides[currentIndex].title}
          </div>
          
          {/* Full Image Reveal Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isRevealed ? 0.3 : 0 }}
            className="absolute inset-0 z-[-1] transition-opacity duration-700"
          >
            <img src={slides[currentIndex].img} className="w-full h-full object-cover grayscale" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}