
import React from 'react';
import Navbar from '@/components/Navbar';
import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';
import { Search } from '@/components/SearchLocation';
import { WeatherProvider } from '@/hooks/useWeather';

const Index = () => {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-6 flex-1">
          <div className="md:hidden mb-6">
            <Search />
          </div>
          
          <section className="mb-8">
            <CurrentWeather />
          </section>
          
          <section>
            <Forecast />
          </section>
        </main>
        
        <footer className="bg-primary/10 py-4 mt-auto">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} WeatherCast - Weather Forecast Service</p>
          </div>
        </footer>
      </div>
    </WeatherProvider>
  );
};

export default Index;
