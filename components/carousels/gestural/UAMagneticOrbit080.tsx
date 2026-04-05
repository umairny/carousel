"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAMagneticOrbit080() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="w-full h-[700px] bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Orbital Items */}
      {slides.map((slide, i) => {
        // Map central drag to opposite orbital movements
        const itemX = useTransform(x, v => v * (i % 2 === 0 ? -1.5 : 1.5));
        const itemY = useTransform(y, v => v * (i < 2 ? -1.5 : 1.5));
        
        // Static layout positions
        const positions =[
          { top: "10%", left: "10%" }, { top: "10%", right: "10%" },
          { bottom: "10%", left: "10%" }, { bottom: "10%", right: "10%" }
        ];

        return (
          <motion.div
            key={i}
            style={{ x: itemX, y: itemY }}
            className="absolute w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] opacity-70"
            initial={positions[i]}
          >
            <img src={slide.img} className="w-full h-full object-cover" />
          </motion.div>
        );
      })}

      {/* Central Draggable Orb */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.2}
        style={{ x, y }}
        className="relative z-20 w-32 h-32 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400 flex items-center justify-center cursor-move shadow-[0_0_40px_rgba(0,255,255,0.3)]"
      >
        <span className="text-cyan-200 font-mono text-xs text-center leading-tight tracking-widest">DRAG<br/>ME</span>
      </motion.div>
    </div>
  );
}