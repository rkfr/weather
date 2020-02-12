import PropTypes from 'prop-types';

export const currentWeatherType = {
  locationQuery: PropTypes.string,
  weatherData: PropTypes.shape({
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
    icon: PropTypes.string,
  }),
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  loadWeather: PropTypes.func,
  changeLocationQuery: PropTypes.func,
  loadWeatherByGeolocation: PropTypes.func,
};

export const currentWeatherTypeDefault = {
  locationQuery: [],
  weatherData: [],
  error: null,
  isLoading: false,
  loadWeather: () => {},
  changeLocationQuery: () => {},
  loadWeatherByGeolocation: () => {},
};
