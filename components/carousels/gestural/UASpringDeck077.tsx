"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UASpringDeck077() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Back card trails the front card but at a smaller magnitude
  const backX = useTransform(x, v => v * 0.4);
  const backY = useTransform(y, v => v * 0.4);

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-black overflow-hidden perspective-1000">
      <div className="relative w-[350px] h-[450px]">
        {/* Background Trailing Card */}
        <motion.div 
          style={{ x: backX, y: backY, scale: 0.9, zIndex: 0 }}
          className="absolute inset-0 rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden opacity-50"
        >
           <img src={slides[1].img} className="w-full h-full object-cover" />
        </motion.div>

        {/* Foreground Draggable Card */}
        <motion.div 
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.6}
          style={{ x, y, zIndex: 10 }}
          className="absolute inset-0 rounded-3xl bg-black border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <img src={slides[0].img} className="w-full h-full object-cover opacity-80 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black to-transparent pointer-events-none">
            <h2 className="text-white text-3xl font-bold">{slides[0].title}</h2>
            <p className="text-white/60">Drag me anywhere</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}