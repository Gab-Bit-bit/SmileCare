import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [patientEmail, setPatientEmail] = useState('');
  const [professionalEmail, setProfessionalEmail] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const [professionalPassword, setProfessionalPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isProfessional, setIsProfessional] = useState(false);
  const [cro, setCro] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const email = isProfessional ? professionalEmail : patientEmail;
    const password = isProfessional ? professionalPassword : patientPassword;
    
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }

    if (isProfessional && !cro) {
      newErrors.cro = 'CRO é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simular chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const email = isProfessional ? professionalEmail : patientEmail;
      const password = isProfessional ? professionalPassword : patientPassword;
      
      // Aqui você pode adicionar a lógica de autenticação
      console.log('Login attempt:', { email, password, isProfessional, cro, rememberMe });
      
      // Redirecionar após login bem-sucedido
      window.location.href = isProfessional ? '/dashboard-profissional' : '/dashboard-paciente';
    } catch (error) {
      setErrors({ submit: 'Erro ao fazer login. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  const LoginForm = () => (
    <>
      <h2>
        <i className="fas fa-user-circle"></i>
        <br />
        {isProfessional ? 'Login Profissional' : 'Login'}
      </h2>
      <div className="login-type-toggle">
        <button
          className={`toggle-button ${!isProfessional ? 'active' : ''}`}
          onClick={() => setIsProfessional(false)}
          aria-label="Login como paciente"
        >
          <i className="fas fa-user"></i> Paciente
        </button>
        <button
          className={`toggle-button-profitional ${isProfessional ? 'active' : ''}`}
          onClick={() => setIsProfessional(true)}
          aria-label="Login como profissional"
        >
          <i className="fas fa-user-md"></i> Profissional
        </button>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            id="email"
            value={isProfessional ? professionalEmail : patientEmail}
            onChange={(e) => {
              if (isProfessional) {
                setProfessionalEmail(e.target.value);
              } else {
                setPatientEmail(e.target.value);
              }
            }}
            placeholder={isProfessional ? "Email profissional" : "Seu email"}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <span className="error-message" id="email-error">{errors.email}</span>}
        </div>
        {isProfessional && (
          <div className="form-group">
            <label htmlFor="cro">
              <i className="fas fa-id-card"></i> CRO
            </label>
            <input
              type="text"
              id="cro"
              value={cro}
              onChange={(e) => setCro(e.target.value)}
              placeholder="Seu número de registro profissional"
              required
              aria-invalid={!!errors.cro}
              aria-describedby={errors.cro ? "cro-error" : undefined}
            />
            {errors.cro && <span className="error-message" id="cro-error">{errors.cro}</span>}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password">
            <i className="fas fa-lock"></i> Senha
          </label>
          <input
            type="password"
            id="password"
            value={isProfessional ? professionalPassword : patientPassword}
            onChange={(e) => {
              if (isProfessional) {
                setProfessionalPassword(e.target.value);
              } else {
                setPatientPassword(e.target.value);
              }
            }}
            placeholder="Sua senha"
            required
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          {errors.password && <span className="error-message" id="password-error">{errors.password}</span>}
        </div>
        <div className="remember-me-container">
          <label className="remember-me-label">
            <input
              type="checkbox"
              className="remember-me-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="remember-me-text">Lembrar de mim</span>
          </label>
        </div>
        <button 
          type="submit" 
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Carregando...
            </>
          ) : (
            <>
              <i className="fas fa-sign-in-alt"></i> Entrar
            </>
          )}
        </button>
        {errors.submit && <span className="error-message submit-error">{errors.submit}</span>}
      </form>

      <div className="additional-options-login">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          setIsForgotPassword(true);
        }}>
          <i className="fas fa-question-circle"></i> Esqueceu sua senha?
        </a>
        {!isProfessional && (
          <a href="#" onClick={(e) => {
            e.preventDefault();
            setIsRegistering(true);
          }}>
            <i className="fas fa-user-plus"></i> Criar conta
          </a>
        )}
      </div>

      <div className="privacy-policy">
        <p>
          Ao fazer login, você concorda com nossa{' '}
          <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>
        </p>
      </div>
    </>
  );

  return isOpen ? (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div className="modal-content">
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <div className={`form-container ${isRegistering || isForgotPassword ? 'slide-left' : ''} ${isProfessional ? 'professional-mode' : ''}`}>
          {isRegistering ? (
            <RegisterForm onBack={() => setIsRegistering(false)} />
          ) : isForgotPassword ? (
            <ForgotPasswordForm 
              onBack={() => setIsForgotPassword(false)} 
              isProfessional={isProfessional}
            />
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;