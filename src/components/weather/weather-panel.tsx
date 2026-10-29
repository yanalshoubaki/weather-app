import { WeatherStat } from '#/components/weather/weather-stat'
import { weatherIconUrl, type SkyTheme, type WeatherResponse } from '#/lib/weather-api'

type WeatherPanelProps = {
  data: WeatherResponse
  theme: SkyTheme
  ink: string
  inkSoft: string
  isRefreshing: boolean
}

export function WeatherPanel({
  data,
  theme,
  ink,
  inkSoft,
  isRefreshing,
}: WeatherPanelProps) {
  const condition = data.weather[0]
  const icon = weatherIconUrl(condition.icon)

  return (
    <article
      className={`motion-safe:animate-scale-in relative mt-4 overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-opacity duration-300 sm:p-8 ${theme.card} ${isRefreshing ? 'opacity-85' : ''}`}
    >
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl motion-safe:animate-float"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="motion-safe:animate-fade-up stagger-1 min-w-0">
          <h2 className={`font-display text-2xl font-semibold tracking-tight sm:text-3xl ${ink}`}>
            {data.name}
            <span className={`ml-2 text-lg font-normal opacity-70 ${inkSoft}`}>
              {data.sys.country}
            </span>
          </h2>
          <p className={`mt-1 capitalize ${theme.muted}`}>{condition.description}</p>
        </div>
        <img
          src={icon}
          alt=""
          width={96}
          height={96}
          className="motion-safe:animate-fade-up stagger-2 h-20 w-20 shrink-0 drop-shadow-lg sm:h-24 sm:w-24"
        />
      </div>

      <p
        className={`font-display motion-safe:animate-fade-up stagger-3 mt-6 text-7xl font-light tabular-nums tracking-tighter sm:text-8xl ${ink}`}
      >
        {Math.round(data.main.temp)}
        <span className="text-4xl align-top opacity-80 sm:text-5xl">°</span>
      </p>

      <dl className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <WeatherStat
          label="Feels like"
          value={`${Math.round(data.main.feels_like)}°`}
          ink={ink}
          muted={theme.muted}
          delayClass="stagger-3"
        />
        <WeatherStat
          label="Humidity"
          value={`${data.main.humidity}%`}
          ink={ink}
          muted={theme.muted}
          delayClass="stagger-4"
        />
        <WeatherStat
          label="Wind"
          value={`${data.wind.speed.toFixed(1)} m/s`}
          ink={ink}
          muted={theme.muted}
          delayClass="stagger-5"
        />
        <WeatherStat
          label="Pressure"
          value={`${data.main.pressure} hPa`}
          ink={ink}
          muted={theme.muted}
          delayClass="stagger-6"
        />
      </dl>
    </article>
  )
}
