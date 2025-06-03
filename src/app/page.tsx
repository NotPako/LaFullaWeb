'use client';
import { useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Landing from '@/Views/Landing/Landing';
import Gigs from '@/Views/Gigs/Gigs';
import Merx from '@/Views/Merx/Merx';
import { Bebas_Neue } from 'next/font/google';


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });



export default function Home() {

  const landingRef = useRef<HTMLDivElement>(null);
  const gigsRef = useRef<HTMLDivElement>(null);
  const merxRef = useRef<HTMLDivElement>(null);


  return (
    <div className={bebas.className}>
      <div>
      <Header landingRef={landingRef} gigsRef={gigsRef} merxRef={merxRef}>
      </Header>
      <div className="grid grid-rows-2">
        <div ref={landingRef} className="inline-block"><Landing/></div>
        <div ref={gigsRef} className="inline-block" ><Gigs/></div>
      </div>
      <Footer>
      </Footer>
      </div>
    </div>
  );
}


