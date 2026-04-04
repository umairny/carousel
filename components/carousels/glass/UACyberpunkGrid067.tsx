"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UACyberpunkGrid067() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#0a0014] overflow-hidden flex items-center justify-center [perspective:800px]" onClick={next}>
      {/* 3D Distorting Grid Background */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] border-t-2 border-fuchsia-500/50 pointer-events-none"
        style={{
          transform: "rotateX(75deg) translateY(200px) translateZ(-200px)",
          backgroundImage: "linear-gradient(transparent 39px, rgba(217, 70, 239, 0.5) 40px), linear-gradient(90deg, transparent 39px, rgba(217, 70, 239, 0.5) 40px)",
          backgroundSize: "40px 40px"
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
          className="relative z-10 w-[450px] h-[300px] bg-black/40 backdrop-blur-xl border border-cyan-400/50 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)] flex items-center gap-6"
        >
          <img src={slides[currentIndex].img} className="w-32 h-32 rounded-full object-cover border-2 border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
          <div>
            <h3 className="text-cyan-400 font-mono text-sm mb-1">SYSTEM_0{currentIndex + 1}</h3>
            <h2 className="text-white text-3xl font-bold uppercase">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}