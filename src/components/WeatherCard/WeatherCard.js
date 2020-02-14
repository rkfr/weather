import React from 'react';
import './WeatherCard.scss';
import { forecastWeatherType } from '../../types';

const WeatherCard = ({ weather }) => (
  <div className="weather-card">
    <h3 className="weather-card__time">{ weather.time }</h3>
    <img
      className="weather-card__image"
      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      alt="Weather"
    />
    <p className="weather-card__temp">{`${weather.temperature} ${'\u00b0'}C`}</p>
    <p className="weather-card__desc">{weather.description}</p>
  </div>
);

WeatherCard.propTypes = {
  weather: forecastWeatherType,
};

WeatherCard.defaultProps = {
  weather: [],
};

export default WeatherCard;
