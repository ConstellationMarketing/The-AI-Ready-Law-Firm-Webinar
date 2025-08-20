import React from 'react';
import { ArrowRight, CheckCircle, Target, TrendingUp, DollarSign } from 'lucide-react';

const Transformation: React.FC = () => {
  const transformations = [
    {
      icon: DollarSign,
      before: 'Wasting $2,000+ monthly on unqualified clicks',
      after: 'Every dollar working harder with qualified traffic',
      benefit: 'Cut cost per lead by 60-80%'
    },
    {
      icon: Target,
      before: 'Guessing what keywords and audiences work',
      after: 'Data-driven targeting that attracts ideal clients',
      benefit: 'Higher quality leads that convert'
    },
    {
      icon: TrendingUp,
      before: 'Inconsistent lead flow and unpredictable results',
      after: 'Steady, predictable pipeline of new cases',
      benefit: 'Scale your practice with confidence'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Your Transformation Starts Here
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Imagine having Google Ads campaigns that actually work for your law firm. 
            Here's what changes when you apply the 2025 strategies we'll share:
          </p>
        </div>
        
        <div className="space-y-8 mb-16">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                  <transformation.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900">
                  {transformation.benefit}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="text-sm font-body font-semibold text-red-600 mb-2">BEFORE</div>
                  <p className="text-gray-700 font-body">{transformation.before}</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-sm font-body font-semibold text-primary mb-2">AFTER</div>
                  <p className="text-gray-700 font-body">{transformation.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            This Could Be Your Story in 90 Days
          </h3>
          <p className="text-lg font-body opacity-90 mb-6 max-w-3xl mx-auto">
            The strategies we'll share in this training have helped dozens of law firms transform their Google Ads results. 
            The question isn't whether it works—it's whether you'll take action.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Proven strategies
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Real case studies
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Actionable guidance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;