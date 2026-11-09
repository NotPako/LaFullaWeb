'use client';
import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import './Carousel.css';

interface CarouselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  dots?: boolean;
  slidesToShow?: number;
  /** Se llama con el índice de la nueva posición en cuanto empieza el cambio */
  onChange?: (index: number) => void;
  label?: string;
}

const SWIPE_THRESHOLD = 40;

// Sustituye al Carousel de antd: misma API mínima que usábamos, sin arrastrar toda la librería
export default function Carousel({
  children,
  autoplay = false,
  autoplaySpeed = 3000,
  arrows = false,
  dots = true,
  slidesToShow = 1,
  onChange,
  label,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const positions = Math.max(1, slides.length - slidesToShow + 1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Si cambia slidesToShow (responsive), que el índice no se quede fuera de rango
  const current = Math.min(index, positions - 1);

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + positions) % positions;
      setIndex(wrapped);
      onChange?.(wrapped);
    },
    [positions, onChange],
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const update = () => setReducedMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  // El temporizador se reinicia con cada cambio, así una navegación manual no se pisa con el autoplay
  useEffect(() => {
    if (!autoplay || paused || reducedMotion || positions < 2) return;
    const timer = window.setTimeout(() => {
      if (document.visibilityState === 'visible') goTo(current + 1);
    }, autoplaySpeed);
    return () => window.clearTimeout(timer);
  }, [autoplay, paused, reducedMotion, positions, autoplaySpeed, current, goTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(current + (delta < 0 ? 1 : -1));
  };

  const slideWidth = 100 / slidesToShow;

  return (
    <div
      className="fc-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="fc-viewport">
        <div
          className={`fc-track${reducedMotion ? ' fc-track--instant' : ''}`}
          style={{ transform: `translateX(-${current * slideWidth}%)` }}
        >
          {slides.map((slide, i) => {
            const visible = i >= current && i < current + slidesToShow;
            return (
              <div
                key={i}
                className="fc-slide"
                style={{ flexBasis: `${slideWidth}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${slides.length}`}
                aria-hidden={!visible}
                // El App Router usa su propio React 19, que ya trata `inert` como booleano
                inert={!visible}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>

      {arrows && positions > 1 && (
        <>
          <button type="button" className="fc-arrow fc-arrow--prev" onClick={() => goTo(current - 1)} aria-label="Anterior">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M10.5 3 5.5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="fc-arrow fc-arrow--next" onClick={() => goTo(current + 1)} aria-label="Següent">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5.5 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </>
      )}

      {dots && positions > 1 && (
        <div className="fc-dots">
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`fc-dot${i === current ? ' fc-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ves a la posició ${i + 1}`}
              aria-current={i === current}
            />
          ))}
        </div>
      )}
    </div>
  );
}
