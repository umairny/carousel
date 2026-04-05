"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { gesturalSlides } from "@/utils/mockDataGestural";

export function UADeckSwipe078() {
  const [cards, setCards] = useState(gesturalSlides);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200],[-15, 15]);
  const opacity = useTransform(x,[-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (e: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards(prev => prev.slice(1)); // Remove top card
      x.set(0); // Reset motion value
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
                className="absolute inset-0 rounded-2xl bg-zinc-800 border border-white/10 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              >
                <img src={card.img} className="w-full h-full object-cover opacity-80 pointer-events-none" />
                <div className="absolute bottom-10 left-6 pointer-events-none">
                   <h2 className="text-white text-4xl font-bold">{card.title}</h2>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {cards.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-white/40 font-mono">End of Deck</div>
        )}
      </div>
    </div>
  );
}