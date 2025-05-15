
import React from 'react';
import { useWeather } from '@/hooks/useWeather';
import { 
  CloudSun, 
  CloudRain, 
  CloudDrizzle,
  CloudLightning, 
  CloudSnow,
  Sun
} from 'lucide-react';

const getWeatherIcon = (iconName: string, size = 'small') => {
  const className = size === 'small' ? 'h-6 w-6 text-primary' : 'weather-icon';
  
  switch (iconName) {
    case 'cloud-sun':
      return <CloudSun className={className} />;
    case 'cloud-rain':
      return <CloudRain className={className} />;
    case 'cloud-drizzle':
      return <CloudDrizzle className={className} />;
    case 'cloud-lightning':
      return <CloudLightning className={className} />;
    case 'cloud-snow':
      return <CloudSnow className={className} />;
    case 'sun':
      return <Sun className={className} />;
    default:
      return <CloudSun className={className} />;
  }
};

const Forecast: React.FC = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <div className="text-center py-5">Loading forecast data...</div>;
  if (error) return <div className="text-center py-5 text-destructive">Error: {error}</div>;
  if (!weatherData) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {weatherData.forecast.map((day) => (
          <div key={day.date} className="forecast-card">
            <p className="font-medium">{day.day}</p>
            <div className="flex justify-center my-3">
              {getWeatherIcon(day.icon)}
            </div>
            <p className="text-sm text-center">{day.condition}</p>
            <div className="flex justify-between mt-2">
              <span className="font-medium">{day.maxTemp}°</span>
              <span className="text-muted-foreground">{day.minTemp}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
