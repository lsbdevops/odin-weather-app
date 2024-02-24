export default function getCurrentWeatherData(location) {
    return new Promise(resolve => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=a52a2b9e0ebc473cb3a205450242102&q=${location}`)
            .then(response => response.json())
            .then(data => resolve(data))
    });
}

