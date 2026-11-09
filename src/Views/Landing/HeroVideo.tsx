'use client';
import React, { useEffect, useState } from 'react';

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

// El vídeo no es contenido, es decoración: se monta cuando la página ya ha cargado
// para que no compita con la foto de portada, y no se monta si el usuario ahorra datos,
// tiene una conexión lenta o ha pedido menos animación
export default function HeroVideo() {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (connection?.saveData || /2g/.test(connection?.effectiveType ?? '')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const start = () => setEnabled(true);
    if (document.readyState === 'complete') {
      start();
      return;
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  if (!enabled) return null;

  return (
    <video
      className={`landing-video${playing ? ' landing-video--playing' : ''}`}
      src="/media/HeroClipPresentacio.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    />
  );
}
