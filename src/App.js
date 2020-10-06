
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Temperature from './components/Temperature';
import Location from './components/Location';
import './style.css'
const dotenv = require('dotenv').config()

const App = () => {
    const [weatherData, setWeatherData] = useState({
        temp: [
            {
                temperature: '85',
                unit: 'F'
            }
        ],
        location: 'Temecula, CA',
        forecast: 'Sunny',
    });

    const api_key = process.env.REACT_APP_API_KEY

    const handleCitySearch = async (query, queryUnit, degreeUnit) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: query,
                appid: api_key,
                units: queryUnit,
            }
        })
        
        setWeatherData({
            temp: [
                {
                    temperature: Math.round(response.data.main.temp),
                    unit: degreeUnit,
                }
            ],
            location: `${response.data.name}, ${response.data.sys.country}`,
            forecast: `${response.data.weather[0].description.charAt(0).toUpperCase()}${response.data.weather[0].description.slice(1)}`,
        })
    };

    return (
        <div className="container">
            <Header />
            <SearchBar onSubmit={handleCitySearch} />
            <Temperature
                temperature={weatherData.temp[0].temperature}
                unit={weatherData.temp[0].unit}
                forecast={weatherData.forecast} />
            <Location location={weatherData.location} />
        </div>
    )
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
