import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ForecastList.scss';

import { forecastType } from '../../types';
import WeatherCard from '../WeatherCard';
import { getAverageTemp } from '../../helpers';


const ForecastList = (props) => {
  const {
    title, url, linkText, forecast,
  } = props;

  const averageTemp = useMemo(() => getAverageTemp(forecast), [forecast]);

  return (
    <div className="forecast-list">
      <section>
        <div className="forecast-list__main">
          <div>
            <h2 className="forecast-list__title">{title}</h2>
            <p className="forecast-list__avg-temp">
              Average temperature:
              {' '}
              <span className="temp">{averageTemp}</span>
              {' '}
              C
            </p>
          </div>

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
