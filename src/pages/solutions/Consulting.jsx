import { Target, FileCheck2, Network, Rocket, Users, Megaphone } from 'lucide-react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Card, IconBadge } from '../../components/ui/Card'
import { StaggerGroup, StaggerItem } from '../../components/ui/Reveal'
import { DetailHero } from '../../components/solutions/DetailHero'
import { DetailCTA } from '../../components/solutions/DetailCTA'
import { getSolutionBySlug } from '../../data/solutions'
import consultingImg from '../../assets/consulting.png'

const scope = [
  { icon: Target, title: 'Business & Financial Design', desc: 'Model the business, the unit economics, and the roadmap before a line of code is written.' },
  { icon: FileCheck2, title: 'Licensing & Compliance', desc: 'Navigate the regulatory path and the paperwork that comes with it, jurisdiction by jurisdiction.' },
  { icon: Network, title: 'Provider & Rails Scouting', desc: 'Source and vet the banking, card, and crypto rails your product will actually run on.' },
  { icon: Rocket, title: 'Platform Delivery', desc: 'Deploy the Xeena Tech stack configured to your brand, your flows, your markets.' },
  { icon: Users, title: 'Team & Operations', desc: 'Stand up the operational muscle — support, risk, compliance — to run it day to day.' },
  { icon: Megaphone, title: 'Go-to-Market', desc: 'Launch with a plan for acquisition, positioning, and the first cohort of customers.' },
]

export function Consulting() {
  const solution = getSolutionBySlug('consulting')

  return (
    <>
      <DetailHero
        num={solution.num}
        title={solution.title}
        headline={
          <>
            You bring the vision. <span className="text-gold">We&apos;ve done the rest before.</span>
          </>
        }
        lede="From idea to a live private bank. Strategy, licensing, providers, platform, launch and operations — one accountable team that's done this before, for clients just like you."
        bgImage={consultingImg}
        bgOverlay={false}
        light
      />

      <section className="relative bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Get"
            title={
              <>
                Six capabilities, <span className="text-gold">one team.</span>
              </>
            }
          />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scope.map((s) => (
              <StaggerItem key={s.title}>
                <Card className="h-full">
                  <IconBadge icon={s.icon} />
                  <h3 className="mt-4 text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <DetailCTA slug="consulting" titleLower="consulting & start up" />
    </>
  )
}
