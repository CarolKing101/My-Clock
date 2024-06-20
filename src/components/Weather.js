import React, { useEffect, useState } from 'react';

const Weather = ({ timeZone }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const cityName = timeZone.split('/')[1];
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=25dbb2565274d871f78e7b8e44a56132`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [timeZone]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weather) return <div>No weather data available</div>;

  return (
    <div className="weather">
      <h3>Weather in {weather.name}</h3>
      <p>{Math.round(weather.main.temp - 273.15)}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
