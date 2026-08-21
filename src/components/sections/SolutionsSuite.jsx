import { Users, Receipt, Wallet, Calculator, ShoppingCart, Code2, Check } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, IconBadge } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Button } from '../ui/Button'
import back1 from '../../assets/back1.png'

const solutions = [
  {
    icon: Users,
    title: 'CRM & Customer Management',
    desc: 'Manage leads, customers, and relationships through one intelligent CRM built for growing teams.',
    features: [
      'Lead & Pipeline Management',
      'Customer Profiles & History',
      'Team Collaboration',
      'Sales Reporting & Insights',
    ],
  },
  {
    icon: Receipt,
    title: 'Invoicing & Billing',
    desc: 'Create, send, and track professional invoices with automated reminders and real-time status.',
    features: [
      'Professional Invoice Templates',
      'Recurring Billing',
      'Automated Payment Reminders',
      'Multi-Currency Invoicing',
    ],
  },
  {
    icon: Wallet,
    title: 'Payroll & HR Tools',
    desc: 'Run global payroll with confidence. Automate monthly runs, manage employee records, and pay your team anywhere, all through one secure system.',
    features: [
      'Automated Monthly Payroll Runs',
      'Pay in Fiat or Crypto',
      'Salaries Fixed in USD, Paid in Any Currency',
      'Multi-Level Approvals & Roles',
    ],
  },
  {
    icon: Calculator,
    title: 'Accounting & Expense Tools',
    desc: 'Keep your books organised with connected accounting tools and clear expense visibility.',
    features: [
      'Expense Tracking & Categorisation',
      'Financial Reporting',
      'Accounting Platform Integrations',
      'Real-Time Dashboards',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Website Tools',
    desc: 'Sell online and manage your digital presence with tools built for modern commerce.',
    features: [
      'Online Store Integrations',
      'Checkout & Order Management',
      'Product Catalogues',
      'Analytics & Conversion Insights',
    ],
  },
  {
    icon: Code2,
    title: 'APIs & Custom Integrations',
    desc: 'Connect Xeena Tech to your existing systems or build custom solutions with our developer-friendly APIs.',
    features: ['REST APIs', 'Webhooks & Automation', 'Custom Development Support', 'Third-Party Connectors'],
  },
]

export function SolutionsSuite() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-20 bg-navy bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Business Solutions Suite"
          title="Every Tool Your Business Needs. One Platform."
          subtitle="From your first customer to your global expansion, Xeena Tech provides the software foundation modern businesses rely on."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem key={s.title}>
              <Card className="flex h-full flex-col">
                <IconBadge icon={s.icon} />
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button to="/contact" variant="outlineLight">
            Speak to us
          </Button>
        </div>
      </div>
    </section>
  )
}
