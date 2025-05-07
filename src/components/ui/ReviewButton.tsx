import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ReviewButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
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
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <MessageCircle size={20} />
      <span className={`overflow-hidden transition-all duration-300 ${
        isHovered ? 'w-20 opacity-100' : 'w-0 opacity-0'
      }`}>
        Ask
      </span>
    </button>
  );
};

export default ReviewButton;