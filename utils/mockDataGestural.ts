const basePath = typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : "";


export const gesturalSlides =[
  { id: 1, title: "KINETIC", subtitle: "Force & Motion", img: `${basePath}/images/gestural/kinetic.jpg` },
  { id: 2, title: "INERTIA", subtitle: "Resisting Change", img: `${basePath}/images/gestural/inertia.jpg` },
  { id: 3, title: "MOMENTUM", subtitle: "Mass in Velocity", img: `${basePath}/images/gestural/momentum.jpg` },
  { id: 4, title: "FRICTION", subtitle: "Surface Resistance", img: `${basePath}/images/gestural/friction.jpg` },
];