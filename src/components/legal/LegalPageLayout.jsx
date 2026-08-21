import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

export function LegalPageLayout({ title, effectiveDate, children }) {
  return (
    <div className="bg-navy">
      <section className="relative overflow-hidden pb-10 pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(211,156,0,0.1)_0%,_transparent_60%)]" />
        <Reveal className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {effectiveDate && (
            <p className="mt-3 text-sm font-medium text-gold">Effective Date: {effectiveDate}</p>
          )}
        </Reveal>
      </section>

      <section className="pb-24">
        <Reveal className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-navy-light p-6 sm:p-10">
            {children}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
