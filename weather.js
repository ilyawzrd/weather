class Weather {
  constructor(city) {
    this.city = city;
    this.apiKey = 'ed748419a8eb487c878afa059c9fd286'
  }

async getWeather() {
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.apiKey}`)
  const responseData = await response.json();
  return responseData.data[0];
}

changeLocation(city) {
  this.city = city;
}

}