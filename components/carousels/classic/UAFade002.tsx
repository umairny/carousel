"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { classicSlides as slides } from "@/utils/mockData";

export function UAFade002() {
  const { currentIndex } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 4000 });

  return (
    <div className="relative w-full h-[70vh] bg-black overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease:[0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-7xl font-bold tracking-tighter uppercase drop-shadow-2xl">
              {slides[currentIndex].title}
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}