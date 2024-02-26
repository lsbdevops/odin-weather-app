import getCurrentWeather from './getWeather';
import WeatherStorage from './weatherData';

export default function processWeatherData(location) {
    getCurrentWeather(location)
        .then(data => {
            console.log(data);
            const extractedData = {
                location: data.location.name,
                time: data.location.localtime,
                temp: data.current.temp_c,
                feelsLike: data.current.feelslike_c,
                wind: data.current.wind_kph,
                humidity: data.current.humidity,
                uv: data.current.uv,
                condition: data.current.condition.text,
                conditionIcon: data.current.condition.icon,
            };
            return new WeatherStorage(extractedData);
        })
        .then(storedData => console.log(storedData))
}