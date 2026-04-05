const basePath = typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : "";

export const expSlides =[
  { id: 1, title: "NEURAL", subtitle: "Generative Flow", img: `${basePath}/images/exp/neural.jpg` },
  { id: 2, title: "SYNAPSE", subtitle: "Data Streams", img: `${basePath}/images/exp/synapse.jpg` },
  { id: 3, title: "MATRIX", subtitle: "Digital Void", img: `${basePath}/images/exp/matrix.jpg` },
  { id: 4, title: "RENDER", subtitle: "Voxel Space", img: `${basePath}/images/exp/render.jpg` },
];