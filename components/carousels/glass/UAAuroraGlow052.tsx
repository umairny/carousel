"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAAuroraGlow052() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-black" onClick={next}>
      {/* Aurora Orbs */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px] -top-20 -left-20 mix-blend-screen pointer-events-none" 
      />
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.5, 1] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[120px] bottom-0 right-0 mix-blend-screen pointer-events-none" 
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-[600px] h-[350px] rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl p-8 flex items-center gap-8"
        >
          <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-inner">
            <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2">
            <h2 className="text-white text-5xl font-black">{slides[currentIndex].title}</h2>
            <p className="text-white/50 mt-2 font-light">{slides[currentIndex].subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}