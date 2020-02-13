import React, { useEffect } from 'react';
import './Weather.scss';
import { useParams, useHistory } from 'react-router-dom';
import { currentWeatherType, currentWeatherTypeDefault } from '../../types';

import { Loader } from '../Loader';
import { Input } from '../Input';

const Weather = (props) => {
  const { id } = useParams();
  const {
    weatherData,
    loadWeather,
    locationQuery,
    changeLocationQuery,
    isLoading,
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
    <div className="content">
      {isLoading && (
        <Loader />
      )}
      {weatherData && (
        <main className="weather">
          <div className="weather__location">

            <div className="weather__location-wrapper">
              <h1 className="weather__city-name">
                {`${weatherData.locationName}, ${weatherData.country}`}
              </h1>
              <p className="weather__date">Monday, 2 February</p>
            </div>
            <Input
              caption="Find..."
              value={locationQuery}
              errorMessage={error}
              defaultInputVisibility={false}
              onChange={onLocationQueryChange}
              onSubmit={onSubmitWeather}
            />

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
                  {weatherData.tempMax}
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
                  {weatherData.tempMin}
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
      )}


    </div>

  );
};

Weather.propTypes = currentWeatherType;

Weather.defaultProps = currentWeatherTypeDefault;

export default Weather;
