
import { connect } from 'react-redux';
import { getCurrentWeather, getLoading, getError } from '../../store/selectors';

import InitialPageComponent from './InitialPageComponent';
import { loadCurrentWeather } from '../../store/actions';

const mapStateToProps = (state) => ({
  weatherData: getCurrentWeather(state),
  isLoading: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadWeather: (weather) => dispatch(loadCurrentWeather(weather)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialPageComponent);
