"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UARotaryDial087() {
  const rotation = useMotionValue(0);
  
  return (
    <div className="w-full h-[700px] bg-black flex items-center justify-center overflow-hidden">
      {/* Container limits drag to rotate visually */}
      <motion.div 
        drag="x"
        dragConstraints={{ left: -1000, right: 1000 }}
        style={{ rotate: useTransform(rotation, (r) => r * 0.5) }} // Map drag directly to rotation
        onPan={(e, info) => rotation.set(rotation.get() + info.delta.x)}
        className="relative w-[600px] h-[600px] rounded-full border border-white/10 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Central Anchor */}
        <div className="w-32 h-32 rounded-full bg-[#111] border border-white/20 z-10 flex items-center justify-center shadow-2xl">
          <p className="text-white/40 font-mono text-xs text-center">SPIN</p>
        </div>

        {/* Orbiting Elements */}
        {slides.map((slide, i) => {
          const angle = (i * 360) / slides.length;
          return (
            <motion.div
              key={slide.id}
              className="absolute w-40 h-56 rounded-2xl overflow-hidden border border-white/20 shadow-xl"
              style={{
                transformOrigin: "center",
                rotate: angle, // Fixed angle on the dial
                y: -250, // Push outward
              }}
            >
              <img src={slide.img} className="w-full h-full object-cover pointer-events-none" />
              {/* Counter-rotate text so it's always readable */}
              <motion.div 
                style={{ rotate: useTransform(rotation, (r) => -r * 0.5 - angle) }} 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                 <h3 className="text-white font-bold bg-black/50 px-2 rounded backdrop-blur-md">{slide.title}</h3>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}