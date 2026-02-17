import React from 'react'
import './Landing.css'
import GigCarrousel from '@/components/GigCarrousel/GigCarrousel'

export default function Landing() {
  return (
    <div className="landingStyle">
      <div className="landing-overlay" />
      <div className="landing-content">
        <GigCarrousel />
      </div>
    </div>
  )
}