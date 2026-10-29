type LoadingPanelProps = {
  card: string
}

export function LoadingPanel({ card }: LoadingPanelProps) {
  return (
    <div
      className={`motion-safe:animate-fade-in mt-4 overflow-hidden rounded-2xl border p-8 backdrop-blur-md ${card}`}
    >
      <div className="shimmer-bar motion-safe:animate-shimmer mx-auto h-8 w-40 rounded-lg bg-white/15" />
      <div className="relative mx-auto mt-8 flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white/60 motion-safe:animate-spin-slow" />
        <div className="h-10 w-10 rounded-full bg-white/20 motion-safe:animate-pulse-soft" />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="shimmer-bar motion-safe:animate-shimmer h-16 rounded-xl bg-white/15"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}
