"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UAZAxisStack018() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[#09090b] [perspective:1000px] overflow-hidden">
      <div className="relative w-[400px] h-[550px]" onClick={next}>
        {slides.map((slide, i) => {
          // Calculate logical index based on current
          const pos = (i - currentIndex + slides.length) % slides.length;
          
          return (
            <motion.div
              key={slide.id}
              animate={{
                z: -pos * 100,
                y: -pos * 30,
                scale: 1 - pos * 0.05,
                opacity: pos > 3 ? 0 : 1 - pos * 0.2,
                rotateX: pos * 2,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer bg-black"
              style={{ zIndex: slides.length - pos }}
            >
              <img src={slide.img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-8 left-8">
                <p className="text-white/60 font-mono text-sm">{slide.type}</p>
                <h2 className="text-white text-4xl font-bold">{slide.title}</h2>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}