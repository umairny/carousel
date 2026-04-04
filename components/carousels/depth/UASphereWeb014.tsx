"use client";
import { motion } from "framer-motion";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UASphereWeb014() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[#020202] [perspective:1200px] overflow-hidden">
      <motion.div 
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="relative w-[1px] h-[1px] [transform-style:preserve-3d]"
      >
        {slides.map((slide, i) => {
          const phi = Math.acos(-1 + (2 * i) / slides.length);
          const theta = Math.sqrt(slides.length * Math.PI) * phi;
          const x = 200 * Math.cos(theta) * Math.sin(phi);
          const y = 200 * Math.sin(theta) * Math.sin(phi);
          const z = 200 * Math.cos(phi);

          return (
            <motion.div
              key={i}
              className="absolute w-20 h-20 -ml-10 -mt-10 rounded-full border border-cyan-500/50 bg-black/50 backdrop-blur-md overflow-hidden"
              style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}
            >
              <img src={slide.img} className="w-full h-full object-cover opacity-80" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}