"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAGlitch036() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden cursor-crosshair" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, filter: "hue-rotate(90deg) blur(10px)" }}
          animate={{ 
            opacity: 1, 
            filter:["hue-rotate(90deg) blur(10px)", "hue-rotate(-90deg) blur(0px)", "hue-rotate(0deg) blur(0px)"],
            x: [0, -10, 10, -5, 5, 0]
          }}
          exit={{ opacity: 0, scale: 1.1, filter: "contrast(200%) grayscale(100%)" }}
          transition={{ duration: 0.6, times:[0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 right-10">
        <motion.h2 
          key={`text-${currentIndex}`}
          animate={{ opacity:[0, 1, 0, 1], x: [0, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-mono text-3xl font-bold uppercase"
        >
          {slides[currentIndex].title}_
        </motion.h2>
      </div>
    </div>
  );
}