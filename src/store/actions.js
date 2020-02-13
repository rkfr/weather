import {
  loadCurrentWeatherByCityName,
  loadCurrentWeatherByCoords,
  loadDailyForecastByCoords,
  loadDailyForecast,
  getLocation,
} from '../api';

export const ACTION_TYPES = {
  SAVE_CURRENT_WEATHER: 'SAVE_CURRENT_WEATHER',
  SAVE_CURRENT_FORECAST: 'SAVE_CURRENT_FORECAST',
  SET_WEATHER_LOADING_ERROR: 'SET_WEATHER_LOADING_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOCATION_QUERY: 'SET_LOCATION_QUERY',
};

const saveCurrentWeather = (weather) => ({
  type: ACTION_TYPES.SAVE_CURRENT_WEATHER,
  weather,
});

const saveCurrentForecast = (forecast) => ({
  type: ACTION_TYPES.SAVE_CURRENT_FORECAST,
  forecast,
});

const setWeatherLoadingError = (error) => ({
  type: ACTION_TYPES.SET_WEATHER_LOADING_ERROR,
  error,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

export const setLocationQuery = (query) => ({
  type: ACTION_TYPES.SET_LOCATION_QUERY,
  query,
});

export const loadCurrentWeatherByGeolocation = () => (dispatch) => getLocation()
  .then(({ latitude, longitude }) => {
    dispatch(startLoading());

    return Promise.all([
      loadCurrentWeatherByCoords(latitude, longitude),
      loadDailyForecastByCoords(latitude, longitude),
    ]);
  })
  .then(([currentWeather, weatherForecast]) => {
    dispatch(saveCurrentWeather(currentWeather));
    dispatch(saveCurrentForecast(weatherForecast));
  })
  .catch(() => dispatch(setWeatherLoadingError('User denied access to geolocation')))
  .finally(() => dispatch(stopLoading()));

export const loadCurrentWeather = (locationName) => (dispatch) => {
  dispatch(startLoading());

  return Promise.all([
    loadCurrentWeatherByCityName(locationName),
    loadDailyForecast(locationName),
  ])
    .then(([currentWeather, weatherForecast]) => {
      if (currentWeather.cod === '404') {
        throw new Error();
      }

      dispatch(saveCurrentWeather(currentWeather));
      dispatch(saveCurrentForecast(weatherForecast));
    })
    .catch(() => dispatch(setWeatherLoadingError('Location not found')))
    .finally(() => dispatch(stopLoading()));
};
