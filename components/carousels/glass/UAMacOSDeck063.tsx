"use client";
import { motion } from "framer-motion";
import { useUACarousel } from "@/hooks/useUACarousel";
import { glassSlides as slides } from "@/utils/mockDataGlass";

export function UAMacOSDeck063() {
  const { currentIndex, next } = useUACarousel({ totalItems: slides.length });

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center overflow-hidden cursor-pointer" onClick={next}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {slides.map((slide, i) => {
        const offset = (i - currentIndex + slides.length) % slides.length;
        const isActive = offset === 0;

        return (
          <motion.div
            key={slide.id}
            animate={{
              y: offset * -40,
              scale: 1 - offset * 0.05,
              opacity: offset > 3 ? 0 : 1,
              zIndex: 10 - offset
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute w-[500px] h-[350px] rounded-xl border border-white/20 shadow-2xl overflow-hidden flex flex-col ${isActive ? 'bg-black' : 'bg-white/10 backdrop-blur-2xl'}`}
          >
            {/* macOS Top Bar */}
            <div className="h-8 w-full bg-white/10 border-b border-white/10 flex items-center px-4 gap-2 backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="flex-1 relative">
              <img src={slide.img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`} />
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <h2 className="text-white text-4xl font-bold tracking-tight">{slide.title}</h2>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}