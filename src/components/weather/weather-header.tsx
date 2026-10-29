type WeatherHeaderProps = {
  ink: string
  muted: string
}

export function WeatherHeader({ ink, muted }: WeatherHeaderProps) {
  return (
    <header className="mb-10 sm:mb-12">
      <p
        className={`font-display motion-safe:animate-fade-up stagger-1 text-xs font-medium tracking-[0.35em] uppercase ${muted}`}
      >
        Live conditions
      </p>
      <h1
        className={`font-display motion-safe:animate-fade-up stagger-2 mt-2 text-4xl font-semibold tracking-tight sm:text-5xl ${ink}`}
      >
        Weather
      </h1>
      <p
        className={`motion-safe:animate-fade-up stagger-3 mt-3 max-w-sm text-base leading-relaxed ${muted}`}
      >
        Search any city for temperature, sky, and comfort at a glance.
      </p>
    </header>
  )
}
