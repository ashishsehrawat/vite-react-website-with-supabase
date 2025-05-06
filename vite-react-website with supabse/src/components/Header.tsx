import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import dvlogo from '../assets/dvlogo.jpg'; // Import the actual logo

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-indigo-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14">
             <img
              src={dvlogo}
              alt="Logo"
              className="w-14 h-14 mr-4 object-contain rounded-full"
            />
          </div>
          <div className={`font-serif transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            <h1 className="text-xl font-bold text-amber-400">THE DIVINE FORTUNE</h1>
            <p className="text-sm text-gray-300">1609 TAROT</p>
          </div>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'services', 'reviews', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-300 hover:text-amber-400 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-amber-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-indigo-950/95 backdrop-blur-md ${
          mobileMenuOpen ? 'max-h-64 py-0' : 'max-h-0 py-0'
        } overflow-hidden transition-all duration-300`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {['home', 'about', 'services', 'reviews', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;