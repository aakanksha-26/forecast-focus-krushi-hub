
import React, { createContext, useState, useContext, useEffect } from 'react';

interface WeatherData {
  location: string;
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    pressure: number;
    feelsLike: number;
  };
  forecast: Array<{
    date: string;
    day: string;
    minTemp: number;
    maxTemp: number;
    condition: string;
    icon: string;
  }>;
}

interface WeatherContextType {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  setLocation: (location: string) => void;
}

const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  loading: false,
  error: null,
  setLocation: () => {},
});

// Mock data for demonstration
const mockWeatherData: WeatherData = {
  location: "New York, NY",
  current: {
    temp: 21,
    condition: "Partly cloudy",
    icon: "cloud-sun",
    humidity: 65,
    windSpeed: 12,
    pressure: 1012,
    feelsLike: 22,
  },
  forecast: [
    { date: "2025-05-15", day: "Today", minTemp: 18, maxTemp: 24, condition: "Partly cloudy", icon: "cloud-sun" },
    { date: "2025-05-16", day: "Fri", minTemp: 17, maxTemp: 23, condition: "Cloudy", icon: "cloud" },
    { date: "2025-05-17", day: "Sat", minTemp: 16, maxTemp: 22, condition: "Rain", icon: "cloud-rain" },
    { date: "2025-05-18", day: "Sun", minTemp: 15, maxTemp: 21, condition: "Showers", icon: "cloud-drizzle" },
    { date: "2025-05-19", day: "Mon", minTemp: 17, maxTemp: 24, condition: "Sunny", icon: "sun" },
  ],
};

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(mockWeatherData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const setLocation = (location: string) => {
    setLoading(true);
    setError(null);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setWeatherData({
        ...mockWeatherData,
        location,
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
