"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UASoftEmboss054() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center bg-[#1a1b1e] gap-10">
      <motion.button 
        whileTap={{ scale: 0.95, boxShadow: "inset 5px 5px 10px #121315, inset -5px -5px 10px #222327" }}
        onClick={next}
        className="relative w-[500px] h-[300px] rounded-3xl bg-[#1a1b1e] p-4 cursor-pointer overflow-hidden transition-all duration-300 shadow-[10px_10px_20px_#121315,-10px_-10px_20px_#222327]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="w-full h-full rounded-2xl overflow-hidden relative shadow-[inset_2px_2px_10px_rgba(0,0,0,0.5)]"
          >
            <img src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent p-8 flex flex-col justify-center">
              <h2 className="text-white text-4xl font-bold tracking-widest">{slides[currentIndex].title}</h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.button>
      
      {/* Neumorphic Indicator Dots */}
      <div className="flex gap-4">
        {slides.map((_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-cyan-500 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)]' : 'bg-[#1a1b1e] shadow-[3px_3px_6px_#121315,-3px_-3px_6px_#222327]'}`} />
        ))}
      </div>
    </div>
  );
}