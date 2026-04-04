"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UALiquidMorph053() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 4000 });

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[#050505] overflow-hidden" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, scale: 1,
            borderRadius:[
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 70% 70% 30% / 30% 60% 40% 70%",
              "60% 40% 30% 70% / 60% 30% 70% 40%"
            ]
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ 
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            borderRadius: { duration: 8, repeat: Infinity, ease: "linear" } 
          }}
          className="relative w-[400px] h-[400px] overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.2)] border-2 border-white/20 cursor-pointer"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
            <h2 className="text-white text-5xl font-bold mix-blend-overlay drop-shadow-lg">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}