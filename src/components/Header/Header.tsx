"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import '@/styles/styles.css';
import '@/components/Header/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false); 

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  

  return (
    <div className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="titolFulla">
        <h2>LA FULLA</h2>
      </div>

      <div onClick={() => scrollTo("inici")}>
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
        <div className="menuItem" onClick={() => scrollTo("merx")}>
          <h1>Merxandatge</h1>
        </div>
        <div className="menuItem" onClick={() => scrollTo("contacte")}>
          <h1>Contacte</h1>
        </div>
        <div className="menuItem" onClick={() => scrollTo("discografia")}>
          <h1>Discografia</h1>
        </div>
        <div className="menuItem" onClick={() => scrollTo("xarxes")}>
          <h1>Xarxes</h1>
        </div>
      </nav>
    </div>
  );
}