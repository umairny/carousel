"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { gesturalSlides } from "@/utils/mockDataGestural";

export function UAThrowSort088() {
  const [cards, setCards] = useState(gesturalSlides);
  const x = useMotionValue(0);

  // Map drag to rotation and aggressive background colors
  const rotate = useTransform(x, [-200, 200],[-20, 20]);
  const overlayColor = useTransform(x,[-150, 0, 150],["rgba(255, 0, 0, 0.6)", "rgba(0, 0, 0, 0)", "rgba(0, 255, 100, 0.6)"]);
  const opacity = useTransform(x,[-200, -100, 0, 100, 200],[0, 1, 1, 1, 0]);

  const handleDragEnd = (e: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards(prev => prev.slice(1));
      x.set(0);
    }
  };

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[#050505] overflow-hidden">
      <div className="relative w-[350px] h-[500px]">
        <AnimatePresence>
          {cards.map((card, i) => {
            const isTop = i === 0;
            return (
              <motion.div
                key={card.id}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isTop ? handleDragEnd : undefined}
                style={isTop ? { x, rotate, opacity } : { scale: 1 - i * 0.05, y: i * 20, zIndex: -i }}
                className="absolute inset-0 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-white/10"
              >
                <img src={card.img} className="w-full h-full object-cover" />
                {/* Dynamic Color Feedback Overlay */}
                {isTop && <motion.div style={{ backgroundColor: overlayColor }} className="absolute inset-0 mix-blend-overlay pointer-events-none" />}
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h2 className="text-white text-4xl font-bold bg-black/40 px-4 py-2 rounded-xl backdrop-blur-md">{card.title}</h2>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {cards.length === 0 && <p className="absolute inset-0 flex items-center justify-center text-white/50 font-mono">Sorting Complete.</p>}
      </div>
    </div>
  );
}