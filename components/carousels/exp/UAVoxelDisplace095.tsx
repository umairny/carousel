"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

const ROWS = 5;
const COLS = 8;

export function UAVoxelDisplace095() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden cursor-pointer[perspective:1500px]" onClick={next}>
      <AnimatePresence initial={false}>
        <div key={currentIndex} className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}>
          {Array.from({ length: ROWS * COLS }).map((_, i) => {
            const xOffset = (i % COLS) * (100 / (COLS - 1));
            const yOffset = Math.floor(i / COLS) * (100 / (ROWS - 1));

            return (
              <motion.div
                key={`${currentIndex}-${i}`}
                initial={{ z: -1000, rotateX: 90, opacity: 0 }}
                animate={{ z: 0, rotateX: 0, opacity: 1 }}
                exit={{ z: 500, rotateY: 90, opacity: 0 }}
                transition={{ duration: 1, delay: (i % COLS) * 0.05 + Math.random() * 0.2, type: "spring", damping: 15 }}
                className="w-full h-full relative[transform-style:preserve-3d]"
              >
                <div 
                  className="absolute inset-0 bg-no-repeat border border-white/5"
                  style={{
                    backgroundImage: `url(${slides[currentIndex].img})`,
                    backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                    backgroundPosition: `${xOffset}% ${yOffset}%`
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}