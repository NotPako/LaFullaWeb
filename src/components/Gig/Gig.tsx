import React from "react";
import './Gig.css';

interface GigProps {
  titulo: string;
  fecha: string;
  lugar: string;
  url: string;
  index: number;
  onClick?: (url: string) => void;
}

const Gig: React.FC<GigProps> = ({ titulo, fecha, lugar, url, index, onClick }) => {
  const hasTickets = !!url;

  return (
    <li
      className={`gig-row ${hasTickets ? 'gig-row--clickable' : ''}`}
      onClick={() => hasTickets && onClick?.(url)}
      role={hasTickets ? 'button' : undefined}
      tabIndex={hasTickets ? 0 : undefined}
      onKeyDown={(e) => e.key === 'Enter' && hasTickets && onClick?.(url)}
    >
      {/* Número */}
      <span className="gig-index">{String(index).padStart(2, '0')}</span>

      {/* Info principal */}
      <div className="gig-info">
        <span className="gig-titulo">{titulo}</span>
        <span className="gig-meta">
          <span className="gig-fecha">{fecha}</span>
          <span className="gig-separator">·</span>
          <span className="gig-lugar">{lugar}</span>
        </span>
      </div>

      {/* CTA entrades */}
      <div className="gig-cta">
        {hasTickets ? (
          <span className="gig-tickets-btn">
            Entrades
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        ) : (
          <span className="gig-soon">Aviat</span>
        )}
      </div>

      {/* Línea de fondo — efecto spotlight en hover */}
      <span className="gig-spotlight" aria-hidden="true" />
    </li>
  );
};

export default Gig;