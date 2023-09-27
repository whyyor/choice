import { ConfigProvider } from 'antd';
import React from 'react';
import ResponsiveNav from './components/navbar/Navbar.tsx';  // Import the Navbar component
import ImageCarousel from './components/homecarousel/HomeCarousel.tsx';
import './App.css';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,
      },
    }}
  >
    <ResponsiveNav />
    <ImageCarousel />
  </ConfigProvider>
);

export default App;
