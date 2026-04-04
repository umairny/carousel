"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAKenBurns033() {
  const { currentIndex } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 6000 });

  return (
    <div className="relative w-full h-[700px] bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <motion.img 
            src={slides[currentIndex].img} 
            className="w-full h-full object-cover opacity-60"
            initial={{ scale: 1, x: 0, y: 0 }}
            // Randomize pan direction based on index
            animate={{ 
              scale: 1.15, 
              x: currentIndex % 2 === 0 ? "-2%" : "2%", 
              y: currentIndex % 2 === 0 ? "2%" : "-2%" 
            }}
            transition={{ duration: 10, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <h2 className="text-white text-5xl font-light tracking-[0.5em]">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}