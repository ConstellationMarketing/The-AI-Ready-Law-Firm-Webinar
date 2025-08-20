import React from 'react';
import { Users, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const SocialProof: React.FC = () => {
  const targetAudience = [
    {
      icon: DollarSign,
      title: 'Personal Injury Attorneys',
      description: 'Spending $2K+ per month and unsure if you\'re getting ROI',
    },
    {
      icon: AlertCircle,
      title: 'Criminal Defense & Immigration',
      description: 'Frustrated with inconsistent Google leads and rising costs',
    },
    {
      icon: Users,
      title: 'Any Law Firm',
      description: 'Tired of hearing "it takes time" without seeing real progress',
    },
  ];

  const urgencyPoints = [
    'Google Ads costs have increased 40% in the last 12 months',
    'New AI automation is changing how campaigns perform',
    'Policy updates are affecting legal ad compliance',
    'Most agencies aren\'t adapting to 2025 changes',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Who This Training Is For
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            This isn't generic marketing advice. It's specifically designed for law firms 
            facing real Google Ads challenges in 2025.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {targetAudience.map((audience, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <audience.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 font-body">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Why You Need This Training Now
            </h3>
            <p className="text-lg text-gray-700 font-body">
              The Google Ads landscape has fundamentally changed. Here's what's happening:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {urgencyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-body">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;