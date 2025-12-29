import React, { useState, useEffect } from 'react';
import config from '../config';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          {config.salonName} <span>Bella</span>
        </a>
        <ul className="navbar-menu">
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#horarios">Horários</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              className="navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </li>
        </ul>
        <button
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#horarios" onClick={closeMenu}>Horários</a></li>
          <li><a href="#depoimentos" onClick={closeMenu}>Depoimentos</a></li>
          <li>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              className="navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Agendar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
