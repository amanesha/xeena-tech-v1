import { Check } from 'lucide-react'
import { cn } from '../../lib/cn'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Reveal } from '../../components/ui/Reveal'
import { Button } from '../../components/ui/Button'
import { DetailHero } from '../../components/solutions/DetailHero'
import { DetailCTA } from '../../components/solutions/DetailCTA'
import { getSolutionBySlug } from '../../data/solutions'
import tokenizationImg from '../../assets/Tokenized Assets Around the Globe.png'
import yobAssetsLogo from '../../assets/YobAssets.png'
import tokeraLogo from '../../assets/Tokera.png'

const steps = [
  { num: '1', title: 'Submit Asset', body: 'Issuer submits asset details and documentation for review.' },
  { num: '2', title: 'Verification', body: 'Compliance and valuation checks confirm the asset is eligible.' },
  { num: '3', title: 'Tokenization', body: 'The asset is minted as fractional, tradeable on-chain tokens.' },
  { num: '4', title: 'Marketplace Trading', body: 'Tokens list on Tokera, open to investors worldwide.' },
]

const whyRwa = [
  { title: 'Instant Liquidity', body: 'Convert illiquid assets into tradeable tokens.' },
  { title: 'Fractional Access', body: 'Open premium assets to investors at any size.' },
  { title: 'Global Reach', body: 'No geographical barriers to buyers or sellers.' },
  { title: 'Reduced Costs', body: 'Smart contracts remove layers of intermediaries.' },
]

export function Tokenization() {
  const solution = getSolutionBySlug('tokenization')

  return (
    <>
      <DetailHero
        num={solution.num}
        title={solution.title}
        headline={
          <>
            Real-world value, <span className="text-gold">on-chain and liquid.</span>
          </>
        }
        lede="From issuance to marketplace. Xeena Tech partners with Tokera and YOB Assets to give operators a full tokenization stack — mint, list, and trade real-world assets under one platform. Regulated tokenization activities are delivered through licensed partner providers."
        bgImage={tokenizationImg}
        bgOverlay={false}
        light
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Tokenization Stack"
            title={
              <>
                Two partners, <span className="text-gold">one seamless flow.</span>
              </>
            }
          />

          <div className="mt-14 space-y-6">
            <PartnerBlock
              logo={yobAssetsLogo}
              name="YOB Assets"
              tag="Issuer Platform &middot; Full-Stack"
              body="Turn any asset into digital tokens in four steps. YOB Assets provides the full-stack tokenization system for issuers — property, equity, or valuable goods. Combining blockchain technology with regulatory compliance and a user-friendly issuer console, it makes tokenization accessible to any business, of any size."
              stats={[
                ['4 steps', 'Submit → Verify → Tokenize → Trade'],
                ['100%', 'Regulatory compliance'],
                ['Global', 'Cross-border reach'],
              ]}
              features={[
                'Instant liquidity — convert illiquid assets into tradeable tokens',
                'Fractional ownership across multiple investors',
                'Global market access without geographical barriers',
                'Automated smart contracts eliminate intermediaries',
                'Support for real estate, equity, collectibles, commodities',
                'Token value calculator + retention modelling for issuers',
              ]}
              href="https://yobassets.com"
              linkLabel="Visit yobassets.com"
            />

            <PartnerBlock
              logo={tokeraLogo}
              name="Tokera"
              tag="RWA Marketplace"
              gold
              body="Trade tokenized real-world assets, 24/7, from anywhere. Tokera is the public marketplace where the tokens issued through the stack are bought and sold. Zero commission, low minimums, instant blockchain settlement — designed to open premium global assets to any investor."
              stats={[
                ['0%', 'Commission forever'],
                ['$100', 'Minimum entry'],
                ['24/7', 'Instant trading'],
              ]}
              features={[
                'Zero commission trading — no hidden fees, forever',
                'Start investing with as little as $100',
                'Markets never sleep — 24/7 instant blockchain settlement',
                'No lock-in periods — withdraw anytime without penalties',
                'Real-time portfolio tracking with pro analytics',
                'Global access to premium assets worldwide',
              ]}
              href="https://tokera.io"
              linkLabel="Visit tokera.io"
            />
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                Four steps from <span className="text-gold-dark">asset to marketplace.</span>
              </>
            }
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <Reveal key={s.num} className="rounded-2xl border border-navy/8 bg-card p-6 shadow-[0_1px_3px_rgba(11,31,58,0.06),0_10px_25px_-12px_rgba(11,31,58,0.15)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-sm font-bold text-navy">
                  {s.num}
                </span>
                <h5 className="mt-4 text-base font-bold text-navy">{s.title}</h5>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why RWA"
            title={
              <>
                New economics for <span className="text-gold-dark">illiquid assets.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {whyRwa.map((f) => (
              <Reveal key={f.title} className="rounded-2xl border border-navy/8 bg-card p-6 text-center shadow-[0_1px_3px_rgba(11,31,58,0.06),0_10px_25px_-12px_rgba(11,31,58,0.15)]">
                <h5 className="text-sm font-bold text-navy">{f.title}</h5>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DetailCTA slug="tokenization" titleLower="real world tokenization" />
    </>
  )
}

function PartnerBlock({ logo, name, tag, body, stats, features, href, linkLabel, gold = false }) {
  const accent = gold ? 'text-gold-dark' : 'text-blue-600'

  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-navy/8 bg-card p-9 shadow-[0_1px_3px_rgba(11,31,58,0.06),0_10px_25px_-12px_rgba(11,31,58,0.15)] sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative flex flex-wrap items-center gap-4">
        <img src={logo} alt={name} className="h-9 w-auto object-contain" />
        <p className={cn('text-xs font-mono font-semibold uppercase tracking-wide', accent)}>{tag}</p>
      </div>

      <p className="relative mt-6 max-w-2xl text-sm leading-relaxed text-muted">{body}</p>

      <div className="relative mt-7 grid grid-cols-3 gap-4 border-y border-navy/8 py-6">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className={cn('text-xl font-bold', accent)}>{value}</p>
            <p className="mt-1 text-xs leading-snug text-muted">{label}</p>
          </div>
        ))}
      </div>

      <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <Check size={16} className={cn('mt-0.5 shrink-0', accent)} />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-8">
        <Button href={href} target="_blank" variant={gold ? 'primary' : 'outline'}>
          {linkLabel} &#8599;
        </Button>
      </div>
    </Reveal>
  )
}
