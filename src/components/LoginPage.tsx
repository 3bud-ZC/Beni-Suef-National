import React from 'react';
import { HeaderCard } from './HeaderCard';
import { LoginForm } from './LoginForm';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  return (
    <div className="portal-container">
      <HeaderCard />
      <LoginForm onSuccess={onLoginSuccess} />
      <footer className="footer-text">
        جميع الحقوق محفوظة © جامعة بني سويف الأهلية
      </footer>
    </div>
  );
};
