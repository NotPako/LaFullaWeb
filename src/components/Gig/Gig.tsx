import React from "react";
import './Gig.css'

interface GigProps {
  titulo: string;
  fecha: string;
  lugar: string;
  url: string;
  onClick?: (url: string) => void;
}

const Gig: React.FC<GigProps> = ({ titulo, fecha, lugar, url, onClick }) => {
  return (
    <div className="gigStyle"
      onClick={() => onClick?.(url)}>
      <h1 className="tituloStyle">{titulo}</h1>
      <div className="highlight-text">
      <p>{fecha}</p>
      <p>{lugar}</p>
      </div>
      
    </div>
  );
};

export default Gig;
