import React, { useEffect, useState } from 'react';
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
      .then(({ name }) => {
        setCity({ target: { value: name } });
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
    <div className="search-page">
      {isLoading && (
        <Loader />
      )}
      <Input
        className="search-page__input"
        caption="Click to find"
        isError={!!errorMessage}
        errorMessage={errorMessage}
        value={cityQuery}
        onChange={setCity}
        onSubmit={loadWeather}
      />
    </div>
  );
};

InitialPageComponent.propTypes = {
  setCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  cityQuery: PropTypes.string,
  startLoading: PropTypes.func.isRequired,
  finishLoading: PropTypes.func.isRequired,
};

InitialPageComponent.defaultProps = {
  cityQuery: '',
};

export default InitialPageComponent;
