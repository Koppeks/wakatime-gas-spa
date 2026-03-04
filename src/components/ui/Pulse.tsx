export default function Pulse() {
  return (
    <span className="relative flex h-2 w-2 items-center justify-center">
      <span className="dot-ping absolute inline-flex h-full w-full rounded-full" />
      <span className="dot-core relative inline-flex h-2 w-2 rounded-full" />
    </span>
  )
}
