"use client";
import React from "react";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import Image from "next/image";
import { slides } from "@/utils/mockData";


export const UACoverFlow3D = () => {
  const { currentIndex, next, prev } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] flex items-center justify-center overflow-hidden [perspective:1000px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />
      
      <div className="relative flex items-center justify-center w-full h-full transform-style-3d">
        {slides.map((slide, i) => {
          const offset = i - currentIndex;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              className="absolute w-[300px] h-[400px] rounded-2xl cursor-pointer"
              animate={{
                x: offset * 180,
                scale: isActive ? 1 : 1 - absOffset * 0.15,
                rotateY: offset * -25,
                zIndex: 10 - absOffset,
                opacity: absOffset > 3 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={() => { if (!isActive) offset > 0 ? next() : prev(); }}
            >
              {/* Glassmorphic Card Design */}
              <div className={`relative overflow-hidden w-full h-full rounded-2xl border ${isActive ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.15)]' : 'border-white/10'} bg-white/5 backdrop-blur-xl flex flex-col justify-end p-6 transition-colors duration-500`}>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent -z-10" />
                <div className="text-white/50 text-xs font-mono mb-2">UA-SYS // 00{i + 1}</div>
                <div className="text-white text-2xl font-semibold tracking-wide">{slide.title}</div>
                <div className="text-white/80 text-sm">{slide.subtitle}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};