'use client';
import { useMemo, useState } from 'react';
import { Header, Hero, GraphicStrip, Process, Packages, Cases, CTA, Footer } from '@/components/UI';

export default function Page() {
  const [creative, setCreative] = useState(false);
  const theme = useMemo(
    () => ({ accent: creative ? '#6A5BFF' : '#FF5A3C', accent2: creative ? '#FF2FB9' : '#1243FF' }),
    [creative]
  );

  return (
    <div style={{ ['--accent' as any]: theme.accent, ['--accent-2' as any]: theme.accent2 }}>
      <Header creative={creative} setCreative={setCreative} />
      <main id="content" className="grid grid-cols-12 gap-x-6 gap-y-16">
        <Hero />
        <GraphicStrip />
        <Process />
        <Packages />
        <Cases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
