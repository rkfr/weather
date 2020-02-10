import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './InitialPageComponent.scss';

import { Input } from '../Input';
import { Loader } from '../Loader';
import {
  getLocation,
  loadCurrentWeatherByCoords,
  loadCurrentWeatherByCityName,
} from '../../api';

const InitialPageComponent = (props) => {
  const {
    weather,
    isLoading,
    cityQuery,
    setCity,
    setWeather,
    startLoading,
    finishLoading,
  } = props;
  const [errorMessage, setError] = useState(null);

  useEffect(() => {
    getLocation()
      .then(({ latitude, longitude }) => {
        startLoading();
        return loadCurrentWeatherByCoords(latitude, longitude);
      })
      .then((weatherData) => {
        setCity({ target: { value: weatherData.name } });
        setWeather(weatherData);
        finishLoading();
      })
      .catch(({ message }) => {
        setError(message);
      });
  }, []);

  const loadWeather = (event) => {
    event.preventDefault();
    startLoading();

    loadCurrentWeatherByCityName(cityQuery)
      .then(((weatherData) => {
        setWeather(weatherData);
        if (weatherData.cod === '404') {
          setError(weatherData.message);
        } else {
          setError(null);
        }

        finishLoading();
      }))
      .catch(() => setError('Error'));
  };


  return (
    <div className="initial-page">
      {isLoading && (
        <Loader />
      )}

      <div className="content">
        <div className="initial-page__input-wrapper">

          <Input
// caption="Click to find"
            isError={!!errorMessage}
            errorMessage={errorMessage}
            value={cityQuery}
            onChange={setCity}
            onSubmit={loadWeather}
          />
          {(weather && !errorMessage && cityQuery) && (
          <div className="initial-page__location">
            <span>Show weather forecast for </span>
            <Link className="initial-page__link" to={`/weather/${weather.name}`}>{weather.name}</Link>
          </div>
          )}

        </div>
      </div>


    </div>
  );
};

InitialPageComponent.propTypes = {
  setCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  startLoading: PropTypes.func.isRequired,
  finishLoading: PropTypes.func.isRequired,
  cityQuery: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  weather: PropTypes.object,
};

InitialPageComponent.defaultProps = {
  cityQuery: '',
  weather: [],
};

export default InitialPageComponent;
