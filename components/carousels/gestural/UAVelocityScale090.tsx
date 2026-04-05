"use client";
import { motion, useMotionValue, useVelocity, useTransform, useSpring } from "framer-motion";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

export function UAVelocityScale090() {
  const x = useMotionValue(0);
  const xVelocity = useVelocity(x);
  
  // Transform absolute velocity into a scale value (Fast = 0.5 scale, Slow/Stopped = 1.0 scale)
  const scaleTarget = useTransform(xVelocity,[-2000, 0, 2000], [0.5, 1, 0.5]);
  
  // Smooth the scale out so it doesn't snap jarringly when velocity stops
  const smoothScale = useSpring(scaleTarget, { stiffness: 100, damping: 30 });

  // Extended track for satisfying flings
  const track = [...slides, ...slides, ...slides];

  return (
    <div className="w-full h-[600px] bg-black flex flex-col justify-center overflow-hidden cursor-ew-resize relative">
      <div className="absolute top-10 w-full text-center pointer-events-none text-white z-10">
        <h2 className="text-3xl font-bold">Throw me hard</h2>
        <p className="text-cyan-400 font-mono mt-1">useVelocity Scaling</p>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -((track.length - 1) * 450), right: 0 }}
        dragTransition={{ power: 0.4, timeConstant: 400 }} // Gives it that long, slippery slide
        style={{ x }}
        className="flex gap-8 px-20"
      >
        {track.map((slide, i) => (
          <motion.div 
            key={i} 
            style={{ scale: smoothScale }} // Applies global velocity scale
            className="min-w-[400px] h-[400px] relative rounded-[2rem] overflow-hidden shrink-0 border border-white/20 origin-center"
          >
            <img src={slide.img} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
               <h3 className="text-white text-5xl font-black mix-blend-overlay">{slide.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}