import type { NavLink } from "./types";

/** Primary navigation (desktop header + footer "Explore"). */
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

/** Footer "Explore" links (omits Home). */
export const footerLinks: NavLink[] = navLinks.filter((l) => l.href !== "/");

/**
 * Mark a nav link active for the current path. Exact match for "/", prefix
 * match for the rest so nested routes still highlight the section.
 */
export function isActive(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href + "/");
}
