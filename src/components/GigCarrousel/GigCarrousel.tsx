'use client';

import React, { useEffect, useRef, useState } from "react";
import "./GigCarrousel.css";
import Gig from "../Gig/Gig";

interface GigType {
  titulo: string;
  fecha: string;
  lugar: string;
  url: string;
  rawDate: Date;
}

interface GoogleEvent {
  summary?: string;
  start: { dateTime?: string; date?: string };
  location?: string;
  description?: string;
}

const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID!;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

const GigCarrousel: React.FC = () => {
  const [gigs, setGigs] = useState<GigType[]>([]);
  const [loading, setLoading] = useState(true);
  const listRef = useRef<HTMLOListElement>(null);

  const extractCity = (location?: string): string => {
    if (!location) return "Pròximament";
    const parts = location.split(",").map(p => p.trim());
    if (parts.length >= 2) return parts[parts.length - 2] || parts[parts.length - 1];
    return location;
  };

  useEffect(() => {
    const fetchGigs = async (): Promise<void> => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            CALENDAR_ID
          )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`
        );
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data: { items: GoogleEvent[] } = await res.json();

        const formatted: GigType[] = data.items.map((event) => {
          const rawDate = new Date(event.start.dateTime ?? event.start.date!);
          return {
            titulo: event.summary ?? "Concert",
            fecha: rawDate.toLocaleDateString("ca-ES", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            lugar: extractCity(event.location),
            url: event.description?.startsWith("http") ? event.description : "",
            rawDate,
          };
        }).sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());;

        setGigs(formatted);
      } catch (error) {
        console.error("Error carregant concerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  return (
    <div className="giglist-wrapper">
      <div className="giglist-header">
        <span className="giglist-label">Pròxims concerts</span>
        <span className="giglist-line" />
      </div>

      {loading ? (
        <div className="giglist-loading">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="giglist-skeleton" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      ) : gigs.length === 0 ? (
        <p className="giglist-empty">No hi ha concerts programats de moment.</p>
      ) : (
        <div className="giglist-scroll">
          <ol className="giglist" ref={listRef}>
            {gigs.map((gig, index) => (
              <Gig key={index} {...gig} index={index + 1} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default GigCarrousel;