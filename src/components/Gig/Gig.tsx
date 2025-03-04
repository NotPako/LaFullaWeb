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
      <p className="fechaStyle">{fecha}</p>
      <p className="lugarStyle">{lugar}</p>
    </div>
  );
};

export default Gig;
