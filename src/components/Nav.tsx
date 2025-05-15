// src/components/Navbar.tsx
import React from 'react';
import './Nav.css';
import logo from '../img/logo2.png';

import { useEffect, useState } from 'react';

const Navbar: React.FC<{ onLoginClick?: () => void }> = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="logo">
      <figure>
        <img src={logo} alt="Logo SmileCare" style={{ display: 'block' }} />
      </figure>
    </div>
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick?.(); }}>Login</a>
        <div className="dropdown">
          <a href="#">Procedimentos</a>
          <div className="dropdown-content">
            <a href="/procedimentos/gengiva">Tratamentos Para Gengiva</a>
            <a href="/procedimentos/proteses">Próteses e Implantes</a>
            <div className="sub-dropdown">
              <a href="#">Ortodontia &rsaquo;</a>
              <div className="sub-dropdown-content">
                <a href="/procedimentos/aparelhos">Aparelhos</a>
                <a href="/procedimentos/invisalign">Invisalign</a>
              </div>
            </div>
            <div className="sub-dropdown">
              <a href="#">Cirurgia &rsaquo;</a>
              <div className="sub-dropdown-content">
                <a href="/procedimentos/extracao">Extração</a>
                <a href="/procedimentos/implante">Implante</a>
              </div>
            </div>
          </div>
        </div>
        <div className="atuation-area dropdown">
          <a href="#">Áreas de Atuação</a>
          <div className="dropdown-content">
            <a href="#">Ortodontia</a>
            <a href="#">Cirurgia</a>
            <a href="#">Próteses e Implantes</a>
            <a href="#">Periodontia</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;