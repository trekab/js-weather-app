import Weather from './weather';
import UI from './ui';
import Storage from './storage';

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const temperature = document.getElementById('w-string');
const toggleTemp = document.getElementById('toggle-temp');
const ui = new UI();

const toF = (temp) => {
  return (temp * (9 / 5)) + 32;
};

const toC = (temp) => {
  return (temp - 32) * (5 / 9);
};

const getWeather = () => {
  weather.getWeather()
    .then(results => {
      ui.render(results);
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
    temperature.textContent = `${toC(parseInt(temperature.textContent, 10)).toFixed()} °C`;
  } else {
    temperature.textContent = `${toF(parseInt(temperature.textContent, 10)).toFixed()} °F`;
  }
});