import { loadCurrentWeatherByCityName } from '../api';

export const ACTION_TYPES = {
  SAVE_CURRENT_WEATHER: 'SAVE_CURRENT_WEATHER',
  SET_WEATHER_LOADING_ERROR: 'SET_WEATHER_LOADING_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
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

export const loadCurrentWeather = (locationName) => (dispatch) => {
  dispatch(startLoading());

  loadCurrentWeatherByCityName(locationName)
    .then((weatherData) => {
      if (!weatherData.cod) {
        dispatch(saveCurrentWeather(weatherData));
      } else {
        dispatch(setWeatherLoadingError(weatherData.message));
      }
    })
    .catch(() => dispatch(setWeatherLoadingError('Error something went wrong')))
    .finally(() => dispatch(stopLoading()));
};
