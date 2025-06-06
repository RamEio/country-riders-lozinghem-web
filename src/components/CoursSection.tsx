
import React from 'react';
import { Calendar } from 'lucide-react';

const CoursSection = () => {
  return (
    <section id="cours" className="py-20 bg-country-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Calendar className="mx-auto mb-6 text-country-brown" size={48} />
          <h2 className="text-4xl font-bold text-country-brown mb-6 font-western">
            Nos Cours de Danse
          </h2>
          <div className="w-24 h-1 bg-country-rust mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-country-brown mb-2">
                Mercredi Soir
              </h3>
              <div className="w-16 h-1 bg-country-rust mx-auto mb-4"></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Horaires :</span>
                <span className="text-country-brown font-semibold">19h00 - 21h00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Durée :</span>
                <span className="text-country-brown font-semibold">2 heures</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Niveau :</span>
                <span className="text-country-brown font-semibold">Tous niveaux</span>
              </div>
              <p className="text-gray-600 mt-4">
                Cours adapté aux débutants et perfectionnement pour les danseurs confirmés.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-country-brown mb-2">
                Jeudi Soir
              </h3>
              <div className="w-16 h-1 bg-country-rust mx-auto mb-4"></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Horaires :</span>
                <span className="text-country-brown font-semibold">19h00 - 21h00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Durée :</span>
                <span className="text-country-brown font-semibold">2 heures</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Niveau :</span>
                <span className="text-country-brown font-semibold">Avancé</span>
              </div>
              <p className="text-gray-600 mt-4">
                Apprentissage de chorégraphies plus complexes et techniques avancées.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 max-w-3xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-semibold text-country-brown mb-6">
            Déroulement des Cours
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nos séances de 2 heures sont structurées pour optimiser votre apprentissage : 
            échauffement, révision des pas de base, apprentissage de nouvelles chorégraphies 
            et pratique libre dans une ambiance détendue et conviviale.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nos instructeurs expérimentés vous accompagnent à votre rythme, 
            que vous souhaitiez découvrir la danse country ou perfectionner votre technique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursSection;
