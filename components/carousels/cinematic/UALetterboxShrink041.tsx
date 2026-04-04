"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UALetterboxShrink041() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Bars */}
      <motion.div 
        key={`top-${currentIndex}`}
        initial={{ height: "0%" }}
        animate={{ height: ["0%", "15%", "15%", "0%"] }}
        transition={{ duration: 3, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full bg-black z-10"
      />
      <motion.div 
        key={`bottom-${currentIndex}`}
        initial={{ height: "0%" }}
        animate={{ height: ["0%", "15%", "15%", "0%"] }}
        transition={{ duration: 3, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full bg-black z-10 flex items-center justify-center"
      >
        <motion.h2 
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} 
          transition={{ duration: 3, times:[0, 0.3, 0.7, 1] }}
          className="text-white tracking-[0.5em] text-sm font-mono uppercase"
        >
          {slides[currentIndex].title}
        </motion.h2>
      </motion.div>
    </div>
  );
}