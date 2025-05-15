
import React from 'react';
import { useWeather } from '@/hooks/useWeather';
import { 
  CloudSun, 
  CloudRain, 
  CloudDrizzle,
  CloudLightning, 
  CloudSnow,
  Wind,
  Droplets
} from 'lucide-react';

const getWeatherIcon = (iconName: string) => {
  switch (iconName) {
    case 'cloud-sun':
      return <CloudSun className="weather-icon" />;
    case 'cloud-rain':
      return <CloudRain className="weather-icon" />;
    case 'cloud-drizzle':
      return <CloudDrizzle className="weather-icon" />;
    case 'cloud-lightning':
      return <CloudLightning className="weather-icon" />;
    case 'cloud-snow':
      return <CloudSnow className="weather-icon" />;
    default:
      return <CloudSun className="weather-icon" />;
  }
};

const CurrentWeather: React.FC = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <div className="text-center py-10">Loading current weather data...</div>;
  if (error) return <div className="text-center py-10 text-destructive">Error: {error}</div>;
  if (!weatherData) return null;

  const { current, location } = weatherData;

  return (
    <div className="weather-card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">{location}</h2>
          <p className="text-muted-foreground">Today, {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          {getWeatherIcon(current.icon)}
          <span className="text-4xl font-bold ml-2">{current.temp}°C</span>
        </div>
      </div>

      <p className="my-4 text-lg">{current.condition}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="flex items-center">
          <Droplets className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Humidity</p>
            <p className="font-medium">{current.humidity}%</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Wind className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Wind Speed</p>
            <p className="font-medium">{current.windSpeed} km/h</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
            <path d="M12 3v2" />
            <path d="M12 19v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M3 12h2" />
            <path d="M19 12h2" />
            <path d="m4.93 19.07 1.41-1.41" />
            <path d="m17.66 6.34 1.41-1.41" />
          </svg>
          <div>
            <p className="text-sm text-muted-foreground">Feels Like</p>
            <p className="font-medium">{current.feelsLike}°C</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3v3" />
            <path d="M16 3v3" />
            <path d="M4 11h16" />
            <rect width="16" height="16" x="4" y="3" rx="2" />
            <path d="M8 16h.01" />
            <path d="M12 16h.01" />
            <path d="M16 16h.01" />
          </svg>
          <div>
            <p className="text-sm text-muted-foreground">Pressure</p>
            <p className="font-medium">{current.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
