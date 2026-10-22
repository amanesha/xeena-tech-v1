import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

const arguments_ = [
  {
    num: '01',
    title: 'A complete product suite, already built.',
    desc: 'Banking, cards, crypto payments, tokenization, and corporate tools — proven in production on Xeena’s own platform, not a roadmap slide.',
  },
  {
    num: '02',
    title: 'Your choice of route to market.',
    desc: 'White-label SaaS on your own licenses, BaaS on our partner licenses, or a fully managed launch — pick the path that fits your business.',
  },
  {
    num: '03',
    title: 'A partner built for the long run.',
    desc: 'We stay from the first build to daily operations — platform, providers, and people, under one accountable team.',
  },
]

export function TrustedPartner() {
  return (
    <section id="platform" className="relative scroll-mt-20 bg-offwhite pb-24 pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* gold trust strip — moved here from the Hero, pulled close to the fade
            above so the hero flows straight into it instead of leaving a big flat
            gap that reads as a hard section break. Same gold-gradient fill as
            xeena/coming-soon's trust strip, navy text on gold */}
        <div
          className="mx-auto mb-10 max-w-5xl rounded-2xl border border-gold-light/70 px-6 py-5 shadow-[0_0_40px_rgba(240,201,74,0.55)] sm:px-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0) 55%), linear-gradient(90deg, #f0c94a, #d39c00, #f0c94a)',
          }}
        >
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-wide text-navy/70">
            Built on regulated rails, integrated with global infrastructure
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold text-navy">
            {['SWIFT', 'SEPA', 'Visa', 'Mastercard', 'USDT', 'USDC'].map((rail, i) => (
              <span key={rail} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-navy/30" />}
                {rail}
              </span>
            ))}
          </div>
        </div>

        <SectionHeading
          eyebrow="The Platform"
          title={
            <>
              Everything a digital bank needs, <span className="text-gold-dark">from one partner.</span>
            </>
          }
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-3">
          {arguments_.map((a) => (
            <StaggerItem key={a.num}>
              <Card className="h-full">
                <span className="block text-[44px] font-extrabold leading-none tracking-[-0.04em] text-gold-dark">{a.num}</span>
                <h3 className="mt-5 text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-navy">{a.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-muted">{a.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
