import { Reveal } from './Reveal'
import { cn } from '../../lib/cn'

export function SectionHeading({ eyebrow, title, subtitle, dark = false, className }) {
  return (
    <Reveal className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow && (
        <span
          className={cn(
            'mb-1 block font-mono text-[11px] font-medium uppercase tracking-[0.22em]',
            dark ? 'text-gold' : 'text-gold-dark'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-[18px] text-[clamp(30px,4vw,44px)] font-bold leading-[1.15] tracking-[-0.025em]',
          dark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-[18px] text-[clamp(15px,1.1vw,17px)] leading-[1.65]',
            dark ? 'text-white/70' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
