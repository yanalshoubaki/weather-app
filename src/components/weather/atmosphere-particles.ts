export const RAIN_DROPS = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 3) % 100}%`,
  delay: `${(i * 0.07) % 1.2}s`,
  duration: `${0.65 + (i % 5) * 0.12}s`,
  opacity: 0.25 + (i % 4) * 0.12,
}))

export const SNOW_FLAKES = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 23 + 7) % 100}%`,
  delay: `${(i * 0.19) % 4}s`,
  duration: `${4.5 + (i % 6) * 0.8}s`,
  size: 3 + (i % 4),
}))

export const STARS = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  top: `${(i * 37) % 85}%`,
  left: `${(i * 53 + 11) % 95}%`,
  delay: `${(i * 0.13) % 2.5}s`,
  size: i % 3 === 0 ? 2 : 1,
}))
