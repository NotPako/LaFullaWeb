'use client';
import React from 'react'
import Image from 'next/image'
import './Landing.css'
import GigCarrousel from '@/components/GigCarrousel/GigCarrousel'
import NewRelease from '@/components/NewRelease/NewRelease'
import { useNewRelease } from '@/hooks/useNewRelease'
import HeroVideo from './HeroVideo'

export default function Landing() {
  const release = useNewRelease()

  return (
    <div className="landingStyle">
      <Image
        className="landing-poster"
        src="/media/654A5957.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={70}
      />
      <HeroVideo />
      <div className="landing-overlay" />
      <div className="landing-content">
        <NewRelease {...release} />
        <GigCarrousel />
      </div>
    </div>
  )
}
