import type { TabLink } from "./types";

/**
 * Mobile bottom-tab bar. SVG path `d` values ported verbatim from the mobile
 * reference (`tabs` array). Rendered as 24×24 stroked icons.
 */
export const tabs: TabLink[] = [
  { href: "/", label: "Home", icon: "M3 10.7 12 4l9 6.7M5 9.6V20h5v-6h4v6h5V9.6" },
  {
    href: "/about",
    label: "About",
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M12 11v5M12 7.6v.1",
  },
  {
    href: "/products",
    label: "Products",
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  },
  {
    href: "/clients",
    label: "Clients",
    icon: "M5 21V5l7-2v18M12 21V9l7 2v10M3 21h18M8 8h.1M8 12h.1M8 16h.1",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "M3 6h18v12H3zM3.5 7l8.5 6 8.5-6",
  },
];
