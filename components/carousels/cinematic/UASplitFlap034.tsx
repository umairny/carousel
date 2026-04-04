"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

const SLICES = 5;

export function UASplitFlap034() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden cursor-pointer" onClick={next}>
      <AnimatePresence initial={false}>
        <div key={currentIndex} className="absolute inset-0 flex flex-col">
          {Array.from({ length: SLICES }).map((_, i) => (
            <motion.div
              key={`${currentIndex}-${i}`}
              className="flex-1 w-full relative overflow-hidden"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%", zIndex: 10 }}
              transition={{ duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: i * 0.1 }}
            >
              <img 
                src={slides[currentIndex].img} 
                className="absolute w-full h-[600px] object-cover"
                style={{ top: `-${i * (600 / SLICES)}px` }} // Offset to match slice position
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <div className="absolute z-20 bottom-10 left-10">
        <h2 className="text-white text-6xl font-bold mix-blend-difference">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}