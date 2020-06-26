import Weather from './weather';
import UI from './ui';
import Storage from './storage';

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();

function getWeather() {
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
