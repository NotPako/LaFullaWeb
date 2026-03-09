'use client';
import React, { useState } from 'react';
import './NewRelease.css';

interface NewReleaseProps {
  title: string;
  subtitle?: string;
  youtubeId: string;       // ID del vídeo: https://youtube.com/watch?v=ESTE_ID
  spotifyId: string;       // ID del track/album: https://open.spotify.com/track/ESTE_ID
  spotifyType?: 'track' | 'album' | 'playlist';
}

export default function NewRelease({
  title,
  subtitle = 'Nou llançament',
  youtubeId,
  spotifyId,
  spotifyType = 'track',
}: NewReleaseProps) {
  const [activeTab, setActiveTab] = useState<'youtube' | 'spotify'>('youtube');

  return (
    <div className="nr-wrapper">
      {/* Etiqueta "nou" */}
      <div className="nr-badge">
        <span className="nr-badge-dot" />
        {subtitle}
      </div>

      {/* Título */}
      <h2 className="nr-title">{title}</h2>

      {/* Tabs */}
      <div className="nr-tabs">
        <button
          className={`nr-tab ${activeTab === 'youtube' ? 'nr-tab--active' : ''}`}
          onClick={() => setActiveTab('youtube')}
        >
          <svg className="nr-tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Visualizer
        </button>
        <button
          className={`nr-tab ${activeTab === 'spotify' ? 'nr-tab--active' : ''}`}
          onClick={() => setActiveTab('spotify')}
        >
          <svg className="nr-tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.077-.496 9.712 1.115.294.18.387.563.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.568 11.233 1.328a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 01-.955 1.613z"/>
          </svg>
          Escolta-la
        </button>
      </div>

      {/* Embed */}
      <div className="nr-embed-container">
        {activeTab === 'youtube' ? (
          <div className="nr-youtube-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="nr-youtube-iframe"
            />
          </div>
        ) : (
          <iframe
            src={`https://open.spotify.com/embed/${spotifyType}/${spotifyId}?utm_source=generator&theme=0`}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="nr-spotify-iframe"
          />
        )}
      </div>
    </div>
  );
}