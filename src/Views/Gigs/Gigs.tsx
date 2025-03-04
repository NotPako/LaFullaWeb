import React from 'react'
import Gig from '@/components/Gig/Gig'
import './Gigs.css'




export default function Gigs() {
  return (
    <div className="fullWidthGigs">
      <Gig titulo="BILBO" fecha="10 de Abril, 2025" lugar="Festa okupa" />
      <Gig titulo="VISTABELLA DEL MAESTRAT" fecha="23 de Juny, 2025" lugar="Aplec del Penyagolosa" />
      <Gig titulo="CASTELLÓ" fecha="10 de Abril, 2025" lugar="Terra" />
      <Gig titulo="VALÈNCIA" fecha="10 de Abril, 2025" lugar="16 Toneladas" />
      <Gig titulo="ALACANT" fecha="10 de Abril, 2025" lugar="Sala Marea Rock" />
  </div>
  )
}
