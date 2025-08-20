import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Offer from '../components/Offer';
import Amplify from '../components/Amplify';
import Story from '../components/Story';
import Transformation from '../components/Transformation';
import MeetYourHosts from '../components/PatrickCarver';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      
      {/* Form section right after hero */}
      <section id="signup" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      
      <Offer />
      <Amplify />
      <MeetYourHosts />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;