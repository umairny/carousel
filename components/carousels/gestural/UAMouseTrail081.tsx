"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

interface TrailItem { id: number; x: number; y: number; slideIndex: number; }

export function UAMouseTrail081() {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const countRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, movementX, movementY } = e;
    // Only spawn a new image if moving fast enough to avoid clustering
    if (Math.abs(movementX) + Math.abs(movementY) < 15) return;

    const newItem: TrailItem = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      slideIndex: countRef.current % slides.length,
    };
    
    countRef.current += 1;
    setTrail((prev) => [...prev, newItem]);

    // Automatically remove after 1 second
    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== newItem.id));
    }, 1000);
  };

  return (
    <div 
      className="w-full h-[700px] bg-[#050505] overflow-hidden relative cursor-crosshair flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center z-0 pointer-events-none opacity-40">
        <h2 className="text-white text-5xl font-black tracking-widest uppercase">Wave Your Cursor</h2>
        <p className="text-cyan-400 font-mono mt-4">Gestural Trail Engine // 081</p>
      </div>

      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, x: item.x - 150, y: item.y - 200, rotate: (Math.random() - 0.5) * 40 }}
            animate={{ opacity: 1, scale: 1, rotate: (Math.random() - 0.5) * 20 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0 w-[300px] h-[400px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden pointer-events-none z-10"
          >
            <img src={slides[item.slideIndex].img} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}