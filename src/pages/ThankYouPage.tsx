import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, Clock, Mail, ArrowLeft, Download, Users, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to July 25, 2025 at 12pm noon
  useEffect(() => {
    const targetDate = new Date('2025-08-29T12:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Google Calendar link generator
  const generateGoogleCalendarLink = () => {
    const startDate = '20250829T120000'; // August 29, 2025 12:00 PM
    const endDate = '20250829T130000';   // August 29, 2025 1:00 PM (60 minutes)
    const title = encodeURIComponent('The AI Ready Law Firm: Practical Tips to Make Your Firm Discoverable Online');
    const details = encodeURIComponent('Free training webinar on AI optimization for law firms. Join here: https://meet.google.com/yqr-hhvd-wip');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&sf=true&output=xml`;
  };

  const bonuses = [
    '10-step AI optimization playbook specifically for law firms',
    'How to position your firm to be found by ChatGPT and AI assistants',
    'Content strategies that work for multiple practice areas',
    'Real case studies from firms already winning with AI-ready marketing',
    'Live Q&A session to get your specific questions answered',
    'Free 10-point AI readiness checklist (exclusive to attendees)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/Logo - PrimaryTransparent, Blue Title.png" 
                alt="Constellation Marketing for Law Firms"
                className="h-12"
              />
            </div>
            <Link 
              to="/"
              className="text-gray-600 hover:text-primary font-body font-medium transition-colors flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Thank You for Signing Up!
          </h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 font-body mb-4 leading-relaxed">
              Your registration for the webinar has been confirmed. We'll send you the access link and all the details to your email address shortly.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Make sure to check your spam folder just in case, and add us to your contacts to ensure you receive all our communications.
            </p>
          </div>

          {/* Prominent Add to Calendar Button */}
          <div className="mb-12">
            <a
              href={generateGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Plus className="mr-3 h-6 w-6" />
              Add to Google Calendar
            </a>
            <p className="text-sm text-gray-600 font-body mt-3">
              Don't miss the training - add it to your calendar now!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Training Starts In:
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-heading font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-gray-600 font-body">Days</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-heading font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-gray-600 font-body">Hours</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-heading font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-600 font-body">Minutes</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-heading font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-600 font-body">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
            Training Session Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Session Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <span className="font-body text-gray-700">August 29th</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span className="font-body text-gray-700">12:00 PM • 60 minutes</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span className="font-body text-gray-700">Limited seats available</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                What You'll Receive
              </h3>
              <ul className="space-y-2">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-gray-700">{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Important Reminder */}
      </div>
    </div>
  );
};

export default ThankYouPage;