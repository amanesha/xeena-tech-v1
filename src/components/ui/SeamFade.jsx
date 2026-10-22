/** Soft gradient wash at a section's top edge so it blends into the differently-coloured section above instead of a hard cut. */
export function SeamFade({ from }) {
  const cls = from === 'navy' ? 'from-navy' : from === 'navy-dark' ? 'from-navy-dark' : 'from-offwhite'

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b sm:h-28 ${cls} to-transparent`}
    />
  )
}
