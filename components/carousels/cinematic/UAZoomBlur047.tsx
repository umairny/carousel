"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAZoomBlur047() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ scale: 2, filter: "blur(20px)", opacity: 0 }}
          animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          exit={{ scale: 0.5, filter: "blur(20px)", opacity: 0 }}
          transition={{ duration: 0.8, ease: "circInOut" }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="text-white text-8xl font-black uppercase">{slides[currentIndex].title}</h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}