"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { classicSlides as slides } from "@/utils/mockData";

export function UADualSync006() {
  const { currentIndex, goTo } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].img}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      
      <div className="flex gap-4">
        {slides.map((slide, i) => (
          <div 
            key={slide.id} 
            onClick={() => goTo(i)}
            className={`h-24 flex-1 cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${currentIndex === i ? 'border-cyan-400 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
          >
            <img src={slide.img} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}