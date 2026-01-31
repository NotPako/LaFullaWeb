"use client";
import React from "react";
import "./Discografia.css";
import SpotifyEmbed from "@/components/SpotifyEmbed/SpotifyEmbed";
import { Carousel } from "antd";

const spotifyItems = [
  { type: "album", id: "2Z67K7bSlNRCRMNi0Uhwpf" },
  { type: "track", id: "78yabm3lvNIVAGXzrESIiZ" },
  { type: "track", id: "4JTdkqI8dn80qYXh8luiGU" },
  { type: "playlist", id: "37i9dQZF1E4x5GhDbWfThD" },
] as const;


export default function Discografia() {
  return (
    <section className="discografia-section">
      <h2 className="discografia-title">Discografia</h2>

      <div className="carouselDisc-container">
        <Carousel autoplay dots arrows slidesToShow={3}>
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
