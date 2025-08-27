export function PosterRadial({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden ${compact ? 'h-full' : 'rounded-2xl border border-neutral-200'}`}
      style={{ aspectRatio: compact ? undefined : '4/3' }}
    >
      <div className="absolute inset-0" style={{ background: 'radial-gradient(80% 80% at 78% 78%, #ff7a43 0%, #ff6a3a 35%, #ffb34a 68%, #ffe39b 90%, #fff 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(40% 40% at 85% 85%, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 60%)' }} />
    </div>
  );
}

export function PosterOrbGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? 'h-full' : 'rounded-2xl border border-neutral-200'}`} style={{ aspectRatio: compact ? undefined : '4/3' }}>
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative overflow-hidden">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[160%] w-[160%] rounded-full"
               style={{ background: 'radial-gradient(circle at 30% 30%, #ff9a3a 0%, #ff6a3a 45%, #a61b1b 100%)', filter: 'blur(.4px)' }} />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
          <div className="absolute inset-3 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => <div key={i} className="border border-white/40" />)}
          </div>
          <div className="absolute inset-0"
               style={{ background: 'radial-gradient(60% 60% at 0% 50%, rgba(255,106,58,.55) 0%, rgba(255,106,58,0) 60%)' }} />
        </div>
      </div>
    </div>
  );
}

export function PosterLines() {
  return (
    <div className="relative rounded-2xl border border-neutral-200 overflow-hidden" style={{ aspectRatio: '4/3' }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="stripe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <clipPath id="blobs">
            <path d="M180,260c-60,20-90,90-50,130s130,20,160-20c30-40-10-130-110-110Z" />
            <path d="M520,370c70,-30 110,60 60,110c-40,40 -130,20 -140,-40c-8,-50 30,-40 80,-70Z" />
          </clipPath>
        </defs>
        {Array.from({ length: 90 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${i * 7} C 220 ${i * 7 + (i % 2 ? 50 : -50)}, 580 ${i * 7 + (i % 2 ? -60 : 60)}, 800 ${i * 7}`}
            fill="none"
            stroke="url(#stripe)"
            strokeWidth="3.5"
            opacity="0.95"
          />
        ))}
        <rect x="0" y="0" width="800" height="600" fill="#FF5A3C" clipPath="url(#blobs)" opacity="0.9" />
      </svg>
    </div>
  );
}

export function PosterDots({ compact = false }: { compact?: boolean }) {
  const circles = 25;
  return (
    <div className={`relative ${compact ? 'h-full' : 'rounded-2xl border border-neutral-200'}`} style={{ aspectRatio: compact ? undefined : '4/3' }}>
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-3 p-3 bg-neutral-900">
        {Array.from({ length: circles }).map((_, i) => (
          <div key={i} className="relative">
            <div className="absolute inset-0 rounded-full"
                 style={{ background: 'radial-gradient(circle at 40% 40%, #ff6a3a 0%, #ff6a3a 38%, #77c8ff 70%, #cfd4da 100%)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
