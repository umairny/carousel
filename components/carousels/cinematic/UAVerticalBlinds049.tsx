"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

const STRIPS = 8;

export function UAVerticalBlinds049() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex cursor-pointer" onClick={next}>
      {/* Background/Next Image */}
      <div className="absolute inset-0">
        <img src={slides[(currentIndex + 1) % slides.length].img} className="w-full h-full object-cover opacity-50" />
      </div>

      <AnimatePresence initial={false}>
        <div key={currentIndex} className="absolute inset-0 flex">
          {Array.from({ length: STRIPS }).map((_, i) => (
            <motion.div
              key={`${currentIndex}-${i}`}
              className="h-full flex-1 relative overflow-hidden"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 90, opacity: 0 }} // Folds away
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            >
              <img 
                src={slides[currentIndex].img} 
                className="absolute h-full object-cover"
                style={{ width: "800%", left: `-${i * 100}%` }} // Expand width and offset left to align strip
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <h2 className="text-white text-6xl font-black drop-shadow-2xl mix-blend-overlay">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}