"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAGradientMesh058() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden cursor-pointer" onClick={next}>
      {/* Animated Mesh Gradient Background */}
      <motion.div 
        animate={{ filter:["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-black opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
          `
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          className="relative z-10 w-[500px] p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-glass text-center"
        >
          <img src={slides[currentIndex].img} className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-white/50 mb-6 shadow-2xl" />
          <h2 className="text-white text-4xl font-bold tracking-tight mb-2">{slides[currentIndex].title}</h2>
          <p className="text-white/70 font-medium">{slides[currentIndex].subtitle}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}