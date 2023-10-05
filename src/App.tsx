// App.tsx
import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from '../src/pages/HomeView';  // Import the new HomeView component
import LoginView from '../src/pages/LoginView';  // Import the new HomeView component
import DashboardView from '../src/pages/DashboardView';  // Import the new HomeView component
import './App.css';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#1c5335',
        Button: {
          primaryShadow: "none"
        }
      },
    }}
  >
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        {/* Add more Route components here for other views */}
      </Routes>
    </Router>
  </ConfigProvider>
);

export default App;
