import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Perfil.css';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
}

const Perfil: React.FC = () => {
  const { usuario } = useAuth();
  const [dadosUsuario, setDadosUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Aqui você deve implementar a chamada à API para buscar os dados do usuário
    const carregarDadosUsuario = async () => {
      try {
        // Simulação de dados - substitua pela chamada real à API
        setDadosUsuario({
          id: 1,
          nome: usuario?.nome || '',
          email: usuario?.email || '',
          telefone: '(00) 00000-0000',
          dataNascimento: '01/01/1990'
        });
      } catch (erro) {
        console.error('Erro ao carregar dados do usuário:', erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarDadosUsuario();
  }, [usuario]);

  if (carregando) {
    return <div className="perfil-carregando">Carregando...</div>;
  }

  return (
    <div className="perfil-container">
      <h1>Meu Perfil</h1>
      
      <div className="perfil-dados">
        <div className="perfil-campo">
          <label>Nome:</label>
          <span>{dadosUsuario?.nome}</span>
        </div>

        <div className="perfil-campo">
          <label>E-mail:</label>
          <span>{dadosUsuario?.email}</span>
        </div>

        <div className="perfil-campo">
          <label>Telefone:</label>
          <span>{dadosUsuario?.telefone}</span>
        </div>

        <div className="perfil-campo">
          <label>Data de Nascimento:</label>
          <span>{dadosUsuario?.dataNascimento}</span>
        </div>
      </div>

      <button className="perfil-botao-editar">
        Editar Perfil
      </button>
    </div>
  );
};

export default Perfil; 