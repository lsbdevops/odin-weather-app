export default class CurrentWeatherData {
    constructor(data) {
        this.location = data.location;
        this.time = data.time;
        this.temp = data.temp;
        this.tempFeelsLike = data.feelsLike;
        this.wind = data.wind;
        this.humidity = data.humidity;
        this.uv = data.uv;
        this.condition = data.condition;
        this.icon = data.conditionIcon;
    }
}