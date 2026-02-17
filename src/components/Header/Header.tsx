"use client";
import Image from "next/image";
import { useState } from "react";
import '@/styles/styles.css';
import '@/components/Header/Header.css';

interface HeaderProps {
  landingRef: React.RefObject<HTMLDivElement | null>;
  gigsRef: React.RefObject<HTMLDivElement | null>;
  merxRef: React.RefObject<HTMLDivElement | null>;
  discografiaRef: React.RefObject<HTMLDivElement | null>;
  contacteRef: React.RefObject<HTMLDivElement | null>;
}

export default function Header({ landingRef, gigsRef, discografiaRef, contacteRef }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="titolFulla">
        <h2>LA FULLA</h2>
      </div>

      <div onClick={() => scrollTo(landingRef)}>
        <Image
          alt="La Fulla"
          src="/media/LogoGROCFULLA.png"
          width={80}
          height={80}
          className="logo"
        />
      </div>

      {/* Botón hamburguesa — solo visible en móvil */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menú de navegación */}
      <nav className={`menu ${menuOpen ? "menu--open" : ""}`}>
        <div className="menuItem" onClick={() => scrollTo(gigsRef)}>
          <h1>Merxandatge</h1>
        </div>
        <div className="menuItem" onClick={() => scrollTo(contacteRef)}>
          <h1>Contacte</h1>
        </div>
        <div className="menuItem" onClick={() => scrollTo(discografiaRef)}>
          <h1>Discografia</h1>
        </div>
      </nav>
    </div>
  );
}