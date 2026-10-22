import { Target, FileCheck2, Network, Rocket, Users, Megaphone } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Card, IconBadge } from '../ui/Card'
import { Button } from '../ui/Button'

const scope = [
  { icon: Target, title: 'Business & Financial Design', desc: 'Model the business and unit economics before a line of code is written.' },
  { icon: FileCheck2, title: 'Licensing Strategy', desc: 'Navigate the regulatory path, jurisdiction by jurisdiction.' },
  { icon: Network, title: 'Provider & Rails Scouting', desc: 'Source and vet the banking, card, and crypto rails you need.' },
  { icon: Rocket, title: 'Platform Deployment', desc: 'Deploy the Xeena Tech stack configured to your brand and markets.' },
  { icon: Users, title: 'Team & Operations', desc: 'Stand up the operational muscle to run it day to day.' },
  { icon: Megaphone, title: 'Go-to-Market', desc: 'Launch with a plan for acquisition and the first cohort of customers.' },
]

const timeline = [
  { label: 'Discovery & Business Design', done: true },
  { label: 'Licensing Strategy', done: true },
  { label: 'Provider & Rails Scouting', done: false },
  { label: 'Platform Deployment', done: false },
  { label: 'Pilot & Go-Live', done: false },
  { label: 'Ongoing Operations', done: false },
]

export function Consulting() {
  return (
    <section id="consulting" className="relative scroll-mt-20 bg-offwhite py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Launch Journey"
          title={
            <>
              You bring the vision. <span className="text-gold">We&apos;ve done the rest before.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal className="rounded-2xl border border-white/10 bg-navy-light p-6">
            <span className="text-[11px] font-mono font-medium uppercase tracking-wide text-white/40">
              Launch Journey
            </span>
            <div className="mt-5 space-y-3">
              {timeline.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3">
                  <span
                    className={
                      step.done
                        ? 'flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-[11px] font-bold text-navy'
                        : 'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-[11px] font-medium text-white/40'
                    }
                  >
                    {i + 1}
                  </span>
                  <span className={step.done ? 'text-sm text-white' : 'text-sm text-white/50'}>{step.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {scope.map((s) => (
              <StaggerItem key={s.title}>
                <Card className="h-full">
                  <IconBadge icon={s.icon} />
                  <h3 className="mt-3 text-sm font-bold text-navy">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:flex-row">
          <p className="text-sm font-medium text-navy/80">Ready to scope your launch journey?</p>
          <Button href="#cta" variant="primary">
            Book a Consultation
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
