import React from 'react';
import './Forecast.scss';
import { useHistory, Redirect } from 'react-router-dom';

import { forecastByDaysType } from '../../types';

import ForecastList from '../ForecastList';

const Forecast = ({ forecast }) => {
  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (

    <div className="content">
      <div className="forecast">
        <button
          className="forecast__back-button"
          type="button"
          onClick={back}
        >
          &#8592; Back
        </button>

        {forecast.length ? (
          forecast.map(({ date, weather }) => (
            <ForecastList
              key={date}
              title={date}
              forecast={weather}
            />
          ))
        ) : (
          <Redirect to="/404" />
        )}


      </div>
    </div>

  );
};

Forecast.propTypes = {
  forecast: forecastByDaysType,
};

Forecast.defaultProps = {
  forecast: [],
};

export default Forecast;
