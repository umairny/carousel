"use client";

import { UAMinimalist001 } from "@/components/carousels/classic/UAMinimalist001";
import { UAFade002 } from "@/components/carousels/classic/UAFade002";
import { UASmoothSlide003 } from "@/components/carousels/classic/UASmoothSlide003";
import { UATickTock004 } from "@/components/carousels/classic/UATickTock004";
import { UASplitScreen005 } from "@/components/carousels/classic/UASplitScreen005";
import { UADualSync006 } from "@/components/carousels/classic/UADualSync006";
import { UAAutoMarquee007 } from "@/components/carousels/classic/UAAutoMarquee007";
import { UASnappingGrid008 } from "@/components/carousels/classic/UASnappingGrid008";
import { UAVerticalScroll009 } from "@/components/carousels/classic/UAVerticalScroll009";
import { UAFullscreenSnap010 } from "@/components/carousels/classic/UAFullscreenSnap010";

export default function Page() {
  return (
     <main className="w-full flex flex-col items-center pb-32 transition-colors duration-300">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-40 pb-24 flex flex-col items-center text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-8 backdrop-blur-sm transition-all shadow-sm dark:shadow-none">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse outline outline-2 outline-blue-500/30"></span>
          <span className="text-xs font-semibold text-gray-600 dark:text-white/80 tracking-wide uppercase">New Components Added</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/60">
          Classic Carousels for Modern Web Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white/50 max-w-2xl mb-12 font-light leading-relaxed">
          A meticulously crafted collection of beautiful, responsive, and accessible carousel components built with React, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          
        </div>
      </section>

      {/* Components List */}
      <section className="w-full flex flex-col gap-32 max-w-7xl px-4 md:px-8">
        {[
          { id: "01", title: "Minimalist 001", Component: UAMinimalist001 },
          { id: "02", title: "Fade 002", Component: UAFade002 },
          { id: "03", title: "Smooth Slide 003", Component: UASmoothSlide003 },
          { id: "04", title: "Tick Tock 004", Component: UATickTock004 },
          { id: "05", title: "Split Screen 005", Component: UASplitScreen005 },
          { id: "06", title: "Dual Sync 006", Component: UADualSync006 },
          { id: "07", title: "Auto Marquee 007", Component: UAAutoMarquee007 },
          { id: "08", title: "Snapping Grid 008", Component: UASnappingGrid008 },
          { id: "09", title: "Vertical Scroll 009", Component: UAVerticalScroll009 },
          { id: "10", title: "Fullscreen Snap 010", Component: UAFullscreenSnap010 },
        ].map(({ id, title, Component, extraClass }: { id: string; title: string; Component: any; extraClass?: string }) => (
          <div key={id} className="flex flex-col gap-6 w-full">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                <span className="text-white/40 mr-2">{id}.</span> 
                {title}
              </h2>
            </div>
            <div className={`w-full rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-xl ${extraClass || ""}`}>
              <Component />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}