
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import HistoireSection from '../components/HistoireSection';
import ClubSection from '../components/ClubSection';
import AnimationsSection from '../components/AnimationsSection';
import CoursSection from '../components/CoursSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HistoireSection />
      <ClubSection />
      <AnimationsSection />
      <CoursSection />
      <ContactSection />
      
      <footer className="bg-country-brown/90 text-country-cream py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-western text-lg">Country Riders</p>
          <p className="text-country-tan text-sm">
            Club de Danse Country - Lozinghem, Pas-de-Calais
          </p>
          <p className="text-country-tan/80 text-xs mt-2">
            Rejoignez notre famille country pour partager passion et convivialité
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
