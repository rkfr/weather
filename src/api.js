const API_KEY = '158d21ae5337a203dfccb519d821591d';
const URL = 'https://api.openweathermap.org/data/2.5';

export const getLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
})
  .then(({ coords }) => coords);

export const loadCurrentWeatherByCityName = (location) => (
  fetch(`${URL}/weather?q=${location}&appid=${API_KEY}`)
    .then((res) => res.json())
);

export const loadCurrentWeatherByCoords = (lat, lon) => (
  fetch(`${URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((res) => res.json())
);

export const loadDailyForecast = (location) => (
  fetch(`${URL}/forecast?q=${location}&appid=${API_KEY}`)
    .then((res) => res.json())
);

export const loadDailyForecastByCoords = (lat, lon) => (
  fetch(`${URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((res) => res.json())
);
