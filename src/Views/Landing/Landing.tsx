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
          title="NO NE CABEN MÉS"
          subtitle="Nou llançament"
          youtubeId="DSEOiro_eRo"
          spotifyId="671T4hZNUgqzeNTmjNZo1B"
          spotifyAvailableAt=""
          spotifyType="track"
        />
        <GigCarrousel />
      </div>
    </div>
  )
}