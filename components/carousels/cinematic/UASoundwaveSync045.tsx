"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UASoundwaveSync045() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    setTrigger(prev => prev + 1); // Trigger wave reaction on slide change
  }, [currentIndex]);

  const BARS = 40;

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          src={slides[currentIndex].img}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-white text-6xl font-bold mb-10">{slides[currentIndex].title}</h1>
        
        {/* Audio Bars */}
        <div className="flex items-end gap-1 h-32">
          {Array.from({ length: BARS }).map((_, i) => {
            const randomHeight = Math.floor(Math.random() * 100) + 20;
            return (
              <motion.div
                key={`${i}-${trigger}`}
                initial={{ height: "10%" }}
                animate={{ height: [`${randomHeight}%`, "10%", `${randomHeight / 2}%`, "20%"] }}
                transition={{ duration: 1.5, ease: "backOut", delay: i * 0.02 }}
                className="w-2 bg-cyan-400 rounded-t-sm mix-blend-screen shadow-[0_0_10px_cyan]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}