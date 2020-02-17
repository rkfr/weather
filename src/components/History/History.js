import React from 'react';
import PropTypes from 'prop-types';
import './History.scss';
import { Link } from 'react-router-dom';
import { historyType } from '../../types';

const History = ({ history, setWeather }) => {
  const historyToshow = history.slice(-5);

  return (
    <div className="history">
      {history.length && (
        historyToshow.map(({ location, weather, forecast }, i) => (
          <Link
            key={location}
            onClick={() => setWeather(weather, forecast)}
            className="history__link"
            to={`/weather/${location}`}
          >
            {location}
            {(i !== (historyToshow.length - 1)) && (
            <span>, </span>
            )}
          </Link>
        ))
      )}
    </div>
  );
};

History.propTypes = {
  history: historyType,
  setWeather: PropTypes.func.isRequired,
};

History.defaultProps = {
  history: [],
};

export default History;
