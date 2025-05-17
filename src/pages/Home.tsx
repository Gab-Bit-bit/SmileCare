import React, { useState } from 'react';
import './Home.css';
import mainbanner from "../img/mainbanner.jpg";
import Navbar from '../components/Nav'; // Certifique-se de que esse caminho está correto
import LoginModal from '../components/LoginModal';
<<<<<<< HEAD
import QuemCuida from '../components/QuemCuida';
import AreasDeAtuacao from '../components/AreasDeAtuacao';

const HomeContent: React.FC = () => {
=======

const Home: React.FC = () => {
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="home-container">
<<<<<<< HEAD
      {/*tirei o Navbar (o bgl de login ta no nav.tsx*/}
=======
      {/* Navbar */}
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />

>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>SEJA BEM-VINDO<br />A SMILECARE</h1>
          <a
            className="whatsapp-button"
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            Precisa de ajuda? Contate-nos via WhatsApp
            <i className="fab fa-whatsapp"></i>
          </a>
          <p className="link-areas">Conheça nossas Áreas de Atuação</p>
        </div>
      </section>

      {/* Login Modal */}
<<<<<<< HEAD
      
=======
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
    </div>
  );
};

<<<<<<< HEAD
//o que tava feito no app.tsx
export default function Home() {
return (
  <>
    <HomeContent/>
    <QuemCuida />
    <AreasDeAtuacao />
  </>
);
}


=======
export default Home;
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
