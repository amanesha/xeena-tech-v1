import { Landmark, Layers, Hexagon, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { getAccent } from '../../lib/accents'
import { cn } from '../../lib/cn'

const items = [
  {
    icon: Landmark,
    title: 'Xeena.io',
    desc: 'Your premium global fintech platform for modern financial services.',
    href: 'https://xeena.io',
  },
  {
    icon: Layers,
    title: 'YOB Assets',
    desc: 'Digital asset infrastructure supporting investment and tokenized opportunities.',
    href: '#',
  },
  {
    icon: Hexagon,
    title: 'Tokera',
    desc: 'A platform focused on digital asset innovation and tokenization solutions.',
    href: '#',
  },
]

export function Ecosystem() {
  return (
    <section id="partners" className="scroll-mt-20 bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Part of the Nexa Group Ecosystem"
          title="One Ecosystem. Endless Opportunities."
          subtitle="Xeena Tech is part of the Nexa Group ecosystem, bringing together technology and financial platforms designed to deliver connected experiences for individuals, businesses, and investors."
          dark
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-3">
          {items.map((item, i) => {
            const a = getAccent(i)
            return (
              <StaggerItem key={item.title}>
                <div
                  className={cn(
                    'flex h-full flex-col rounded-2xl border border-white/10 bg-navy-light p-6 transition-colors',
                    a.dark.border
                  )}
                >
                  <span className={cn('flex h-10 w-10 items-center justify-center rounded-lg', a.dark.iconBg, a.dark.iconText)}>
                    <item.icon size={22} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{item.desc}</p>
                  <Button
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    variant="ghost"
                    className={cn('mt-4 justify-start px-0 hover:text-white', a.dark.iconText)}
                  >
                    Learn More
                    <ArrowUpRight size={14} />
                  </Button>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
