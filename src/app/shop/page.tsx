import { ShopBrowse } from "@/components/ShopBrowse";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="neu-card mx-auto max-w-3xl p-10 text-center md:p-12">
        <h1 className="text-4xl font-extrabold md:text-5xl">Supply closet</h1>
        <p className="mt-4 text-[var(--muted)]">
          Neu-soft tools and refill kits — filter by room, sort gently, tap any card for specs.
        </p>
      </div>
      <ShopBrowse />
    </main>
  );
}
