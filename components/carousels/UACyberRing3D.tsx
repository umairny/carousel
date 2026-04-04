// src/components/carousels/UACyberRing3D.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slides } from "@/utils/mockData";

const TOTAL_CARDS = slides.length;
const ANGLE_STEP = 360 / TOTAL_CARDS;
const RADIUS = 400; // Z-translation

export const UACyberRing3D = () => {
  const [rotation, setRotation] = useState(0);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) setRotation((r) => r - ANGLE_STEP);
    else if (swipe > 50) setRotation((r) => r + ANGLE_STEP);
  };

  return (
    <div className="w-full h-[700px] bg-black flex items-center justify-center [perspective:1200px] overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ rotateY: rotation }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="relative w-[300px] h-[400px] [transform-style:preserve-3d] cursor-grab active:cursor-grabbing"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 w-full h-full"
            style={{ transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)` }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 backdrop-blur-md rounded-xl flex flex-col group hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.1)] overflow-hidden select-none">
              <Image 
                src={slide.img} 
                alt={slide.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pointer-events-none text-center">
                <span className="text-white font-bold text-2xl tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {slide.title}
                </span>
                <span className="text-white/70 font-mono text-xs uppercase group-hover:text-white transition-colors duration-300">
                  {slide.subtitle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-10 text-white/40 font-mono text-sm uppercase tracking-widest">
        Swipe to Rotate • UA Carousel System
      </div>
    </div>
  );
};