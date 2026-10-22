import { ArrowRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { SolutionCard } from '../components/solutions/SolutionCard'
import { solutions } from '../data/solutions'
import solutionImg from '../assets/solution.png'

export function Solutions() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-white bg-cover bg-center pb-16 pt-36 lg:pb-20 lg:pt-44"
        style={{ backgroundImage: `url(${solutionImg})` }}
      >
        <Reveal className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-dark">
            Our Solutions
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Six products, <span className="text-gold-dark">one platform.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Xeena Tech delivers a complete financial technology stack for modern operators. Each
            product runs standalone, and every product is designed to work with the others —
            because the same team built them, on the same core.
          </p>
        </div>
        </Reveal>
      </section>

      <section className="relative bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <StaggerItem key={solution.slug}>
                <SolutionCard solution={solution} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-offwhite pb-24">
        <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/30 bg-navy px-8 py-14 text-center shadow-[0_30px_60px_-20px_rgba(11,31,58,0.35)] sm:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(211,156,0,0.15)_0%,_transparent_65%)]" />
          <SectionHeading
            dark
            eyebrow="Better Together"
            title={
              <>
                Take one. Combine any. <span className="text-gold">Deploy the full stack.</span>
              </>
            }
            subtitle="Every solution stands on its own, but they're designed to compose. Most Xeena Tech clients start with one, add a second within six months, and end up running the full stack because every layer talks natively to the others."
          />
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary">
              Book a Demo
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button to="/contact" variant="outlineLight">
              Speak to Sales
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
