export default class CurrentWeatherData {
    constructor(data) {
        this.city = data.location;
        this.country = data.country;
        this.time = data.time;
        this.temp = data.temp;
        this.tempFeelsLike = data.feelsLike;
        this.wind = data.wind;
        this.humidity = data.humidity;
        this.uv = data.uv;
        this.condition = data.condition;
        this.icon = data.conditionIcon;
    }

    get dateTime() {
        return `${this.formatTime()} (${this.formatDate()})`;
    }

    get location() {
        return this.formatLocation();
    }

    formatDate() {
        const date = new Date(this.time);
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
            hour -= 12;
            period = 'p.m.';
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