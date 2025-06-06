
import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-country-brown/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/5d41639c-a372-4f3e-93e4-6ea32862ba6b.png" 
              alt="Country Riders Logo" 
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-bold text-country-cream font-western">
              Country Riders
            </h1>
          </div>
          <ul className="hidden md:flex space-x-6">
            {[
              { id: 'histoire', label: 'Histoire' },
              { id: 'club', label: 'Le Club' },
              { id: 'animations', label: 'Animations' },
              { id: 'cours', label: 'Cours' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-country-cream hover:text-country-tan transition-colors duration-300 font-medium font-western-alt"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
