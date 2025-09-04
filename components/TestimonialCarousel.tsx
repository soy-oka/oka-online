"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  logoSrc?: string; // optional if you want to add logos later via /public
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Öka gjorde vårt AI-pilotprojekt begripligt och mätbart. På fyra veckor frigjorde vi 20% tid i kundtjänst.",
    author: "Namn Namnsson",
    role: "COO",
    company: "Företag AB",
  },
  {
    quote:
      "Vi gick från idé till produktion med en robust prompt-arkitektur och tydliga guardrails.",
    author: "Anna Andersson",
    role: "CTO",
    company: "Industri & Co",
  },
  {
    quote:
      "Strukturerad process, snygg leverans – och framförallt, riktig effekt i vardagen.",
    author: "Erik Eriksson",
    role: "VD",
    company: "Tjänsteföretaget",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const id = "carousel-" + Math.random().toString(36).slice(2, 8);
  const intervalRef = useRef<number | null>(null);

  const items = useMemo(() => TESTIMONIALS, []);
  const count = items.length;

  // Auto-advance (respect reduced motion)
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [count]);

  const goTo = (i: number) => setIndex(i % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div
      className="relative w-full bg-neutral-50"
      role="region"
      aria-roledescription="carousel"
      aria-label="Kundcitat"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        {/* Track */}
        <div className="relative overflow-hidden">
          <ul
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live="polite"
          >
            {items.map((t, i) => (
              <li key={i} className="w-full shrink-0 basis-full">
                <figure className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                  <blockquote className="md:col-span-8">
                    <p className="text-2xl md:text-3xl leading-snug tracking-tight">
                      “{t.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="md:col-span-4">
                    <div className="mt-4 font-medium">{t.author}</div>
                    <div className="text-sm text-neutral-600">
                      {[t.role, t.company].filter(Boolean).join(", ")}
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-2" aria-label="Välj citat">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-controls={id}
                  aria-label={`Gå till citat ${i + 1}`}
                  aria-current={index === i ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={[
                    "h-2 w-8 rounded-full border border-neutral-400 transition",
                    index === i ? "bg-neutral-900 border-neutral-900" : "bg-white",
                  ].join(" ")}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="rounded-xl border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100"
                aria-label="Föregående citat"
              >
                Föregående
              </button>
              <button
                onClick={next}
                className="rounded-xl border border-neutral-900 px-3 py-1 text-sm font-medium hover:-translate-y-0.5 transition"
                aria-label="Nästa citat"
              >
                Nästa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thin full-bleed rules for Swiss feel */}
      <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-neutral-200" />
    </div>
  );
}
