import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ÖKA — Swiss Web',
  description: 'ÖKA: AI som din mest pålitliga och effektiva medarbetare.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-white text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-black text-white px-3 py-2 rounded"
        >
          Hoppa till innehåll
        </a>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
