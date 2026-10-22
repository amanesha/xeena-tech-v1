import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { PrevNextNav } from './PrevNextNav'

export function DetailCTA({ slug, titleLower }) {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(211,156,0,0.15)_0%,_transparent_65%)]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold">
            Ready When You Are
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s put {titleLower} to work for you.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Book a working session with our team. We&apos;ll map your business to the right
            combination of software, partner rails, and services.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary">
              Book a Demo
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button to="/contact" variant="outlineLight">
              Speak to Sales
            </Button>
          </div>

          <PrevNextNav slug={slug} />
        </Reveal>
      </div>
    </section>
  )
}
