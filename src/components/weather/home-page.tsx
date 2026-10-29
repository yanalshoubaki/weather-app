import { useQuery } from '@tanstack/react-query'
import { useMemo, useState, type FormEvent } from 'react'
import { CitySearchForm } from '#/components/weather/city-search-form'
import { EmptyPrompt } from '#/components/weather/empty-prompt'
import { LoadingPanel } from '#/components/weather/loading-panel'
import { MessagePanel } from '#/components/weather/message-panel'
import { SkyAtmosphere } from '#/components/weather/sky-atmosphere'
import { SkyBackground } from '#/components/weather/sky-background'
import { WeatherHeader } from '#/components/weather/weather-header'
import { WeatherPanel } from '#/components/weather/weather-panel'
import { fetchWeather, skyThemeFor } from '#/lib/weather-api'

export function HomePage() {
  const [cityInput, setCityInput] = useState('')
  const [searchCity, setSearchCity] = useState<string | null>(null)

  const weatherQuery = useQuery({
    queryKey: ['weather', searchCity],
    queryFn: () => fetchWeather(searchCity!),
    enabled: Boolean(searchCity),
    retry: false,
  })

  const theme = useMemo(() => {
    if (!weatherQuery.data) {
      return skyThemeFor('Clear', '01d')
    }
    const w = weatherQuery.data.weather[0]
    return skyThemeFor(w.main, w.icon)
  }, [weatherQuery.data])

  const atmosphere = useMemo(() => {
    if (!weatherQuery.data) {
      return { main: 'clear', isNight: false }
    }
    const w = weatherQuery.data.weather[0]
    return {
      main: w.main.toLowerCase(),
      isNight: w.icon.endsWith('n'),
    }
  }, [weatherQuery.data])

  const isLightSky =
    weatherQuery.data?.weather[0].main.toLowerCase() === 'snow' ||
    (weatherQuery.data?.weather[0].main.toLowerCase() === 'clouds' &&
      !weatherQuery.data.weather[0].icon.endsWith('n'))

  const ink = isLightSky ? 'text-slate-900' : 'text-white'
  const inkSoft = isLightSky ? 'text-slate-800/80' : 'text-white/85'

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = cityInput.trim()
    if (!next) return
    setSearchCity(next)
  }

  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br ${theme.page} font-body transition-[background] duration-1000 ease-out`}
    >
      <SkyAtmosphere main={atmosphere.main} isNight={atmosphere.isNight} />
      <SkyBackground theme={theme} />

      <main className="relative mx-auto flex min-h-screen max-w-lg flex-col px-5 py-10 sm:px-6 sm:py-14">
        <WeatherHeader ink={ink} muted={theme.muted} />

        <CitySearchForm
          cityInput={cityInput}
          card={theme.card}
          ink={ink}
          muted={theme.muted}
          isFetching={weatherQuery.isFetching}
          onCityInputChange={setCityInput}
          onSubmit={handleSearch}
        />

        <section className="mt-8 flex flex-1 flex-col" aria-live="polite">
          {!searchCity && !weatherQuery.data && (
            <EmptyPrompt inkSoft={inkSoft} muted={theme.muted} />
          )}

          {weatherQuery.isError && (
            <MessagePanel
              title="Could not load weather"
              body={
                weatherQuery.error instanceof Error
                  ? weatherQuery.error.message
                  : 'Something went wrong. Try another city.'
              }
              card={theme.card}
              ink={ink}
            />
          )}

          {weatherQuery.isFetching && !weatherQuery.data && (
            <LoadingPanel card={theme.card} />
          )}

          {weatherQuery.data && (
            <WeatherPanel
              key={`${weatherQuery.data.name}-${weatherQuery.data.sys.country}`}
              data={weatherQuery.data}
              theme={theme}
              ink={ink}
              inkSoft={inkSoft}
              isRefreshing={weatherQuery.isFetching}
            />
          )}
        </section>
      </main>
    </div>
  )
}
