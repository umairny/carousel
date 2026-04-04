"use client";
import { motion } from "framer-motion";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAGlassHexagon065() {
  return (
    <div className="w-full h-[600px] flex flex-wrap items-center justify-center gap-4 bg-[#0a0a0a] p-10 overflow-hidden">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.id}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          className="relative w-[300px] h-[340px] bg-white/10 backdrop-blur-xl flex items-center justify-center -ml-10 cursor-pointer shadow-2xl border-x border-white/20 transition-colors hover:bg-white/20"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          <img src={slide.img} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
          <div className="relative z-10 text-center">
            <h2 className="text-white text-2xl font-bold tracking-widest">{slide.title}</h2>
            <div className="w-8 h-[2px] bg-cyan-400 mx-auto mt-2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}