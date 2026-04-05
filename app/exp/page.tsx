"use client";

import { UARippleShader091 } from "@/components/carousels/exp/UARippleShader091";
import { UALiquidDistort092 } from "@/components/carousels/exp/UALiquidDistort092";
import { UAParticleSwarm093 } from "@/components/carousels/exp/UAParticleSwarm093";
import { UAPixelSort094 } from "@/components/carousels/exp/UAPixelSort094";
import { UAVoxelDisplace095 } from "@/components/carousels/exp/UAVoxelDisplace095";
import { UAASCIIRender096 } from "@/components/carousels/exp/UAASCIIRender096";
import { UACRTMonitor097 } from "@/components/carousels/exp/UACRTMonitor097";
import { UAQuantumWave098 } from "@/components/carousels/exp/UAQuantumWave098";
import { UAMorphBlob099 } from "@/components/carousels/exp/UAMorphBlob099";
import { UAAIGenerative100 } from "@/components/carousels/exp/UAAIGenerative100";

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
          Experimental Carousels for Modern Web Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white/50 max-w-2xl mb-12 font-light leading-relaxed">
          A meticulously crafted collection of beautiful, responsive, and accessible carousel components built with React, Tailwind CSS, and Framer Motion.
        </p>
   
      </section>

      {/* Components List */}
      <section className="w-full flex flex-col gap-32 max-w-7xl px-4 md:px-8">
        {[
          { id: "01", title: "Ripple Shader 091", Component: UARippleShader091 },
          { id: "02", title: "Liquid Distort 092", Component: UALiquidDistort092 },
          { id: "03", title: "Particle Swarm 093", Component: UAParticleSwarm093 },
          { id: "04", title: "Pixel Sort 094", Component: UAPixelSort094 },
          { id: "05", title: "Voxel Displace 095", Component: UAVoxelDisplace095 },
          { id: "06", title: "ASCII Render 096", Component: UAASCIIRender096 },
          { id: "07", title: "CRT Monitor 097", Component: UACRTMonitor097 },
          { id: "08", title: "Quantum Wave 098", Component: UAQuantumWave098 },
          { id: "09", title: "Morph Blob 099", Component: UAMorphBlob099 },
          { id: "10", title: "AI Generative 100", Component: UAAIGenerative100 },
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