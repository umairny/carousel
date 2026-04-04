"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAPrismCrystal060() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex items-center justify-center cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} className="absolute inset-0">
          {/* Base Image */}
          <motion.img 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
            src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover opacity-70" 
          />
          
          {/* Prism Layer 1 */}
          <div className="absolute top-10 left-10 w-[40%] h-[80%] bg-white/5 backdrop-blur-md border-r border-white/20 skew-x-12 z-10" />
          
          {/* Prism Layer 2 */}
          <div className="absolute bottom-10 right-10 w-[50%] h-[70%] bg-white/5 backdrop-blur-xl border-l border-white/20 -skew-x-12 z-20" />

          <motion.div 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          >
            <h1 className="text-white text-8xl font-black uppercase tracking-tighter drop-shadow-2xl mix-blend-overlay">
              {slides[currentIndex].title}
            </h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}