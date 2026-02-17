"use client";
import React, { useEffect, useState } from "react";
import "./Discografia.css";
import SpotifyEmbed from "@/components/SpotifyEmbed/SpotifyEmbed";
import { Carousel } from "antd";

const spotifyItems = [
  { type: "album", id: "2Z67K7bSlNRCRMNi0Uhwpf" },
  { type: "track", id: "78yabm3lvNIVAGXzrESIiZ" },
  { type: "track", id: "4JTdkqI8dn80qYXh8luiGU" },
  { type: "playlist", id: "37i9dQZF1E4x5GhDbWfThD" },
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

export default function Discografia() {
  const slidesToShow = useBreakpoint();

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