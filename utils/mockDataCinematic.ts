const basePath = typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : "";

export const cinematicSlides =[
  { id: 1, title: "AWAKENING", subtitle: "The dawn of a new era.", img: `${basePath}/images/cinematic/awakening.jpg` },
  { id: 2, title: "METROPOLIS", subtitle: "Lost in the concrete jungle.", img: `${basePath}/images/cinematic/metropolis.jpg` },
  { id: 3, title: "SILENCE", subtitle: "Where sound goes to die.", img: `${basePath}/images/cinematic/silence.jpg` },
  { id: 4, title: "ODYSSEY", subtitle: "A journey beyond the stars.", img: `${basePath}/images/cinematic/odyssey.jpg` },
];