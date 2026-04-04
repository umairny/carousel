"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAAcrylicReveal064() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const containerRef = useRef<HTMLDivElement>(null);
  const[mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div className="w-full h-[600px] bg-black flex items-center justify-center p-10">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onClick={next}
        className="relative w-full max-w-3xl h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
            src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Acrylic Frosted Layer */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[20px] mix-blend-hard-light" />
        
        {/* Dynamic Spotlight */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{ 
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)`,
            backdropFilter: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, blur(0px), blur(20px))` // Advanced modern CSS technique
          }} 
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <h2 className="text-white text-6xl font-light tracking-widest uppercase mix-blend-overlay">{slides[currentIndex].title}</h2>
        </div>
      </div>
    </div>
  );
}