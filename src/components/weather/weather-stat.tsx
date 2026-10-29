type WeatherStatProps = {
  label: string
  value: string
  ink: string
  muted: string
  delayClass: string
}

export function WeatherStat({ label, value, ink, muted, delayClass }: WeatherStatProps) {
  return (
    <div
      className={`motion-safe:animate-fade-up ${delayClass} rounded-xl bg-black/5 px-3 py-3 transition-transform duration-300 hover:scale-[1.03] dark:bg-white/5`}
    >
      <dt className={`text-xs font-medium tracking-wide uppercase ${muted}`}>{label}</dt>
      <dd className={`font-display mt-1 text-lg font-semibold tabular-nums ${ink}`}>{value}</dd>
    </div>
  )
}
