import React from 'react';
import { TrendingUp, Target, AlertTriangle, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const topics = [
    {
      icon: AlertTriangle,
      title: 'Google Ads in 2025: What Changed and Why It Matters',
      description: 'Understanding the seismic shifts affecting your campaigns right now.',
      points: [
        'Why your cost-per-click (CPC) is skyrocketing',
        'The impact of Google\'s AI automation on targeting',
        'New ad policy updates for legal advertisers'
      ],
    },
    {
      icon: Target,
      title: 'Smart Bidding vs Manual: What Actually Works',
      description: 'When to trust the machine—and when to take back control.',
      points: [
        'Real-world comparisons for PI and criminal defense',
        'Key campaign settings most firms get wrong',
        'When Google\'s automation helps vs hurts'
      ],
    },
    {
      icon: TrendingUp,
      title: 'Real Benchmarks for Law Firms in 2025',
      description: 'Know exactly where you stand with current market data.',
      points: [
        'Cost per lead benchmarks by practice area',
        'CTR and conversion rate standards',
        'How to measure real ROI vs vanity metrics'
      ],
    },
    {
      icon: DollarSign,
      title: 'Stop Wasting Budget Without Killing Performance',
      description: 'Immediate fixes to stop the budget bleed.',
      points: [
        'Where most firms are leaking money',
        'Geographic targeting and match type optimization',
        'How to prioritize fixes when results drop'
      ],
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            What We'll Cover in This Session
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            60 minutes of actionable insights based on real campaign data from law firms 
            spending $2K+ per month on Google Ads.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <topic.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                {topic.title}
              </h3>
              
              <p className="text-gray-600 font-body mb-6 leading-relaxed">
                {topic.description}
              </p>
              
              <ul className="space-y-3">
                {topic.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start text-gray-700 font-body">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Bonus: 2025 Google Ads Budget Planner
          </h3>
          <p className="text-lg font-body opacity-90 max-w-3xl mx-auto">
            All attendees get a downloadable budget planner to forecast ad spend, estimate lead volume, 
            and identify potential performance issues—no logins or complicated tools required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;