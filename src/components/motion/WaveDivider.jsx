export function WaveDivider({ flip = false, className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        fill="var(--color-paper-raised)"
      >
        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}

export function BlobDivider({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-20"
        fill="var(--color-paper-raised)"
      >
        <path d="M0,40 Q180,80 360,35 T720,50 T1080,30 T1440,45 L1440,100 L0,100 Z" />
      </svg>
    </div>
  )
}
