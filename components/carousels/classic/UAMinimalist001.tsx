"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { classicSlides as slides } from "@/utils/mockData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function UAMinimalist001() {
  const { currentIndex, direction, next, prev } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[600px] bg-[#050505] overflow-hidden rounded-2xl group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={slides[currentIndex].img}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      </AnimatePresence>
      
      {/* Premium Controls */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
        <div>
          <p className="text-cyan-400 font-mono text-sm tracking-widest">{slides[currentIndex].subtitle}</p>
          <h2 className="text-white text-4xl font-light tracking-tight mt-2">{slides[currentIndex].title}</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={prev} className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors border border-white/10"><ArrowLeft size={20} /></button>
          <button onClick={next} className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors border border-white/10"><ArrowRight size={20} /></button>
        </div>
      </div>
    </div>
  );
}