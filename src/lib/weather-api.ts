import axios from 'axios'

export type WeatherResponse = {
  name: string
  sys: { country: string }
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  wind: { speed: number }
  visibility?: number
}

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

export async function fetchWeather(city: string): Promise<WeatherResponse> {
  if (!apiKey) {
    throw new Error(
      'Missing VITE_OPENWEATHER_API_KEY. Add it to a .env file in the project root.',
    )
  }

  const { data } = await axios.get<WeatherResponse>(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: { q: city.trim(), appid: apiKey, units: 'metric' },
    },
  )

  return data
}

export function weatherIconUrl(icon: string) {
  return `https://openweathermap.org/img/wn/${icon}@4x.png`
}

export type SkyTheme = {
  page: string
  glow: string
  card: string
  muted: string
}

export function skyThemeFor(weatherMain: string, icon: string): SkyTheme {
  const isNight = icon.endsWith('n')
  const main = weatherMain.toLowerCase()

  if (main === 'thunderstorm') {
    return {
      page: 'from-[#1a1528] via-[#2d2640] to-[#0f0e14]',
      glow: 'bg-violet-500/25',
      card: 'border-white/10 bg-white/8',
      muted: 'text-violet-100/70',
    }
  }
  if (main === 'rain' || main === 'drizzle') {
    return {
      page: 'from-[#0c1929] via-[#14304a] to-[#0a1624]',
      glow: 'bg-cyan-400/20',
      card: 'border-white/10 bg-white/8',
      muted: 'text-sky-100/65',
    }
  }
  if (main === 'snow') {
    return {
      page: 'from-[#dce8f2] via-[#c5d9ea] to-[#a8c4dc]',
      glow: 'bg-white/50',
      card: 'border-slate-900/10 bg-white/55',
      muted: 'text-slate-600',
    }
  }
  if (main === 'clouds' || main === 'mist' || main === 'fog' || main === 'haze') {
    return {
      page: isNight
        ? 'from-[#141820] via-[#1e2633] to-[#0d1117]'
        : 'from-[#8fa3b8] via-[#a8b8c8] to-[#6b849c]',
      glow: isNight ? 'bg-slate-400/15' : 'bg-white/35',
      card: isNight
        ? 'border-white/10 bg-white/8'
        : 'border-slate-900/10 bg-white/45',
      muted: isNight ? 'text-slate-200/65' : 'text-slate-700/80',
    }
  }
  if (isNight) {
    return {
      page: 'from-[#0a1628] via-[#122a4a] to-[#061018]',
      glow: 'bg-indigo-400/20',
      card: 'border-white/10 bg-white/8',
      muted: 'text-indigo-100/65',
    }
  }
  return {
    page: 'from-[#4a9fd4] via-[#7eb8e0] to-[#f0c987]',
    glow: 'bg-amber-200/40',
    card: 'border-white/25 bg-white/30',
    muted: 'text-slate-800/75',
  }
}
