"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAInkDrop040() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)", opacity: 0 }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease:[0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-12 left-12">
        <h2 className="text-white/80 font-mono text-xl mb-2">// 0{currentIndex + 1}</h2>
        <h1 className="text-white text-5xl font-bold">{slides[currentIndex].title}</h1>
      </div>
    </div>
  );
}