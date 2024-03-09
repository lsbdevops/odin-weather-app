import getWeather from './getWeather';
import CurrentWeatherStorage, {ForecastData as ForecastWeatherStorage} from './weatherData';
import { handleError, createCurrentWeatherInfo, createForecastWeatherInfo, removeWeatherInfo } from './updateDOM';

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
                return new CurrentWeatherStorage(extractedData);
            }
        })
        .then(storedData => {
            removeWeatherInfo();
            createCurrentWeatherInfo(storedData);
            return storedData.location;
        })
        .catch(err => handleError(err))
}

function processForecastWeatherData(location) {
    getWeather('forecast', location)
        .then(data => {
            if (data.error) {
                throw new Error(data.error.message);
            }
            const forecastData = [];

            data.forecast.forecastday.forEach((day) => {
                const extractedData = {
                    location: data.location.name,
                    country: data.location.country,
                    time: data.location.localtime,
                    date: day.date,
                    maxTemp: day.day.maxtemp_c,
                    minTemp: day.day.mintemp_c,
                    rainChance: day.day.daily_chance_of_rain,
                    precipitation: day.day.totalprecip_mm,
                    humidity: day.day.avghumidity,
                    uv: day.day.uv,
                    condition: day.day.condition.text,
                    conditionIcon: day.day.condition.icon,
                };

                forecastData.push(new ForecastWeatherStorage(extractedData));
            })

            return forecastData;
        })
        .then((forecastData) => {
            removeWeatherInfo();

            forecastData.forEach((day) => {
                createForecastWeatherInfo(day);
            })
        })
        .catch(err => handleError(err))
}

export {processForecastWeatherData}