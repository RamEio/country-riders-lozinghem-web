
import React from 'react';
import { Music } from 'lucide-react';

const HistoireSection = () => {
  return (
    <section id="histoire" className="py-20 bg-country-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Music className="mx-auto mb-6 text-country-brown" size={48} />
          <h2 className="text-4xl font-bold text-country-brown mb-6 font-western">
            L'Histoire de la Danse Country
          </h2>
          <div className="w-24 h-1 bg-country-rust mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-country-brown mb-4">
              Des Origines Authentiques
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La danse country trouve ses racines dans les traditions folkloriques des pionniers américains. 
              Née dans les saloons et les granges du Far West, elle exprime la joie de vivre et l'esprit 
              communautaire des cowboys et des fermiers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mélange unique de danses européennes et de rythmes américains, la country line dance 
              s'est développée au fil des générations, créant un style accessible à tous, 
              où la technique se mêle au plaisir de danser ensemble.
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-country-brown mb-4">
              La Musique Country
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La musique country, avec ses guitares acoustiques, ses banjos et ses harmonicas, 
              raconte des histoires de vie simple et authentique. Des ballades mélancoliques 
              aux rythmes entraînants, chaque chanson porte en elle l'âme de l'Amérique rurale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aujourd'hui, la country moderne continue d'évoluer tout en gardant ses valeurs 
              fondamentales : l'authenticité, la sincérité et cette capacité unique à 
              rassembler les gens autour d'une passion commune.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoireSection;
