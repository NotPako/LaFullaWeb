import React from 'react'
import './Landing.css'
import GigCarrousel from '@/components/GigCarrousel/GigCarrousel'
import NewRelease from '@/components/NewRelease/NewRelease'

export default function Landing() {
  return (
    <div className="landingStyle">
      <div className="landing-overlay" />
      <div className="landing-content">
        <NewRelease
          title="PLACA PETRI"
          subtitle="Nou llançament"
          youtubeId="v=5rbL4JOlDyg"
          spotifyId="78yabm3lvNIVAGXzrESIiZ?si=d203e03c08f14378"
          spotifyType="track"
        />
        <GigCarrousel />
      </div>
    </div>
  )
}