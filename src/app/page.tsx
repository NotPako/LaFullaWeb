'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Landing from '@/Views/Landing';
import { Bebas_Neue } from 'next/font/google';


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className={bebas.className}>
      <Header>
      </Header>
      <Landing/>
      <Footer>
      </Footer>

    </div>
  );
}


