"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { classicSlides as slides } from "@/utils/mockData";

export function UATickTock004() {
  const { currentIndex } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 3500 });

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-zinc-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} className="flex flex-col items-center gap-6 z-10">
          <motion.div 
            initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="w-[600px] h-[300px] rounded-2xl overflow-hidden shadow-glass border border-white/5"
          >
            <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.h2 
            initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 30, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl font-bold text-white tracking-widest"
          >
            {slides[currentIndex].title}
          </motion.h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}