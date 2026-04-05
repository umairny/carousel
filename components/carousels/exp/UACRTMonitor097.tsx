"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

export function UACRTMonitor097() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden cursor-pointer group" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} className="absolute inset-0">
          
          {/* Red Channel */}
          <motion.img 
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 30, opacity: 0 }} transition={{ duration: 0.4 }}
            src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80" 
            style={{ filter: "drop-shadow(5px 0 0 red)" }}
          />
          {/* Blue Channel */}
          <motion.img 
            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80" 
            style={{ filter: "drop-shadow(-5px 0 0 cyan)" }}
          />

        </motion.div>
      </AnimatePresence>

      {/* CRT Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] group-hover:animate-pulse" />
      
      {/* Heavy Glitch Bar */}
      <motion.div 
        animate={{ y: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-10 bg-white/10 z-30 mix-blend-overlay backdrop-blur-md" 
      />

      <div className="absolute bottom-10 right-10 z-40 text-cyan-400 font-mono text-2xl font-black drop-shadow-[2px_2px_0_red]">
        {slides[currentIndex].title}_
      </div>
    </div>
  );
}