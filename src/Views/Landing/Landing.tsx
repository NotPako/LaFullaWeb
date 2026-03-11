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
          youtubeId="5rbL4JOlDyg"
          spotifyId=""
          spotifyAvailableAt="00.00 del 13 de Març"
          spotifyType="track"
        />
        <GigCarrousel />
      </div>
    </div>
  )
}