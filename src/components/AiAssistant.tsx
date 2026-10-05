"use client";
import { useState } from "react";
const faqs = [{"q":"What does the home quiz measure?","a":"Square footage band, pet traffic, and frequency to recommend a plan."},{"q":"Is SPICK15 for subscriptions?","a":"15% off your first recurring bundle at checkout."},{"q":"Are products pet-safe?","a":"Every SKU lists plant-safe and pet-conscious notes on the PDP."},{"q":"Crew visits vs DIY?","a":"Quiz may suggest crew visits for move-out or deep bands."}] as { q: string; a: string }[];
export function AiAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="neu-card overflow-hidden mb-3 max-h-[60vh] max-w-sm overflow-y-auto p-4 animate-rise">
          <p className="font-semibold">AI Assistant</p>
          <ul className="mt-3 space-y-4 text-sm">
            {faqs.map((f) => (
              <li key={f.q}><p className="font-medium">{f.q}</p><p className="mt-1 text-[var(--muted)]">{f.a}</p></li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={() => setOpen((o) => !o)} className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg">Ask AI</button>
    </div>
  );
}
