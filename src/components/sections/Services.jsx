import { Layers, Landmark, Compass, Search } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, IconBadge } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

const services = [
  {
    num: '01',
    icon: Layers,
    title: 'SaaS Neo-Banking Software',
    desc: 'License the full Xeena Tech platform and run it on your own regulatory licenses, fully white-labelled.',
  },
  {
    num: '02',
    icon: Landmark,
    title: 'BaaS on Partner Licenses',
    desc: 'Launch faster on our partner banking licenses while you build toward your own regulatory status.',
  },
  {
    num: '03',
    icon: Compass,
    title: 'Neo-Bank Launch & Management Consulting',
    desc: 'Strategy, licensing, and operations support from a team that has taken digital banks live before.',
  },
  {
    num: '04',
    icon: Search,
    title: 'Financial Provider Scouting',
    desc: 'We source and vet the banking, card, and crypto rails your product will actually run on.',
  },
]

export function Services() {
  return (
    <section id="launch" className="scroll-mt-20 bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Four Ways In"
          title={
            <>
              Four ways in. <span className="text-gold-dark">One team accountable.</span>
            </>
          }
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.num}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-gold-dark">{s.num}</span>
                  <IconBadge icon={s.icon} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
