'use client';
import React from "react";

interface SpotifyEmbedProps {
  type: "album" | "track" | "playlist" | "artist";
  id: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ type, id }) => {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
      <iframe
        src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
      />
    </div>
  );
};

export default SpotifyEmbed;
