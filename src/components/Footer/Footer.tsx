import React from 'react';
import Image from 'next/image';
import './Footer.css';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-subvencio">
                <a
                    href="https://ivc.gva.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-subvencio-logo"
                >
                    {/* Logo oficial en blanc per a fons foscos, de https://ivc.gva.es/val/ivc-val/qui-som-ivc/logos-val */}
                    <Image
                        src="/media/ivc/generalitat-ivc-blanc.png"
                        alt="Generalitat Valenciana · Institut Valencià de Cultura"
                        width={3508}
                        height={1002}
                        sizes="(max-width: 640px) 260px, 320px"
                    />
                </a>
                <p className="footer-subvencio-text">
                    Projecte subvencionat per l’Institut Valencià de Cultura, en el marc de les ajudes al foment
                    d’activitats musicals de 2026, en la modalitat de producció d’espectacles de música en viu.
                    Expedient FAM-PRO-26-023
                </p>
            </div>

            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} La Fulla. Tots els drets reservats</p>
                <p>Pàgina dissenyada per Pako</p>
            </div>
        </footer>
    );
};
