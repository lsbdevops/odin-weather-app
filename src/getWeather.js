export default function getWeatherData(type, location) {
    return new Promise(resolve => {
        let numberOfDays = '';
        if (type === 'forecast') {
            numberOfDays = '&days=3';
        }
        fetch(`http://api.weatherapi.com/v1/${type}.json?key=a52a2b9e0ebc473cb3a205450242102&q=${location}${numberOfDays}`)
            .then(response => response.json())
            .then(data => resolve(data))
    });
}

