type MessagePanelProps = {
  title: string
  body: string
  card: string
  ink: string
}

export function MessagePanel({ title, body, card, ink }: MessagePanelProps) {
  return (
    <div
      className={`motion-safe:animate-scale-in mt-4 rounded-2xl border p-6 backdrop-blur-md ${card}`}
    >
      <p className={`font-display text-lg font-semibold ${ink}`}>{title}</p>
      <p className={`mt-2 text-sm leading-relaxed opacity-90 ${ink}`}>{body}</p>
    </div>
  )
}
