"use client";
import { motion } from "framer-motion";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAGlassMarquee070() {
  const words =["LUMINA", "AETHER", "PRISM", "SYNTH", "QUANTUM", "NEBULA", "VOID"];
  const marqueeData = [...words, ...words, ...words];

  return (
    <div className="relative w-full h-[500px] bg-[#050505] overflow-hidden flex items-center justify-center">
      
      {/* Background Scrolling Marquee (Blurred) */}
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute flex whitespace-nowrap gap-10 text-white/20 text-8xl font-black blur-[4px]"
      >
        {marqueeData.map((word, i) => <span key={i}>{word}</span>)}
      </motion.div>

      {/* Central Glass Lens (Clears the blur) */}
      <div className="relative z-10 w-[400px] h-[300px] bg-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border border-white/20 shadow-2xl">
          <img src={slides[0].img} className="w-full h-full object-cover" />
        </div>
        <p className="text-white/60 text-center font-light leading-relaxed">
          The background text becomes sharply visible as it passes beneath this specific glassmorphic component area.
        </p>
      </div>
      
    </div>
  );
}