import React from 'react';
import PropTypes from 'prop-types';
import './History.scss';
import { Link } from 'react-router-dom';
import { historyType } from '../../types';

const History = ({ history, setWeather }) => {
  const historyToshow = history.slice(-5);
  const len = historyToshow.length;

  return (
    <div className="history">
      {(len > 1) && (
        <>
          <span className="history__caption">
            Recent requests:
          </span>
          {historyToshow.map(({ location, weather, forecast }, i) => (
            <Link
              key={location}
              onClick={() => setWeather(weather, forecast)}
              className="history__link"
              to={`/weather/${location}`}
            >
              {location}
              {(i !== (len - 1)) && (
              <span>, </span>
              )}
            </Link>
          ))}
        </>
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
