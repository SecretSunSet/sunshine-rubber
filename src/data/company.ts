import type {
  CategoryCard,
  Feature,
  Stat,
  TimelineEntry,
} from "./types";

/** Hero stat row (Home). */
export const stats: Stat[] = [
  { value: "1991", label: "Established" },
  { value: "35", suffix: "+", label: "Years operating" },
  { value: "60", suffix: "+", label: "Corporate clients" },
  { value: "15", suffix: "+", label: "Product lines" },
];

/** Home category preview cards. Each routes to /products pre-filtered. */
export const categoryCards: CategoryCard[] = [
  {
    num: "01",
    title: "Bridge & Structural",
    desc: "Bearing pads, expansion joints, seismic gaps, water stops and PEJF.",
    filter: "Bridge & Structural",
  },
  {
    num: "02",
    title: "Rubber Products",
    desc: "Gaskets, bumpers, column guards and custom molded & extruded rubber.",
    filter: "Rubber Products",
  },
  {
    num: "03",
    title: "Road Safety & Signage",
    desc: "Guardrails, pavement studs and regulatory / warning signage.",
    filter: "Road Safety",
  },
];

/** "Why us" features (Home). */
export const features: Feature[] = [
  {
    title: "In-house manufacturing",
    desc: "Molded and extruded rubber produced on our own presses, mills and extruders in Valenzuela City.",
  },
  {
    title: "Built to spec",
    desc: "Guardrails and signage manufactured to AASHTO and engineering-grade standards.",
  },
  {
    title: "35 years of trust",
    desc: "Supplying the Philippines’ bridges, expressways and high-rises since 1991.",
  },
  {
    title: "Prompt delivery",
    desc: "Reliable, on-time delivery backed by our own fleet and quality control.",
  },
];

/** About — history paragraphs. */
export const historyParagraphs: string[] = [
  "Sunshine Rubber Tech Resources Co. was incorporated on February 14, 1991 with an initial authorized capitalization of ₱100,000. Actual operations began in May 1992 in Dalandanan, Valenzuela City, with an initial capacity of two metric tons of raw rubber and chemicals per month for the production of high-quality molded and extruded rubber products.",
  "Annual output grew to over a thousand different molded and extruded rubber products — gaskets for PVC and pipes, steering covers, bushings, laboratory stoppers, furniture footings, impact rollers, door and window strips, port bumpers, expansion joints and bearing pads for railroads and bridges. By 1994, capitalization was increased to ₱5 million to add high-end machinery for faster, larger production.",
];

/** About — timeline cards. */
export const timeline: TimelineEntry[] = [
  {
    year: "1991",
    title: "Incorporated",
    desc: "Founded February 14, 1991 with an initial authorized capital of ₱100,000.",
  },
  {
    year: "1992",
    title: "Production begins",
    desc: "Operations start in Dalandanan, Valenzuela City with capacity for 2 metric tons of raw rubber per month.",
  },
  {
    year: "1994",
    title: "Scaling up",
    desc: "Capitalization increased to ₱5 million to add high-end machinery for faster, larger production.",
  },
];

/** About — vision statement. */
export const vision =
  "“To be recognized by our customers as the company whose service standards exceed those of our competitors.”";

/** About — mission lines. */
export const missions: string[] = [
  "Provide a unique combination of products and services tailored to each requirement.",
  "Constantly monitor and improve the quality of our products and services.",
  "Attain a position second to none through a professional approach, quality and prompt delivery.",
];

/** About — in-house machinery (12 chips). */
export const machinery: string[] = [
  "2 × Hydraulic Press",
  "2 × Mixing Rollers",
  "15 × Mechanical Press",
  "3 × Extruder Machines",
  "2 × Welding Machines",
  "1 × Grinding Machine",
  "1 × Bench Drill",
  "Boiler & Auto Clave",
  "2 × Lathe Machine",
  "1 × Shaper",
  "1 × Delivery Van",
  "Laboratory Equipment",
];
