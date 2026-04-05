"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAGravityDrop082() {
  const [index, setIndex] = useState(0);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    // If dragged down far or fast enough
    if (offset.y > 100 || velocity.y > 500) {
      setIndex((prev) => (prev + 1) % slides.length);
    }
  };

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-zinc-950 overflow-hidden relative">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ y: -800, rotate: -10, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: 1000, rotate: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, mass: 1.5 }}
          className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        >
          <img src={slides[index].img} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <p className="text-white font-mono text-sm">Swipe Down ↓</p>
          </div>
          <div className="absolute bottom-6 left-6 pointer-events-none">
            <h2 className="text-white text-4xl font-black drop-shadow-xl">{slides[index].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}