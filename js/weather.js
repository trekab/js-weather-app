class Weather {
  constructor(city){
    this.apiKey = '7434c40835bfb8f326dd28b39c06f014';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return {
      main: responseData.main,
      weather: responseData.weather
    };
  }

  // Change weather location
  changeLocation(city){
    this.city = city;
  }
}