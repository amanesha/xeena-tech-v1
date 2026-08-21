import { Reveal } from './Reveal'
import { cn } from '../../lib/cn'

export function SectionHeading({ eyebrow, title, subtitle, dark = false, className }) {
  return (
    <Reveal className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow && (
        <span
          className={cn(
            'mb-1 block text-sm font-semibold uppercase tracking-widest',
            dark ? 'text-gold' : 'text-gold-dark'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl',
          dark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/70' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
