import {
  loadCurrentWeatherByCityName,
  loadCurrentWeatherByCoords,
  getLocation,
} from '../api';

export const ACTION_TYPES = {
  SAVE_CURRENT_WEATHER: 'SAVE_CURRENT_WEATHER',
  SET_WEATHER_LOADING_ERROR: 'SET_WEATHER_LOADING_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOCATION_QUERY: 'SET_LOCATION_QUERY',
};

const saveCurrentWeather = (weather) => ({
  type: ACTION_TYPES.SAVE_CURRENT_WEATHER,
  weather,
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

    return loadCurrentWeatherByCoords(latitude, longitude);
  })
  .then((weatherData) => dispatch(saveCurrentWeather(weatherData)))
  .catch(() => dispatch(setWeatherLoadingError('User denied access to geolocation')))
  .finally(() => dispatch(stopLoading()));

export const loadCurrentWeather = (locationName) => (dispatch) => {
  dispatch(startLoading());

  return loadCurrentWeatherByCityName(locationName)
    .then((weatherData) => dispatch(saveCurrentWeather(weatherData)))
    .catch(() => dispatch(setWeatherLoadingError('Location not found')))
    .finally(() => dispatch(stopLoading()));
};
