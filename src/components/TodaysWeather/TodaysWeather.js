import React from 'react';
import './TodaysWeather.scss';
import WeatherCard from '../WeatherCard';
import { forecastType } from '../../types';

const TodaysWeather = ({ forecast }) => (
  <section className="todays-weather">
    <div className="todays-weather__main">
      <h2 className="todays-weather__title">Todays weather</h2>
      <a className="todays-weather__link" href="#">Show forecast for 5 days</a>
    </div>

    <div className="weather-cards">
      {forecast && (
        forecast.map((weather) => <WeatherCard key={weather.dt} weather={weather} />)
      )}
    </div>
  </section>
);

TodaysWeather.propTypes = {
  forecast: forecastType,
};

TodaysWeather.defaultProps = {
  forecast: [],
};

export default TodaysWeather;
