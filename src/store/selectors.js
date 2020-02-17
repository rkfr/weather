
import { getDateFromUnixMs } from '../helpers';

export const getCurrentWeather = (state) => state.currentWeather;

export const getError = (state) => state.error;

export const getLoading = (state) => state.isLoading;

export const getLocationQuery = (state) => state.locationQuery;

export const getForecastByDays = (state) => {
  const forecast = state.forecast || [];

  const days = [];
  let day = [];

  forecast.forEach((weather) => {
    day.push(weather);

    if (weather.time === '00:00') {
      days.push({ date: getDateFromUnixMs(weather.dt), weather: day });
      day = [];
    }
  });

  return days;
};

export const getForecastForToday = ({ forecast = [] }) => ((forecast) ? forecast.slice(0, 7) : []);
