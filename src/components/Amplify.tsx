import React from 'react';
import { Target, CheckCircle, Zap, TrendingUp } from 'lucide-react';

const Amplify: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Gain an Unfair Advantage',
      description: 'Discover our secret playbook for optimizing your firm for AI search, putting you steps ahead of the competition.'
    },
    {
      icon: Zap,
      title: 'Achieve Tactical Clarity',
      description: 'Move beyond the hype with a step-by-step plan to prepare your practice for the rest of 2025 and beyond.'
    },
    {
      icon: TrendingUp,
      title: 'Build a Better Pipeline',
      description: 'Learn how to get found by AI assistants and attract a steady stream of better, pre-qualified leads.'
    },
    {
      icon: CheckCircle,
      title: 'Walk Away with Real Value',
      description: 'Receive a free, 10-point checklist of advanced tactics you can implement immediately to grow your visibility and land more clients.'
    }
  ];

  return (
    <section id="amplify" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Your Tactical Playbook
          </h2>
          <p className="text-xl text-gray-700 font-body max-w-4xl mx-auto leading-relaxed">
            Are you tired of the endless hype and snake-oil promises about AI? The truth is, old-school SEO is no longer enough. While you navigate the noise, your competitors are adapting, positioning themselves to be the first choice when potential clients ask ChatGPT for help. This is a pivotal moment, and inaction means getting left behind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary">
              <div className="flex items-start mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 font-body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Get Ahead of the Competition?
          </h3>
          <p className="text-lg font-body opacity-90 mb-6 max-w-3xl mx-auto">
            Join us for this exclusive training and walk away with actionable strategies you can implement immediately. 
            Your competitors won't know what hit them.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('signup');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105"
          >
            Secure Your Competitive Edge
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amplify;