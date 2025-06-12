// Configuração base da API
const API_BASE_URL = 'http://localhost:3001'; // Ajuste conforme necessário

// Função genérica para fazer requisições à API
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Erro desconhecido' }));
        throw new Error(error.message || 'Erro na requisição');
    }

    return response.json();
};

// === AUTENTICAÇÃO ===
export const authAPI = {
    // Login para pacientes (apenas email e senha)
    loginPaciente: async (email: string, senha: string) => {
        const response = await apiRequest('/auth/paciente', {
            method: 'POST',
            body: JSON.stringify({ email, senha }),
        });

        // Garantir que temos todos os dados necessários
        const paciente = await apiRequest(`/pacientes/email/${email}`);
        return {
            ...response,
            id: paciente.id || paciente._id,
            nome: paciente.nome,
            email: paciente.email
        };
    },

    // Login para profissionais (email, CRO e senha)
    loginProfissional: async (email: string, cro: string, senha: string) => {
        const response = await apiRequest('/auth/profissional', {
            method: 'POST',
            body: JSON.stringify({ email, cro, senha }),
        });

        // Garantir que temos todos os dados necessários
        const profissional = await apiRequest(`/profissionais/email/${email}`);
        return {
            ...response,
            id: profissional.id || profissional._id,
            nome: profissional.nome,
            email: profissional.email,
            cro: profissional.cro
        };
    },

    // Buscar dados do profissional por email
    getProfissionalByEmail: (email: string) => apiRequest(`/profissionais/email/${email}`),
};

// === PACIENTES ===
export const pacientesAPI = {
    // Cadastrar novo paciente
    cadastrar: (dados: {
        nome: string;
        email: string;
        senha: string;
        telefone: string;
    }) => apiRequest('/pacientes', {
        method: 'POST',
        body: JSON.stringify(dados),
    }),

    // Listar todos os pacientes
    listar: () => apiRequest('/pacientes'),

    // Buscar paciente por ID
    buscarPorId: (id: string) => apiRequest(`/pacientes/${id}`),

    // Buscar paciente por email
    buscarPorEmail: (email: string) => apiRequest(`/pacientes/email/${email}`),

    // Atualizar dados do paciente
    atualizar: (id: string, dados: {
        nome?: string;
        email?: string;
        senha?: string;
        telefone?: string;
    }) => apiRequest(`/pacientes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(dados),
    }),

    // Excluir paciente
    excluir: (id: string) => apiRequest(`/pacientes/${id}`, {
        method: 'DELETE',
    }),
}; 
// === PROFISSIONAIS ===
export const profissionaisAPI = {
    // Listar todos os profissionais
    listar: () => apiRequest('/profissionais'),

    // Buscar profissional por ID
    buscarPorId: (id: string) => apiRequest(`/profissionais/${id}`),

    // Buscar profissional por email
    buscarPorEmail: (email: string) => apiRequest(`/profissionais/email/${email}`),

    // Cadastrar novo profissional
    cadastrar: (dados: string) => apiRequest('/profissionais', {
      method: 'POST',
      body: JSON.stringify(dados),
    }),

    // Atualizar dados do profissional
    atualizar: (id: string, dados: string) => apiRequest(`/profissionais/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dados),
    }),

    // Excluir profissional
    excluir: (id: string) => apiRequest(`/profissionais/${id}`, {
      method: 'DELETE', 
    }),
  };
  


// === PROCEDIMENTOS ===
export const procedimentosAPI = {
    // Listar todos os procedimentos
    listar: () => apiRequest('/procedimentos'),

    // Buscar procedimento por ID
    buscarPorId: (id:string) => apiRequest(`/procedimentos/${id}`),

    // Cadastrar novo procedimento
    cadastrar: (dados: string) => apiRequest('/procedimentos', {
      method: 'POST',
      body: JSON.stringify(dados),
    }),

    // Atualizar dados do procedimento
    atualizar: (id: string, dados: string) => apiRequest(`/procedimentos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dados),
    }),

    // Excluir procedimento
    excluir: (id: string) => apiRequest(`/procedimentos/${id}`, {
      method: 'DELETE',
    }),
  };

// === AGENDAMENTOS ===
export const agendamentosAPI = {
    // Listar todos os agendamentos
    listar: () => apiRequest('/agendamentos'),

    // Buscar agendamento por ID
    buscarPorId: (id: string) => apiRequest(`/agendamentos/${id}`),

    // Cadastrar novo agendamento
    cadastrar: (dados: string) => apiRequest('/agendamentos', {     method: 'POST',
      body: JSON.stringify(dados),
    }),

    // Atualizar dados do agendamento
    atualizar: (id: string, dados: string) => apiRequest(`/agendamentos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dados),
    }),

    // Excluir agendamento
    excluir: (id: string) => apiRequest(`/agendamentos/${id}`, {
      method: 'DELETE',
    }),
  };
  