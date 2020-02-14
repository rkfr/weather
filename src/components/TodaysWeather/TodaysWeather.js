import React from 'react';
import './TodaysWeather.scss';
import { Link, useLocation } from 'react-router-dom';
// import WeatherCard from '../WeatherCard';
import { forecastType } from '../../types';

import ForecastList from '../ForecastList';

const TodaysWeather = ({ forecast }) => {
  const { pathname } = useLocation();
  const locationArray = pathname.split('/');
  const locationName = locationArray[locationArray.length - 1];

  const link = () => (
    <Link
      className="todays-weather__link"
      to={`/forecast/${locationName}`}
    >
      Show forecast for 5 days
    </Link>
  );

  return (
  // <section className="todays-weather">
  //   <div className="todays-weather__main">
  //     <h2 className="todays-weather__title">Todays weather</h2>
  // <Link
  //   className="todays-weather__link"
  //   to={`/forecast/${locationName}`}
  // >
  //   Show forecast for 5 days
  // </Link>
  //   </div>

  //   <div className="weather-cards">
  //     {forecast && (
  //       forecast.map((weather) => <WeatherCard key={weather.dt} weather={weather} />)
  //     )}
  //   </div>
  // </section>

    <ForecastList
      link={link}
      title="Todays weather"
      forecast={forecast}
    />
  );
};

TodaysWeather.propTypes = {
  forecast: forecastType,
};

TodaysWeather.defaultProps = {
  forecast: [],
};

export default TodaysWeather;
