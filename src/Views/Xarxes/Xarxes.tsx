'use client';
import './Xarxes.css';

const XARXES = [
  {
    nom: 'Instagram',
    url: 'https://www.instagram.com/lafullagrup/',
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    nom: 'Spotify',
    url: 'https://open.spotify.com/artist/4PhpjsKgLAVKQJzEbZfoFS?si=91IOQkRRR1efHz2OXYFWoQ&nd=1&dlsi=2bdcf596c2c74537',
    color: '#1DB954',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.077-.496 9.712 1.115.294.18.387.563.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.568 11.233 1.328a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 01-.955 1.613z"/>
      </svg>
    ),
  },
  {
    nom: 'YouTube',
    url: 'https://www.youtube.com/@lafullagrup',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    nom: 'X',
    url: 'https://x.com/lafullagrup',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    nom: 'TikTok',
    url: 'https://www.tiktok.com/@lafullagrup',
    color: '#69C9D0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
];

export default function Xarxes() {

  return (
    <section className="xarxes-section">
      <div className="xarxes-bg" aria-hidden="true" />

      <div className="xarxes-inner">
        <div className="xarxes-header">
          <h2 className="xarxes-title">Segueix-nos</h2>
          <p className="xarxes-subtitle">Tenim moltes coses per contar-te per ací</p>
        </div>

        <div className="xarxes-grid">
          {XARXES.map((xarxa) => (
            <a
              key={xarxa.nom}
              href={xarxa.url}
              target="_blank"
              rel="noopener noreferrer"
              className="xarxa-card"
              style={{
                '--xarxa-color': xarxa.color,
              } as React.CSSProperties}
            >
              <div className="xarxa-glow" aria-hidden="true" />
              <div className="xarxa-icon">{xarxa.icon}</div>
              <span className="xarxa-nom">{xarxa.nom}</span>
              <span className="xarxa-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}