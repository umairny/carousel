"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { classicSlides as slides } from "@/utils/mockData";

export function UAVerticalScroll009() {
  const { currentIndex, direction, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[600px] bg-black rounded-3xl overflow-hidden" onClick={next}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
          className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent z-10"
        >
           <h2 className="text-5xl font-bold text-white z-20">{slides[currentIndex].title}</h2>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <motion.img
          key={`img-${currentIndex}`}
          src={slides[currentIndex].img}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
        {slides.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-cyan-400 h-8' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
}