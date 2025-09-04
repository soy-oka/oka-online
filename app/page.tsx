import { Header } from "@/components/Header";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero / Header */}
      <Header />

      {/* Full-width testimonial carousel */}
      <section
        aria-labelledby="section-testimonials"
        className="w-full border-t border-neutral-200"
      >
        <h2 id="section-testimonials" className="sr-only">
          Vad våra kunder säger
        </h2>
        <TestimonialCarousel />
      </section>

      {/* Intro / Who we are (lugn, kort) */}
      <section
        aria-labelledby="section-intro"
        className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2
              id="section-intro"
              className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
            >
              Öka gör AI begripligt, konkret och värdeskapande.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-neutral-700">
              Vi hjälper svenska SME-företag att integrera generativ AI där det
              faktiskt gör nytta: frigjord tid, lägre kostnad, högre kvalitet,
              ökad intäkt. Starta litet, mät, skala.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/tjanster"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-900 px-5 py-3 text-sm font-medium tracking-wide hover:-translate-y-0.5 transition will-change-transform"
              >
                Se tjänster
              </a>
              <a
                href="/process"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100 px-5 py-3 text-sm font-medium tracking-wide hover:bg-neutral-200 transition"
              >
                Vår process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider + subtle footer prompt */}
      <section className="w-full border-t border-neutral-200">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-base text-neutral-700">
              Vill du se case eller boka ett kort intro?
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/case"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                Utforska case
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 px-4 py-2 text-sm font-medium hover:-translate-y-0.5 transition"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
