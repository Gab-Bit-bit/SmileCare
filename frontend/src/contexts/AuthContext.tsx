import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipos para o usuário
interface Usuario {
    id: string;
    nome: string;
    email: string;
    tipo: 'paciente' | 'profissional';
    cro?: string; // Opcional, apenas para profissionais
}

// Interface do contexto
interface AuthContextData {
    usuario: Usuario | null;
    estaLogado: boolean;
    fazerLogin: (dados: { token: string; user: Usuario }) => void;
    fazerLogout: () => void;
}

// Criação do contexto
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Hook personalizado para usar o contexto
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}

// Provider do contexto
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    // Carregar dados do usuário do storage ao iniciar
    useEffect(() => {
        const token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
        const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
        const userType = localStorage.getItem('userType') || sessionStorage.getItem('userType');

        if (token && userData && userType) {
            try {
                const user = JSON.parse(userData);
                setUsuario({
                    ...user,
                    tipo: userType as 'paciente' | 'profissional'
                });
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            }
        }
    }, []);

    const fazerLogin = (dados: { token: string; user: Usuario }) => {
        setUsuario(dados.user);
    };

    const fazerLogout = () => {
        setUsuario(null);
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('userType');
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('userType');
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                estaLogado: !!usuario,
                fazerLogin,
                fazerLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
} 