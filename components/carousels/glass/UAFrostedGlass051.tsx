"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAFrostedGlass051() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900 cursor-pointer" onClick={next}>
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          src={slides[currentIndex].img}
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60"
        />
      </AnimatePresence>

      {/* Glass Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-[400px] h-[500px] rounded-3xl p-6 flex flex-col justify-end overflow-hidden z-10
                     bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          {/* Subtle Inner Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
          
          <img src={slides[currentIndex].img} className="absolute inset-0 w-full h-full object-cover -z-10 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent -z-10 rounded-3xl" />
          
          <div className="relative z-20">
            <h3 className="text-cyan-300 text-sm font-mono tracking-widest mb-1">{slides[currentIndex].subtitle}</h3>
            <h2 className="text-white text-4xl font-bold tracking-tight">{slides[currentIndex].title}</h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}