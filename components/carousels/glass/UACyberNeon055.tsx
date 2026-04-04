"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UACyberNeon055() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-[#020202] overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 90 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-[350px] h-[500px] rounded-xl cursor-pointer bg-black/60 backdrop-blur-md flex flex-col justify-end p-6 border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.4),inset_0_0_20px_rgba(0,255,255,0.2)]"
          onClick={next}
        >
          <img src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover -z-10 rounded-lg opacity-50 grayscale contrast-150" />
          
          <div className="absolute top-4 right-4 bg-fuchsia-600 px-3 py-1 text-xs font-mono font-bold text-white shadow-[0_0_10px_#c026d3]">SYS_0{currentIndex + 1}</div>
          
          <motion.h2 
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-white text-5xl font-black uppercase tracking-tighter drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]"
          >
            {slides[currentIndex].title}
          </motion.h2>
          <p className="text-cyan-400 font-mono text-sm mt-2">{slides[currentIndex].subtitle}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}