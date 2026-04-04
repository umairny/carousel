"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UAAccordion3D017() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full h-[500px] bg-black flex gap-2 p-10 [perspective:1000px]">
      {slides.map((slide, i) => {
        const isHovered = hovered === i;
        const isNeighbor = hovered !== null && Math.abs(hovered - i) === 1;

        return (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              flex: isHovered ? 4 : isNeighbor ? 1.5 : 1,
              rotateY: hovered === null ? 0 : isHovered ? 0 : (i < hovered ? 25 : -25),
              z: isHovered ? 50 : 0,
              filter: isHovered || hovered === null ? "brightness(1)" : "brightness(0.4)"
            }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="relative h-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 [transform-style:preserve-3d]"
          >
            <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 whitespace-nowrap">
              {isHovered && <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-3xl font-bold">{slide.title}</motion.h3>}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}