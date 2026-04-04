"use client";
import { motion } from "framer-motion";
import { classicSlides as slides } from "@/utils/mockData";

export function UAAutoMarquee007() {
  // Duplicate array to create seamless loop
  const marqueeItems = [...slides, ...slides, ...slides];

  return (
    <div className="w-full py-12 overflow-hidden bg-[#050505] flex">
      <motion.div 
        className="flex gap-8 whitespace-nowrap"
        animate={{ x:[0, -1000] }} // Adjust based on item widths
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {marqueeItems.map((slide, i) => (
          <div key={i} className="w-[300px] h-[200px] relative rounded-2xl overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={slide.img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-mono">{slide.title}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}