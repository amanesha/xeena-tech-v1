import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { Breadcrumb } from './Breadcrumb'
import { cn } from '../../lib/cn'

export function DetailHero({ num, title, headline, lede, viz, bgImage, light, bgOverlay = true }) {
  return (
    <section
      id="tophero"
      className={cn('relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44', light ? 'bg-white' : 'bg-navy')}
    >
      {bgImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {/* wash just enough for the heading text to stay readable over a
              bright photo — white wash (navy text) in light mode, navy wash
              (white text) otherwise. Opt out with bgOverlay={false} when the
              image doesn't need it. */}
          {bgOverlay && (
            <div
              className={cn(
                'absolute inset-0 bg-gradient-to-r',
                light ? 'from-white/85 via-white/55 to-white/15' : 'from-navy/70 via-navy/40 to-navy/10'
              )}
            />
          )}
          {/* fades the image's bottom edge straight into the next section's
              background, sized to its own bounds so it always reaches solid
              color before the section ends */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{
              background: light
                ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 85%, #ffffff 100%)'
                : 'linear-gradient(180deg, rgba(245,247,250,0) 0%, #f5f7fa 85%, #f5f7fa 100%)',
            }}
          />
        </>
      ) : (
        <div
          className={cn(
            'pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-[120px]',
            light ? 'bg-gold/[0.12]' : 'bg-gold/[0.07]'
          )}
        />
      )}

      <div
        className={
          viz
            ? 'relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-8'
            : 'relative mx-auto max-w-7xl px-6 lg:px-8'
        }
      >
        <Reveal className={viz ? undefined : 'max-w-2xl'}>
          <Breadcrumb num={num} title={title} light={light} />
          <span className="mt-5 block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {num} &middot; {title.toUpperCase()}
          </span>
          <h1 className={cn('mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl', light ? 'text-navy' : 'text-white')}>
            {headline}
          </h1>
          <p className={cn('mt-6 max-w-lg text-base leading-relaxed sm:text-lg', light ? 'text-muted' : 'text-white/70')}>
            {lede}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary">
              Book a Demo
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            {light ? (
              <Button to="/contact" variant="outline">
                Speak to Sales
              </Button>
            ) : (
              <Button to="/contact" variant="outlineLight" className="border-gold/60 hover:bg-gold/10">
                Speak to Sales
              </Button>
            )}
          </div>
        </Reveal>

        {viz && (
          <Reveal delay={0.1} className="hidden lg:block">
            {viz}
          </Reveal>
        )}
      </div>
    </section>
  )
}
