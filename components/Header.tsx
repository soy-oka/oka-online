import Link from "next/link";

export function Header() {
  return (
    <section
      aria-labelledby="site-hero"
      className="relative w-full border-b border-neutral-200"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28">
        {/* Superlabel */}
        <p className="mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-600">
          Nordic Minimalism. Swiss Grid. Resultat först.
        </p>

        {/* Headline */}
        <h1
          id="site-hero"
          className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
        >
          Gör AI till den smartaste
          <span className="block md:inline"> kollegan i teamet.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
          Öka hjälper svenska SME att implementera generativ AI med fokus på
          mätbar effekt — frigjord tid, minskade kostnader och bättre kvalitet.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-900 px-5 py-3 text-sm font-medium tracking-wide hover:-translate-y-0.5 transition"
          >
            Boka intro
          </Link>
          <Link
            href="/tjanster"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100 px-5 py-3 text-sm font-medium tracking-wide hover:bg-neutral-200 transition"
          >
            Tjänster
          </Link>
        </div>
      </div>
    </section>
  );
}
