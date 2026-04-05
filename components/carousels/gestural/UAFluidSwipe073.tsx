"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAFluidSwipe073() {
  const x = useMotionValue(0);
  // Organic fluid border radius based on drag distance
  const borderRadius = useTransform(x,[-300, 0, 300],["50px 150px 150px 50px", "50px 50px 50px 50px", "150px 50px 50px 150px"]);
  const scaleX = useTransform(x,[-300, 0, 300], [0.8, 1, 0.8]);

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[#111] overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        style={{ x, borderRadius, scaleX }}
        className="w-[400px] h-[500px] bg-cyan-500 overflow-hidden relative cursor-grab active:cursor-grabbing shadow-[0_0_40px_cyan]"
      >
        <img src={slides[0].img} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white pointer-events-none">
          <h2 className="text-4xl font-black uppercase">Swipe Me</h2>
          <p className="font-mono text-sm mt-2 opacity-70">Fluid Distortion</p>
        </div>
      </motion.div>
    </div>
  );
}