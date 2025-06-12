import React, { useState } from 'react';
import { pacientesAPI } from '../services/api';

interface RegisterFormProps {
  onBack: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    fone: '' // Campo obrigatório no backend
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar mensagem quando usuário começar a digitar
    if (message) {
      setMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.nome.trim()) {
      setMessage('Nome é obrigatório');
      setMessageType('error');
      return false;
    }

    if (!formData.email.trim()) {
      setMessage('Email é obrigatório');
      setMessageType('error');
      return false;
    }

    if (!formData.fone.trim()) {
      setMessage('Telefone é obrigatório');
      setMessageType('error');
      return false;
    }

    if (!formData.senha) {
      setMessage('Senha é obrigatória');
      setMessageType('error');
      return false;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setMessage('Senhas não conferem');
      setMessageType('error');
      return false;
    }

    if (formData.senha.length < 4) {
      setMessage('Senha deve ter pelo menos 4 caracteres');
      setMessageType('error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // Preparar dados para envio (sem confirmarSenha)
      const { confirmarSenha, ...dadosParaEnvio } = formData;

      const response = await pacientesAPI.cadastrar({
        ...dadosParaEnvio,
        telefone: dadosParaEnvio.fone
      });

      setMessage('Cadastro realizado com sucesso!');
      setMessageType('success');

      // Limpar formulário após sucesso
      setFormData({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        fone: ''
      });

      console.log('Paciente cadastrado:', response);

      // Opcional: voltar para login após 2 segundos
      setTimeout(() => {
        onBack();
      }, 2000);

    } catch (error) {
      console.error('Erro no cadastro:', error);
      setMessage(error instanceof Error ? error.message : 'Erro no cadastro. Tente novamente.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>
        <i className="fas fa-user-plus"></i>
        <br />
        Criar Conta
      </h2>

      {/* Mensagem de feedback */}
      {message && (
        <div className={`message ${messageType}`} style={{
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '5px',
          textAlign: 'center',
          backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
          color: messageType === 'success' ? '#155724' : '#721c24',
          border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">
            <i className="fas fa-user"></i> Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu email"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fone">
            <i className="fas fa-phone"></i> Telefone
          </label>
          <input
            type="tel"
            id="fone"
            name="fone"
            value={formData.fone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha">
            <i className="fas fa-lock"></i> Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Sua senha"
            required
            disabled={loading}
            minLength={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmarSenha">
            <i className="fas fa-lock"></i> Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            required
            disabled={loading}
            minLength={4}
          />
        </div>

        <button
          type="submit"
          className="login-button"
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Cadastrando...
            </>
          ) : (
            <>
              <i className="fas fa-user-plus"></i> Cadastrar
            </>
          )}
        </button>
      </form>

      <div className="additional-options-register">
        <button
          onClick={onBack}
          className="back-button"
          disabled={loading}
        >
          <i className="fas fa-arrow-left"></i> Voltar para Login
        </button>
      </div>
    </>
  );
};

export default RegisterForm;