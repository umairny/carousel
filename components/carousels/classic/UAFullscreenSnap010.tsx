"use client";
import { classicSlides as slides } from "@/utils/mockData";

export function UAFullscreenSnap010() {
  return (
    <div className="h-[80vh] w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar border-y border-white/10">
      {slides.map((slide) => (
        <div key={slide.id} className="h-full w-full snap-start relative flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" />
          <div className="z-20 text-center">
            <h1 className="text-white text-7xl md:text-9xl font-black tracking-tighter mix-blend-overlay">
              {slide.title}
            </h1>
            <p className="text-cyan-300 font-mono mt-4 uppercase tracking-[0.4em]">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}