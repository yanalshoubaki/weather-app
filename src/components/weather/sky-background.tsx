import type { SkyTheme } from '#/lib/weather-api'

type SkyBackgroundProps = {
  theme: SkyTheme
}

export function SkyBackground({ theme }: SkyBackgroundProps) {
  return (
    <>
      <div
        className={`pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl motion-safe:animate-pulse-soft ${theme.glow}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl motion-safe:animate-float-delayed"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
        aria-hidden
      />
    </>
  )
}
