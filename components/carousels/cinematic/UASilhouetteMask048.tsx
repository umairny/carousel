"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UASilhouetteMask048() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-zinc-950 overflow-hidden flex items-center justify-center" onClick={next}>
      <div className="w-[500px] h-[500px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-white"
            style={{ 
              // Custom geometric Mask (Hexagon/Star cross)
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
            }}
          >
            <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-10">
        <h2 className="text-zinc-500 font-mono tracking-widest uppercase">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}