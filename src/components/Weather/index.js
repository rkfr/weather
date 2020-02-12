
import { connect } from 'react-redux';
import Weather from './Weather';
import { getCurrentWeather } from '../../store/selectors';

const mapStateToProps = (state) => ({
  weatherData: getCurrentWeather(state),
});

export default connect(mapStateToProps)(Weather);
