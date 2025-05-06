import React from 'react';
import { Instagram, Youtube, Phone } from 'lucide-react';
import dvlogo from '../assets/dvlogo.jpg'; // Import the actual logo

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-950/80 backdrop-blur-md border-t border-purple-500/20 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={dvlogo}
              alt="Logo"
              className="w-14 h-14 mr-4 object-contain rounded-full"
            />
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-400">THE DIVINE FORTUNE</h3>
              <p className="text-sm text-gray-400">1609 TAROT</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/the_divinefortune1609/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@Thedivinefortune1609"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="tel:+918448387314"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} The Divine Fortune 1609 Tarot. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }}
              className="hover:text-amber-400 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }}
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }}
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
