import React from 'react';
import './ForecastList.scss';

import WeatherCard from '../WeatherCard';

const ForecastList = (props) => {
  const { title, link, forecast } = props;

  return (
    <div className="forecast-list">
      <section className="todays-weather">
        <div className="todays-weather__main">
          <h2 className="todays-weather__title">{title}</h2>
          {link && (
            link()
          )}

        </div>

        <div className="weather-cards">
          {forecast && (
            forecast.map((weather) => <WeatherCard key={weather.dt} weather={weather} />)
          )}
        </div>
      </section>
    </div>
  );
};

export default ForecastList;
