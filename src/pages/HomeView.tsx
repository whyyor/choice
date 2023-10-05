// HomeView.tsx
import React from 'react';
import ResponsiveNav from '../components/navbar/Navbar.tsx';
import CardComponent from '../components/homeCards/Cards.tsx';
import AboutSection from '../components/homeAbout/About.tsx';
import ImageCarousel from '../components/homecarousel/HomeCarousel.tsx';

const HomeView: React.FC = () => (
  <>
    <ResponsiveNav />
    <ImageCarousel />
    <CardComponent />
    <AboutSection />
  </>
);

export default HomeView;
