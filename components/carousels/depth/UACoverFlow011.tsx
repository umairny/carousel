"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UACoverFlow011() {
  const { currentIndex, goTo } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-[#050505] overflow-hidden [perspective:1200px]">
      <div className="flex items-center justify-center transform-style-3d">
        {slides.map((slide, i) => {
          const offset = i - currentIndex;
          const absOffset = Math.abs(offset);
          const zIndex = 10 - absOffset;
          
          return (
            <motion.div
              key={slide.id}
              onClick={() => goTo(i)}
              animate={{
                rotateY: offset === 0 ? 0 : offset > 0 ? -45 : 45,
                scale: offset === 0 ? 1 : 0.8,
                x: offset * 150,
                z: -absOffset * 100,
                opacity: absOffset > 2 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{ zIndex }}
              className="absolute w-[350px] h-[450px] rounded-2xl cursor-pointer group shadow-2xl shadow-black/50"
            >
              <img src={slide.img} className="w-full h-full object-cover rounded-2xl border border-white/10" />
              {/* Fake Reflection */}
              <div 
                className="absolute top-full left-0 w-full h-1/2 opacity-30 pointer-events-none rounded-b-2xl"
                style={{ backgroundImage: `url(${slide.img})`, transform: "scaleY(-1)", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))" }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}