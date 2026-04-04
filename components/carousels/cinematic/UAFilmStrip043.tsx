"use client";
import { motion } from "framer-motion";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAFilmStrip043() {
  const extendedSlides = [...slides, ...slides, ...slides];

  return (
    <div className="w-full py-10 bg-[#0a0a0a] overflow-hidden">
      {/* Film Strip Container */}
      <div className="relative bg-[#020202] py-8 border-y-2 border-black shadow-2xl">
        {/* Perforations Top */}
        <div className="absolute top-2 left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#0a0a0a_10px,#0a0a0a_20px)] opacity-50 z-10" />
        
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 px-4"
        >
          {extendedSlides.map((slide, i) => (
            <div key={i} className="min-w-[400px] h-[250px] relative shrink-0 border-2 border-black/50">
              <img src={slide.img} className="w-full h-full object-cover grayscale contrast-125 sepia-[0.3]" />
              <div className="absolute bottom-2 right-2 text-white/50 font-mono text-xs mix-blend-difference">
                FRAME {i + 1}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Perforations Bottom */}
        <div className="absolute bottom-2 left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#0a0a0a_10px,#0a0a0a_20px)] opacity-50 z-10" />
      </div>
    </div>
  );
}