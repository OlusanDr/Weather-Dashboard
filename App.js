import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (city) => {
        const response = await fetch(`/api/weather?city=${city}`);
        const data = await response.json();
        setWeatherData(data);
    };

    return (
        <div>
            <SearchBar fetchWeather={fetchWeather} />
            {weatherData && (
                <>
                    <CurrentWeather data={weatherData.current} />
                    <Forecast data={weatherData.forecast} />
                </>
            )}
        </div>
    );
};

export default App;

