"use client";
import { motion } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAInertiaScroll074() {
  // Duplicate array for a longer track
  const trackData =[...slides, ...slides, ...slides];

  return (
    <div className="w-full h-[500px] flex items-center bg-[#0a0a0a] overflow-hidden cursor-grab active:cursor-grabbing">
      <motion.div
        drag="x"
        dragConstraints={{ left: -((trackData.length - 1) * 350), right: 0 }}
        // Inertia Transition setup
        dragTransition={{ power: 0.3, timeConstant: 300 }}
        className="flex gap-6 px-10"
      >
        {trackData.map((slide, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] h-[400px] relative rounded-xl overflow-hidden border border-white/5 pointer-events-none md:pointer-events-auto"
          >
            <img src={slide.img} className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-mono">
              Item 0{i + 1}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}