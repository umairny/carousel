"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { classicSlides as slides } from "@/utils/mockData";

export function UASplitScreen005() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="flex w-full h-[80vh] bg-black overflow-hidden cursor-pointer" onClick={next}>
      {/* Left: Text */}
      <div className="w-1/2 h-full relative border-r border-white/10">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center p-20 bg-[#0a0a0a]"
          >
            <p className="text-cyan-500 font-mono mb-4 text-xl">0{currentIndex + 1}</p>
            <h1 className="text-6xl text-white font-bold">{slides[currentIndex].title}</h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Image */}
      <div className="w-1/2 h-full relative">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}