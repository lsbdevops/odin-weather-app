import "./style.css";
import getCurrentData, { processForecastWeatherData as getForecastData } from './weatherInterface';

const locationSearchBox = document.querySelector('#location-search');
const locationSearchBtn = document.querySelector('#submit-location-search');
const currentWeatherBtn = document.querySelector('#current-weather');
const forecastWeatherBtn = document.querySelector('#forecast-weather');
const errorMsg = document.querySelector('#error-msg');

let location;

// Request user's location.
function setLocalLocation(position) {
    location = `${position.coords.latitude},${position.coords.longitude}`;
    getCurrentData(location).then((locationResult) => {
            location = locationResult;
        });;
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setLocalLocation);
}

locationSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (locationSearchBox.value && locationSearchBox.validity.valid) {
        errorMsg.textContent = '';
        getCurrentData(locationSearchBox.value).then((locationResult) => {
            location = locationResult;
        });
    }
    else if (locationSearchBox.validity.valueMissing) {
        errorMsg.textContent = 'Error: Search field empty.';
    }
    else if (locationSearchBox.validity.patternMismatch) {
        errorMsg.textContent = 'Error: Search must only include letters.';
    }
})

currentWeatherBtn.addEventListener('click', () => {
    if (location) {
        getCurrentData(location);
    }
})

forecastWeatherBtn.addEventListener('click', () => {
    if (location) {
        getForecastData(location);
    }
})