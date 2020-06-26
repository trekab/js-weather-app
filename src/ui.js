class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.temperature = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  render(weather){
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description.toUpperCase();
    this.temperature.textContent = `${weather.main.temp}° F(${weather.cel}° C)`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Himidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}° F(${weather.feelsLikeCel}° C)`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind Direction: ${weather.wind.deg}° at ${weather.wind.speed} m/s`;
  }
}

export default UI;