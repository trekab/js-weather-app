// Init weather object
const weather = new Weather('Kampala');

weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));