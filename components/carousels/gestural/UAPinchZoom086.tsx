"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAPinchZoom086() {
  const [index, setIndex] = useState(0);
  const z = useMotionValue(0);
  
  // Mapping the physical Y drag directly to CSS Z-Translation
  const depthZ = useTransform(z,[-300, 0, 300],[300, 0, -300]);
  const opacity = useTransform(z,[-300, -150, 0, 150, 300], [0, 1, 1, 1, 0]);

  const handleDragEnd = (e: any, { offset }: any) => {
    if (offset.y < -100) setIndex((prev) => (prev + 1) % slides.length);
    if (offset.y > 100) setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    z.set(0); // Reset Z depth
  };

  return (
    <div className="w-full h-[600px] bg-[#09090b] flex items-center justify-center [perspective:800px] overflow-hidden">
      <div className="absolute top-10 text-center z-20 pointer-events-none">
        <p className="text-white/50 font-mono">Drag Up / Down to fly through Z-Space</p>
      </div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.4}
        onDragEnd={handleDragEnd}
        style={{ z: depthZ, opacity }}
        className="w-[500px] h-[350px][transform-style:preserve-3d] cursor-ns-resize shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-3xl"
      >
        <img src={slides[index].img} className="absolute inset-0 w-full h-full object-cover rounded-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 rounded-3xl pointer-events-none" />
        <h2 className="absolute bottom-6 left-6 text-white text-5xl font-black drop-shadow-2xl">{slides[index].title}</h2>
      </motion.div>
    </div>
  );
}