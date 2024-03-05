import getWeather from './getWeather';
import WeatherStorage from './weatherData';
import { handleError, createCurrentWeatherInfo } from './updateDOM';

export default function processCurrentWeatherData(location) {
    return getWeather('current', location)
        .then(data => {
            if (data.error) {
                throw new Error(data.error.message);
            }
            else {
                const extractedData = {
                    location: data.location.name,
                    country: data.location.country,
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
            }
        })
        .then(storedData => {
            createCurrentWeatherInfo(storedData);
            return storedData.location;
        })
    .catch(err => handleError(err))
}

function processForecastWeatherData(location) {
    getWeather('forecast', location)
        .then(data => {
            console.log(data);
        })
}

export {processForecastWeatherData}