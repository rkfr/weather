import PropTypes from 'prop-types';

export const forecastWeatherType = PropTypes.shape({
  dt: PropTypes.number,
  time: PropTypes.string,
  icon: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
});

export const forecastByDaysType = PropTypes.arrayOf(
  PropTypes.shape({
    date: PropTypes.string,
    weather: PropTypes.arrayOf(forecastWeatherType),
  }),
);

export const forecastType = PropTypes.arrayOf(forecastWeatherType);

export const currentWeatherType = PropTypes.shape({
  locationName: PropTypes.string,
  country: PropTypes.string,
  weatherState: PropTypes.string,
  description: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  temperature: PropTypes.number,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  windSpeed: PropTypes.number,
  humidity: PropTypes.number,
  icon: PropTypes.string,
});

export const historyType = PropTypes.arrayOf(
  PropTypes.shape({
    location: PropTypes.string,
    weather: currentWeatherType,
    forecast: forecastType,
  }),
);
