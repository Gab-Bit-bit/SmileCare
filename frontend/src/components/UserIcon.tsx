import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './UserIcon.css';

const UserIcon: React.FC = () => {
    const { usuario, estaLogado, fazerLogout } = useAuth();
    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fechar menu ao clicar fora
    useEffect(() => {
        function handleClickFora(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuAberto(false);
            }
        }

        document.addEventListener('mousedown', handleClickFora);
        return () => document.removeEventListener('mousedown', handleClickFora);
    }, []);

    if (!estaLogado) return null;

    return (
        <div className="user-icon-container" ref={menuRef}>
            <button
                className="user-icon-button"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label="Menu do usuário"
            >
                <i className="fas fa-user-circle"></i>
                <span className="user-name">{usuario?.nome?.split(' ')[0]}</span>
            </button>

            {menuAberto && (
                <div className="user-menu">
                    <div className="user-info">
                        <i className={`fas ${usuario?.tipo === 'profissional' ? 'fa-user-md' : 'fa-user'}`}></i>
                        <div>
                            <p className="user-name-full">{usuario?.nome}</p>
                            <p className="user-type">
                                {usuario?.tipo === 'profissional' ? 'Profissional' : 'Paciente'}
                                {usuario?.tipo === 'profissional' && usuario?.cro && ` - CRO: ${usuario.cro}`}
                            </p>
                        </div>
                    </div>

                    <div className="menu-options">
                        <Link to="/perfil" className="menu-item" onClick={() => setMenuAberto(false)}>
                            <i className="fas fa-user-cog"></i>
                            Meu Perfil
                        </Link>
                        <Link to="/meus-agendamentos" className="menu-item" onClick={() => setMenuAberto(false)}>
                            <i className="fas fa-calendar-alt"></i>
                            Meus Agendamentos
                        </Link>
                        <button onClick={fazerLogout} className="menu-item logout">
                            <i className="fas fa-sign-out-alt"></i>
                            Sair
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserIcon; 