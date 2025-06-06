
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-western">
          Country Riders
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Club de Danse Country à Lozinghem
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Rejoignez notre communauté chaleureuse dans le Pas-de-Calais. 
          Découvrez la passion de la danse country dans une ambiance conviviale et bienveillante.
        </p>
        <button 
          onClick={() => document.getElementById('club')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-country-brick hover:bg-country-rust text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Découvrir le Club
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
