import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ size = 'md' }) => {
  const sizes = {
    sm: { height: 'h-8', text: 'text-xl' },
    md: { height: 'h-10', text: 'text-2xl' },
    lg: { height: 'h-12', text: 'text-3xl' },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <img
        src={logoImg}
        alt="LixSpace Logo"
        className={`${currentSize.height} w-auto object-contain rounded-xl drop-shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0`}
      />
    </div>
  );
};

export default Logo;
