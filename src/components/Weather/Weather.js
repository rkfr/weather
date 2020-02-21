import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Weather.scss';
import { useParams, useHistory } from 'react-router-dom';
import { currentWeatherType, forecastType } from '../../types';
import { getCurrentDate } from '../../helpers';

import { Loader } from '../Loader';
import { Input } from '../Input';
import ForecastList from '../ForecastList';
import History from '../History';

const Weather = (props) => {
  const { id } = useParams();
  const {
    weatherData,
    loadWeather,
    locationQuery,
    changeLocationQuery,
    isLoading,
    forecast,
    error,
  } = props;

  const history = useHistory();
  useEffect(() => {
    if (!weatherData) {
      loadWeather(id);
    } else {
      history.push(`/weather/${weatherData.locationName}`);
    }
  }, [weatherData]);

  const onLocationQueryChange = ({ target }) => {
    changeLocationQuery(target.value);
  };

  const onSubmitWeather = () => {
    loadWeather(locationQuery);
  };

  return (
    <div className="content weather-wrapper">
      {isLoading && (
        <Loader />
      )}

      {weatherData && (
        <>
          <main className="weather">
            <div className="weather__location">

              <div className="weather__location-wrapper">
                <h1 className="weather__city-name">
                  {`${weatherData.locationName}, ${weatherData.country}`}
                </h1>
                <p className="weather__date">{getCurrentDate()}</p>
              </div>
              <div className="weather__search">
                <Input
                  caption="Find..."
                  value={locationQuery}
                  errorMessage={error}
                  defaultInputVisibility={false}
                  onChange={onLocationQueryChange}
                  onSubmit={onSubmitWeather}
                />
                {!error && <History />}
              </div>


            </div>

            <div className="weather__current-weather current-weather">
              <div className="current-weather__temperature">
                <div className="current-weather__icon-wrapper">
                  <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Current weather icon" className="current-weather__icon" />
                </div>

                <div className="current-weather__main">
                  <p className="current-weather__degree">
                    {weatherData.temperature}
                  </p>
                  <p className="current-weather__description">
                    {weatherData.description}
                  </p>
                </div>
              </div>

              <div className="current-weather__details">
                <div className="current-weather__details-item details-item">
                  <p className="details-item__title details-item__temp">
                    {`${weatherData.tempMax} C`}
                  </p>
                  <p className="details-item__text">
                    High
                  </p>
                </div>
                <div className="current-weather__details-item details-item">
                  <p className="details-item__title">
                    {`${weatherData.windSpeed} mph`}
                  </p>
                  <p className="details-item__text">
                    Wind
                  </p>
                </div>
                <div className="current-weather__details-item details-item">
                  <p className="details-item__title">
                    {weatherData.sunrise}
                  </p>
                  <p className="details-item__text">
                    Sunrise
                  </p>
                </div>
                <div className="current-weather__details-item details-item">
                  <p className="details-item__title details-item__temp">
                    {`${weatherData.tempMin} C`}
                  </p>
                  <p className="details-item__text">
                    Low
                  </p>
                </div>
                <div className="current-weather__details-item details-item">
                  <p className="details-item__title">
                    {`${weatherData.humidity}%`}
                  </p>
                  <p className="details-item__text">
                    {weatherData.weatherState}
                  </p>
                </div>
                <div className="current-weather__details-item details-item">
                  <p className="details-item__title">
                    {weatherData.sunset}
                  </p>
                  <p className="details-item__text">
                    Sunset
                  </p>
                </div>
              </div>
            </div>
          </main>

          <ForecastList
            url={`/forecast/${id}`}
            linkText="Show forecast for 5 days"
            title="Todays weather"
            forecast={forecast}
            defaultDetailsVisibility
          />
        </>
      )}
    </div>

  );
};

Weather.propTypes = {
  isLoading: PropTypes.bool,
  weatherData: currentWeatherType,
  forecast: forecastType,
  loadWeather: PropTypes.func.isRequired,
  error: PropTypes.string,
  locationQuery: PropTypes.string,
  changeLocationQuery: PropTypes.func,
};

Weather.defaultProps = {
  isLoading: false,
  weatherData: [],
  forecast: [],
  error: '',
  locationQuery: '',
  changeLocationQuery: () => {},
};

export default Weather;
