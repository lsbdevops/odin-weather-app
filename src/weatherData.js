export default class CurrentWeatherData {
    constructor(data) {
        this.temp = data.temp;
        this.tempFeelsLike = data.feelsLike;
        this.wind = data.wind;
        this.humidity = data.humidity;
        this.uv = data.uv;
    }
}