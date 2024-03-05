import "./style.css";
import getCurrentData, { processForecastWeatherData as getForecastData } from './weatherInterface';

// Default location.
let location = 'melbourne';
//getCurrentData(location);

const locationSearchBox = document.querySelector('#location-search');
const locationSearchBtn = document.querySelector('#submit-location-search');
const currentWeatherBtn = document.querySelector('#current-weather');
const forecastWeatherBtn = document.querySelector('#forecast-weather');
const errorMsg = document.querySelector('#error-msg');

locationSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (locationSearchBox.value && locationSearchBox.validity.valid) {
        errorMsg.textContent = '';
        getCurrentData(locationSearchBox.value).then((locationResult) => {
            location = locationResult
        });
    }
    else if (locationSearchBox.validity.valueMissing) {
        errorMsg.textContent = 'Error: Search field empty.';
    }
    else if (locationSearchBox.validity.patternMismatch) {
        errorMsg.textContent = 'Error: Search must only include letters.';
    }
})

currentWeatherBtn.addEventListener('click', (e) => {
    getCurrentData(location);
})

forecastWeatherBtn.addEventListener('click', (e) => {
    getForecastData(location);
})