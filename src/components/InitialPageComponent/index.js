
import { connect } from 'react-redux';
import InitialPageComponent from './InitialPageComponent';

import {
  getLocationQuery,
  getCurrentWeather,
  getLoading,
  getError,
} from '../../store/selectors';

import {
  loadCurrentWeather,
  setLocationQuery,
  loadCurrentWeatherByGeolocation,
} from '../../store/actions';

const mapStateToProps = (state) => ({
  locationQuery: getLocationQuery(state),
  weatherData: getCurrentWeather(state),
  isLoading: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadWeather: (weather) => dispatch(loadCurrentWeather(weather)),
  changeLocationQuery: (query) => dispatch(setLocationQuery(query)),
  loadWeatherByGeolocation: () => dispatch(loadCurrentWeatherByGeolocation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialPageComponent);
