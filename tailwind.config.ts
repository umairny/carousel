// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- ADD THIS
  content:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ua: {
          black: "#050505",
          white: "#fbfbfd", // Apple-style off-white
          neon: "#00f3ff",
          purple: "#b026ff",
        }
      },
    },
  },
  plugins:[],
};
export default config;