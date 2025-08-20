import React from 'react';
import { CheckCircle } from 'lucide-react';

const MeetYourHosts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Meet Your Host
          </h2>
          <p className="text-xl text-gray-600 font-body">
            Patrick Carver, Constellation CEO
          </p>
        </div>

        {/* Patrick Carver */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Patrick Carver, CEO & Founder
            </h3>
            <p className="text-lg text-gray-700 font-body mb-6 leading-relaxed">
              Patrick Carver, CEO & Founder of Constellation Marketing, started this company after watching his father get taken advantage of by a "big box marketing company." With a 98% client retention rate in 2024 and over $102M in ad spend managed, Patrick has helped 75+ law firms achieve measurable growth while maintaining complete transparency and accountability.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-body">
                  98% client retention rate in 2024
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-body">
                  Over $102M in ad spend managed
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-body">
                  Helped 75+ law firms achieve measurable growth
                </span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center">
            <div className="relative inline-block">
              <img 
                src="/patrick-1-1.png" 
                alt="Patrick Carver, CEO & Founder of Constellation Marketing"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-2xl font-heading font-bold">75+</div>
                <div className="text-sm font-body">Law Firms Helped</div>
              </div>
            </div>
          </div>
        </div>


        {/* Patrick's Quote */}
        <div className="mt-16 bg-gray-50 border-l-4 border-primary p-8 rounded-r-lg">
          <blockquote className="text-lg text-gray-800 font-body italic text-center">
            "This isn't fear-mongering. This is pattern recognition. We've seen this movie before, and firms that don't adapt simply disappear. In this training, we're sharing exactly what's working now—and what you need to stop doing immediately."
          </blockquote>
          <cite className="text-primary font-body font-semibold mt-4 block text-center">
            — Patrick Carver
          </cite>
        </div>
      </div>
    </section>
  );
};

export default MeetYourHosts;