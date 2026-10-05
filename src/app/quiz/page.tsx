"use client";
import Link from "next/link";
import { useState } from "react";

const steps = [
  { key: "size", title: "Home size", options: ["Studio–1 bed", "2–3 bed", "4+ bed"] },
  { key: "freq", title: "Clean frequency", options: ["Weekly", "Bi-weekly", "Monthly deep"] },
  { key: "pets", title: "Pet traffic", options: ["None", "Some", "Heavy"] },
];
export default function QuizPage() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = i >= steps.length;
  const plan = answers[0]?.includes("4+") ? "Estate rhythm" : answers[1]?.includes("Weekly") ? "Home weekly" : "Lite bi-weekly";
  return (
    <main className="mx-auto max-w-lg px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Clean quiz</h1>
      {!done ? (
        <div className="neu-card mt-8 p-8 animate-rise">
          <p className="text-sm text-[var(--muted)]">Step {i + 1} of {steps.length}</p>
          <h2 className="mt-2 text-xl font-bold">{steps[i].title}</h2>
          <div className="mt-6 flex flex-col gap-3">
            {steps[i].options.map((o) => (
              <button key={o} type="button" className="neu-btn px-4 py-3 text-left font-semibold" onClick={() => { setAnswers((a) => [...a, o]); setI((x) => x + 1); }}>{o}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="neu-card mt-8 p-8 animate-rise">
          <p className="text-sm text-[var(--muted)]">Recommended plan</p>
          <p className="mt-2 text-2xl font-bold">{plan}</p>
          <p className="mt-4 text-sm text-[var(--muted)]">Based on: {answers.join(" · ")}</p>
          <Link href="/shop" className="neu-btn mt-8 inline-block px-6 py-3 font-semibold">Shop matched kits</Link>
        </div>
      )}
    </main>
  );
}