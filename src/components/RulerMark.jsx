// Small tick-mark motif echoing a cabinetmaker's rule — used wherever the
// content is genuinely about custom sizing, not as decoration.
export default function RulerMark({ className = '' }) {
  return (
    <svg
      className={`ruler-mark ${className}`}
      viewBox="0 0 120 14"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="7" x2="120" y2="7" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 13 }).map((_, i) => {
        const tall = i % 4 === 0
        return (
          <line
            key={i}
            x1={i * 10}
            x2={i * 10}
            y1={tall ? 1 : 4}
            y2={tall ? 13 : 10}
            stroke="currentColor"
            strokeWidth="1"
          />
        )
      })}
    </svg>
  )
}
