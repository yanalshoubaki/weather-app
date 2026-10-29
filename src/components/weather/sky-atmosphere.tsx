import { RAIN_DROPS, SNOW_FLAKES, STARS } from '#/components/weather/atmosphere-particles'

type SkyAtmosphereProps = {
  main: string
  isNight: boolean
}

export function SkyAtmosphere({ main, isNight }: SkyAtmosphereProps) {
  const showRain = main === 'rain' || main === 'drizzle' || main === 'thunderstorm'
  const showSnow = main === 'snow'
  const showStars = isNight && !showRain && !showSnow
  const showSun = !isNight && (main === 'clear' || main === 'clouds') && !showRain

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {showRain &&
        RAIN_DROPS.map((drop) => (
          <span
            key={drop.id}
            className="absolute top-0 h-8 w-px motion-safe:animate-rain bg-gradient-to-b from-transparent via-sky-200/70 to-transparent"
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration,
              opacity: drop.opacity,
            }}
          />
        ))}

      {showSnow &&
        SNOW_FLAKES.map((flake) => (
          <span
            key={flake.id}
            className="absolute top-0 rounded-full bg-white/90 motion-safe:animate-snow shadow-[0_0_6px_rgb(255_255_255/0.8)]"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
          />
        ))}

      {showStars &&
        STARS.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white motion-safe:animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}

      {showSun && (
        <div className="absolute -top-16 right-[8%] h-44 w-44 rounded-full bg-gradient-to-br from-amber-200/50 via-orange-300/35 to-transparent blur-2xl motion-safe:animate-pulse-soft" />
      )}

      <div className="absolute top-[18%] left-[6%] h-24 w-40 rounded-full bg-white/15 blur-2xl motion-safe:animate-drift" />
      <div className="absolute top-[42%] right-[4%] h-16 w-28 rounded-full bg-white/10 blur-xl motion-safe:animate-drift-reverse" />
    </div>
  )
}
