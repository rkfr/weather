import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Weather.scss';
import { useParams } from 'react-router-dom';
import {
  kelvinToCelsius,
  getTomeFromMilliseconds,
} from '../../helpers';

const Weather = (props) => {
  const { currentWeather } = props;
  const { id: locationName } = useParams();

  const { main, sys, weather } = currentWeather;
  // eslint-disable-next-line camelcase
  const { temp, temp_min, temp_max } = main;
  const { icon } = weather[0];

  const AvgTemp = kelvinToCelsius(temp);
  const minTemp = kelvinToCelsius(temp_min);
  const maxTemp = kelvinToCelsius(temp_max);

  const sunrise = getTomeFromMilliseconds(sys.sunrise);
  const sunset = getTomeFromMilliseconds(sys.sunset);

  return (
    <div className="content">
      <div className="weather">
        <div className="weather__location">
          <h1 className="weather__city-name">
            {locationName}
            , UA
          </h1>
          <p className="weather__date">Monday, 2 February</p>
        </div>

        <div className="weather__current-weather current-weather">
          <div className="current-weather__temperature">
            <div className="current-weather__icon-wrapper">
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Current weather icon" className="current-weather__icon" />
            </div>

            <div className="current-weather__main">
              <p className="current-weather__degree">
                {AvgTemp}
              </p>
              <p className="current-weather__description">
                Mostly sunny
              </p>
            </div>
          </div>

          <div className="current-weather__details">
            <div className="current-weather__details-item details-item">
              <p className="details-item__title details-item__temp">
                {maxTemp}
              </p>
              <p className="details-item__text">
                High
              </p>
            </div>
            <div className="current-weather__details-item details-item">
              <p className="details-item__title">
                7mph
              </p>
              <p className="details-item__text">
                Wind
              </p>
            </div>
            <div className="current-weather__details-item details-item">
              <p className="details-item__title">
                {sunrise}
              </p>
              <p className="details-item__text">
                Sunrise
              </p>
            </div>
            <div className="current-weather__details-item details-item">
              <p className="details-item__title details-item__temp">
                {minTemp}
              </p>
              <p className="details-item__text">
                Low
              </p>
            </div>
            <div className="current-weather__details-item details-item">
              <p className="details-item__title">
                {/* {`${rainPercent} %`} */}
                30%
              </p>
              <p className="details-item__text">
                Rain
              </p>
            </div>
            <div className="current-weather__details-item details-item">
              <p className="details-item__title">
                {sunset}
              </p>
              <p className="details-item__text">
                Sunset
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

Weather.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentWeather: PropTypes.object,
};

Weather.defaultProps = {
  currentWeather: null,
};

export default Weather;
