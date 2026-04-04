"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAMirrorReflect057() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[700px] flex flex-col items-center justify-center bg-[#050505] overflow-hidden pt-20" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
          className="relative w-[600px] h-[350px]"
        >
          {/* Main Image */}
          <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative z-10 bg-black">
            <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-90" />
            <h2 className="absolute bottom-6 left-6 text-white text-5xl font-bold">{slides[currentIndex].title}</h2>
          </div>

          {/* Reflection */}
          <div 
            className="w-full h-full absolute top-full left-0 opacity-40 rounded-b-2xl pointer-events-none blur-[2px]"
            style={{ 
              backgroundImage: `url(${slides[currentIndex].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scaleY(-1)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}