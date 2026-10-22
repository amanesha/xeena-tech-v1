import { LayoutGrid, Server, Users2 } from 'lucide-react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card, IconBadge } from '../../components/ui/Card'
import { StaggerGroup, StaggerItem } from '../../components/ui/Reveal'
import { DetailHero } from '../../components/solutions/DetailHero'
import { DetailCTA } from '../../components/solutions/DetailCTA'
import { getSolutionBySlug } from '../../data/solutions'
import cardImg from '../../assets/banking.png'

const modules = [
  {
    icon: LayoutGrid,
    title: 'Front End',
    desc: 'White-labelled web and mobile apps for consumer and business customers, built on Xeena’s production UI.',
  },
  {
    icon: Server,
    title: 'Back End',
    desc: 'Core ledger, accounts, multi-currency balances, and transaction processing — fiat and crypto native.',
  },
  {
    icon: Users2,
    title: 'CRM',
    desc: 'Customer onboarding, KYC status, support tooling, and relationship management built into the core.',
  },
]

export function Banking() {
  const solution = getSolutionBySlug('banking')

  return (
    <>
      <DetailHero
        num={solution.num}
        title={solution.title}
        headline={
          <>
            A banking core that&apos;s <span className="text-gold">already running a bank.</span>
          </>
        }
        lede="The complete stack, front end, back end, and CRM, engineered as one system and proven in production on Xeena's own consumer and business products. White-labelled to your brand and deployable in weeks on our infrastructure or yours."
        bgImage={cardImg}
        bgOverlay={false}
        light
      />

      <section className="relative bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title={
              <>
                Three modules, <span className="text-gold">one system.</span>
              </>
            }
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {modules.map((m) => (
              <StaggerItem key={m.title}>
                <Card className="h-full">
                  <IconBadge icon={m.icon} />
                  <h3 className="mt-4 text-lg font-bold text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3 rounded-full border border-gold/30 px-6 py-4 text-center text-xs font-medium uppercase tracking-wide text-navy/70 shadow-[0_0_30px_-12px_rgba(217,178,92,0.45)]"
            style={{ background: 'linear-gradient(90deg, rgba(211,156,0,0.1), rgba(211,156,0,0.03), rgba(211,156,0,0.1))' }}
          >
            <span>Multi-currency, fiat and crypto native</span>
            <span className="text-gold-dark">&middot;</span>
            <span>White-label web and mobile</span>
            <span className="text-gold-dark">&middot;</span>
            <span>Deployed in weeks</span>
            <span className="text-gold-dark">&middot;</span>
            <span>Your infrastructure or ours</span>
          </div>
        </div>
      </section>

      <DetailCTA slug="banking" titleLower="banking management" />
    </>
  )
}
