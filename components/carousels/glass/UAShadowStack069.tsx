"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAShadowStack069() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });
  const shadowColors =["rgba(0,255,255,0.4)", "rgba(255,0,255,0.4)", "rgba(255,255,0,0.4)", "rgba(0,255,100,0.4)"];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-[#0d0d0d] overflow-hidden" onClick={next}>
      <div className="relative w-[400px] h-[450px]">
        {slides.map((slide, i) => {
          const offset = (i - currentIndex + slides.length) % slides.length;
          
          return (
            <motion.div
              key={slide.id}
              animate={{
                x: offset * 30,
                y: offset * -30,
                scale: 1 - offset * 0.05,
                zIndex: 10 - offset,
                opacity: offset > 3 ? 0 : 1
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden p-6"
              style={{ boxShadow: `-20px 20px 40px ${shadowColors[i % shadowColors.length]}` }}
            >
              <img src={slide.img} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay -z-10" />
              <div className="h-full flex flex-col justify-between">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/50 font-mono text-sm">
                  {i + 1}
                </div>
                <h2 className="text-white text-4xl font-bold tracking-tight">{slide.title}</h2>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}