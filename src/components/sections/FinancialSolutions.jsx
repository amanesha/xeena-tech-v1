import { Wallet, ArrowLeftRight, CreditCard, Coins, ArrowUpRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { Card, IconBadge } from '../ui/Card'

const highlights = [
  {
    icon: Wallet,
    title: 'Business Financial Solutions',
    desc: 'Dedicated solutions designed for modern business operations.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Global Payments',
    desc: 'SEPA, SWIFT, and cross-border payment capabilities.',
  },
  {
    icon: CreditCard,
    title: 'Corporate Cards',
    desc: 'Physical and virtual cards with intelligent spending controls.',
  },
  {
    icon: Coins,
    title: 'Multi-Currency',
    desc: 'Hold and manage multiple currencies through one platform.',
  },
]

export function FinancialSolutions() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold">
                Financial Solutions by Xeena
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Complete Your Business Stack with Xeena Financial Solutions.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                Technology runs your operations. Xeena completes the picture. Through our
                financial platform at{' '}
                <span className="font-semibold text-gold">xeena.io</span>, businesses gain access
                to multi-currency solutions, global payments, corporate cards, and expense
                management, all delivered through one secure, intelligent platform.
              </p>

              <p className="mt-6 text-xs leading-relaxed text-white/40">
                Note: Financial solutions are provided through the Xeena platform at xeena.io, are
                available in selected jurisdictions, and are subject to eligibility, verification,
                and regulatory requirements.
              </p>

              <div className="mt-8">
                <Button href="https://xeena.io" target="_blank" variant="primary">
                  Explore &amp; Learn More
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </div>

            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <StaggerItem key={h.title}>
                  <Card className="p-5">
                    <IconBadge icon={h.icon} />
                    <h3 className="mt-3 text-sm font-bold text-white">{h.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">{h.desc}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
