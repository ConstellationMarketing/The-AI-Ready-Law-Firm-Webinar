import React from 'react';
import { CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const realTestimonials = [
    {
      content: "Transformed their client acquisition strategy and significantly increased their online visibility and lead generation through strategic digital marketing initiatives.",
      firm: "White Oak Wills & Trusts",
      practiceArea: "Estate Planning Firm",
      image: "/whiteoakwillstrust.png",
    },
    {
      content: "Achieved remarkable growth in case volume and revenue through comprehensive marketing strategies that positioned them as leaders in their local market.",
      firm: "Henkels & Baker PC",
      practiceArea: "Personal Injury Law Firm",
      image: "/henkesandbaker.png",
    },
    {
      content: "Established dominant market presence and increased client acquisition through targeted marketing campaigns that showcased their expertise and track record.",
      firm: "Geller Law Group",
      practiceArea: "Criminal Defense Firm",
      image: "/samgeller.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Trusted by Leading Law Firms
          </h2>
          <p className="text-xl text-gray-600 font-body">
            See how we've helped law firms transform their marketing and grow their practice through strategic digital initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {realTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-700 font-body mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.firm}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-heading font-semibold text-gray-900">
                    {testimonial.firm}
                  </div>
                  <div className="text-sm text-gray-600 font-body">
                    {testimonial.practiceArea}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            This Could Be Your Story in 90 Days
          </h3>
          <p className="text-lg font-body opacity-90 mb-6 max-w-3xl mx-auto">
            The strategies we'll share in this training have helped dozens of law firms. Your competition is getting AI-ready. This is your advantage.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('signup');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 mb-6"
          >
            Save My Spot
          </button>
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

export default Testimonials;