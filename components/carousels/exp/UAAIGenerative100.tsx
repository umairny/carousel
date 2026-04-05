"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { expSlides as slides } from "@/utils/mockDataExperimental";

export function UAAIGenerative100() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 6000 });

  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden flex items-center justify-center" onClick={next}>
      
      {/* 1. Generative Glowing Neural Mesh Background */}
      <motion.div 
        animate={{ rotate: [0, 90, 180, 360], scale:[1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150%] h-[150%] opacity-40 blur-[80px] pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, #ff0080, #7928ca, #00d2ff, #3a7bd5, #ff0080)`
        }}
      />

      {/* 2. Floating AI Data Orbs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y:[Math.random() * 200 - 100, Math.random() * -200 + 100], 
            x:[Math.random() * 200 - 100, Math.random() * -200 + 100] 
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-white/5 rounded-full backdrop-blur-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        />
      ))}

      {/* 3. The Central Glass Carousel Subject */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 1.1, rotateY: -90 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative z-20 w-[600px] h-[450px] bg-black/40 backdrop-blur-2xl rounded-[3rem] border border-white/20 p-2 shadow-2xl overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 pointer-events-none" />
          
          <img src={slides[currentIndex].img} className="w-full h-full object-cover rounded-[2.5rem] opacity-80" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-[2.5rem] flex flex-col justify-end p-10 z-20">
            <motion.p 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-2 drop-shadow-md"
            >
              System Active // {slides[currentIndex].subtitle}
            </motion.p>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-white text-6xl font-bold tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              {slides[currentIndex].title}
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 font-mono text-white/30 text-xs tracking-widest uppercase">
        UA Carousel System // 100 // End of sequence
      </div>
    </div>
  );
}