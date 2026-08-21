import { Briefcase, Settings2, Globe2, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, IconBadge } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

const features = [
  {
    icon: Briefcase,
    title: 'One Connected Suite',
    desc: 'Manage customers, billing, payroll, and operations from a single technology stack.',
  },
  {
    icon: Settings2,
    title: 'Automation First',
    desc: 'Reduce manual work with intelligent workflows and automated processes.',
  },
  {
    icon: Globe2,
    title: 'Global Ready',
    desc: 'Multi-language, multi-currency ready software built for international business.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc: 'Advanced protection for your business data at every layer.',
  },
]

export function TrustedPartner() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Technology Partner"
          title="Built for Business. Engineered for Growth."
          subtitle="Running a modern business means managing customers, invoices, teams, and operations across countless tools. Xeena Tech brings enterprise-grade technology into one connected suite, so your business runs smarter, faster, and simpler."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <Card className="h-full">
                <IconBadge icon={f.icon} />
                <h3 className="mt-4 text-base font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
