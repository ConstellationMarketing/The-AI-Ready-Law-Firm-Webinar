import React from 'react';
import { Gift, CheckCircle, Calendar, Clock, Users } from 'lucide-react';

const Offer: React.FC = () => {
  const whatYouGet = [
    '10-step AI optimization playbook specifically for law firms',
    'How to position your firm to be found by ChatGPT and AI assistants',
    'Content strategies that work for Bankruptcy, Criminal, Estate Planning, Family, Immigration, and Personal Injury',
    'Real case studies from firms already winning with AI-ready marketing',
    'Live Q&A session to get your specific questions answered',
    'Free 10-point AI readiness checklist (exclusive to attendees)'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Here's Everything You Get
          </h2>
          <p className="text-xl text-gray-600 font-body">
            This isn't just another webinar. It's a tactical training session designed specifically for attorneys in Bankruptcy, Criminal, Estate Planning, Family, Immigration, and Personal Injury.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Gift className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-heading font-bold text-gray-900">
                  Free 60-Minute AI Strategy Session
                </h3>
              </div>
              
              <ul className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Session Details:
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-body font-semibold text-gray-900">August 29th</div>
                </div>
                <div>
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-body font-semibold text-gray-900">12pm • 60 Min</div>
                </div>
                <div>
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-body font-semibold text-gray-900">Limited Seats</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-heading font-bold text-primary mb-4">FREE</div>
              <div className="text-2xl font-heading font-semibold text-gray-900 mb-2">
                Normally $497
              </div>
              <div className="text-gray-600 font-body">
                We're offering this training free because we know the value of helping law firms get AI-ready before their competition.
              </div>
            </div>
            
            <button 
              onClick={() => {
                const element = document.getElementById('signup');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 w-full mb-4"
            >
              Claim Your Free Seat Now
            </button>
            
            <p className="text-sm text-gray-500 font-body">
              No credit card required. Just your name and email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;