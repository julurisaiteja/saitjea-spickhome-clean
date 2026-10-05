"use client";
import { useMemo, useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopBrowse() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "All" || p.category === cat;
      return matchQ && matchC;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, sort]);
  return (
    <div className="mt-10 space-y-6">
      <div className="neu-inset flex flex-col gap-3 p-5 md:flex-row md:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Find a refill or tool"
          className="neu-card flex-1 border-none px-4 py-3 text-sm outline-none"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="neu-card border-none px-4 py-3 text-sm"
        >
          <option value="All">Every room</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="neu-card border-none px-4 py-3 text-sm"
        >
          <option value="featured">Calm picks</option>
          <option value="price-asc">Gentle on budget ↑</option>
          <option value="price-desc">Premium ↓</option>
          <option value="rating">Loved most</option>
        </select>
      </div>
      <p className="text-center text-sm font-bold text-[var(--muted)]">{filtered.length} items ready to ship</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
