"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UACylinderRing013() {
  const { currentIndex } = useUACarousel({ totalItems: slides.length, autoPlay: true });
  const theta = 360 / slides.length;
  const radius = Math.round((250 / 2) / Math.tan(Math.PI / slides.length)) + 50;

  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-black[perspective:1000px] overflow-hidden">
      <motion.div
        animate={{ rotateY: currentIndex * -theta }}
        transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
        className="relative w-[250px] h-[350px] [transform-style:preserve-3d]"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden opacity-90"
            style={{ transform: `rotateY(${i * theta}deg) translateZ(${radius}px)` }}
          >
            <img src={slide.img} className="w-full h-full object-cover opacity-50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}