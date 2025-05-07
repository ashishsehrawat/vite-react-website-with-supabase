import React from 'react';

export const GlowingOrb = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 animate-pulse"></div>
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-600/40 animate-pulse animation-delay-300"></div>
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-700/50 to-blue-700/50 animate-pulse animation-delay-600"></div>
      
      {/* Stars */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        ></div>
      ))}
    </div>
  );
};