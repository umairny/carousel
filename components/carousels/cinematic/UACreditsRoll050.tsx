"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { cinematicSlides as slides } from "@/utils/mockDataCinematic";

export function UACreditsRoll050() {
  const { currentIndex } = useUACarousel({ totalItems: slides.length, autoPlay: true, interval: 4000 });

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden flex border-y border-white/10">
      
      {/* Left: Credits Marquee */}
      <div className="w-1/2 h-full bg-[#050505] p-10 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
        <motion.div 
          animate={{ y: ["100%", "-200%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-col gap-8 text-center text-white/70 font-mono text-sm"
        >
          <div>
            <h3 className="text-white font-bold mb-1">DIRECTED BY</h3>
            <p>Umair Ahmad</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">UI ENGINEERING</h3>
            <p>Framer Motion</p>
            <p>React Hooks</p>
            <p>Tailwind CSS</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">FEATURING</h3>
            {slides.map(s => <p key={s.id}>{s.title}</p>)}
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold mb-1">UA CAROUSEL SYSTEM</h3>
            <p>Component // 050</p>
          </div>
        </motion.div>
      </div>

      {/* Right: Crossfading Imagery */}
      <div className="w-1/2 h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img src={slides[currentIndex].img} className="w-full h-full object-cover opacity-80" />
            <div className="absolute bottom-10 left-10">
               <h2 className="text-white text-3xl font-serif italic">{slides[currentIndex].title}</h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}