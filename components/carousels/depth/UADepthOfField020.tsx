"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UADepthOfField020() {
  const { currentIndex, next, prev } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-black overflow-hidden">
      <div className="flex items-center gap-6">
        {slides.map((slide, i) => {
          const offset = i - currentIndex;
          const absOffset = Math.abs(offset);
          const isCenter = absOffset === 0;

          return (
            <motion.div
              key={slide.id}
              onClick={() => { if(offset > 0) next(); else if(offset < 0) prev(); }}
              animate={{
                scale: isCenter ? 1.2 : 0.8,
                opacity: absOffset > 2 ? 0 : 1,
                filter: `blur(${absOffset * 8}px) brightness(${isCenter ? 1 : 0.4})`,
                zIndex: 10 - absOffset
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-[250px] h-[350px] rounded-xl overflow-hidden cursor-pointer"
            >
              <img src={slide.img} className="w-full h-full object-cover" />
              {isCenter && (
                <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl pointer-events-none shadow-[inset_0_0_20px_rgba(0,255,255,0.3)]" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}