import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/sections/Hero'
import { TrustedPartner } from '../components/sections/TrustedPartner'
import { SolutionsSuite } from '../components/sections/SolutionsSuite'
import { Integrations } from '../components/sections/Integrations'
import { Industries } from '../components/sections/Industries'
import { FinancialSolutions } from '../components/sections/FinancialSolutions'
import { Security } from '../components/sections/Security'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'
import back2 from '../assets/back2.png'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  return (
    <>
      <Hero />
      <TrustedPartner />
      <SolutionsSuite />
      <div className="relative overflow-hidden bg-navy bg-cover bg-center" style={{ backgroundImage: `url(${back2})` }}>
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative">
          <Integrations />
          <Industries />
        </div>
      </div>
      <FinancialSolutions />
      <Security />
      <FAQ />
      <FinalCTA />
    </>
  )
}
