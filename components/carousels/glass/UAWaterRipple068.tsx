"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAWaterRipple068() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const [rippleFreq, setRippleFreq] = useState(0);

  useEffect(() => {
    // Trigger ripple on slide change
    setRippleFreq(0.1);
    const timeout = setTimeout(() => setRippleFreq(0), 600); // Fade out ripple
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[600px] bg-black flex items-center justify-center cursor-pointer" onClick={next}>
      {/* Hidden SVG Filter definition */}
      <svg className="absolute w-0 h-0">
        <filter id="ripple">
          <feTurbulence type="fractalNoise" baseFrequency={rippleFreq} numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={rippleFreq * 500} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="relative w-[80%] h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10"
          style={{ filter: "url(#ripple)", transition: "filter 0.6s ease-out" }}
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm">
            <h2 className="text-white text-6xl font-serif italic drop-shadow-2xl">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}