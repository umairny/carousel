"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UASubtitleSync038() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  // Typewriter effect variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden flex flex-col justify-end p-12" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          src={slides[currentIndex].img}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </AnimatePresence>

      <div className="z-10 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} variants={textVariants} initial="hidden" animate="visible" exit="hidden">
            <h3 className="text-cyan-500 font-mono text-sm mb-4">SCENE 0{currentIndex + 1}</h3>
            <div className="text-white text-3xl font-medium leading-relaxed">
              {slides[currentIndex].subtitle.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>{char}</motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}