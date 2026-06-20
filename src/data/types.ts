/** Product category labels — also used as the Products filter pill labels. */
export type Category =
  | "Bridge & Structural"
  | "Rubber Products"
  | "Road Safety";

/** A filter pill value: "All" or a concrete category. */
export type FilterCategory = "All" | Category;

export interface Product {
  img: string;
  name: string;
  cat: Category;
  /** Short caps chip shown over the product image. */
  tag: string;
  blurb: string;
}

export interface CategoryCard {
  num: string;
  title: string;
  desc: string;
  /** Category to pre-select when this card routes to /products. */
  filter: FilterCategory;
}

export interface Feature {
  title: string;
  desc: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  desc: string;
}

export interface Project {
  img: string;
  name: string;
  type: string;
}

export interface Stat {
  value: string;
  /** Optional accented suffix, e.g. "+". */
  suffix?: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface TabLink {
  href: string;
  label: string;
  /** SVG path `d` for the stroked tab icon. */
  icon: string;
}
