import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/Logo - PrimaryTransparent, Blue Title.png" 
              alt="Constellation Marketing for Law Firms"
              className="h-12 brightness-0 invert"
            />
          </div>
          
          <h3 className="text-3xl font-heading font-bold mb-6">
            Don't Let Another Day Pass
          </h3>
          
          <p className="text-lg text-gray-300 font-body mb-8 leading-relaxed max-w-3xl mx-auto">
            The strategies we'll share in this training have helped dozens of law firms. Your competition is getting AI-ready. This is your advantage.
          </p>
          
          <div className="space-y-4 mb-8">
            <button 
              onClick={scrollToSignup}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              <ArrowUp className="mr-2 h-5 w-5" />
              Register for Free Training
            </button>
            <p className="text-gray-400 font-body text-sm">
              Limited seats available • August 29th • 12pm • 60 minutes
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-body">
            © 2025 Constellation Marketing. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;