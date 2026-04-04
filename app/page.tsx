"use client";

import { UACoverFlow3D} from "@/components/carousels/UACoverFlow3D";
import { UAHeroCinematic } from "@/components/carousels/UAHeroCinematic";
import { UACyberRing3D } from "@/components/carousels/UACyberRing3D";
import { UAParallaxMagnetic } from "@/components/carousels/UAParallaxMagnetic";


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
          Premium Carousels for Modern Web Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white/50 max-w-2xl mb-12 font-light leading-relaxed">
          A meticulously crafted collection of beautiful, responsive, and accessible carousel components built with React, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3.5 text-sm font-semibold text-gray-700 dark:text-white bg-white dark:bg-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-none">
            View Documentation
          </button>
          <button className="px-8 py-3.5 text-sm font-semibold text-white dark:text-black bg-gray-900 dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Explore Components
          </button>
        </div>
      </section>

      {/* Components List */}
      <section className="w-full flex flex-col gap-32 max-w-7xl px-4 md:px-8">
        {[
          { id: "01", title: "Hero Cinematic", Component: UAHeroCinematic },
          { id: "02", title: "Cover Flow 3D", Component: UACoverFlow3D },
          { id: "03", title: "Cyber Ring 3D", Component: UACyberRing3D },
          { id: "04", title: "Parallax Magnetic", Component: UAParallaxMagnetic },
        ].map(({ id, title, Component, extraClass }: { id: string; title: string; Component: any; extraClass?: string }) => (
          <div key={id} className="flex flex-col gap-6 w-full">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4 transition-colors">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-gray-400 dark:text-white/40 mr-2 font-medium">{id}.</span> 
                {title}
              </h2>
            </div>
            <div className={`w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-xl transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-2xl ${extraClass || ""}`}>
              <Component />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}