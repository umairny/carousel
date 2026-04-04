const basePath = typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : "";

export const glassSlides =[
  { id: 1, title: "LUMINA", subtitle: "Refracted Light", img: `${basePath}/images/glass/lumina.jpg` },
  { id: 2, title: "AETHER", subtitle: "Ethereal Depth", img: `${basePath}/images/glass/aether.jpg` },
  { id: 3, title: "PRISM", subtitle: "Color Separation", img: `${basePath}/images/glass/prism.jpg` },
  { id: 4, title: "SYNTH", subtitle: "Digital Dreams", img: `${basePath}/images/glass/synth.jpg` },
];