"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { gesturalSlides as slides } from "@/utils/mockDataGestural";

function MagneticButton({ children, onClick, direction }: { children: React.ReactNode, onClick: () => void, direction: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.4; // Magnetic strength
    const y = (e.clientY - (top + height / 2)) * 0.4;
    setPos({ x, y });
  };

  return (
    <div 
      ref={ref}
      className={`absolute top-0 bottom-0 ${direction === "left" ? "left-0" : "right-0"} w-1/4 z-20 flex items-center justify-center cursor-pointer`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onClick={onClick}
    >
      <motion.div animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }} className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
        {children}
      </motion.div>
    </div>
  );
}

export function UAMagneticSnap072() {
  const { currentIndex, next, prev } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex items-center justify-center">
      <MagneticButton direction="left" onClick={prev}>←</MagneticButton>
      <MagneticButton direction="right" onClick={next}>→</MagneticButton>

      <motion.div 
        key={currentIndex}
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-[500px] h-[400px] rounded-2xl overflow-hidden"
      >
        <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
        <h2 className="absolute bottom-6 left-6 text-white text-4xl font-bold">{slides[currentIndex].title}</h2>
      </motion.div>
    </div>
  );
}