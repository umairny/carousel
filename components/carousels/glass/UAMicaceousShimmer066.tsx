"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAMicaceousShimmer066() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black flex items-center justify-center cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
          className="relative w-[500px] h-[400px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/20"
        >
          <img src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Shimmer / Noise Layer */}
          <div 
            className="absolute inset-0 opacity-40 mix-blend-color-dodge pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-cyan-500/30 mix-blend-overlay" />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
            <h2 className="text-white text-6xl font-black drop-shadow-2xl tracking-tighter">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}