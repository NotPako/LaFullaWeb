'use client';

import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "./GigCarrousel.css";
import Gig from "../Gig/Gig";

interface GigType {
  titulo: string;
  fecha: string;
  lugar: string;
  url: string;
}




const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID as string;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string;


const GigCarrousel: React.FC = () => {
  const [gigs, setGigs] = useState<GigType[]>([]);

  const extractCity = (location?: string) => {
  if (!location) return "Próximamente";

  const parts = location.split(",").map(p => p.trim());

  // Si hay varias partes, normalmente la ciudad está al final o penúltima
  if (parts.length >= 2) {
    return parts[parts.length - 2] || parts[parts.length - 1];
  }

  return location;
};


  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            CALENDAR_ID
          )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`
        );

        const data = await res.json();

        const formatted: GigType[] = data.items.map((event: any) => ({
          titulo: event.summary || "Concert",
          fecha: new Date(
            event.start.dateTime || event.start.date
          ).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          lugar: extractCity(event.location),
          url:
            event.description && event.description.startsWith("http")
              ? event.description
              : "",
        }));

        setGigs(formatted);
      } catch (error) {
        console.error("Error cargando conciertos:", error);
      }
    };

    fetchGigs();
  }, []);

  const onGigClick = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Pròxims concerts</h2>
      <Carousel autoplay dots arrows>
        {gigs.map((gig, index) => (
          <div key={index} className="carousel-slide">
            <Gig {...gig} onClick={onGigClick} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GigCarrousel;

