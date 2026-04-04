"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAGlassAccordion062() {
  const[active, setActive] = useState(0);

  return (
    <div className="w-full h-[600px] flex bg-[#050505] p-10 gap-4 overflow-hidden">
      {slides.map((slide, i) => {
        const isActive = active === i;
        
        return (
          <motion.div
            key={slide.id}
            onClick={() => setActive(i)}
            animate={{ flex: isActive ? 5 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`relative h-full rounded-3xl overflow-hidden cursor-pointer border ${isActive ? 'border-white/20' : 'border-white/5'} transition-colors duration-500`}
          >
            <img 
              src={slide.img} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-110 opacity-40 blur-sm grayscale'}`} 
            />
            
            {/* Frosted Glass Overlay for Inactive */}
            {!isActive && <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />}

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <motion.h2 
                animate={{ rotate: isActive ? 0 : -90, x: isActive ? 0 : 20, y: isActive ? 0 : -50 }}
                className={`text-white font-bold whitespace-nowrap origin-left ${isActive ? 'text-4xl' : 'text-xl tracking-widest'}`}
              >
                {slide.title}
              </motion.h2>
              {isActive && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-cyan-400 mt-2 font-mono">
                  {slide.subtitle}
                </motion.p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}