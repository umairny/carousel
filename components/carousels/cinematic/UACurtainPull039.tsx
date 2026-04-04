"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UACurtainPull039() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden cursor-ns-resize" onClick={next}>
      {/* Next Image (Waiting beneath) */}
      <div className="absolute inset-0">
        <img src={slides[(currentIndex + 1) % slides.length].img} className="w-full h-full object-cover opacity-30 scale-105" />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }} // Pulls UP to reveal
          transition={{ duration: 1.2, ease:[0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 bg-black shadow-[0_20px_50px_rgba(0,0,0,1)]"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-white text-7xl font-serif tracking-widest">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}