"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAHeroScale031() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 5000 });

  return (
    <div className="relative w-full h-[80vh] bg-black overflow-hidden cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-7xl md:text-[8rem] font-black tracking-tighter uppercase"
          >
            {slides[currentIndex].title}
          </motion.h1>
        </AnimatePresence>
      </div>
      
      {/* Cinematic Letterbox effect */}
      <div className="absolute top-0 w-full h-12 bg-black z-20 shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
      <div className="absolute bottom-0 w-full h-12 bg-black z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.8)]" />
    </div>
  );
}