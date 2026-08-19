import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Power Your Business with Better Technology?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Join businesses choosing Xeena Tech to simplify operations, automate workflows, and grow
          without limits.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact" variant="primary">
            Book a Demo
            <ArrowRight size={16} />
          </Button>
          <Button to="/contact" variant="outlineLight">
            Speak to Our Team
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
