import React from 'react';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* MAIN HEADLINE - Most prominent text */}
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
              The{' '}
              <span className="text-accent">AI-Ready Law Firm</span>
              : 10 Actionable Steps to Get Found & Attract Qualified Leads
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 font-body leading-relaxed">
              AI is changing how clients find lawyers. In this free, no-fluff webinar on August 29th, 
              we'll share a tactical playbook to make your law firm discoverable in the GPT era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('signup')}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center group"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('amplify')}
                className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all"
              >
                See What You Get
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500 font-body">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                August 29th
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                12pm • 60 Minutes
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Limited Seats
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AI technology and digital marketing for law firms"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                <div className="text-3xl font-heading font-bold text-primary">AI-Ready</div>
                <div className="text-gray-600 font-body">Get Found</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="text-3xl font-heading font-bold text-accent">10 Steps</div>
                <div className="text-gray-600 font-body">Guide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;