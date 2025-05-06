import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReviewButton from './components/ui/ReviewButton';

function App() {
  return (
    <div className="bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 text-gray-100 min-h-screen">
      <div className="stars-container overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <ReviewButton />
    </div>
  );
}

export default App;