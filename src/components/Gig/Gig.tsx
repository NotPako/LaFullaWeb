import React from "react";
import './Gig.css'

interface GigProps {
  titulo: string;
  fecha: string;
  lugar: string;
}

const Gig: React.FC<GigProps> = ({ titulo, fecha, lugar }) => {
  return (
    <div className="gigStyle">
      <h1 className="tituloStyle">{titulo}</h1>
      <div className="highlight-text">
      <p>{fecha}</p>
      <p>{lugar}</p>
      </div>
      
    </div>
  );
};

export default Gig;
