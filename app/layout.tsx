// app/layout.tsx
// Ersätt om du vill ha nav + footer globalt. Annars importera SiteNav/Footer i page.tsx.
// Denna layout utgår från Next.js App Router + Tailwind.
import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Öka – AI som skapar effekt",
  description:
    "Svensk AI-partner för SME. Discovery → Pilot → Scale. Fokus på tid, kostnad, kvalitet och intäkt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="antialiased">
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
