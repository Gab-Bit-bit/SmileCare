// src/components/Navbar.tsx
import React from 'react';
import './Nav.css';
<<<<<<< HEAD
import {  useLocation  } from "react-router-dom";
import logo from '../img/logoSmileCare.png';
 import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import { useEffect, useState } from 'react';
import { link } from 'fs';

const Navbar: React.FC<{ onLoginClick?: () => void }> = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  //o bgl de login na nav
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  //bgl pra deixar os links da nav preto
   const location = useLocation();
  const isHome = location.pathname === '/';
=======
import logo from '../img/logo2.png';

import { useEffect, useState } from 'react';

const Navbar: React.FC<{ onLoginClick?: () => void }> = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${isHome ? 'navbar-home' : 'navbar-default'}`}>
=======
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
    <div className="logo">
      <figure>
        <img src={logo} alt="Logo SmileCare" style={{ display: 'block' }} />
      </figure>
    </div>
    <nav className="nav-links">
      <a href="/">Home</a>
<<<<<<< HEAD
        <div className="dropdown">
          <a href="#">Procedimentos</a>
          <div className="dropdown-content">
            <Link to="/procedimentos/gengiva">Tratamentos Para Gengiva</Link>
            <Link to="/proteses-e-implantes">Próteses e Implantes</Link>
            <div className="sub-dropdown">
              <Link to="#">Ortodontia &rsaquo;</Link>
              <div className="sub-dropdown-content">
                <Link to="/procedimentos/aparelhos">Aparelhos</Link>
=======
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
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
                <a href="/procedimentos/invisalign">Invisalign</a>
              </div>
            </div>
            <div className="sub-dropdown">
<<<<<<< HEAD
              <Link to ="#">Cirurgia &rsaquo;</Link>
              <div className="sub-dropdown-content">
                <Link to ="/procedimentos/extracao">Extração</Link>
                <Link to="/procedimentos/implante">Implante</Link>
=======
              <a href="#">Cirurgia &rsaquo;</a>
              <div className="sub-dropdown-content">
                <a href="/procedimentos/extracao">Extração</a>
                <a href="/procedimentos/implante">Implante</a>
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
              </div>
            </div>
          </div>
        </div>
        <div className="atuation-area dropdown">
          <a href="#">Áreas de Atuação</a>
          <div className="dropdown-content">
<<<<<<< HEAD
            <Link to="/areas/cirugia">Cirugias</Link>
            <Link to="/areas/ortodontia">Ortodontia</Link>
            <Link to ="/areas/proteses-e-implantes">Próteses e Implantes</Link>
            <Link to="/areas/periodontia">Periodontia</Link>
          </div>
          <a href="#" onClick={() => setIsLoginModalOpen(true)}>Login</a>
        </div>
        {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
=======
            <a href="#">Ortodontia</a>
            <a href="#">Cirurgia</a>
            <a href="#">Próteses e Implantes</a>
            <a href="#">Periodontia</a>
          </div>
        </div>
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
      </nav>
    </header>
  );
};

export default Navbar;