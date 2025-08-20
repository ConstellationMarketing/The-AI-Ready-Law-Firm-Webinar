import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to August 29, 2025 at 12pm noon
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

  // Email validation helper
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation helper
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Client-side validation only
    if (!formData.name.trim()) {
      e.preventDefault();
      setError('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      e.preventDefault();
      setError('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || !isValidPhone(formData.phone)) {
      e.preventDefault();
      setError('Please enter a valid phone number.');
      return;
    }

    // If validation passes, let the form submit naturally to Netlify
    setIsSubmitting(true);
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      {/* Webinar Title - More prominent */}
      <div className="text-center mb-8">
        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3">
          The AI Ready Law Firm
        </h3>
        <p className="text-xl text-gray-600 font-body">
          Practical Tips to Make Your Firm Discoverable Online
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="text-center mb-8">
        <h4 className="text-lg font-heading font-semibold text-gray-900 mb-4">
          Training Starts In:
        </h4>
        <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
          <div className="bg-primary/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-heading font-bold text-primary">{timeLeft.days}</div>
            <div className="text-xs text-gray-600 font-body">Days</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-heading font-bold text-primary">{timeLeft.hours}</div>
            <div className="text-xs text-gray-600 font-body">Hours</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-heading font-bold text-primary">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-600 font-body">Minutes</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-heading font-bold text-primary">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-600 font-body">Seconds</div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
            <p className="text-red-800 font-body">{error}</p>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <form 
        name="webinar-registration"
        method="POST"
        action="https://webinar.goconstellation.com/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="webinar-registration" />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        
        <div className="text-center mb-6">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h5 className="text-xl font-heading font-bold text-gray-900 mb-2">
            Reserve Your Free Seat
          </h5>
          <p className="text-gray-600 font-body">
            Limited spots available. Secure your place in this exclusive training.
          </p>
        </div>
        
        <div className="space-y-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-body font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors font-body disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-body font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors font-body disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-body font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors font-body disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-body font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center group mb-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Calendar className="mr-2 h-5 w-5" />
          {isSubmitting ? 'Registering...' : 'Register for Free Training'}
        </button>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 font-body">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            60 minutes
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            August 29th • 12pm
          </div>
        </div>
        
        <p className="text-xs text-gray-500 font-body mt-4 text-center">
          We respect your privacy. No spam, ever. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;