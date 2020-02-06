const API_KEY = '533a08608e92af63d444a6312e4f704d';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const loadCurrentWeatherByCityName = (location) => (
  fetch(`${URL}?q=${location}&appid=${API_KEY}`)
    .then((res) => res.json())
);

export const loadCurrentWeatherByCoords = (lat, lon) => (
  fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((res) => res.json())
);

export const getLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
})
  .then(({ coords }) => coords);
