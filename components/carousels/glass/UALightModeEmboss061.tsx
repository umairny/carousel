"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UALightModeEmboss061() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center bg-[#f0f0f3] gap-12 rounded-xl">
      <motion.button 
        whileTap={{ scale: 0.97, boxShadow: "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff" }}
        onClick={next}
        className="relative w-[500px] h-[350px] rounded-[2.5rem] bg-[#f0f0f3] p-4 cursor-pointer overflow-hidden transition-all duration-300 shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
            className="w-full h-full rounded-3xl overflow-hidden relative shadow-[inset_3px_3px_10px_rgba(0,0,0,0.1)]"
          >
            <img src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent p-8 flex flex-col justify-end">
              <h2 className="text-gray-800 text-4xl font-black tracking-tight">{slides[currentIndex].title}</h2>
              <p className="text-gray-500 font-medium mt-1">{slides[currentIndex].subtitle}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.button>
      
      {/* Light Mode Dots */}
      <div className="flex gap-6">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`w-4 h-4 rounded-full transition-all duration-500 ${currentIndex === i 
              ? 'bg-cyan-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)] scale-125' 
              : 'bg-[#f0f0f3] shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff]'}`} 
          />
        ))}
      </div>
    </div>
  );
}