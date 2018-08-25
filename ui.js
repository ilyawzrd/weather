class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = weather.city_name;
    this.desc.textContent = weather.weather.description;
    this.string.textContent = `${weather.temp}C`;
    this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`);
    this.humidity.textContent = `Влажность: ${weather.rh}%`;
    this.feelslike.textContent = `Ощущается как: ${weather.app_temp}C`;
    this.wind.textContent = `Ветер: ${weather.wind_spd.toFixed(1)}m/s`;
  }
}