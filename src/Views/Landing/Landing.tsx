import React from 'react'
import './Landing.css'
import GigCarrousel from '@/components/GigCarrousel/GigCarrousel'
import NewRelease from '@/components/NewRelease/NewRelease'
import { useNewRelease } from '@/hooks/useNewRelease'

export default function Landing() {
  const release = useNewRelease()

  return (
    <div className="landingStyle">
      <div className="landing-overlay" />
      <div className="landing-content">
        <NewRelease {...release} />
        <GigCarrousel />
      </div>
    </div>
  )
}