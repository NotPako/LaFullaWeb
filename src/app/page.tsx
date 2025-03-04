'use client';
import { useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Landing from '@/Views/Landing/Landing';
import Gigs from '@/Views/Gigs/Gigs';
import { Bebas_Neue } from 'next/font/google';


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });



export default function Home() {

  const landingRef = useRef<HTMLDivElement>(null);
  const gigsRef = useRef<HTMLDivElement>(null);


  return (
    <div className={bebas.className} >
      <div style={{display: 'flex', flexDirection: 'column', width:'100vw'}}>
      <Header landingRef={landingRef} gigsRef={gigsRef}>
      </Header>
      <div ref={landingRef}><Landing/></div>
      <div ref={gigsRef}><Gigs/></div>
      <Footer>
      </Footer>
      </div>
    </div>
  );
}


