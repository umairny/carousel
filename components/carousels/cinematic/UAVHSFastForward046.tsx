"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAVHSFastForward046() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: "100%", skewX: -20, filter: "contrast(200%) hue-rotate(90deg)" }}
          animate={{ x: 0, skewX: 0, filter: "contrast(100%) hue-rotate(0deg)" }}
          exit={{ x: "-100%", skewX: 20, filter: "contrast(200%) hue-rotate(-90deg)" }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Static Noise Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      {/* VCR UI */}
      <div className="absolute top-8 left-8 text-white font-mono text-2xl font-bold drop-shadow-md">FF ⏩</div>
    </div>
  );
}