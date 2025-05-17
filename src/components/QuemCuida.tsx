<<<<<<< HEAD
import React from "react";
import "./QuemCuida.css";
import { Link } from "react-router-dom";
import dentista1 from "../img/dentista1.png";
import dentista2 from "../img/dentista2.png";
import dentista3 from "../img/dentista3.png";
import dentista4 from "../img/dentista4.png";
import dentista5 from "../img/dentista5.png";
import dentista6 from "../img/dentista6.png";
=======
import React from 'react';
import './QuemCuida.css';
import dentista1 from '../img/dentista1.png';
import dentista2 from '../img/dentista2.png';
import dentista3 from '../img/dentista3.png';
import dentista4 from '../img/dentista4.png';
import dentista5 from '../img/dentista5.png';
import dentista6 from '../img/dentista6.png';
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822

const QuemCuida: React.FC = () => {
  return (
    <section className="quem-cuida">
      <h2>Profissionais</h2>
      <div className="dentistas-container">
<<<<<<< HEAD
        <div className="perfilProfissional">
          <Link to="/perfilProfissional/dr-joao-silva" className="perfilProfssional">
            <img src={dentista1} alt="JoaoSilva" />
            <h3>Dr. Jõao Silva</h3>
            <p>Responsável Técnico</p>
          </Link>
        </div>
        <div className="perfilProfissional">
          <Link to="/perfilProfissional/dr-mario-santos" className="descricao">
          <img src={dentista2} alt="Dra. Mario Santos" />
          <h3>Dr. Mario Santos</h3>
          <p>Especialista em Periodontia e Implantes</p></Link>
        </div>
        <div className="perfilProfissional">
          <Link to="/perfilProfissional/dra-ana-oliveira" className="descricao">
          <img src={dentista3} alt="Dra. Ana Oliveira" />
          <h3>Dra. Ana Oliveira</h3>
          <p>Clinico Geral</p></Link>
        </div>
        <div className="perfilProfissional">
         <Link to="/perfilProfissional/dr-carlos-mendes" className="descricao">
          <img src={dentista4} alt="Dr. Carlos Mendes" />
          <h3>Dr. Carlos Mendes</h3>
          <p>Especialista em Cirurgia</p></Link>
        </div>
        <div className="perfilProfissional">
          <Link to="/perfilProfissional/dr-paula-costa" className="descricao">
          <img src={dentista5} alt="Dra. Paula Costa" />
          <h3>Dra. Paula Costa</h3>
          <p>Especialista em Odontopediatria</p></Link>
        </div>
        <div className="perfilProfissional">
          <Link to="/perfilProfissional/dr-luana-conto" className="descricao">
          <img src={dentista6} alt="Dra. Luana de Conto" />
          <h3>Dra. Luana de Conto</h3>
          <p>Clinico Geral</p></Link>
=======
        <div className="dentista-card">
          <img src={dentista1} alt="Dr.João Silva" />
          <h3>Dr. João Silva</h3>
          <p>Especialista em Ortodontia</p>
        </div>
        <div className="dentista-card">
          <img src={dentista2} alt="Dra. Mario Santos" />
          <h3>Dra. Mario Santos</h3>
          <p>Especialista em Implantes</p>
        </div>
        <div className="dentista-card">
          <img src={dentista3} alt="Dra. Ana Oliveira" />
          <h3>Dra. Ana Oliveira</h3>
          <p>Especialista em Periodontia</p>
        </div>
        <div className="dentista-card">
          <img src={dentista4} alt="Dr. Carlos Mendes" />
          <h3>Dr. Carlos Mendes</h3>
          <p>Especialista em Cirurgia</p>
        </div>
        <div className="dentista-card">
          <img src={dentista5} alt="Dra. Paula Costa" />
          <h3>Dra. Paula Costa</h3>
          <p>Especialista em Endodontia</p>
        </div>
        <div className="dentista-card">
            <img src={dentista6} alt="Dra. Luana de Conto" />
            <h3>Dra. Luana de Conto</h3>
            <p>Especialista em Protese e Implantes</p>
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default QuemCuida;
=======
export default QuemCuida; 
>>>>>>> 5090b1c95ad606d0270edc620dc3aaf288617822
