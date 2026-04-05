"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

export function UARippleShader091() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const [rippleScale, setRippleScale] = useState(0);

  useEffect(() => {
    // Fire the shader shockwave on index change
    setRippleScale(150);
    const timer = setTimeout(() => setRippleScale(0), 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[600px] bg-[#020202] overflow-hidden flex items-center justify-center cursor-pointer" onClick={next}>
      <svg className="absolute w-0 h-0">
        <filter id="webgl-ripple">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={rippleScale} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
          className="absolute inset-0 transition-all duration-[800ms] ease-out"
          style={{ filter: "url(#webgl-ripple)" }}
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
         <h1 className="text-white text-8xl font-black tracking-tighter uppercase">{slides[currentIndex].title}</h1>
      </div>
    </div>
  );
}