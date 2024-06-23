import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState('New York');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (location) => {
        const apiKey = '25dbb2565274d871f78e7b8e44a56132';
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData(location);
    }, [location]);

    return (
        <div>
            <h2>Weather</h2>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Accra">Accra</option>
            </select>
            {weatherData && (
                <div>
                    <h3>Weather in {weatherData.name}</h3>
                    <p>{weatherData.main.temp}°C</p>
                    <p>{weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
