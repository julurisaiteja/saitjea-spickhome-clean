"use client";
import { useState } from "react";
export default function AccountPage() {
  const [saved, setSaved] = useState(false);
  return (
    <main className="mx-auto max-w-lg px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Demo account</h1>
      <div className="neu-card mt-8 space-y-4 p-8">
        <p className="text-sm text-[var(--muted)]">Track quiz plans and crew visits — no password required.</p>
        <input className="neu-inset w-full px-4 py-3" placeholder="Email" />
        <button type="button" className="neu-btn w-full py-3 font-semibold" onClick={() => setSaved(true)}>{saved ? "Profile saved (demo)" : "Save profile"}</button>
      </div>
    </main>
  );
}