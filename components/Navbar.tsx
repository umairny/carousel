"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Classic", href: "/classic" },
    { name: "Depth", href: "/depth" },
    { name: "Cinematic", href: "/cinematic" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-[85%] max-w-5xl backdrop-blur-xl bg-white/70 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white/90 hover:text-black dark:hover:text-white transition-colors">
          Carousel<span className="text-blue-500 font-light">Showcase</span>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 justify-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-sm font-medium transition-all hover:scale-105 ${
                isActive 
                  ? "text-gray-900 dark:text-white relative after:absolute after:-bottom-[4px] after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-blue-500 after:rounded-full after:opacity-100" 
                  : "text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white bg-gray-100/50 dark:bg-white/5 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
       
      </div>
    </nav>
  );
}
