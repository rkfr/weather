import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InitialPageComponent.scss';

import { Input } from '../Input';
import { Loader } from '../Loader';

import { currentWeatherType, currentWeatherTypeDefault } from '../../types';

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

InitialPageComponent.propTypes = currentWeatherType;

InitialPageComponent.defaultProps = currentWeatherTypeDefault;

export default InitialPageComponent;
