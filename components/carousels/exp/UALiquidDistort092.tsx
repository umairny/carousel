"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { expSlides as slides } from "@/utils/mockDataExperimental";

export function UALiquidDistort092() {
  const dragX = useMotionValue(0);
  
  // Transform drag velocity into liquid turbulence strength
  const liquidDistortion = useTransform(dragX, [-300, 0, 300],[100, 0, 100]);
  const skew = useTransform(dragX,[-300, 0, 300], [-10, 0, 10]);

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex items-center justify-center">
      <svg className="absolute w-0 h-0">
        <filter id="liquid-melt">
          <motion.feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="warp" />
          <motion.feDisplacementMap in="SourceGraphic" in2="warp" scale={liquidDistortion} xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </svg>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX, skewX: skew, filter: "url(#liquid-melt)" }}
        className="w-[500px] h-[350px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-white/20 shadow-[0_0_50px_rgba(0,255,255,0.2)]"
      >
        <img src={slides[0].img} className="w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <h2 className="text-white text-4xl font-bold tracking-widest">MELT ME</h2>
        </div>
      </motion.div>
    </div>
  );
}