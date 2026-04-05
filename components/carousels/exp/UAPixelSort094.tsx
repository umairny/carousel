"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

const SLICES = 40; // High count for pixel sort effect

export function UAPixelSort094() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex cursor-pointer" onClick={next}>
      <AnimatePresence initial={false}>
        <div key={currentIndex} className="absolute inset-0 flex w-full h-full">
          {Array.from({ length: SLICES }).map((_, i) => (
            <motion.div
              key={`${currentIndex}-${i}`}
              className="flex-1 h-full relative overflow-hidden"
              initial={{ scaleY: 2, y: "-50%", opacity: 0, filter: "blur(10px)" }}
              animate={{ scaleY: 1, y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={{ scaleY: 3, y: "50%", opacity: 0 }} // Melts downward
              transition={{ duration: 0.8, delay: Math.random() * 0.4, ease: "circOut" }}
              style={{ transformOrigin: "top" }}
            >
              <img 
                src={slides[currentIndex].img} 
                className="absolute h-full object-cover max-w-none"
                style={{ width: `${SLICES * 100}%`, left: `-${i * 100}%` }}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
        <h2 className="text-white text-7xl font-bold mix-blend-overlay tracking-tight">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}