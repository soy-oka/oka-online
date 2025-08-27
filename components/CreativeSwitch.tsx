'use client';

export default function CreativeSwitch({
  checked,
  onChange,
}: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="group relative inline-flex items-center gap-3 rounded-full border border-neutral-900 px-3 py-1.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
      aria-pressed={checked}
      aria-label="Kreativt läge"
    >
      <span className="hidden sm:inline">Creative mode</span>
      <span className="relative inline-grid place-items-center h-7 w-7">
        <span className="absolute inset-0 rounded-md bg-[var(--accent)]" />
        <span
          className={`relative h-5 w-5 rotate-45 transition-transform ${
            checked ? 'translate-x-1 -translate-y-1' : '-translate-x-1 translate-y-1'
          }`}
          aria-hidden
        >
          <span className="absolute inset-0 bg-white" />
          <span className="absolute -right-1 -bottom-1 h-full w-full bg-[var(--accent-2)]" />
        </span>
      </span>
    </button>
  );
}
