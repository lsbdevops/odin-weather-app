class WeatherData {
    constructor(data) {
        this.city = data.location;
        this.country = data.country;
        this.time = data.time;
    }

    get dateTime() {
        return `${this.formatTime()} (${this.formatDate(this.time)})`;
    }

    get location() {
        return this.formatLocation();
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`
    }

    formatTime() {
        const date = new Date(this.time);
        let hour = date.getHours();
        const minute = String(date.getMinutes()).padStart(2, '0');
        let period = 'a.m.';

        if (hour > 11) {
            period = 'p.m.';
        }

        if (hour > 12) {
            hour -= 12;
        }
        else if (hour === 0) {
            hour += 12;
        }

        return `${hour}:${minute} ${period}`;
    }

    formatLocation() {
        return `${this.city}, ${this.country}`;
    }
}

export default class CurrentData extends WeatherData {
    constructor(data) {
        super(data);
        this.temp = data.temp;
        this.tempFeelsLike = data.feelsLike;
        this.wind = data.wind;
        this.humidity = data.humidity;
        this.uv = data.uv;
        this.condition = data.condition;
        this.icon = data.conditionIcon;
    }
}

export class ForecastData extends WeatherData {
    constructor(data) {
        super(data);
        this.date = super.formatDate(data.date);
        this.maxTemp = data.maxTemp;
        this.minTemp = data.minTemp;
        this.rainChance = data.rainChance;
        this.totalPrecipitation = data.precipitation;
        this.humidity = data.humidity;
        this.uv = data.uv;
        this.condition = data.condition;
        this.icon = data.conditionIcon;
    }
}