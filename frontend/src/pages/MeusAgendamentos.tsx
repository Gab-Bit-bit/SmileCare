import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './MeusAgendamentos.css';

interface Agendamento {
  id: number;
  data: string;
  horario: string;
  servico: string;
  status: 'confirmado' | 'pendente' | 'cancelado';
}

const MeusAgendamentos: React.FC = () => {
  const { usuario } = useAuth();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarAgendamentos = async () => {
      try {
        // Simulação de dados - substitua pela chamada real à API
        setAgendamentos([
          {
            id: 1,
            data: '15/03/2024',
            horario: '14:00',
            servico: 'Limpeza Dental',
            status: 'confirmado'
          },
          {
            id: 2,
            data: '20/03/2024',
            horario: '10:30',
            servico: 'Clareamento',
            status: 'pendente'
          }
        ]);
      } catch (erro) {
        console.error('Erro ao carregar agendamentos:', erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarAgendamentos();
  }, []);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'confirmado':
        return 'status-confirmado';
      case 'pendente':
        return 'status-pendente';
      case 'cancelado':
        return 'status-cancelado';
      default:
        return '';
    }
  };

  if (carregando) {
    return <div className="agendamentos-carregando">Carregando...</div>;
  }

  return (
    <div className="agendamentos-container">
      <h1>Meus Agendamentos</h1>

      {agendamentos.length === 0 ? (
        <p className="sem-agendamentos">Você não possui agendamentos.</p>
      ) : (
        <div className="agendamentos-lista">
          {agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="agendamento-card">
              <div className="agendamento-info">
                <h3>{agendamento.servico}</h3>
                <p>Data: {agendamento.data}</p>
                <p>Horário: {agendamento.horario}</p>
                <span className={`status ${getStatusClass(agendamento.status)}`}>
                  {agendamento.status.charAt(0).toUpperCase() + agendamento.status.slice(1)}
                </span>
              </div>
              <div className="agendamento-acoes">
                <button className="botao-cancelar">Cancelar</button>
                <button className="botao-remarcar">Remarcar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeusAgendamentos; 