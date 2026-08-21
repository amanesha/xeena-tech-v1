import { Rocket, Building2, Store, Briefcase, Landmark } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, IconBadge } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import back2 from '../../assets/back2.png'

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
    <section
      className="relative bg-navy bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${back2})` }}
    >
      <div className="absolute inset-0 bg-navy/95" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Industries We Serve"
          title="Technology for Every Kind of Business."
        />

        <StaggerGroup className="mt-20 flex flex-wrap justify-center gap-5">
          {industries.map((ind) => (
            <StaggerItem
              key={ind.title}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <Card className="h-full">
                <IconBadge icon={ind.icon} />
                <div>
                  <h3 className="mt-4 text-base font-bold text-white">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{ind.desc}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
