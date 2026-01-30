import React from "react";
import "./Discografia.css";
import SpotifyEmbed from "@/components/SpotifyEmbed/SpotifyEmbed";

export default function Discografia() {
  return (
    <section className="discografia-section">
      <h2 className="discografia-title">Discografía</h2>

      <div className="spotify-grid">
        {/* Álbum */}
        <SpotifyEmbed type="album" id="2Z67K7bSlNRCRMNi0Uhwpf" />

        {/* Single */}
        <SpotifyEmbed type="track" id="78yabm3lvNIVAGXzrESIiZ" />

        {/* Playlist oficial */}
        <SpotifyEmbed type="playlist" id="37i9dQZF1E4x5GhDbWfThD" />
      </div>
    </section>
  );
}
