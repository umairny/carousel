const basePath = typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : "";

export const depthSlides =[
  { id: 1, title: "QUANTUM", type: "quantum computing", img: `${basePath}/images/depth/quantum.jpg` },
  { id: 2, title: "NEBULA", type: "nebula computing", img: `${basePath}/images/depth/nebula.jpg` },
  { id: 3, title: "VOID", type: "void computing", img: `${basePath}/images/depth/void.jpg` },
  { id: 4, title: "HORIZON", type: "horizon computing", img: `${basePath}/images/depth/horizon.jpg` },
  { id: 5, title: "ECLIPSE", type: "eclipse computing", img: `${basePath}/images/depth/eclipse.jpg` },
];