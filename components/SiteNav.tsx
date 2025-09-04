// components/SiteNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/process", label: "Process" },
  { href: "/case", label: "Case" },
  { href: "/resurser", label: "Resurser" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-widest uppercase"
          aria-label="Öka – startsida"
        >
          ÖKA
        </Link>

        <nav aria-label="Huvudmeny" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {links.map(({ href, label }) => {
              const active = pathname?.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "inline-flex items-center py-1 transition",
                      active
                        ? "border-b-2 border-neutral-900"
                        : "border-b-2 border-transparent hover:border-neutral-300",
                    ].join(" ")}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="md:hidden text-sm rounded-lg border border-neutral-300 px-3 py-1"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Meny"
          onClick={() => setOpen((v) => !v)}
        >
          Meny
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={[
          "md:hidden overflow-hidden border-t border-neutral-200 transition-[max-height] duration-300 ease-out",
          open ? "max-h-96" : "max-h-0",
        ].join(" ")}
      >
        <nav aria-label="Mobilmeny" className="px-4 py-3">
          <ul className="flex flex-col gap-3 text-base">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
