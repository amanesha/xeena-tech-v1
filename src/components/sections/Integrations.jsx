import { Calculator, Users, ShoppingCart, MessageSquare, Cloud, Plug } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Card, IconBadge } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

const categories = [
  { icon: Calculator, label: 'Accounting Platforms' },
  { icon: Users, label: 'CRM Systems' },
  { icon: ShoppingCart, label: 'E-Commerce Platforms' },
  { icon: MessageSquare, label: 'Communication Tools' },
  { icon: Cloud, label: 'Cloud Storage' },
  { icon: Plug, label: 'Custom Integrations' },
]

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built to Integrate"
          title="Works With the Tools You Already Use."
          subtitle="Your business already runs on software you trust. Xeena Tech connects seamlessly with leading platforms so your data flows where it needs to, without duplication or manual work."
          dark
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <StaggerItem key={c.label}>
              <Card className="flex flex-col items-center gap-3 text-center">
                <IconBadge icon={c.icon} />
                <span className="text-xs font-medium leading-snug text-white/80">{c.label}</span>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
