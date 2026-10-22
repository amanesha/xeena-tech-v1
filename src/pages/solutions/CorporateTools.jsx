import { ClipboardList, FileSpreadsheet, Wallet, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card, IconBadge } from '../../components/ui/Card'
import { StaggerGroup, StaggerItem } from '../../components/ui/Reveal'
import { DetailHero } from '../../components/solutions/DetailHero'
import { DetailCTA } from '../../components/solutions/DetailCTA'
import { getSolutionBySlug } from '../../data/solutions'
import payrollImg from '../../assets/payrollv1.png'

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

const tiles = [
  { icon: ClipboardList, title: 'Expense Management' },
  { icon: Wallet, title: 'Treasury' },
  { icon: FileSpreadsheet, title: 'Automation' },
  { icon: ShieldCheck, title: 'Audit & Compliance' },
]

export function CorporateTools() {
  const solution = getSolutionBySlug('corporate-tools')

  return (
    <>
      <DetailHero
        num={solution.num}
        title={solution.title}
        headline={
          <>
            The platform your customers <span className="text-gold">run their whole company on.</span>
          </>
        }
        lede="Payroll and invoicing, embedded directly in the banking core. Fiat or crypto pay-outs, multi-currency invoicing, and zero-reconciliation accounting — all from the same ledger as every other product."
        bgImage={payrollImg}
        bgOverlay={false}
        light
      />

      <section className="relative bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Corporate Modules"
            title={
              <>
                Payroll and invoicing, <span className="text-gold">inside the bank.</span>
              </>
            }
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {modules.map((m) => (
              <StaggerItem key={m.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <StaggerGroup className="mt-5 grid gap-5 grid-cols-2 lg:grid-cols-4">
            {tiles.map((t) => (
              <StaggerItem key={t.title}>
                <Card className="text-center">
                  <div className="flex flex-col items-center gap-3">
                    <IconBadge icon={t.icon} />
                    <span className="text-xs font-medium leading-snug text-navy/80">{t.title}</span>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <DetailCTA slug="corporate-tools" titleLower="corporate tools" />
    </>
  )
}
