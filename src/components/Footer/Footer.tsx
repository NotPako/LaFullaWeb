import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} La Fulla. Tots els drets reservats</p>
                <p>Pàgina dissenyada per Pako</p>
                <nav className="footer-nav">
                    <a href="/contact">Contactan `&apos;`s</a>
                </nav>
            </div>
        </footer>
    );
};
