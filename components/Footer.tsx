import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-widest uppercase">
              ÖKA
            </div>
            <p className="mt-2 max-w-md text-sm text-neutral-600">
              Vi gör AI till en pålitlig medarbetare – utan fluff.
            </p>
          </div>
          <div className="text-sm text-neutral-600">
            <p>
              © {new Date().getFullYear()} Öka. Alla rättigheter förbehållna.
            </p>
            <p className="mt-1">
              <Link href="/resurser" className="underline-offset-4 hover:underline">
                Resurser
              </Link>{" "}
              ·{" "}
              <Link href="/kontakt" className="underline-offset-4 hover:underline">
                Kontakt
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
