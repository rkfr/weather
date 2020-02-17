import {
  loadCurrentWeatherByCityName,
  loadCurrentWeatherByCoords,
  loadDailyForecastByCoords,
  loadDailyForecast,
  getLocation,
} from '../api';

import { formatWeatherResponse, formatForecastResponse } from '../helpers';

export const ACTION_TYPES = {
  SAVE_CURRENT_WEATHER: 'SAVE_CURRENT_WEATHER',
  SAVE_CURRENT_FORECAST: 'SAVE_CURRENT_FORECAST',
  SET_WEATHER_LOADING_ERROR: 'SET_WEATHER_LOADING_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOCATION_QUERY: 'SET_LOCATION_QUERY',
  SAVE_TO_HISTORY: 'ADD_TO_QUERY_HISTORY',
};

export const saveCurrentWeather = (weather) => ({
  type: ACTION_TYPES.SAVE_CURRENT_WEATHER,
  weather,
});

export const saveCurrentForecast = (forecast) => ({
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

const saveToHistory = (queryData) => ({
  type: ACTION_TYPES.SAVE_TO_HISTORY,
  queryData,
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
    dispatch(saveCurrentWeather(
      formatWeatherResponse(currentWeather),
    ));
    dispatch(saveCurrentForecast(
      formatForecastResponse(weatherForecast),
    ));
  })
  .catch(() => dispatch(setWeatherLoadingError('User denied access to geolocation')))
  .finally(() => dispatch(stopLoading()));

export const loadCurrentWeather = (locationName) => (dispatch, getState) => {
  const { locationQuery, history } = getState();
  const dataFromHistory = history.find(({ location }) => location === locationQuery.toLowerCase());

  if (dataFromHistory) {
    const { weather, forecast } = dataFromHistory;

    dispatch(saveCurrentWeather(weather));
    dispatch(saveCurrentForecast(forecast));

    return;
  }

  dispatch(startLoading());

  // eslint-disable-next-line consistent-return
  return Promise.all([
    loadCurrentWeatherByCityName(locationName),
    loadDailyForecast(locationName),
  ])
    .then(([currentWeather, weatherForecast]) => {
      if (currentWeather.cod === '404') {
        throw new Error();
      }

      const formattedWeather = formatWeatherResponse(currentWeather);
      const formattedForecast = formatForecastResponse(weatherForecast);

      const historyData = {
        location: formattedWeather.locationName.toLowerCase(),
        weather: formattedWeather,
        forecast: formattedForecast,
      };

      dispatch(saveCurrentWeather(formattedWeather));
      dispatch(saveCurrentForecast(formattedForecast));

      dispatch(saveToHistory(historyData));
    })
    .catch(() => dispatch(setWeatherLoadingError('Location not found')))
    .finally(() => dispatch(stopLoading()));
};
