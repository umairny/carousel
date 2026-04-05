"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAPullRelease079() {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  
  // Calculate drag percentage for UI feedback
  const dragProgress = useTransform(x, [-200, 0], [1, 0]);
  const opacity = useTransform(dragProgress,[0.5, 1], [0, 1]);
  const scale = useTransform(x,[-200, 0], [0.8, 1]);

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x < -150) {
      setIndex((prev) => (prev + 1) % slides.length);
    }
  };

  return (
    <div className="w-full h-[600px] bg-[#111] flex items-center justify-center relative overflow-hidden">
      {/* Background UI Hint */}
      <motion.div style={{ opacity }} className="absolute right-10 text-cyan-400 font-mono font-bold text-2xl tracking-widest">
        RELEASE TO NEXT
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{ left: 0.8, right: 0 }} // Only elastic to the left
        onDragEnd={handleDragEnd}
        style={{ x, scale }}
        className="w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-grab active:cursor-grabbing z-10"
      >
        <img src={slides[index].img} className="w-full h-full object-cover pointer-events-none" />
        <div className="absolute bottom-6 left-6 pointer-events-none">
          <h2 className="text-white text-5xl font-black">{slides[index].title}</h2>
          <p className="text-white/80 font-mono mt-1">&lt;&lt; Pull left to advance</p>
        </div>
      </motion.div>
    </div>
  );
}