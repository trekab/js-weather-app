class Weather {
  constructor(city){
    this.apiKey = '7434c40835bfb8f326dd28b39c06f014';
    this.city = city;
  }

  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseMetric = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    const responseDataMetric = await responseMetric.json();

    return {
      name: responseData.name,
      main: responseData.main,
      weather: responseData.weather,
      wind: responseData.wind,
      cel: responseDataMetric.main.temp,
      feelsLikeCel: responseDataMetric.main.feels_like
    };
  }

  changeLocation(city){
    this.city = city;
  }
}