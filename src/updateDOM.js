export default function updateCurrentWeather(weatherData) {
    // Get elements.
    const locationElement = document.querySelector('#location-header')
    const timeDateElement = document.querySelector('#location-time');
    const conditionElement = document.querySelector('#condition');
    const currentTempElement = document.querySelector('#current-temperature');
    const feelsLikeTempElement = document.querySelector('#feels-like-temperature');
    const windElement = document.querySelector('#wind');
    const humidityElement = document.querySelector('#humidity');
    const uvElement = document.querySelector('#uv');
    const conditionIconImg = document.querySelector('#condition-icon');

    locationElement.textContent = weatherData.location;
    timeDateElement.textContent = weatherData.dateTime;
    conditionElement.textContent = weatherData.condition;
    currentTempElement.textContent = weatherData.temp;
    feelsLikeTempElement.textContent = weatherData.tempFeelsLike;
    windElement.textContent = weatherData.wind;
    humidityElement.textContent = weatherData.humidity;
    uvElement.textContent = weatherData.uv;
    conditionIconImg.src = weatherData.icon;
}

function handleError(errorMsg) {
    document.querySelector('#error-msg').textContent = errorMsg;
} 

export {handleError}