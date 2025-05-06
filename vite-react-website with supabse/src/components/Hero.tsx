import React, { useEffect, useRef } from 'react';
import { GlowingOrb } from './animations/GlowingOrb';
import bgImage from '../assets/bg1.jpg';
import clogo from '../assets/clogo.png'; // Circular logo image

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div
            ref={textRef}
            className="text-center md:text-left md:w-1/2 opacity-0 transition-all duration-1000 translate-y-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-400 mb-4">
              THE DIVINE FORTUNE<br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-white">1609 TAROT</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-amber-400 mb-4 font-serif bold">
              Harness the Power of the Cosmos
            </h3>
            <p className="text-md md:text-lg text-white-400 mb-8 max-w-lg mx-auto md:mx-0">
              Discover your path through ancient wisdom and cosmic guidance. Tarot readings, astrology, numerology, and more to illuminate your journey.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Journey
            </button>
          </div>

          {/* Orb + Circular Logo */}
          <div className="mt-12 md:mt-0 md:w-1/2 relative flex justify-center items-center">
            <GlowingOrb />

            {/* Circular Logo Overlay */}
            <img 
              src={clogo} 
              alt="Circle Logo" 
              className="absolute w-40 h-40 rounded-full object-cover border-1 border-yellow-300 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }}
          className="animate-bounce text-gray-300 hover:text-amber-400 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
