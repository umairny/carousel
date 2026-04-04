"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAHolographic056() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-black overflow-hidden" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
          className="relative w-[320px] h-[480px] rounded-2xl overflow-hidden cursor-pointer"
        >
          <img src={slides[currentIndex].img} className="w-full h-full object-cover" />
          
          {/* Holographic Shimmer Overlay */}
          <motion.div 
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-40 mix-blend-color-dodge bg-[length:200%_200%]"
            style={{ backgroundImage: "linear-gradient(125deg, #ff0084, #33001b, #00d2ff, #3a7bd5, #ff0084)" }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
             <h2 className="text-white text-4xl font-black mix-blend-overlay text-center">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}