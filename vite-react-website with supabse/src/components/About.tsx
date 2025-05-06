import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      id="about" 
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2 relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
          </h2>
          <p className="text-gray-400 italic">Discover our cosmic journey</p>
        </div>
        
        <div 
          ref={textRef}
          className="bg-indigo-900/30 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto opacity-0 transition-all duration-1000 translate-y-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-700/20"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <Sparkles size={80} className="text-amber-400/80" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mystical Journey</h3>
              <p className="text-gray-300 mb-4">
                At The Divine Fortune 1609 Tarot, we believe that the cosmos holds the answers to life's most profound questions. Our practice is rooted in ancient wisdom, passed down through generations, combined with intuitive insights that transcend time and space.
              </p>
              <p className="text-gray-300 mb-4">
                With years of experience in tarot reading, astrology, numerology, aura cleansing, and palm reading, we offer comprehensive guidance that illuminates your path forward and helps you harness the divine energy that surrounds us all.
              </p>
              <p className="text-gray-300">
                Our mission is to help you connect with the higher realms, understand your true purpose, and navigate life's challenges with confidence and clarity.
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Experience", content: "Over a decade of mystical practice and spiritual guidance" },
              { title: "Approach", content: "Intuitive, compassionate, and empowering readings" },
              { title: "Philosophy", content: "Harnessing cosmic energy to illuminate your life's path" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-indigo-800/30 border border-purple-500/20">
                <h4 className="text-xl font-serif font-bold text-amber-400 mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;