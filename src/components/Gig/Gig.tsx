import React from "react";
import './Gig.css';

interface GigProps {
  titulo: string;
  fecha: string;
  lugar: string;
  url: string;
  index: number;
  isPast: boolean;
  onClick?: (url: string) => void;
}

const ScratchLine: React.FC = () => (
  <svg
    className="gig-scratch"
    viewBox="0 0 400 28"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      className="gig-scratch-path gig-scratch-path--main"
      d="M4 15 C 30 9, 55 20, 85 13 S 130 18, 160 11 S 210 17, 245 10 S 295 19, 330 12 S 370 16, 396 13"
      stroke="#e53535"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      className="gig-scratch-path gig-scratch-path--shadow"
      d="M4 17 C 28 12, 60 22, 88 16 S 135 21, 162 14 S 215 20, 248 13 S 300 22, 333 15 S 372 19, 396 16"
      stroke="#e53535"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const Gig: React.FC<GigProps> = ({ titulo, fecha, lugar, url, index, isPast, onClick }) => {
  const hasTickets = !!url;

  function navigateToTickets(e: React.MouseEvent) {
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <li
      className={[
        'gig-row',
        hasTickets && !isPast ? 'gig-row--clickable' : '',
        isPast ? 'gig-row--past' : '',
      ].filter(Boolean).join(' ')}
      onClick={() => !isPast && hasTickets && onClick?.(url)}
      role={hasTickets && !isPast ? 'button' : undefined}
      tabIndex={hasTickets && !isPast ? 0 : undefined}
      onKeyDown={(e) => e.key === 'Enter' && !isPast && hasTickets && onClick?.(url)}
    >
      <span className="gig-index">{String(index).padStart(2, '0')}</span>

      <div className="gig-info">
        <span className="gig-titulo">
          {titulo}
          {isPast && <ScratchLine />}
        </span>
        <span className="gig-meta">
          <span className="gig-fecha">{fecha}</span>
          <span className="gig-separator">·</span>
          <span className="gig-lugar">{lugar}</span>
        </span>
      </div>

      <div className="gig-cta">
        {isPast ? (
          <span className="gig-past-label">Passat</span>
        ) : hasTickets ? (
          <span className="gig-tickets-btn" onClick={navigateToTickets}>
            Entrades
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        ) : (
          <span className="gig-soon">Aviat</span>
        )}
      </div>

      <span className="gig-spotlight" aria-hidden="true" />
    </li>
  );
};

export default Gig;