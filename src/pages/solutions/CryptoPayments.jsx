import { Check } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card } from '../../components/ui/Card'
import { StaggerGroup, StaggerItem } from '../../components/ui/Reveal'
import { DetailHero } from '../../components/solutions/DetailHero'
import { DetailCTA } from '../../components/solutions/DetailCTA'
import { getSolutionBySlug } from '../../data/solutions'
import cryptoLottie from '../../assets/Bitcoin wallet Lottie Animation.lottie'

const columns = [
  {
    title: 'Crypto Accounts & Payments',
    items: [
      'Hold multi-asset balances alongside fiat',
      'Accept crypto payments directly into the platform',
      'Instant settlement to fiat on demand',
      'Wallet-to-wallet transfers across major networks',
    ],
  },
  {
    title: 'Merchant Acceptance',
    items: [
      'Accept crypto at checkout, settle in the currency you choose',
      'Automatic conversion at point of sale',
      'Unified reconciliation with fiat transactions',
      'Built-in fraud and chargeback monitoring',
    ],
  },
]

export function CryptoPayments() {
  const solution = getSolutionBySlug('crypto-payments')

  return (
    <>
      <DetailHero
        num={solution.num}
        title={solution.title}
        headline={
          <>
            Move digital value <span className="text-gold">like it&apos;s cash.</span>
          </>
        }
        lede="Native crypto rails inside your banking platform. Accept payments, settle instantly to fiat, hold multi-asset balances, and reconcile everything from the same ledger. Regulated crypto-asset services are delivered through licensed partner providers."
        viz={<CryptoSettlementMock />}
        light
      />

      <section className="relative bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Crypto Rails"
            title={
              <>
                Fiat and crypto, <span className="text-gold">finally on speaking terms.</span>
              </>
            }
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {columns.map((col) => (
              <StaggerItem key={col.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-navy">{col.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <DetailCTA slug="crypto-payments" titleLower="crypto payments" />
    </>
  )
}

function CryptoSettlementMock() {
  return (
    <div className="mx-auto aspect-square w-full max-w-xl">
      <DotLottieReact src={cryptoLottie} loop autoplay style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
