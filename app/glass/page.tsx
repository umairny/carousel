"use client";

import { UAFrostedGlass051 } from "@/components/carousels/glass/UAFrostedGlass051";
import { UAAuroraGlow052 } from "@/components/carousels/glass/UAAuroraGlow052";
import { UALiquidMorph053 } from "@/components/carousels/glass/UALiquidMorph053";
import { UASoftEmboss054 } from "@/components/carousels/glass/UASoftEmboss054";
import { UACyberNeon055 } from "@/components/carousels/glass/UACyberNeon055";
import { UAHolographic056 } from "@/components/carousels/glass/UAHolographic056";
import { UAMirrorReflect057 } from "@/components/carousels/glass/UAMirrorReflect057";
import { UAGradientMesh058 } from "@/components/carousels/glass/UAGradientMesh058";
import { UAGlassParallax059 } from "@/components/carousels/glass/UAGlassParallax059";
import { UAPrismCrystal060 } from "@/components/carousels/glass/UAPrismCrystal060";
import { UALightModeEmboss061 } from "@/components/carousels/glass/UALightModeEmboss061";
import { UAGlassAccordion062 } from "@/components/carousels/glass/UAGlassAccordion062";
import { UAMacOSDeck063 } from "@/components/carousels/glass/UAMacOSDeck063";
import { UAAcrylicReveal064 } from "@/components/carousels/glass/UAAcrylicReveal064";
import { UAGlassHexagon065 } from "@/components/carousels/glass/UAGlassHexagon065";
import { UAMicaceousShimmer066 } from "@/components/carousels/glass/UAMicaceousShimmer066";
import { UACyberpunkGrid067 } from "@/components/carousels/glass/UACyberpunkGrid067";
import { UAWaterRipple068 } from "@/components/carousels/glass/UAWaterRipple068";
import { UAShadowStack069 } from "@/components/carousels/glass/UAShadowStack069";
import { UAGlassMarquee070 } from "@/components/carousels/glass/UAGlassMarquee070";


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
          Glass Carousels for Modern Web Apps
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
            { id: "01", title: "Frosted Glass 051", Component: UAFrostedGlass051 },
            { id: "02", title: "Aurora Glow 052", Component: UAAuroraGlow052 },
            { id: "03", title: "Liquid Morph 053", Component: UALiquidMorph053 },
            { id: "04", title: "Soft Emboss 054", Component: UASoftEmboss054 },
            { id: "05", title: "Cyber Neon 055", Component: UACyberNeon055 },
            { id: "06", title: "Holographic 056", Component: UAHolographic056 },
            { id: "07", title: "Mirror Reflect 057", Component: UAMirrorReflect057 },
            { id: "08", title: "Gradient Mesh 058", Component: UAGradientMesh058 },
            { id: "09", title: "Glass Parallax 059", Component: UAGlassParallax059 },
            { id: "10", title: "Prism Crystal 060", Component: UAPrismCrystal060 },
            { id: "11", title: "Light Mode Emboss 061", Component: UALightModeEmboss061 },
            { id: "12", title: "Glass Accordion 062", Component: UAGlassAccordion062 },
            { id: "13", title: "macOS Deck 063", Component: UAMacOSDeck063 },
            { id: "14", title: "Acrylic Reveal 064", Component: UAAcrylicReveal064 },
            { id: "15", title: "Glass Hexagon 065", Component: UAGlassHexagon065 },
            { id: "16", title: "Micaceous Shimmer 066", Component: UAMicaceousShimmer066 },
            { id: "17", title: "Cyberpunk Grid 067", Component: UACyberpunkGrid067 },
            { id: "18", title: "Water Ripple 068", Component: UAWaterRipple068 },
            { id: "19", title: "Shadow Stack 069", Component: UAShadowStack069 },
            { id: "20", title: "Glass Marquee 070", Component: UAGlassMarquee070 },
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