import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Moon, 
  Calculator, 
  Waves, 
  HeartHandshake, 
  Hand 
} from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const services = [
  {
    title: "Tarot Reading",
    description: "Unlock insights about your past, present, and future through the ancient wisdom of tarot cards. Our readings provide clarity and guidance for your life's journey.",
    icon: Sparkles,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Astrology",
    description: "Discover how celestial bodies influence your life. Our astrological readings analyze your birth chart to reveal your personality traits, life patterns, and potential.",
    icon: Moon,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Numerology",
    description: "Numbers hold powerful vibrations that can reveal your life path. Our numerology readings analyze significant numbers in your life to uncover your destiny.",
    icon: Calculator,
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "Aura Cleansing",
    description: "Purify your energy field and release negative influences. Our aura cleansing sessions restore balance and harmony to your spiritual, emotional, and physical being.",
    icon: Waves,
    color: "from-blue-400 to-teal-500"
  },
  {
    title: "Spiritual Remedies",
    description: "Custom spiritual solutions for life's challenges. Our remedies draw from ancient practices to help you overcome obstacles and attract positive energies.",
    icon: HeartHandshake,
    color: "from-amber-500 to-red-500"
  },
  {
    title: "Palm Reading",
    description: "The lines on your palm tell your unique story. Our palm readings interpret these natural markings to reveal insights about your character, relationships, and destiny.",
    icon: Hand,
    color: "from-green-500 to-teal-600"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className="text-center mb-12 opacity-0 transition-all duration-1000 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
          </h2>
          <p className="text-gray-400 italic">Mystical services to guide your path</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              gradientColor={service.color}
              isActive={activeService === index}
              setActiveService={setActiveService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;