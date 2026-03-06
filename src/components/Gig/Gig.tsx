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

function isPastDate(fechaStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthMap: Record<string, number> = {
    // Català
    gen: 0, gener: 0,
    feb: 1, febrer: 1,
    mar: 2, març: 2,
    abr: 3, abril: 3,
    mai: 4, maig: 4,
    jun: 5, juny: 5,
    jul: 6, juliol: 6,
    ago: 7, agost: 7,
    set: 8, setembre: 8,
    oct: 9, octubre: 9,
    nov: 10, novembre: 10,
    des: 11, desembre: 11,
    // Castellano
    ene: 0, enero: 0, febrero: 1, marzo: 2,
    mayo: 4, junio: 5, julio: 6, agosto: 7,
    sep: 8, septiembre: 8, noviembre: 10, dic: 11, diciembre: 11,
    // English
    jan: 0, january: 0, february: 1, march: 2, april: 3, may: 4,
    june: 5, july: 6, august: 7, september: 8,
    october: 9, november: 10, dec: 11, december: 11,
  };

  // Normalizar el string:
  // "dj., 15 de maig de 2025" → "15 maig 2025"
  // "dv., 3 de juliol de 2026" → "3 juliol 2026"
  const normalized = fechaStr
    .normalize("NFD")                                      // descomponer acentos
    .replace(/[\u0300-\u036f]/g, "")                       // quitar diacríticos para comparar
    .replace(/^[a-zA-Z]+\.?,?\s*/i, "")                    // quitar día semana: "dj., " "vie., "
    .replace(/\bde\b/gi, "")                               // quitar partícula "de"
    .replace(/[.,]/g, "")                                  // quitar puntos y comas
    .replace(/\s+/g, " ")                                  // colapsar espacios
    .trim();

  // Captura: "15 maig 2025" o "3 juliol 2026"
  const match = normalized.match(/(\d{1,2})\s+([a-zA-Z]+)\s+(\d{4})/);
  if (match) {
    const day = parseInt(match[1], 10);
    const rawMonth = match[2].toLowerCase();
    const year = parseInt(match[3], 10);
    // Buscar primero el nombre completo, luego los primeros 3 chars
    const month = monthMap[rawMonth] ?? monthMap[rawMonth.slice(0, 3)];
    if (month !== undefined) {
      const eventDate = new Date(year, month, day);
      return eventDate < today;
    }
  }

  // Último recurso: new Date() nativo
  const parsed = new Date(fechaStr);
  if (!isNaN(parsed.getTime())) {
    parsed.setHours(0, 0, 0, 0);
    return parsed < today;
  }

  return false;
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

const Gig: React.FC<GigProps> = ({ titulo, fecha, lugar, url, index, onClick }) => {
  const hasTickets = !!url;
  const isPast = isPastDate(fecha);

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