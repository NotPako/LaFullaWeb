'use client';
import { useRef } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Landing from '@/Views/Landing/Landing';
import Merx from '@/Views/Merx/Merx';
import { Bebas_Neue } from 'next/font/google';
import Discografia from '@/Views/Discografia/Discografia';
 import Contacto from '@/Views/Contacto/Contacto';


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });



export default function Home() {
 

  const landingRef = useRef<HTMLDivElement>(null);
  const gigsRef = useRef<HTMLDivElement>(null);
  const merxRef = useRef<HTMLDivElement>(null);
  const discografiaRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);


  return (
    <div className={bebas.className}>
      <div>
      <Header landingRef={landingRef} gigsRef={gigsRef} merxRef={merxRef} discografiaRef={discografiaRef} contacteRef={contactoRef}>
      </Header>
      <div className="flex flex-col">
        <div ref={landingRef}><Landing/></div>
        <div ref={gigsRef} ><Merx/></div>
        <div ref={discografiaRef}><Discografia/></div>
        <div ref={contactoRef}><Contacto/></div>
      </div>
      <Footer>
      </Footer>
      </div>
    </div>
  );
}


