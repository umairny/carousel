"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UAGaussianMask037() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 4000 });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ WebkitMaskSize: "0% 0%" } as any}
          animate={{ WebkitMaskSize: "200% 200%" } as any}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="absolute inset-0 bg-white"
          style={{
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 60%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center"
          }}
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-60" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
        <h2 className="text-white text-8xl font-bold">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}