import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './InitialPageComponent.scss';

import { Input } from '../Input';
import { Loader } from '../Loader';

const InitialPageComponent = (props) => {
  const {
    loadWeatherByGeolocation,
    locationQuery,
    changeLocationQuery,
    loadWeather,
    weatherData,
    isLoading,
    error,
  } = props;

  useEffect(() => {
    loadWeatherByGeolocation();
  }, []);

  const onLocationQueryChange = ({ target }) => {
    changeLocationQuery(target.value);
  };

  const onSubmitWeather = () => {
    loadWeather(locationQuery);
  };

  return (

    <div className="initial-page">
      {isLoading && (
        <Loader />
      )}

      <div className="content">
        <div className="initial-page__input-wrapper">

          <Input
            value={locationQuery}
            onChange={onLocationQueryChange}
            onSubmit={onSubmitWeather}
            errorMessage={error}
          />
          {(weatherData && !error) && (
          <div className="initial-page__location">
            <span>Show weather forecast for </span>
            <Link className="initial-page__link" to={`/weather/${weatherData.locationName}`}>{weatherData.locationName}</Link>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

InitialPageComponent.propTypes = {
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

InitialPageComponent.defaultProps = {
  locationQuery: [],
  weatherData: [],
  error: null,
  isLoading: false,
  loadWeather: () => {},
  changeLocationQuery: () => {},
  loadWeatherByGeolocation: () => {},
};

export default InitialPageComponent;
