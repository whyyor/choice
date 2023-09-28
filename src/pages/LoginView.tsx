// LoginView.tsx
import React from 'react';
import LoginNav from '../components/login/LoginNav';
import LoginSection from '../components/login/LoginSection';
import LoginAbout from '../components/login/LoginAbout';

const LoginView: React.FC = () => (
  <>
    <LoginNav />
    <LoginSection />
    <LoginAbout />
  </>
);

export default LoginView;
