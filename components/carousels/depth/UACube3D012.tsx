"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { depthSlides } from "@/utils/mockData3D";

export function UACube3D012() {
  const slides = depthSlides.slice(0, 4); // Cube needs 4 sides
  const { currentIndex } = useUACarousel({ totalItems: 4, autoPlay: true, interval: 3000 });

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-zinc-950 [perspective:1500px]">
      <motion.div
        animate={{ rotateY: currentIndex * -90 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="relative w-[400px] h-[400px] [transform-style:preserve-3d]"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-white/20 bg-black/80 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.1)]"
            style={{ transform: `rotateY(${i * 90}deg) translateZ(200px)` }} // 200px = half of width
          >
            <img src={slide.img} className="w-full h-full object-cover opacity-60" />
            <h2 className="absolute bottom-10 left-10 text-white text-5xl font-black">{slide.title}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
}