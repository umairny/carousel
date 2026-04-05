"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

export function UAMorphBlob099() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden flex items-center justify-center cursor-pointer" onClick={next}>
      
      {/* SVG Gooey Filter Definition */}
      <svg className="absolute w-0 h-0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </svg>

      <div className="relative w-full h-full flex items-center justify-center" style={{ filter: "url(#gooey)" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, type: "spring", damping: 12 }}
            className="absolute w-[400px] h-[400px] bg-cyan-500 rounded-full overflow-hidden"
          >
            <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Blobs that merge into the center */}
        <motion.div 
          animate={{ rotate: 360, x:[50, -50, 50], y:[50, 100, 50] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 bg-purple-500 rounded-full" 
        />
        <motion.div 
          animate={{ rotate: -360, x:[-50, 50, -50], y: [-50, -100, -50] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-blue-500 rounded-full" 
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="text-white text-6xl font-black drop-shadow-lg mix-blend-overlay">{slides[currentIndex].title}</h2>
        <p className="text-white/60 font-mono tracking-widest mt-2">{slides[currentIndex].subtitle}</p>
      </div>
    </div>
  );
}