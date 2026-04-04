"use client";
import { motion } from "framer-motion";
import { depthSlides } from "@/utils/mockData3D";

export function UAHelixTwist015() {
  const extended = [...depthSlides, ...depthSlides]; // 10 items
  
  return (
    <div className="w-full h-[700px] bg-[#0a0a0a] flex items-center justify-center [perspective:1000px] overflow-hidden">
      <motion.div
        animate={{ rotateY: [0, -360], y: [0, -200] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
        className="relative [transform-style:preserve-3d]"
      >
        {extended.map((slide, i) => (
          <div
            key={i}
            className="absolute w-[200px] h-[120px] bg-black/80 border border-purple-500/30 rounded-xl overflow-hidden backdrop-blur-xl"
            style={{ 
              transform: `rotateY(${i * 36}deg) translateZ(300px) translateY(${i * 40 - 200}px)`,
              opacity: 1 - Math.abs(i - 5) * 0.1
            }}
          >
            <img src={slide.img} className="w-full h-full object-cover opacity-60 mix-blend-screen" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}