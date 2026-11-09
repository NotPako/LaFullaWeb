"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Discografia.css";
import SpotifyEmbed from "@/components/SpotifyEmbed/SpotifyEmbed";
import Carousel from "@/components/Carousel/Carousel";

const spotifyItems = [
  { type: "album", id: "2Z67K7bSlNRCRMNi0Uhwpf" },
  { type: "track", id: "78yabm3lvNIVAGXzrESIiZ" },
  { type: "track", id: "4JTdkqI8dn80qYXh8luiGU" },
  { type: "playlist", id: "37i9dQZF1E4x5GhDbWfThD" },
  { type: "album", id: "2yAeJUZv7ggin1DJ40fsil" }
] as const;

function useBreakpoint() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesToShow(1);
      else if (w < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return slidesToShow;
}

// Los reproductores de Spotify pesan ~1 MB: solo se montan cuando la sección se acerca a la pantalla
function useNearViewport<T extends Element>() {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, near] as const;
}

export default function Discografia() {
  const slidesToShow = useBreakpoint();
  const [sectionRef, loadEmbeds] = useNearViewport<HTMLElement>();

  return (
    <section className="discografia-section" ref={sectionRef}>
      <h2 className="discografia-title">Discografia</h2>

      <div className="carouselDisc-container">
        <Carousel autoplay dots arrows slidesToShow={slidesToShow} label="Discografia">
          {spotifyItems.map((item, index) => (
            <div key={index} className="carousel-slide spotify-slide">
              {loadEmbeds ? (
                <SpotifyEmbed type={item.type} id={item.id} />
              ) : (
                <div className="spotify-placeholder" aria-hidden="true" />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}