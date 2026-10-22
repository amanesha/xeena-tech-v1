import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { cn } from '../../lib/cn'

export function LegalPageLayout({ title, effectiveDate, children, light }) {
  return (
    <div className={light ? 'bg-white' : 'bg-navy'}>
      <section className="relative overflow-hidden pb-10 pt-40">
        {!light && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(211,156,0,0.1)_0%,_transparent_60%)]" />
        )}
        <Reveal className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Link
            to="/"
            className={cn(
              'group inline-flex items-center gap-2 text-sm transition-colors',
              light ? 'text-muted hover:text-navy' : 'text-white/60 hover:text-white'
            )}
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className={cn('mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl', light ? 'text-navy' : 'text-white')}>
            {title}
          </h1>
          {effectiveDate && (
            <p className="mt-3 text-sm font-medium text-gold-dark">Effective Date: {effectiveDate}</p>
          )}
        </Reveal>
      </section>

      <section className="pb-24">
        <Reveal className="mx-auto max-w-6xl px-6 lg:px-8">
          <div
            className={cn(
              'rounded-2xl border p-8 sm:p-12',
              light ? 'border-navy/8 bg-card shadow-[0_1px_3px_rgba(11,31,58,0.06),0_10px_25px_-12px_rgba(11,31,58,0.15)]' : 'border-white/10 bg-navy-light'
            )}
          >
            {children}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
