"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

function WarpCard({ slide, mouseX, mouseY }: { slide: any, mouseX: any, mouseY: any }) {
  const ref = useRef<HTMLDivElement>(null);

  // Measure card distance from mouse
  const xOffset = useTransform([mouseX, mouseY], () => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const distanceX = mouseX.get() - centerX;
    return distanceX * 0.15; // Magnetic warp strength
  });

  const yOffset = useTransform([mouseX, mouseY], () => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const distanceY = mouseY.get() - centerY;
    return distanceY * 0.15;
  });

  return (
    <motion.div 
      ref={ref}
      style={{ x: xOffset, y: yOffset }}
      className="w-full h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
    >
      <img src={slide.img} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300" />
    </motion.div>
  );
}

export function UAMagneticGrid085() {
  const gridSlides =[...slides, ...slides]; // 8 items
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(window.innerWidth / 2); mouseY.set(window.innerHeight / 2); }}
      className="w-full h-[700px] bg-black p-20 flex items-center justify-center overflow-hidden"
    >
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl">
        {gridSlides.map((slide, i) => (
          <WarpCard key={i} slide={slide} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </div>
  );
}