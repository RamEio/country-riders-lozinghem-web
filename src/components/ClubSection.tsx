
import React from 'react';
import { Users } from 'lucide-react';

const ClubSection = () => {
  return (
    <section id="club" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Users className="mx-auto mb-6 text-country-brown" size={48} />
          <h2 className="text-4xl font-bold text-country-brown mb-6 font-western">
            Notre Club : Country Riders
          </h2>
          <div className="w-24 h-1 bg-country-rust mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-country-cream rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold text-country-brown mb-4">
              Ouvert à Tous
            </h3>
            <p className="text-gray-700">
              Quel que soit votre âge ou votre niveau, vous êtes les bienvenus. 
              Notre communauté accueille chacun avec bienveillance et simplicité.
            </p>
          </div>
          
          <div className="text-center p-6 bg-country-cream rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold text-country-brown mb-4">
              Prix Accessible
            </h3>
            <p className="text-gray-700">
              Nous pratiquons des tarifs très abordables car notre objectif 
              est de partager notre passion, pas de faire du profit.
            </p>
          </div>
          
          <div className="text-center p-6 bg-country-cream rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold text-country-brown mb-4">
              Unis par la Musique
            </h3>
            <p className="text-gray-700">
              La danse country devient notre échappatoire commune, 
              un moment où nous oublions le quotidien pour nous retrouver.
            </p>
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-semibold text-country-brown mb-6">
            L'Esprit Country Riders
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dans notre club situé à Lozinghem, nous cultivons les vraies valeurs country : 
            l'amitié, la convivialité et le respect mutuel. Chaque membre fait partie de notre grande famille, 
            où l'entraide et la bonne humeur sont les maîtres mots.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Que vous soyez débutant ou danseur confirmé, vous trouverez chez nous un lieu 
            d'épanouissement où la passion de la danse country se vit au quotidien dans une 
            atmosphère chaleureuse et authentique, typique de notre belle région du Pas-de-Calais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
