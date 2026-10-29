import type { FormEvent } from 'react'

type CitySearchFormProps = {
  cityInput: string
  card: string
  ink: string
  muted: string
  isFetching: boolean
  onCityInputChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function CitySearchForm({
  cityInput,
  card,
  ink,
  muted,
  isFetching,
  onCityInputChange,
  onSubmit,
}: CitySearchFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`motion-safe:animate-fade-up stagger-4 flex flex-col gap-3 rounded-2xl border p-2 shadow-lg shadow-black/5 backdrop-blur-md transition-shadow duration-300 focus-within:shadow-xl focus-within:shadow-black/10 sm:flex-row ${card}`}
    >
      <label htmlFor="city" className="sr-only">
        City name
      </label>
      <div className="relative flex flex-1 items-center">
        <span className={`pointer-events-none absolute left-4 text-sm ${muted}`} aria-hidden>
          ⌖
        </span>
        <input
          id="city"
          type="search"
          autoComplete="off"
          placeholder="e.g. Amman, Tokyo, Reykjavik"
          value={cityInput}
          onChange={(e) => onCityInputChange(e.target.value)}
          className={`min-h-11 w-full flex-1 rounded-xl border-0 bg-transparent py-2 pr-4 pl-10 text-base outline-none placeholder:opacity-60 ${ink} focus:ring-2 focus:ring-white/30`}
        />
      </div>
      <button
        type="submit"
        disabled={!cityInput.trim() || isFetching}
        className="font-display group relative min-h-11 shrink-0 overflow-hidden rounded-xl bg-slate-900 px-6 text-sm font-semibold tracking-wide text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full shimmer-bar motion-safe:animate-shimmer"
          aria-hidden
        />
        <span className="relative">{isFetching ? 'Scanning sky…' : 'Search'}</span>
      </button>
    </form>
  )
}
