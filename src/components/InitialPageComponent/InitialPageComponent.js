import React from 'react';
import PropTypes from 'prop-types';
import './InitialPageComponent.scss';

// import { usePosition } from '../../hooks/usePosition';

const InitialPageComponent = (props) => {
  const {
    cityQuery,
    setCity,
  } = props;

  // const { latitude, longitude, error } = usePosition();

  return (
    <div>
      <input
        type="text"
        value={cityQuery}
        onChange={setCity}
      />
    </div>
  );
};

InitialPageComponent.propTypes = {
  cityQuery: PropTypes.string,
  setCity: PropTypes.func.isRequired,
};

InitialPageComponent.defaultProps = {
  cityQuery: '',
};

export default InitialPageComponent;
