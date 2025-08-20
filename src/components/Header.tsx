import React from 'react';
import { Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/Logo - PrimaryTransparent, Blue Title.png" 
              alt="Constellation Marketing for Law Firms"
              className="h-12"
            />
          </div>
          <div className="flex items-center">
            <button 
              onClick={scrollToSignup}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-body font-medium transition-colors flex items-center"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Register Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;