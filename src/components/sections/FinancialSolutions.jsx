import { motion } from 'motion/react'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'

const modules = [
  {
    title: 'Payroll Solutions',
    desc: 'Automated monthly payroll runs, paid in fiat or crypto, with salaries fixed in USD and multi-level approvals.',
  },
  {
    title: 'Invoicing',
    desc: 'Multi-currency invoicing with fiat & crypto settlement, automated reminders, and zero-reconciliation accounting sync.',
  },
]

export function FinancialSolutions() {
  return (
    <section id="corporate-tools" className="relative scroll-mt-20 bg-offwhite py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Corporate Tools
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                The platform your customers <span className="text-gold-dark">run their whole company on.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Payroll and invoicing, embedded directly in the banking core. Fiat or crypto
                pay-outs, multi-currency invoicing, and zero-reconciliation accounting.
              </p>
            </div>

            <div className="grid gap-4">
              {modules.map((m) => (
                <Card key={m.title} className="p-5">
                  <h3 className="text-sm font-bold text-navy">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.desc}</p>
                </Card>
              ))}
              <PayrollMock />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PayrollMock() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="flex items-center justify-between rounded-2xl border border-gold/20 bg-gold/5 p-5"
    >
      <span className="text-xs font-medium uppercase tracking-wide text-gold">Payroll Run &middot; Total</span>
      <span className="font-mono text-lg font-semibold text-gold">&euro;142,840</span>
    </motion.div>
  )
}
