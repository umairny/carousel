"use client";

import { UACoverFlow011 } from "@/components/carousels/depth/UACoverFlow011";
import { UACube3D012 } from "@/components/carousels/depth/UACube3D012";
import { UACylinderRing013 } from "@/components/carousels/depth/UACylinderRing013";
import { UASphereWeb014 } from "@/components/carousels/depth/UASphereWeb014";
import { UAHelixTwist015 } from "@/components/carousels/depth/UAHelixTwist015";
import { UAPerspectiveFold016 } from "@/components/carousels/depth/UAPerspectiveFold016";
import { UAAccordion3D017 } from "@/components/carousels/depth/UAAccordion3D017";
import { UAZAxisStack018 } from "@/components/carousels/depth/UAZAxisStack018";
import { UAParallaxTilt019 } from "@/components/carousels/depth/UAParallaxTilt019";
import { UADepthOfField020 } from "@/components/carousels/depth/UADepthOfField020";

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
          Depth Carousels for Modern Web Apps
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
          { id: "01", title: "Cover Flow 011", Component: UACoverFlow011 },
          { id: "02", title: "Cube 3D 012", Component: UACube3D012 },
          { id: "03", title: "Cylinder Ring 013", Component: UACylinderRing013 },
          { id: "04", title: "Sphere Web 014", Component: UASphereWeb014 },
          { id: "05", title: "Helix Twist 015", Component: UAHelixTwist015 },
          { id: "06", title: "Perspective Fold 016", Component: UAPerspectiveFold016 },
          { id: "07", title: "Accordion 3D 017", Component: UAAccordion3D017 },
          { id: "08", title: "Z Axis Stack 018", Component: UAZAxisStack018 },
          { id: "09", title: "Parallax Tilt 019", Component: UAParallaxTilt019 },
          { id: "10", title: "Depth Of Field 020", Component: UADepthOfField020 },
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