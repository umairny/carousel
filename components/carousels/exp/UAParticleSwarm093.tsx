"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

export function UAParticleSwarm093() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const particles = Array.from({ length: 40 });

  return (
    <div className="relative w-full h-[600px] bg-[#050505] overflow-hidden cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} className="absolute inset-0">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover opacity-60" 
          />
          
          {/* Swarm Overlay */}
          {particles.map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            return (
              <motion.div
                key={`${currentIndex}-${i}`}
                initial={{ x: "50vw", y: "50vh", scale: 0, opacity: 0 }}
                animate={{ x: `${randomX}vw`, y: `${randomY}vh`, scale: Math.random() * 2 + 0.5, opacity: Math.random() * 0.5 + 0.2 }}
                exit={{ x: "50vw", y: "50vh", scale: 0, opacity: 0 }}
                transition={{ duration: 1.5, ease: "circOut", delay: Math.random() * 0.3 }}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan] mix-blend-screen"
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-10 left-10">
        <h2 className="text-white text-5xl font-black uppercase tracking-widest">{slides[currentIndex].title}</h2>
      </div>
    </div>
  );
}