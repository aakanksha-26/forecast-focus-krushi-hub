
import React from 'react';
import { Search } from '@/components/SearchLocation';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6"
          >
            <path d="M8 9h12a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4Z" />
            <path d="M20 5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5Z" />
            <path d="M2 12h3" />
            <path d="M2 16h3" />
            <path d="M2 20h3" />
            <path d="M15 19h5" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold">WeatherCast</h1>
        </div>
        <div className="hidden md:block flex-1 max-w-md mx-4">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
