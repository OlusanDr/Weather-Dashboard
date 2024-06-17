const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${apiKey}&units=metric`;

    try {
        const currentWeatherResponse = await axios.get(currentWeatherUrl);
        const forecastResponse = await axios.get(forecastUrl);

        res.json({
            current: currentWeatherResponse.data,
            forecast: forecastResponse.data
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

