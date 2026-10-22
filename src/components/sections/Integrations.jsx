import { Check, LayoutGrid, Server, Users2 } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { IconBadge } from '../ui/Card'
import frontendImg from '../../assets/xeena-frontend.png'
import backendImg from '../../assets/xeena-backend.png'
import crmImg from '../../assets/xeena-crm.png'

const modules = [
  {
    icon: LayoutGrid,
    title: 'Front End',
    desc: 'White-labelled web and mobile apps, built on Xeena’s production UI.',
    shot: frontendImg,
    features: [
      'Sign up and log in with Google, or a standard email and password',
      'Secure authentication for every client, with session protection built in',
      'Interface available in multiple languages, selectable right from the login screen',
    ],
  },
  {
    icon: Server,
    title: 'Back End',
    desc: 'Core ledger, accounts, and transaction processing — fiat and crypto native.',
    shot: backendImg,
    features: [
      'An admin dashboard to see everything that needs attention at a glance',
      'Manage transactions, top-ups, and withdrawals across fiat and crypto',
      'Set and enforce card policies, limits, and controls',
      'Handle credit and debit activity, balances, and reconciliation in one place',
      'Built on the latest technology, secured at every layer',
    ],
  },
  {
    icon: Users2,
    title: 'CRM',
    desc: 'Onboarding, KYC status, and relationship management built into the core.',
    shot: crmImg,
  },
]

export function Integrations() {
  return (
    <section id="banking" className="relative scroll-mt-20 bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Banking Management
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A banking core that&apos;s <span className="text-gold-dark">already running a bank.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              The complete stack, front end, back end, and CRM, engineered as one system and
              proven in production on Xeena&apos;s own consumer and business products.
              White-labelled to your brand and deployable in weeks.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-24">
          {modules.map((m) => (
            <Reveal key={m.title}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <IconBadge icon={m.icon} />
                  <h3 className="mt-4 text-2xl font-bold text-navy">{m.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{m.desc}</p>

                  {m.features && (
                    <ul className="mt-5 space-y-3">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold-dark">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed text-muted">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <img
                  src={m.shot}
                  alt={`${m.title} screenshot`}
                  className="w-full rounded-2xl border border-navy/8 shadow-[0_1px_3px_rgba(11,31,58,0.06),0_10px_25px_-12px_rgba(11,31,58,0.15)] transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
