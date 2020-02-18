import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './InitialPageComponent.scss';

import { Input } from '../Input';
import { Loader } from '../Loader';

import { currentWeatherType } from '../../types';

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
            <Link
              className="initial-page__link"
              to={`/weather/${weatherData.locationName}`}
            >
              {`Show weather forecast for ${weatherData.locationName}`}
            </Link>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

InitialPageComponent.propTypes = {
  isLoading: PropTypes.bool,
  weatherData: currentWeatherType,
  loadWeather: PropTypes.func.isRequired,
  error: PropTypes.string,
  locationQuery: PropTypes.string,
  changeLocationQuery: PropTypes.func,
  loadWeatherByGeolocation: PropTypes.func,
};

InitialPageComponent.defaultProps = {
  isLoading: false,
  weatherData: [],
  error: '',
  locationQuery: '',
  changeLocationQuery: () => {},
  loadWeatherByGeolocation: () => {},
};

export default InitialPageComponent;
