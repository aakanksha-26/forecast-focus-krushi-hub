
import React, { useState } from 'react';
import { useWeather } from '@/hooks/useWeather';

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const { setLocation } = useWeather();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setLocation(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search location..."
        className="w-full px-4 py-2 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button 
        type="submit" 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    </form>
  );
};
