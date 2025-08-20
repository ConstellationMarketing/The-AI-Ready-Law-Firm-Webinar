import React from 'react';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              How We Cracked the 2025 Google Ads Code
            </h2>
            <p className="text-xl text-gray-600 font-body">
              The story of how one struggling law firm turned their Google Ads disaster into their biggest growth engine
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-red-600 mb-2">$8,500</div>
                <div className="text-gray-600 font-body">Monthly ad spend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-red-600 mb-2">3</div>
                <div className="text-gray-600 font-body">Quality leads per month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-red-600 mb-2">$2,833</div>
                <div className="text-gray-600 font-body">Cost per lead</div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 font-body text-center">
              <strong>March 2024:</strong> A personal injury firm came to us hemorrhaging money. 
              Their previous agency kept saying "Google Ads takes time\" while their cost per lead skyrocketed.
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-heading font-bold text-xl">1</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                  We Diagnosed the Real Problems
                </h3>
                <p className="text-gray-700 font-body text-lg leading-relaxed">
                  Their campaigns were victims of Google's 2024 automation changes. Smart bidding was bidding on everything, 
                  broad match keywords were attracting irrelevant traffic, and their landing pages weren't optimized for the new user journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-heading font-bold text-xl">2</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                  We Applied 2025-Ready Strategies
                </h3>
                <p className="text-gray-700 font-body text-lg leading-relaxed">
                  We restructured their campaigns using the exact framework we'll share in this training. 
                  New bidding strategies, updated keyword targeting, and conversion tracking that actually works with Google's current algorithm.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-heading font-bold text-xl">3</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                  The Results Spoke for Themselves
                </h3>
                <p className="text-gray-700 font-body text-lg leading-relaxed">
                  Within 90 days, they went from 3 leads per month to 28 qualified leads. 
                  Their cost per lead dropped from $2,833 to $425. Same budget, completely different results.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">28</div>
                <div className="text-gray-700 font-body">Quality leads per month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">$425</div>
                <div className="text-gray-700 font-body">Cost per lead</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">833%</div>
                <div className="text-gray-700 font-body">Lead increase</div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 font-body text-center">
              <strong>The difference?</strong> We knew how to work with Google's 2025 changes instead of fighting against them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;