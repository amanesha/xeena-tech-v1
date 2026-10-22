import { Check } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Card } from '../ui/Card'
import cryptoLottie from '../../assets/Cryptocurrency Lottie Animation (2).lottie'

const columns = [
  {
    title: 'Crypto Accounts & Payments',
    items: [
      'Hold multi-asset balances alongside fiat',
      'Accept crypto payments directly into the platform',
      'Instant settlement to fiat on demand',
    ],
  },
  {
    title: 'Crypto Cards',
    items: [
      'Cards that draw directly on crypto balances',
      'Converted to fiat automatically at point of sale',
      'Real-time authorisations and spend controls',
    ],
  },
]

export function Industries() {
  return (
    <section id="solutions" className="relative scroll-mt-20 bg-offwhite py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <CryptoSettlementMock />
            </div>

            <div>
              <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Crypto Solutions
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Fiat and crypto, <span className="text-gold-dark">finally on speaking terms.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Native crypto rails inside your banking platform. Accept, hold, exchange, and
                settle across major networks, reconciled from the same ledger as every other
                product.
              </p>

              <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
                {columns.map((col) => (
                  <StaggerItem key={col.title}>
                    <Card className="h-full p-5">
                      <h3 className="text-sm font-bold text-navy">{col.title}</h3>
                      <ul className="mt-3 space-y-2">
                        {col.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-muted">
                            <Check size={14} className="mt-0.5 shrink-0 text-gold-dark" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CryptoSettlementMock() {
  return (
    <div className="mx-auto aspect-square w-full max-w-xl">
      <DotLottieReact src={cryptoLottie} loop autoplay style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
