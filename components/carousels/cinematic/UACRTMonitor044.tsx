"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UACRTMonitor044() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="w-full h-[600px] bg-[#111] p-10 flex items-center justify-center">
      <div 
        className="relative w-full max-w-4xl h-full rounded-[3rem] overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] border-8 border-[#222] cursor-pointer"
        onClick={next}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, filter: "brightness(2) contrast(150%)" }}
            animate={{ opacity: 1, filter: "brightness(1) contrast(120%)" }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={slides[currentIndex].img}
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.5]"
          />
        </AnimatePresence>

        {/* Scanlines & Curvature Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] rounded-[2.5rem] z-20" />

        {/* RGB Split Text */}
        <div className="absolute bottom-10 left-10 z-30">
          <h2 className="text-white text-5xl font-black uppercase tracking-widest drop-shadow-[2px_0_0_red] [-webkit-text-stroke:1px_cyan]">
            {slides[currentIndex].title}
          </h2>
          <p className="text-green-400 font-mono text-sm mt-2 animate-pulse">PLAY ▶ 00:0{currentIndex}:42</p>
        </div>
      </div>
    </div>
  );
}