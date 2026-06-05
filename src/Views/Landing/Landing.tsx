import React from 'react'
import './Landing.css'
import GigCarrousel from '@/components/GigCarrousel/GigCarrousel'
import NewRelease from '@/components/NewRelease/NewRelease'
import { useNewRelease } from '@/hooks/useNewRelease'

export default function Landing() {
  const release = useNewRelease()

  return (
    <div className="landingStyle">
      <video
        className="landing-video"
        src="/media/HeroClipPresentacio.mp4"
        poster="/media/654A5957.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="landing-overlay" />
      <div className="landing-content">
        <NewRelease {...release} />
        <GigCarrousel />
      </div>
    </div>
  )
}
