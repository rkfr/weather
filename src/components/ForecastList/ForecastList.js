import React from 'react';
import PropTypes from 'prop-types';
import './ForecastList.scss';

import { Link } from 'react-router-dom';
import { forecastType } from '../../types';
import WeatherCard from '../WeatherCard';

const ForecastList = (props) => {
  const {
    title, url, linkText, forecast,
  } = props;

  return (
    <div className="forecast-list">
      <section>
        <div className="forecast-list__main">
          <h2 className="forecast-list__title">{title}</h2>
          {url && (
            <Link
              className="forecast-list__link"
              to={url}
            >
              {linkText}
            </Link>
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

ForecastList.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  linkText: PropTypes.string,
  forecast: forecastType,
};

ForecastList.defaultProps = {
  title: '',
  url: '',
  linkText: '',
  forecast: [],
};

export default ForecastList;
