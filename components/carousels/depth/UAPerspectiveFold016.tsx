"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { depthSlides as slides } from "@/utils/mockData3D";

export function UAPerspectiveFold016() {
  const { currentIndex } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 3500 });

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[#050505][perspective:2000px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ rotateX: 90, opacity: 0, originY: 1 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0, originY: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-[800px] h-[450px] relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-10">
            <h2 className="text-white text-6xl font-black">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}