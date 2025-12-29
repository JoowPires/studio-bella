import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Schedule />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
