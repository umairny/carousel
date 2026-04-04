"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { depthSlides as slides } from "@/utils/mockData3D";
import React from "react";

function TiltCard({ slide }: { slide: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5],["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY }}
      className="relative w-[350px] h-[450px] rounded-2xl [transform-style:preserve-3d] cursor-crosshair shrink-0"
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={slide.img} className="w-full h-full object-cover" />
      </div>
      {/* 3D Popout Text */}
      <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(60px)] pointer-events-none">
        <h2 className="text-5xl font-black text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">{slide.title}</h2>
      </div>
    </motion.div>
  );
}

export function UAParallaxTilt019() {
  return (
    <div className="w-full flex gap-10 overflow-x-auto p-20 bg-[#050505] no-scrollbar [perspective:1000px]">
      {slides.map(slide => <TiltCard key={slide.id} slide={slide} />)}
    </div>
  );
}