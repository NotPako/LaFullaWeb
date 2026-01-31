"use client";
import React from "react";
import "./Discografia.css";
import SpotifyEmbed from "@/components/SpotifyEmbed/SpotifyEmbed";
import { Carousel } from "antd";
import { useEffect, useState } from "react";

const spotifyItems = [
  { type: "album", id: "2Z67K7bSlNRCRMNi0Uhwpf" },
  { type: "track", id: "78yabm3lvNIVAGXzrESIiZ" },
  { type: "track", id: "4JTdkqI8dn80qYXh8luiGU" },
  { type: "playlist", id: "37i9dQZF1E4x5GhDbWfThD" },
] as const;


export default function Discografia() {

  function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

  const isMobile = useIsMobile();
  const slidesToShow = isMobile ? 2 : 3;

  return (
    <section className="discografia-section">
      <h2 className="discografia-title">Discografia</h2>

      <div className="carouselDisc-container">
        <Carousel autoplay dots arrows slidesToShow={slidesToShow}>
          {spotifyItems.map((item, index) => (
            <div key={index} className="carousel-slide spotify-slide">
              <SpotifyEmbed type={item.type} id={item.id} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
