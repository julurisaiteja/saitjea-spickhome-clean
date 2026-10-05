"use client";
import Link from "next/link";
import { PromoStrip } from "@/components/PromoStrip";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <section className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-4 py-16 md:px-6">
        <div className="neu-card w-full max-w-lg p-10 text-center animate-rise md:p-14">
          <h1 className="text-4xl font-extrabold md:text-5xl">SpickHome Clean</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">Soft tools for spotless rooms.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">No film — just soft extruded controls and calm focus.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/quiz" className="neu-btn px-8 py-4 font-semibold">Find your clean rhythm</Link>
            <Link href="/shop" className="neu-btn px-8 py-4 font-semibold opacity-90">Browse kits</Link>
          </div>
        </div>
        <div className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-4">
          {["Rooms", "Frequency", "Surfaces"].map((label) => (
            <button key={label} type="button" className="neu-inset py-6 text-sm font-bold motion-rise">{label}</button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-3xl font-bold">Rhythm plans</h2>
        <p className="mt-2 max-w-xl text-[var(--muted)]">Weekly, bi-weekly, or deep-band — quiz maps your home size to a plan.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{ n: "Lite", h: "1–2 bed" }, { n: "Home", h: "3–4 bed" }, { n: "Estate", h: "5+ rooms" }].map((plan) => (
            <Link key={plan.n} href="/quiz" className="neu-card block p-8 animate-drift">
              <p className="text-xl font-bold">{plan.n}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{plan.h}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="neu-card p-8 md:p-12">
          <h2 className="text-2xl font-bold">Crew + DIY together</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">Shop neu-safe supplies or add a crew visit for move-out and allergen resets — one account tracks both.</p>
          <Link href="/account" className="neu-btn mt-6 inline-block px-6 py-3 font-semibold">Open demo account</Link>
        </div>
      </section>
      <PromoStrip />
      <Reviews />
    </main>
  );
}