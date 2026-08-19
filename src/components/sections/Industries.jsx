import { Rocket, Building2, Store, Briefcase, Landmark } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, IconBadge } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { cn } from '../../lib/cn'

const industries = [
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'Launch faster with a complete technology stack from day one.',
  },
  {
    icon: Building2,
    title: 'Small & Medium Businesses',
    desc: 'Streamline daily operations and focus on growth, not administration.',
  },
  {
    icon: Store,
    title: 'E-Commerce',
    desc: 'Manage products, orders, and customers across every sales channel.',
  },
  {
    icon: Briefcase,
    title: 'Agencies & Professional Services',
    desc: 'Track clients, projects, and billing through one connected workspace.',
  },
  {
    icon: Landmark,
    title: 'Enterprises',
    desc: 'Scalable infrastructure and custom integrations for complex organisations.',
  },
]

export function Industries() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Technology for Every Kind of Business."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const isLast = i === industries.length - 1
            return (
              <StaggerItem key={ind.title} className={isLast ? 'lg:col-span-4' : ''}>
                <Card className={cn('h-full', isLast && 'lg:flex lg:items-center lg:gap-6')} index={i}>
                  <IconBadge icon={ind.icon} index={i} />
                  <div>
                    <h3 className={cn('mt-4 text-base font-semibold text-navy', isLast && 'lg:mt-0')}>
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{ind.desc}</p>
                  </div>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
