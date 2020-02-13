
import { connect } from 'react-redux';
import Weather from './Weather';
import {
  getLocationQuery,
  getCurrentWeather,
  getLoading,
  getError,
} from '../../store/selectors';
import { loadCurrentWeather, setLocationQuery } from '../../store/actions';

const mapStateToProps = (state) => ({
  weatherData: getCurrentWeather(state),
  locationQuery: getLocationQuery(state),
  isLoading: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadWeather: (locationName) => dispatch(loadCurrentWeather(locationName)),
  changeLocationQuery: (query) => dispatch(setLocationQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
