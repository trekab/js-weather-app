import Weather from './weather';
import UI from './ui';
import Storage from './storage';

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const temperature = document.getElementById('w-string');
const toggleTemp = document.getElementById('toggle-temp');
const ui = new UI();

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.render(results);
    })
    .catch(err => err);
}

function getWeatherCel() {
  weather.getWeather()
    .then(results => {
      ui.renderCel(results);
    })
    .catch(err => err);
}

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);
  storage.setLocationData(city);

  getWeather();
  // eslint-disable-next-line no-undef
  $('#locModal').modal('hide');
});

toggleTemp.addEventListener('click', () => {
  if (temperature.textContent.substr(-1) === 'F') {
    getWeatherCel();
  } else {
    getWeather();
  }
});