import React from 'react';
import PropTypes from 'prop-types';
import './Weather.scss';
import { useParams } from 'react-router-dom';

const Weather = (props) => {
  const { id } = useParams();

  console.log(id);

  // const { weatherData } = props;

  return (
    <div>weather</div>
    // <div className="content">
    //   <div className="weather">
    //     <div className="weather__location">
    //       <h1 className="weather__city-name">
    //         {locationName}
    //         , UA
    //       </h1>
    //       <p className="weather__date">Monday, 2 February</p>
    //     </div>

  //     <div className="weather__current-weather current-weather">
  //       <div className="current-weather__temperature">
  //         <div className="current-weather__icon-wrapper">
  //           <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Current weather icon" className="current-weather__icon" />
  //         </div>

  //         <div className="current-weather__main">
  //           <p className="current-weather__degree">
  //             {AvgTemp}
  //           </p>
  //           <p className="current-weather__description">
  //             Mostly sunny
  //           </p>
  //         </div>
  //       </div>

  //       <div className="current-weather__details">
  //         <div className="current-weather__details-item details-item">
  //           <p className="details-item__title details-item__temp">
  //             {maxTemp}
  //           </p>
  //           <p className="details-item__text">
  //             High
  //           </p>
  //         </div>
  //         <div className="current-weather__details-item details-item">
  //           <p className="details-item__title">
  //             7mph
  //           </p>
  //           <p className="details-item__text">
  //             Wind
  //           </p>
  //         </div>
  //         <div className="current-weather__details-item details-item">
  //           <p className="details-item__title">
  //             {sunrise}
  //           </p>
  //           <p className="details-item__text">
  //             Sunrise
  //           </p>
  //         </div>
  //         <div className="current-weather__details-item details-item">
  //           <p className="details-item__title details-item__temp">
  //             {minTemp}
  //           </p>
  //           <p className="details-item__text">
  //             Low
  //           </p>
  //         </div>
  //         <div className="current-weather__details-item details-item">
  //           <p className="details-item__title">
  //             {/* {`${rainPercent} %`} */}
  //             30%
  //           </p>
  //           <p className="details-item__text">
  //             Rain
  //           </p>
  //         </div>
  //         <div className="current-weather__details-item details-item">
  //           <p className="details-item__title">
  //             {sunset}
  //           </p>
  //           <p className="details-item__text">
  //             Sunset
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  );
};

Weather.propTypes = {
};

Weather.defaultProps = {
};

export default Weather;
