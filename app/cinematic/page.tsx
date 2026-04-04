"use client";

import { UAHeroScale031 } from "@/components/carousels/cinematic/UAHeroScale031";
import { UATextMask032 } from "@/components/carousels/cinematic/UATextMask032";
import { UAKenBurns033 } from "@/components/carousels/cinematic/UAKenBurns033";
import { UASplitFlap034 } from "@/components/carousels/cinematic/UASplitFlap034";
import { UACinematicWipe035 } from "@/components/carousels/cinematic/UACinematicWipe035";
import { UAGlitch036 } from "@/components/carousels/cinematic/UAGlitch036";
import { UAGaussianMask037 } from "@/components/carousels/cinematic/UAGaussianMask037";
import { UASubtitleSync038 } from "@/components/carousels/cinematic/UASubtitleSync038";
import { UACurtainPull039 } from "@/components/carousels/cinematic/UACurtainPull039";
import { UAInkDrop040 } from "@/components/carousels/cinematic/UAInkDrop040";
import { UALetterboxShrink041 } from "@/components/carousels/cinematic/UALetterboxShrink041";
import { UAFocusPull042 } from "@/components/carousels/cinematic/UAFocusPull042";
import { UAFilmStrip043 } from "@/components/carousels/cinematic/UAFilmStrip043";
import { UACRTMonitor044 } from "@/components/carousels/cinematic/UACRTMonitor044";
import { UASoundwaveSync045 } from "@/components/carousels/cinematic/UASoundwaveSync045";
import { UAVHSFastForward046 } from "@/components/carousels/cinematic/UAVHSFastForward046";
import { UAZoomBlur047 } from "@/components/carousels/cinematic/UAZoomBlur047";
import { UASilhouetteMask048 } from "@/components/carousels/cinematic/UASilhouetteMask048";
import { UAVerticalBlinds049 } from "@/components/carousels/cinematic/UAVerticalBlinds049";
import { UACreditsRoll050 } from "@/components/carousels/cinematic/UACreditsRoll050";

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
          Cinematic Carousels for Modern Web Apps
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
          {id:"031",title:"Hero Scale 031",Component:UAHeroScale031},
          {id:"032",title:"Text Mask 032",Component:UATextMask032},
          {id:"033",title:"Ken Burns 033",Component:UAKenBurns033},
          {id:"034",title:"Split Flap 034",Component:UASplitFlap034},
          {id:"035",title:"Cinematic Wipe 035",Component:UACinematicWipe035},
          {id:"036",title:"Glitch 036",Component:UAGlitch036},
          {id:"037",title:"Gaussian Mask 037",Component:UAGaussianMask037},
          {id:"038",title:"Subtitle Sync 038",Component:UASubtitleSync038},
          {id:"039",title:"Curtain Pull 039",Component:UACurtainPull039},
          {id:"040",title:"Ink Drop 040",Component:UAInkDrop040},
          {id:"041",title:"Letterbox Shrink 041",Component:UALetterboxShrink041},
          {id:"042",title:"Focus Pull 042",Component:UAFocusPull042},
          {id:"043",title:"Film Strip 043",Component:UAFilmStrip043},
          {id:"044",title:"CRT Monitor 044",Component:UACRTMonitor044},
          {id:"045",title:"Soundwave Sync 045",Component:UASoundwaveSync045},
          {id:"046",title:"VHS Fast Forward 046",Component:UAVHSFastForward046},
          {id:"047",title:"Zoom Blur 047",Component:UAZoomBlur047},
          {id:"048",title:"Silhouette Mask 048",Component:UASilhouetteMask048},
          {id:"049",title:"Vertical Blinds 049",Component:UAVerticalBlinds049},
          {id:"050",title:"Credits Roll 050",Component:UACreditsRoll050},
          
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