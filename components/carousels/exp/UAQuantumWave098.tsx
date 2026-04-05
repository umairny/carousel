"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

const BANDS = 20;

export function UAQuantumWave098() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex cursor-pointer" onClick={next}>
      <AnimatePresence initial={false}>
        <div key={currentIndex} className="absolute inset-0 flex">
          {Array.from({ length: BANDS }).map((_, i) => (
            <motion.div
              key={`${currentIndex}-${i}`}
              className="flex-1 h-full relative overflow-hidden"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: "easeInOut" }}
            >
              <img 
                src={slides[currentIndex].img} 
                className="absolute h-[600px] max-w-none object-cover"
                style={{ width: `${BANDS * 100}%`, left: `-${i * 100}%` }}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-7xl font-bold tracking-tighter drop-shadow-2xl mix-blend-overlay">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}