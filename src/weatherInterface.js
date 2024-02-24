import getCurrentWeather from './getWeather';
import WeatherStorage from './weatherData';

export default function processWeatherData(location) {
    getCurrentWeather(location)
        .then(data => {
            const extractedData = {
                temp: data.current.temp_c,
                feelsLike: data.current.feelslike_c,
                wind: data.current.wind_kph,
                humidity: data.current.humidity,
                uv: data.current.uv,
            };
            return new WeatherStorage(extractedData);
        })
        .then(storedData => console.log(storedData))
}