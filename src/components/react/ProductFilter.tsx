import { useEffect, useMemo, useState } from "react";
import styles from "./ProductFilter.module.css";
import { products, filterCategories } from "../../data/products";
import type { FilterCategory } from "../../data/types";

/**
 * Products catalog with client-side category filtering. Pages are prerendered,
 * so the initial category from a `?cat=` deep link is read on the client after
 * mount (SSR renders "All" to keep hydration stable).
 */
export default function ProductFilter() {
  const [cat, setCat] = useState<FilterCategory>("All");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("cat");
    if (param && (filterCategories as string[]).includes(param)) {
      setCat(param as FilterCategory);
    }
  }, []);

  const visible = useMemo(
    () => (cat === "All" ? products : products.filter((p) => p.cat === cat)),
    [cat],
  );

  return (
    <>
      <div className={styles.pills} role="tablist" aria-label="Filter products by category">
        {filterCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={c === cat}
            className={`${styles.pill} ${c === cat ? styles.pillActive : ""}`}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((p) => (
          <article className={styles.card} key={p.name}>
            <div className={styles.media}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className={styles.tag}>{p.tag}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.blurb}>{p.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
