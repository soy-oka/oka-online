'use client';
import Link from 'next/link';
import CreativeSwitch from './CreativeSwitch';
import LogoBlob from './LogoBlob';
import { PosterDots, PosterLines, PosterOrbGrid, PosterRadial } from './Posters';

export function Header({ creative, setCreative }: { creative: boolean; setCreative: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center py-4">
          <div className="col-span-6 md:col-span-3 flex items-center gap-3">
            <LogoBlob className="h-8 w-8" />
            <span className="font-semibold tracking-tight text-xl" aria-label="ÖKA">ÖKA</span>
          </div>
          <nav className="col-span-12 md:col-span-6 order-3 md:order-2 mt-4 md:mt-0" aria-label="Huvudnavigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              {[
                ['Tjänster', '#packages'],
                ['Process', '#process'],
                ['Case', '#cases'],
                ['Resurser', '#resurser'],
                ['Kontakt', '#kontakt'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:underline underline-offset-4 decoration-[var(--accent)] decoration-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-6 md:col-span-3 order-2 md:order-3 flex justify-end items-center gap-3">
            <CreativeSwitch checked={creative} onChange={setCreative} />
            <Link href="#boka" className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-3 py-1.5 text-sm font-medium hover:bg-neutral-900 hover:text-white">
              Boka möte
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="col-span-12 grid grid-cols-12 gap-6 pt-10">
      <div className="col-span-12 md:col-span-7">
        <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black leading-[0.92] tracking-tight">
          AI som din mest <span className="bg-[var(--accent)] text-white px-2">pålitliga</span>
          <br />
          och <span className="bg-black text-white px-2">effektiva</span> medarbetare.
        </h1>
        <p className="mt-6 max-w-[44ch] text-[17px] text-neutral-700 leading-7">
          Vi gör generativ AI konkret för nordiska SME – från kartläggning till implementering. Minimalism. Effekt. Öka.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="#boka" className="rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:opacity-90">
            Börja med ett 30‑minuters läge
          </Link>
          <Link href="#packages" className="rounded-full border border-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-900 hover:text-white">
            Se paket
          </Link>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <PosterOrbGrid />
      </div>
    </section>
  );
}

export function GraphicStrip() {
  return (
    <section aria-hidden className="col-span-12 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6"><PosterRadial /></div>
      <div className="col-span-12 md:col-span-6"><PosterLines /></div>
    </section>
  );
}

export function Process() {
  const steps = [
    { id: 'Kartläggning', text: 'Identifiera 5–10 hög-ROI arbetsflöden. Datakällor, risk, kostnad.' },
    { id: 'Strategi & Design', text: 'Målbild, mätetal, pilotplan. UX & brand.' },
    { id: 'Implementering', text: 'Bygg, kvalitetssäkra, utbilda, skala.' },
  ];
  return (
    <section id="process" className="col-span-12">
      <header className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Process</h2>
        <span className="text-sm text-neutral-500">Kartläggning → Strategi & Design → Implementering</span>
      </header>
      <ol className="grid grid-cols-12 gap-6">
        {steps.map((s, i) => (
          <li key={s.id} className="col-span-12 md:col-span-4">
            <div className="border border-neutral-200 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white font-bold">{i + 1}</span>
                <h3 className="font-bold">{s.id}</h3>
              </div>
              <p className="mt-4 text-neutral-700 leading-7">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Packages() {
  const pkgs = [
    { name: 'START', price: '25 000 SEK', bullets: ['1–2 workshops, kartläggning', 'ROI-score + 90-dagars plan', 'Rapport + inspelade sessioner'] },
    { name: 'STRATEGI', price: '65 000 SEK', bullets: ['Pilotdesign + mätetal', 'Prototyp (prompt/system) + test', 'Roadmap till skala'] },
    { name: 'PARTNER', price: 'fr. 45 000 SEK/mån', bullets: ['Bygg + integrationer', 'Utbildning + governance', 'Support & förbättring'] },
  ];
  return (
    <section id="packages" className="col-span-12">
      <header className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Paket</h2>
        <span className="text-sm text-neutral-500">Fastpris per fas eller hybrid</span>
      </header>
      <div className="grid grid-cols-12 gap-6">
        {pkgs.map((p, idx) => (
          <article key={p.name} className="col-span-12 md:col-span-4">
            <div className="rounded-2xl border border-neutral-200 p-6 h-full flex flex-col">
              <h3 className="text-xl font-extrabold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-500">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 bg-black rounded-full" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <a href="#boka" className={`inline-flex items-center justify-center w-full rounded-full px-4 py-3 text-sm font-semibold border ${idx === 1 ? 'bg-black text-white border-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-white'}`}>
                  Välj {p.name.toLowerCase()}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Cases() {
  const items = [
    { title: 'B2B SaaS: 30% snabbare onboarding', tag: 'Pilot' },
    { title: 'Bygg: kalkyl med 92% träffsäkerhet', tag: 'Implementering' },
    { title: 'E‑handel: 18% högre konvertering', tag: 'Strategi' },
  ];
  return (
    <section id="cases" className="col-span-12">
      <header className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Case</h2>
        <a href="#" className="text-sm underline underline-offset-4">Se alla</a>
      </header>
      <div className="grid grid-cols-12 gap-6">
        {items.map((c, i) => (
          <article key={c.title} className="col-span-12 md:col-span-4">
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200">
              <div className="aspect-[4/3] bg-white">
                {i === 0 && <PosterRadial compact />}
                {i === 1 && <PosterOrbGrid compact />}
                {i === 2 && <PosterDots compact />}
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-bold leading-tight pr-4">{c.title}</h3>
                <span className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-600">{c.tag}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="boka" className="col-span-12 my-10">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Frågor, idéer eller redo att öka?</h2>
          <p className="mt-3 text-[17px] text-neutral-700 leading-7">Boka ett kort möte. Noll säljsnack. Vi skissar på 2–3 snabba vinster och en plan.</p>
        </div>
        <div className="col-span-12 md:col-span-4 flex md:justify-end">
          <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] text-white px-6 py-4 font-semibold hover:opacity-90">
            Boka via Calendly
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="kontakt" className="col-span-12 border-t border-neutral-200 mt-16 py-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 flex items-center gap-3">
          <LogoBlob className="h-8 w-8" />
          <div>
            <p className="font-semibold">ÖKA</p>
            <p className="text-sm text-neutral-500">Göteborg, Sverige · hej@oka.studio</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right text-sm text-neutral-500">
          <p>Integritet · Villkor · NDA & PUB på begäran. © {new Date().getFullYear()} ÖKA.</p>
        </div>
      </div>
    </footer>
  );
}
