
import React from 'react';
import { Calendar, Users, Music } from 'lucide-react';

const AnimationsSection = () => {
  return (
    <section id="animations" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.8), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Music className="mx-auto mb-6 text-white" size={48} />
          <h2 className="text-4xl font-bold text-white mb-6 font-western">
            Nos Animations & Événements
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Démonstration de danse country" 
              className="rounded-lg shadow-lg w-full h-64 object-cover border-4 border-white/20"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-white mb-4 font-western-alt">
              Des Événements Tout au Long de l'Année
            </h3>
            <p className="text-white/90 leading-relaxed">
              Country Riders anime la vie culturelle du Pas-de-Calais avec de nombreux événements. 
              Nos membres, fièrement vêtus de costumes traditionnels, participent aux fêtes locales 
              et partagent leur passion avec les habitants des villages alentours.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg animate-fade-in border-2 border-white/20">
            <Calendar className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4 font-western-alt">
              Bals Country
            </h3>
            <p className="text-white/90">
              Soirées dansantes dans une ambiance authentique avec orchestre live 
              et DJ spécialisé musique country.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg animate-fade-in border-2 border-white/20">
            <Users className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4 font-western-alt">
              Démonstrations Publiques
            </h3>
            <p className="text-white/90">
              Spectacles dans les villages du Pas-de-Calais pour faire découvrir 
              la beauté de la danse country.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg animate-fade-in border-2 border-white/20">
            <Music className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4 font-western-alt">
              Costumes Traditionnels
            </h3>
            <p className="text-white/90">
              Nos membres portent fièrement chapeaux, bottes et tenues western 
              lors des représentations officielles.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Chaque événement est une occasion de rencontrer de nouvelles personnes, 
            de partager notre passion et de faire rayonner la culture country dans notre belle région.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimationsSection;
