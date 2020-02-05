import React from 'react';
import PropTypes from 'prop-types';
import './FindLocation.scss';

const FindLocation = (props) => {
  const {
    location,
    setLocation,
    currentWeather,
    setCurrentWeather,
  } = props;


  return (
    <div>FindLocation</div>
  );
};

FindLocation.propTypes = {
  location: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  currentWeather: PropTypes.array,
  setLocation: PropTypes.func.isRequired,
  setCurrentWeather: PropTypes.func.isRequired,
};

FindLocation.defaultProps = {
  location: '',
  currentWeather: [],
};

export default FindLocation;
