import { Fingerprint, ShieldCheck, Sliders, BadgeCheck } from 'lucide-react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card, IconBadge } from '../../components/ui/Card'
import { StaggerGroup, StaggerItem } from '../../components/ui/Reveal'
import { DetailHero } from '../../components/solutions/DetailHero'
import { DetailCTA } from '../../components/solutions/DetailCTA'
import { getSolutionBySlug } from '../../data/solutions'
import cardImg from '../../assets/card.png'

const tiers = [
  { title: 'Consumer Cards', desc: 'Everyday spending cards drawing on fiat balances, issued in minutes through the app.' },
  { title: 'Corporate Cards', desc: 'Team cards with per-card limits, category controls, and real-time expense sync.' },
  { title: 'Crypto Cards', desc: 'Cards that draw directly on crypto balances, converted to fiat at the point of sale.' },
  { title: 'Premium Tiers', desc: 'Metal and private cards with elevated limits and concierge-level perks for top clients.' },
]

const features = [
  { icon: BadgeCheck, title: 'Visa & Mastercard' },
  { icon: Fingerprint, title: 'Real-time Auths' },
  { icon: Sliders, title: 'Spend Controls' },
  { icon: ShieldCheck, title: 'PCI Compliant' },
]

export function Cards() {
  const solution = getSolutionBySlug('cards')

  return (
    <>
      <DetailHero
        num={solution.num}
        title={solution.title}
        headline={
          <>
            Cards that <span className="text-gold">spend anywhere, in any currency.</span>
          </>
        }
        lede="Issue physical and virtual cards that draw on fiat or crypto balances — with spending controls, real-time authorisations, and premium tiers your customers will actually want to carry. Card issuance is delivered through licensed card-issuing partners."
        bgImage={cardImg}
        bgOverlay={false}
        light
      />

      <section className="relative bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Card Programs"
            title={
              <>
                Four tiers, <span className="text-gold">one issuer.</span>
              </>
            }
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {tiers.map((t) => (
              <StaggerItem key={t.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-navy">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <StaggerGroup className="mt-5 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <Card className="text-center">
                  <div className="flex flex-col items-center gap-3">
                    <IconBadge icon={f.icon} />
                    <span className="text-xs font-medium leading-snug text-navy/80">{f.title}</span>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <DetailCTA slug="cards" titleLower="card solutions" />
    </>
  )
}
