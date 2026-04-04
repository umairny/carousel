"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { slides } from "@/utils/mockData";


export const UAHeroCinematic = () => {
  const { currentIndex, direction, next, prev, handlers } = useUACarousel({ totalItems: slides.length, autoPlay: true });

  const slideVariants = {
    enter: (dir: number) => ({ scale: 1.1, opacity: 0 }),
    center: { zIndex: 1, scale: 1, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, opacity: 0 }),
  };

  return (
    <div className="relative w-full h-[80vh] bg-black overflow-hidden font-sans group" {...handlers}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease:[0.19, 1, 0.22, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" />
          <img src={slides[currentIndex].img} alt="Hero" className="object-cover w-full h-full opacity-80" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-16">
        <div className="overflow-hidden mb-2">
          <motion.h2
            key={`subtitle-${currentIndex}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-cyan-400 tracking-[0.3em] text-sm font-semibold uppercase"
          >
            {slides[currentIndex].subtitle}
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease:[0.19, 1, 0.22, 1] }}
            className="text-white text-7xl font-bold tracking-tighter"
          >
            {slides[currentIndex].title}
          </motion.h1>
        </div>
      </div>

      {/* Premium Progress Indicators */}
      <div className="absolute bottom-16 right-16 z-30 flex space-x-4">
        {slides.map((_, i) => (
          <div key={i} className="w-16 h-[2px] bg-white/20 overflow-hidden relative">
            {currentIndex === i && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute left-0 top-0 h-full bg-white shadow-[0_0_10px_#fff]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};