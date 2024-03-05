import createEl from './createDOMElement';

function handleError(errorMsg) {
    document.querySelector('#error-msg').textContent = errorMsg;
} 

function createCurrentWeatherInfo(weatherData) {
    document.querySelector('#location-header').textContent = weatherData.location;
    document.querySelector('#location-time').textContent = weatherData.dateTime;

    const iconContainer = createEl({ tag: 'div', attributes: { id: 'weather-icon' } });
    const icon = createEl({
        tag: 'img', attributes: {
            src: weatherData.icon,
            alt: 'Current Weather Condition Icon',
            id: 'condition-icon',
        }
    });

    iconContainer.appendChild(icon);

    const currentConditions = createEl({ tag: 'div', attributes: { id: 'condition' } });

    const currentTemp = createEl({ tag: 'span', cls: 'weather-data', text: weatherData.temp, attributes: { id: 'current-temperature' } });
    const currentTempUnits = createEl({ tag: 'span', cls: 'units', text: '°c' });

    const feelsLikeText = createEl({tag: 'span', text: 'Feels like:'});
    const feelsLikeTemp = createEl({ tag: 'span', cls: 'weather-data', text: weatherData.tempFeelsLike, attributes: { id: 'feels-like-temperature' } });
    const feelsLikeTempUnits = createEl({ tag: 'span', cls: 'units', text: '°c' });

    const windText = createEl({ tag: 'span', text: 'Wind:' });
    const wind = createEl({ tag: 'span', cls: 'weather-data', text: weatherData.wind, attributes: { id: 'wind' } });
    const windUnits = createEl({ tag: 'span', cls: 'units', text: 'kph' });

    const humidityText = createEl({ tag: 'span', text: 'Humidity:' });
    const humidity = createEl({ tag: 'span', cls: 'weather-data', text: weatherData.humidity, attributes: { id: 'humidity' } });
    const humidityUnits = createEl({ tag: 'span', cls: 'units', text: '%' });

    const uvText = createEl({ tag: 'span', text: 'UV Index:' });
    const uv = createEl({ tag: 'span', cls: 'weather-data', text: weatherData.uv, attributes: { id: 'uv' } });
    const uvUnits = createEl({ tag: 'span', cls: 'units', text: '' });

    let container;
    if (document.querySelector('.weather-info')) {
        container = document.querySelector('.weather-info');
        container.textContent = '';
    }
    else {
        container = createEl({ tag: 'div', cls: 'weather-info' });
    }
    
    container.append(currentConditions, iconContainer,
        currentTemp, currentTempUnits,
        feelsLikeText, feelsLikeTemp, feelsLikeTempUnits,
        windText, wind, windUnits,
        humidityText, humidity, humidityUnits,
        uvText, uv, uvUnits);
    
    document.querySelector('.weather-container').appendChild(container);
}

export {handleError, createCurrentWeatherInfo}