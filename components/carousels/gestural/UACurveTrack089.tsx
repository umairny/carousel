"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UACurveTrack089() {
  const dragX = useMotionValue(0);

  return (
    <div className="w-full h-[600px] bg-[#0a0a0a] flex flex-col justify-center overflow-hidden cursor-grab active:cursor-grabbing border-y border-white/5">
      <div className="px-10 mb-20 text-center pointer-events-none text-white/40 font-mono tracking-[0.5em] text-sm">SINE WAVE DRAG</div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.1}
        style={{ x: dragX }}
        className="flex gap-16 px-[40vw]" // Offset start
      >
        {slides.map((slide, i) => {
          // Each card uses the global dragX combined with its index offset to calculate its Y position
          const y = useTransform(dragX, (x) => Math.sin((x - i * 300) / 100) * 100);
          
          return (
            <motion.div 
              key={slide.id} 
              style={{ y }} 
              className="min-w-[300px] h-[350px] relative rounded-3xl overflow-hidden border border-white/10 shrink-0"
            >
              <img src={slide.img} className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-2xl tracking-widest">{slide.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}