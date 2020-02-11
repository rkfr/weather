import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './InitialPageComponent.scss';

import { Input } from '../Input';
import { Loader } from '../Loader';
// import {} from '../../api';

const InitialPageComponent = (props) => {
  const {
    weatherData,
    isLoading,
    error,
    loadWeather,
  } = props;


  const load = () => {
    loadWeather('odessa');
  };

  return (

    <div>
      <div>{isLoading ? 'loading' : 'false'}</div>
      <button type="button" onClick={load}>load</button>
    </div>

  // <div className="initial-page">
  //   {isLoading && (
  //     <Loader />
  //   )}

  //   <div className="content">
  //     <div className="initial-page__input-wrapper">

  //       <Input
  //         isError={!!errorMessage}
  //         errorMessage={errorMessage}
  //         value={cityQuery}
  //         onChange={setCity}
  //         onSubmit={loadWeather}
  //       />
  //       {(weather && !errorMessage && cityQuery) && (
  //       <div className="initial-page__location">
  //         <span>Show weather forecast for </span>
  //         <Link className="initial-page__link" to={`/weather/${weather.name}`}>{weather.name}</Link>
  //       </div>
  //       )}

  //     </div>
  //   </div>


  // </div>
  );
};

InitialPageComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

InitialPageComponent.defaultProps = {
  weatherData: [],
  error: null,
  isLoading: false,
};

export default InitialPageComponent;
