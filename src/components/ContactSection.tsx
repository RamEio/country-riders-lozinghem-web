import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-country-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Phone className="mx-auto mb-6 text-country-cream" size={48} />
          <h2 className="text-4xl font-bold text-country-cream mb-6 font-western">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-country-rust mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-country-cream mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-country-tan mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-country-cream mb-2">Adresse</h4>
                    <p className="text-country-tan">
                      Salle des Fêtes<br />
                      15 r Joseph Carlier<br/>
                      62540 Lozinghem<br />
                      Pas-de-Calais
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-country-tan mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-country-cream mb-2">Téléphone</h4>
                    <p className="text-country-tan">
                      03 21 XX XX XX
                    </p>
                    <p className="text-sm text-country-tan/80 mt-1">
                      N'hésitez pas à nous appeler pour plus d'informations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-country-cream mb-4">
                Tarifs
              </h3>
              <div className="border-t border-country-tan/30 pt-2 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total annuel (de septembre à juin):</span>
                  <span>35€</span>
                </div>
              </div>
              <p className="text-sm text-country-tan/80 mt-4">
                Prix volontairement bas pour rester accessible à tous
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-country-cream mb-6">
              Rejoignez-Nous !
            </h3>
            <div className="bg-country-tan/20 p-6 rounded-lg">
              <p className="text-country-tan leading-relaxed mb-4">
                Vous êtes intéressé par la danse country ? Vous voulez découvrir 
                notre univers chaleureux et convivial ?
              </p>
              <p className="text-country-tan leading-relaxed mb-6">
                N'hésitez pas à nous contacter ou à venir directement assister 
                à un de nos cours. Vous serez accueilli avec le sourire et pourrez 
                découvrir notre passion dans une ambiance détendue.
              </p>
              <div className="space-y-3 text-sm">
                <p className="text-country-cream font-semibold">Cours d'essai gratuit !</p>
                <p className="text-country-tan">
                  • Mercredi 19h-21h : Tous niveaux
                </p>
                <p className="text-country-tan">
                  • Jeudi 19h-21h : Niveau avancé
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-country-rust/20 rounded-lg">
              <h4 className="font-semibold text-country-cream mb-3">
                Comment nous trouver
              </h4>
              <p className="text-country-tan text-sm">
                Lozinghem se situe entre Aire-sur-la-Lys et Saint-Omer. 
                La salle des fêtes est au centre du village, 
                facilement accessible avec parking gratuit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
