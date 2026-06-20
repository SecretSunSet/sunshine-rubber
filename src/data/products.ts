import type { Product, FilterCategory } from "./types";

/** Filter pills, in order. "All" first. */
export const filterCategories: FilterCategory[] = [
  "All",
  "Bridge & Structural",
  "Rubber Products",
  "Road Safety",
];

/** The full catalog (15 items) — ported verbatim from the design reference. */
export const products: Product[] = [
  {
    img: "/images/products/bearing-pad.png",
    name: "Elastomeric Bearing Pad",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb:
      "Steel-laminated bearing pads that absorb load and movement between bridge girders and supports.",
  },
  {
    img: "/images/products/expansion-joint.png",
    name: "Expansion Joint (Sunflex)",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb:
      "Rubber expansion joints that accommodate thermal movement across bridge and roadway gaps.",
  },
  {
    img: "/images/products/seismic-gap.png",
    name: "Seismic Gap Cover",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb:
      "Flexible seismic joint covers that protect structural gaps during ground movement.",
  },
  {
    img: "/images/products/bearing-sleeve.svg",
    name: "Bearing Sleeves",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb: "Precision sleeves for fixed and expansion bearing assemblies.",
  },
  {
    img: "/images/products/compressible-pad.svg",
    name: "Compressible Pad",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb: "Compressible filler pads for structural joints and interfaces.",
  },
  {
    img: "/images/products/water-stop.svg",
    name: "Water Stop (Rubber / PVC)",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb:
      "Rubber and PVC water stops that seal construction joints against water ingress.",
  },
  {
    img: "/images/products/pejf.svg",
    name: "PEJF Joint Fillers",
    cat: "Bridge & Structural",
    tag: "Bridge",
    blurb:
      "Premolded expansion joint fillers for concrete pavements and structures.",
  },
  {
    img: "/images/products/steel-gasket.svg",
    name: "Rubber Steel Gasket",
    cat: "Rubber Products",
    tag: "Rubber",
    blurb: "Steel-reinforced rubber gaskets for pipe and flange sealing.",
  },
  {
    img: "/images/products/rubber-gasket.svg",
    name: "Rubber Gasket",
    cat: "Rubber Products",
    tag: "Rubber",
    blurb: "Molded gaskets for PVC, pipes and industrial sealing applications.",
  },
  {
    img: "/images/products/column-guard.svg",
    name: "Rubber Column Guard",
    cat: "Rubber Products",
    tag: "Rubber",
    blurb:
      "Impact-resistant column guards in multiple colors to protect structures and vehicles.",
  },
  {
    img: "/images/products/rubber-bumper.svg",
    name: "Rubber Bumper",
    cat: "Rubber Products",
    tag: "Rubber",
    blurb:
      "Heavy-duty dock and port bumpers that absorb berthing and impact loads.",
  },
  {
    img: "/images/products/molded-rubber.svg",
    name: "Molded & Extruded Rubber",
    cat: "Rubber Products",
    tag: "Rubber",
    blurb:
      "Custom bushings, stoppers, footings, strips and impact rollers made to requirement.",
  },
  {
    img: "/images/products/signage.svg",
    name: "Road Signage",
    cat: "Road Safety",
    tag: "Road Safety",
    blurb:
      "Warning, regulatory and informatory signage on engineering-grade aluminum / G.I. panels.",
  },
  {
    img: "/images/products/pavement-studs.svg",
    name: "Pavement Studs",
    cat: "Road Safety",
    tag: "Road Safety",
    blurb:
      "Reflective pavement studs for lane delineation and night-time visibility.",
  },
  {
    img: "/images/products/guardrail.svg",
    name: "Guardrail (AASHTO)",
    cat: "Road Safety",
    tag: "Road Safety",
    blurb:
      "Hot-dipped galvanized guardrails manufactured per AASHTO specification.",
  },
];

/** AASHTO footnote shown under the product grid. */
export const productsFootnote =
  "Guardrails and signage are manufactured to AASHTO specification (Class A or B, Type A or B) on high-intensity, engineering-grade aluminum or G.I. sheet panels with hot-dipped galvanized posts. Custom molded and extruded items are produced to client requirement.";
