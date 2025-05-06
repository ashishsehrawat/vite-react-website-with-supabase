import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';
import ContactForm from './forms/ContactForm';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className="text-center mb-12 opacity-0 transition-all duration-1000 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
          </h2>
          <p className="text-gray-400 italic">Begin your cosmic journey today</p>
        </div>

        <div
          ref={contentRef}
          className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto opacity-0 transition-all duration-1000 translate-y-10"
        >
          <div className="lg:w-1/2 bg-indigo-900/30 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Get in Touch</h3>
            
            <ContactForm />
          </div>

          <div className="lg:w-1/2 bg-indigo-900/30 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Connect With Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={20} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+91 844 838 7314</p>
                  <p className="text-gray-400 text-sm mt-1">Available for calls and WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={20} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-300">Thedivinefotune1609tarot@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-1">For inquiries and appointments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-300">New Delhi, India</p>
                  <p className="text-gray-400 text-sm mt-1">Remote readings also available</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-purple-500/30">
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/the_divinefortune1609/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram size={24} className="text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Thedivinefortune1609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Youtube size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;