"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function UAASCIIRender096() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const[displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const target = slides[currentIndex].title;
    const interval = setInterval(() => {
      setDisplayText(target.split("").map((char, i) => {
        if (i < iteration) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      
      if (iteration >= target.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[600px] bg-[#020202] overflow-hidden font-mono flex flex-col justify-center cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, filter: "brightness(0.2) contrast(200%) grayscale(100%)" }}
          animate={{ opacity: 0.3, filter: "brightness(1) contrast(150%) grayscale(100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover mix-blend-luminosity" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 p-20 break-all text-justify opacity-20 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <p key={i} className="text-green-500/50 text-xs tracking-[0.3em] leading-tight mb-2">
            {Array.from({ length: 50 }).map(() => chars[Math.floor(Math.random() * chars.length)]).join("")}
          </p>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h1 className="text-green-400 text-7xl font-bold tracking-[0.5em] drop-shadow-[0_0_20px_#4ade80]">{displayText}</h1>
      </div>
    </div>
  );
}