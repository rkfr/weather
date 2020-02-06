import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './InitialPageComponent.scss';

import { Input } from '../Input';
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
  const [errorGeo, setErrorGeo] = useState(null);

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
        setErrorGeo(message);
      });
  }, []);

  const loadWeather = () => {
    loadCurrentWeatherByCityName(cityQuery)
      .then(setWeather)
      .catch(() => setErrorGeo('invalid city name'));
  };

  return (
    <div className="search-page">
      <Input
        className="search-page__input"
        onChange={setCity}
        onSubmit={loadWeather}
        value={cityQuery}
        defaultInputVisibility={false}
      />
      {errorGeo && (
        <>
          <span
            style={{
              position: 'absolute',
              top: '51%',
              left: '48%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {errorGeo}
          </span>
        </>
      )}
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
