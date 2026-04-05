"use client";

import { UAElasticDrag071 } from "@/components/carousels/gestural/UAElasticDrag071";
import { UAMagneticSnap072 } from "@/components/carousels/gestural/UAMagneticSnap072";
import { UAFluidSwipe073 } from "@/components/carousels/gestural/UAFluidSwipe073";
import { UAInertiaScroll074 } from "@/components/carousels/gestural/UAInertiaScroll074";
import { UAHoverExpand075 } from "@/components/carousels/gestural/UAHoverExpand075";
import { UACursorFollower076 } from "@/components/carousels/gestural/UACursorFollower076";
import { UASpringDeck077 } from "@/components/carousels/gestural/UASpringDeck077";
import { UADeckSwipe078 } from "@/components/carousels/gestural/UADeckSwipe078";
import { UAPullRelease079 } from "@/components/carousels/gestural/UAPullRelease079";
import { UAMagneticOrbit080 } from "@/components/carousels/gestural/UAMagneticOrbit080";
import { UAMouseTrail081 } from "@/components/carousels/gestural/UAMouseTrail081";
import { UAGravityDrop082 } from "@/components/carousels/gestural/UAGravityDrop082";
import { UAElasticLine083 } from "@/components/carousels/gestural/UAElasticLine083";
import { UAScrubBar084 } from "@/components/carousels/gestural/UAScrubBar084";
import { UAMagneticGrid085 } from "@/components/carousels/gestural/UAMagneticGrid085";
import { UAPinchZoom086 } from "@/components/carousels/gestural/UAPinchZoom086";
import { UARotaryDial087 } from "@/components/carousels/gestural/UARotaryDial087";
import { UAThrowSort088 } from "@/components/carousels/gestural/UAThrowSort088";
import { UACurveTrack089 } from "@/components/carousels/gestural/UACurveTrack089";
import { UAVelocityScale090 } from "@/components/carousels/gestural/UAVelocityScale090";


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
          Gestural Carousels for Modern Web Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white/50 max-w-2xl mb-12 font-light leading-relaxed">
          A meticulously crafted collection of beautiful, responsive, and accessible carousel components built with React, Tailwind CSS, and Framer Motion.
        </p>
    
      </section>

      {/* Components List */}
      <section className="w-full flex flex-col gap-32 max-w-7xl px-4 md:px-8">
        {[
          { id: "01", title: "Elastic Drag", Component: UAElasticDrag071 },
          { id: "02", title: "Magnetic Snap", Component: UAMagneticSnap072 },
          { id: "03", title: "Fluid Swipe", Component: UAFluidSwipe073 },
          { id: "04", title: "Inertia Scroll", Component: UAInertiaScroll074 },
          { id: "05", title: "Hover Expand", Component: UAHoverExpand075 },
          { id: "06", title: "Cursor Follower", Component: UACursorFollower076 },
          { id: "07", title: "Spring Deck", Component: UASpringDeck077 },
          { id: "08", title: "Deck Swipe", Component: UADeckSwipe078 },
          { id: "09", title: "Pull Release", Component: UAPullRelease079 },
          { id: "10", title: "Magnetic Orbit", Component: UAMagneticOrbit080 },
          { id: "11", title: "Mouse Trail", Component: UAMouseTrail081 },
          { id: "12", title: "Gravity Drop", Component: UAGravityDrop082 },
          { id: "13", title: "Elastic Line", Component: UAElasticLine083 },
          { id: "14", title: "Scrub Bar", Component: UAScrubBar084 },
          { id: "15", title: "Magnetic Grid", Component: UAMagneticGrid085 },
          { id: "16", title: "Pinch Zoom", Component: UAPinchZoom086 },
          { id: "17", title: "Rotary Dial", Component: UARotaryDial087 },
          { id: "18", title: "Throw Sort", Component: UAThrowSort088 },
          { id: "19", title: "Curve Track", Component: UACurveTrack089 },
          { id: "20", title: "Velocity Scale", Component: UAVelocityScale090 },
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