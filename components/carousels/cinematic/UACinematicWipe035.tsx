"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UACinematicWipe035() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden" onClick={next}>
      {/* Base Image */}
      <img src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover opacity-80" />
      
      {/* Text Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-6xl font-serif italic tracking-widest drop-shadow-2xl">{slides[currentIndex].title}</h1>
      </div>

      {/* The Wipe Element */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`wipe-${currentIndex}`}
          initial={{ x: "100%" }}
          animate={{ x: "100%" }}
          exit={{ x: "-100%" }} // Sweeps across on exit
          transition={{ duration: 1, ease:[0.76, 0, 0.24, 1] }}
          className="absolute inset-0 bg-white z-20 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#050505]" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}