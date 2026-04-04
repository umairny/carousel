"use client";
import { motion } from "framer-motion";
import { classicSlides as slides } from "@/utils/mockData";

export function UASmoothSlide003() {
  return (
    <div className="w-full py-20 overflow-hidden cursor-grab active:cursor-grabbing bg-[#0a0a0a]">
      <motion.div 
        drag="x" 
        dragConstraints={{ right: 0, left: -((slides.length - 1) * 420) }}
        className="flex gap-8 px-10"
      >
        {slides.map((slide) => (
          <motion.div key={slide.id} className="min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden shadow-2xl shrink-0 border border-white/10">
            <img src={slide.img} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white">{slide.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}