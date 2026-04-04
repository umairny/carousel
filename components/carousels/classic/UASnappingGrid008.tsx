"use client";
import { classicSlides as slides } from "@/utils/mockData";

export function UASnappingGrid008() {
  return (
    <div className="w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 py-10 px-6 bg-[#0a0a0a]">
      {slides.map((slide) => (
        <div 
          key={slide.id} 
          className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-3xl overflow-hidden relative border border-white/5"
        >
          <img src={slide.img} className="w-full h-full object-cover opacity-70" />
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <p className="text-white font-medium">{slide.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}