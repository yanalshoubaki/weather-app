type EmptyPromptProps = {
  inkSoft: string
  muted: string
}

export function EmptyPrompt({ inkSoft, muted }: EmptyPromptProps) {
  return (
    <div className={`mt-6 text-center ${muted}`}>
      <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-current/25 motion-safe:animate-spin-slow" />
        <div className="absolute inset-3 rounded-full border border-current/15 motion-safe:animate-spin-slow [animation-direction:reverse]" />
        <span className={`font-display motion-safe:animate-float text-4xl ${inkSoft}`} aria-hidden>
          ◐
        </span>
      </div>
      <p className={`font-display motion-safe:animate-fade-up text-lg ${inkSoft}`}>
        Where is the sky today?
      </p>
      <p className="motion-safe:animate-fade-up stagger-2 mt-2 text-sm">
        Enter a city above to see current conditions.
      </p>
    </div>
  )
}
